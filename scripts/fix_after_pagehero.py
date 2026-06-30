#!/usr/bin/env python3
"""Fix issues left by the first PageHero pass."""

import re
import subprocess
from pathlib import Path

ROOT = Path('/Users/openclaw/Movies/mychef dubai/app')
PAGES_DIR = ROOT / 'src' / 'pages'

TARGET_FILES = [
    'Catering.tsx', 'PrivateChef.tsx', 'Events.tsx', 'Corporate.tsx',
    'LuxuryDining.tsx', 'Yachts.tsx', 'Villas.tsx', 'Locations.tsx',
    'OurChefs.tsx', 'Menus.tsx', 'HowItWorks.tsx', 'FAQ.tsx', 'Guides.tsx',
    'Privacy.tsx', 'Terms.tsx',
]


def fix_import_paths(text: str) -> str:
    text = text.replace("import PageHero from '../components/SEO'", "import PageHero from '../components/PageHero'")
    text = text.replace("import PageHero from '@/components/SEO'", "import PageHero from '@/components/PageHero'")
    return text


def fix_lucide_imports(text: str) -> str:
    # Remove escaped quotes and normalise spacing in lucide-react imports
    def normalise(match: re.Match) -> str:
        inner = match.group(1).replace("\\'", "'")
        inner = re.sub(r'\s+', ' ', inner).strip()
        return f"import {{ {inner} }} from 'lucide-react'"

    text = re.sub(r"import \{([^}]+)\}\s*from\s*\\?['\"]lucide-react\\?['\"]", normalise, text)
    return text


def fix_jsx_title_quotes(text: str) -> str:
    # Convert title="<>..." with inner double quotes to title={<>...}
    text = re.sub(
        r'title="<>Event Catering<br /><span className="text-gold font-normal">Dubai</span></>"',
        r'title={<>Event Catering<br /><span className="text-gold font-normal">Dubai</span></>}',
        text,
    )
    text = re.sub(
        r'title="<>Corporate Dining<br /><span className="text-gold font-normal">Dubai</span></>"',
        r'title={<>Corporate Dining<br /><span className="text-gold font-normal">Dubai</span></>}',
        text,
    )
    return text


def reformat_pagehero_block(text: str) -> str:
    """Find each self-closing <PageHero ... /> block and normalise its indentation."""
    lines = text.splitlines(keepends=True)
    out = []
    i = 0
    while i < len(lines):
        line = lines[i]
        match = re.match(r'^(\s*)<PageHero\b', line)
        if not match:
            out.append(line)
            i += 1
            continue

        block = [line]
        j = i + 1
        while j < len(lines):
            block_line = lines[j]
            block.append(block_line)
            if re.match(r'^\s*/>\s*$', block_line):
                break
            j += 1

        base_indent = '      '
        if out:
            prev = out[-1]
            m = re.match(r'^(\s*)\{?/\*', prev)
            if m:
                base_indent = m.group(1)

        reformatted = [base_indent + '<PageHero\n']
        for bl in block[1:-1]:
            content = bl.strip()
            if not content:
                continue
            reformatted.append(base_indent + '  ' + content + '\n')
        reformatted.append(base_indent + '/>\n')

        out.extend(reformatted)
        i = j + 1

    return ''.join(out)


def reconstruct_from_head(filename: str) -> str:
    result = subprocess.run(
        ['git', 'show', f'HEAD:src/pages/{filename}'],
        cwd=ROOT,
        capture_output=True,
        text=True,
        check=True,
    )
    text = result.stdout

    seo_match = re.search(r"import SEO from ['\"](?P<path>.+?)['\"]", text)
    if not seo_match:
        raise ValueError(f'SEO import not found in {filename}')
    seo_path = seo_match.group('path')
    pagehero_path = seo_path.replace('/SEO', '/PageHero')

    text = text.replace(seo_match.group(0), f"{seo_match.group(0)}\nimport PageHero from '{pagehero_path}'")

    if filename == 'OurChefs.tsx':
        pagehero = '''      <PageHero
        eyebrow="THE TEAM"
        title={<>The Hands Behind<br className="hidden sm:block" /> Every Extraordinary Meal</>}
        subtitle="Experienced professionals. Passionate craftspeople. Dedicated to your experience."
        image="/images/about-mychef-dubai-hero.webp"
        imageAlt="myCHEF culinary team at work"
        breadcrumb={[{ label: 'Home', href: '/' }, { label: 'Our Chefs' }]}
        minHeight="medium"
        overlay="dark"
      />'''
    elif filename == 'Menus.tsx':
        pagehero = '''      <PageHero
        eyebrow="CULINARY OFFERINGS"
        title={<>Bespoke Menus,<br className="hidden sm:block" /> Crafted for Every Palate</>}
        subtitle="Every menu is designed from scratch. Here is a glimpse of what we create."
        breadcrumb={[{ label: 'Home', href: '/' }, { label: 'Menus' }]}
        minHeight="medium"
        overlay="dark"
      />'''
    else:
        raise ValueError(f'Unexpected reconstruct file: {filename}')

    hero_pattern = re.compile(r'<section\b[^>]*?min-h-\[[^\]]+\][^>]*>[\s\S]*?</section>')
    m = hero_pattern.search(text)
    if not m:
        raise ValueError(f'Hero section not found in {filename}')
    text = text[:m.start()] + pagehero + text[m.end():]

    text = re.sub(r'^\s*const heroRef = useRef<HTMLDivElement>\(null\)\n', '', text, flags=re.MULTILINE)
    text = re.sub(r'^\s*const heroTitleRef = useRef<HTMLHeadingElement>\(null\)\n', '', text, flags=re.MULTILINE)
    text = re.sub(r'^\s*const heroSubRef = useRef<HTMLParagraphElement>\(null\)\n', '', text, flags=re.MULTILINE)
    text = re.sub(r'\s*// Hero title word stagger[\s\S]*?(?=\n\s*// Gallery cards scroll reveal|\n\s*// Philosophy section)', '', text)
    text = re.sub(
        r'\s*\{\/\* Breadcrumb Navigation \*/\}\s*<div className="bg-black border-b border-charcoal-light">\s*<div className="container-custom py-4">\s*<nav[^>]*>[\s\S]*?</nav>\s*</div>\s*</div>\n',
        '\n',
        text,
    )
    text = text.replace('.jpg', '.webp')

    return text


def process_file(text: str) -> str:
    text = fix_import_paths(text)
    text = fix_lucide_imports(text)
    text = fix_jsx_title_quotes(text)
    text = reformat_pagehero_block(text)
    return text


def main():
    for filename in TARGET_FILES:
        path = PAGES_DIR / filename
        if not path.exists():
            continue

        if filename in ('OurChefs.tsx', 'Menus.tsx'):
            try:
                new_text = reconstruct_from_head(filename)
                new_text = process_file(new_text)
                path.write_text(new_text)
                print(f'Reconstructed {filename}')
            except Exception as e:
                print(f'Error reconstructing {filename}: {e}')
            continue

        text = path.read_text()
        text = process_file(text)
        path.write_text(text)
        print(f'Fixed {filename}')


if __name__ == '__main__':
    main()
