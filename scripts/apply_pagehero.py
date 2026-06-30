#!/usr/bin/env python3
"""Apply PageHero to selected pages and bulk-update remaining hero styles."""

import re
from pathlib import Path

ROOT = Path('/Users/openclaw/Movies/mychef dubai/app')
PAGES_DIR = ROOT / 'src' / 'pages'
GUIDES_DIR = PAGES_DIR / 'guides'

TARGET_FILES = {
    'Catering.tsx', 'PrivateChef.tsx', 'Events.tsx', 'Corporate.tsx',
    'LuxuryDining.tsx', 'Yachts.tsx', 'Villas.tsx', 'Locations.tsx',
    'OurChefs.tsx', 'Menus.tsx', 'HowItWorks.tsx', 'FAQ.tsx', 'Guides.tsx',
    'Privacy.tsx', 'Terms.tsx',
}


def pagehero(import_path: str, **props) -> str:
    """Build a formatted <PageHero /> JSX string from props."""
    lines = ['      <PageHero']
    for key, value in props.items():
        if key == 'title' and isinstance(value, str):
            lines.append(f'        title="{value}"')
        elif key == 'subtitle' and isinstance(value, str):
            lines.append(f'        subtitle="{value}"')
        elif key == 'image' and isinstance(value, str):
            lines.append(f'        image="{value}"')
        elif key == 'imageAlt' and isinstance(value, str):
            lines.append(f'        imageAlt="{value}"')
        elif key == 'eyebrow' and isinstance(value, str):
            lines.append(f'        eyebrow="{value}"')
        elif key == 'minHeight' and isinstance(value, str):
            lines.append(f'        minHeight="{value}"')
        elif key == 'overlay' and isinstance(value, str):
            lines.append(f'        overlay="{value}"')
        elif key == 'breadcrumb':
            lines.append(f'        breadcrumb={{{value}}}')
        elif key == 'cta':
            lines.append(f'        cta={{{value}}}')
        elif key == 'secondaryCta':
            lines.append(f'        secondaryCta={{{value}}}')
        elif key == 'children':
            lines.append(f'        children={{{value}}}')
        else:
            lines.append(f'        {key}={{{value}}}')
    lines.append('      />')
    return '\n'.join(lines)


PAGE_HERO_CONFIG = {
    'Catering.tsx': {
        'import_path': '../components/PageHero',
        'hero': pagehero(
            import_path='../components/PageHero',
            title='Catering Dubai',
            subtitle='Premium event catering across Dubai. From intimate gatherings to grand celebrations — every detail handled, every course perfected.',
            image='/images/catering-dubai-hero.webp',
            imageAlt='Elegant catering setup in Dubai',
            cta="{ label: 'Request a Proposal', href: '/inquiry?utm_source=mychef.ae&utm_medium=cta_button&utm_campaign=catering-dubai' }",
            secondaryCta="{ label: 'Chat on WhatsApp', href: WHATSAPP_LINK, external: true }",
            breadcrumb="[{ label: 'Home', href: '/' }, { label: 'Catering Dubai' }]",
            minHeight='tall',
            overlay='dark',
        ),
        'replacements': [
            (r'^\s*gsap\.to\(\'\.cat-hero-h1\'.*\n', ''),
            (r'^\s*gsap\.to\(\'\.cat-hero-sub\'.*\n', ''),
            (r'^\s*gsap\.to\(\'\.cat-hero-cta\'.*\n', ''),
        ],
    },
    'PrivateChef.tsx': {
        'import_path': '../components/PageHero',
        'hero': pagehero(
            import_path='../components/PageHero',
            title='Private Chef Dubai',
            subtitle='A world-class chef in your kitchen. Fully bespoke menus. Impeccable service. From intimate dinners to week-long villa stays.',
            image='/images/private-chef-dubai-hero.webp',
            imageAlt='Private chef preparing a meal in Dubai',
            cta="{ label: 'Request a Proposal', href: '/inquiry?utm_source=mychef.ae&utm_medium=cta_button&utm_campaign=private-chef-dubai' }",
            secondaryCta="{ label: 'Chat on WhatsApp', href: WHATSAPP_LINK, external: true }",
            breadcrumb="[{ label: 'Home', href: '/' }, { label: 'Private Chef Dubai' }]",
            minHeight='tall',
            overlay='dark',
        ),
        'replacements': [
            (r'^\s*gsap\.to\(\'\.pc-hero-h1\'.*\n', ''),
            (r'^\s*gsap\.to\(\'\.pc-hero-sub\'.*\n', ''),
            (r'^\s*gsap\.to\(\'\.pc-hero-cta\'.*\n', ''),
        ],
    },
    'Events.tsx': {
        'import_path': '@/components/PageHero',
        'hero': pagehero(
            import_path='@/components/PageHero',
            title='<>Event Catering<br /><span className="text-gold font-normal">Dubai</span></>',
            subtitle='From intimate celebrations to grand occasions — exceptional food, flawless service, unforgettable events.',
            image='/images/events-catering-dubai-hero.webp',
            imageAlt='Event catering in Dubai',
            cta="{ label: 'Request a Proposal', href: '/inquiry?utm_source=mychef.ae&utm_medium=cta_button&utm_campaign=events' }",
            secondaryCta="{ label: 'Chat on WhatsApp', href: WHATSAPP_LINK, external: true }",
            breadcrumb="[{ label: 'Home', href: '/' }, { label: 'Events' }]",
            minHeight='tall',
            overlay='dark',
        ),
        'replacements': [
            (r'^\s*const heroRef = useRef<HTMLDivElement>\(null\)\n', ''),
            (r'^\s*const heroContentRef = useRef<HTMLDivElement>\(null\)\n', ''),
            (r'^\s*const heroImageRef = useRef<HTMLDivElement>\(null\)\n', ''),
            (r'\s*/\* Hero entrance \*/[\s\S]*?(?=\n\s*/\* Event cards \*/)', ''),
            (r'return \(\) => \{\s*ctx\.revert\(\)\s*window\.removeEventListener\(\'scroll\', handleScroll\)\s*\}', 'return () => ctx.revert()'),
        ],
    },
    'Corporate.tsx': {
        'import_path': '@/components/PageHero',
        'hero': pagehero(
            import_path='@/components/PageHero',
            title='<>Corporate Dining<br /><span className="text-gold font-normal">Dubai</span></>',
            subtitle='Impress clients. Reward teams. Elevate every business occasion with premium corporate dining and catering.',
            image='/images/corporate-catering-dubai-hero.webp',
            imageAlt='Corporate catering in Dubai',
            cta="{ label: 'Request a Proposal', href: '/inquiry?utm_source=mychef.ae&utm_medium=cta_button&utm_campaign=corporate' }",
            secondaryCta="{ label: 'Chat on WhatsApp', href: WHATSAPP_LINK, external: true }",
            breadcrumb="[{ label: 'Home', href: '/' }, { label: 'Corporate' }]",
            minHeight='tall',
            overlay='dark',
        ),
        'replacements': [
            (r'^\s*const heroContentRef = useRef<HTMLDivElement>\(null\)\n', ''),
            (r'^\s*const heroImageRef = useRef<HTMLDivElement>\(null\)\n', ''),
            (r'\s*/\* Hero entrance \*/[\s\S]*?(?=\n\s*/\* Service cards \*/)', ''),
            (r'return \(\) => \{\s*ctx\.revert\(\)\s*window\.removeEventListener\(\'scroll\', handleScroll\)\s*\}', 'return () => ctx.revert()'),
        ],
    },
    'LuxuryDining.tsx': {
        'import_path': '../components/PageHero',
        'hero': pagehero(
            import_path='../components/PageHero',
            title='<>Luxury Dining<br className="hidden sm:block" /> Experiences</>',
            subtitle="Bespoke private dining crafted for life's most memorable moments. In your villa, on your yacht, or at your penthouse.",
            image='/images/luxury-dining-dubai-hero.webp',
            imageAlt='Luxury private dining in Dubai',
            cta="{ label: 'Request a Proposal', href: '/inquiry?utm_source=mychef.ae&utm_medium=cta_button&utm_campaign=luxury-dining-experiences' }",
            secondaryCta="{ label: 'Chat on WhatsApp', href: WHATSAPP_LINK, external: true }",
            breadcrumb="[{ label: 'Home', href: '/' }, { label: 'Luxury Dining Experiences' }]",
            minHeight='tall',
            overlay='dark',
        ),
        'replacements': [
            (r'^\s*gsap\.to\(\'\.ld-hero-h1\'.*\n', ''),
            (r'^\s*gsap\.to\(\'\.ld-hero-sub\'.*\n', ''),
            (r'^\s*gsap\.to\(\'\.ld-hero-cta\'.*\n', ''),
        ],
    },
    'Yachts.tsx': {
        'import_path': '@/components/PageHero',
        'hero': pagehero(
            import_path='@/components/PageHero',
            eyebrow='YACHT CATERING',
            title='<>Yacht Catering<br />Dubai</>',
            subtitle="Exceptional dining on the water. A private chef experience with Dubai's iconic skyline as your setting.",
            image='/images/yacht-catering-dubai-hero.webp',
            imageAlt='Yacht catering in Dubai',
            cta="{ label: 'Request Yacht Catering', href: WHATSAPP_LINK, external: true }",
            secondaryCta="{ label: 'Chat on WhatsApp', href: WHATSAPP_LINK, external: true }",
            breadcrumb="[{ label: 'Home', href: '/' }, { label: 'Yachts' }]",
            minHeight='tall',
            overlay='dark',
        ),
        'replacements': [
            (r'^\s*gsap\.from\(\'\.yachts-hero-eyebrow\'.*\n', ''),
            (r'^\s*gsap\.from\(\'\.yachts-hero-h1\'.*\n', ''),
            (r'^\s*gsap\.from\(\'\.yachts-hero-sub\'.*\n', ''),
            (r'^\s*gsap\.from\(\'\.yachts-hero-cta\'.*\n', ''),
        ],
    },
    'Villas.tsx': {
        'import_path': '@/components/PageHero',
        'hero': pagehero(
            import_path='@/components/PageHero',
            eyebrow='VILLA CHEF SERVICES',
            title='<>Villa Private Chef<br />Dubai</>',
            subtitle='A world-class chef in your Dubai villa. From one-night dinners to full-time residential chef services — experience exceptional dining without leaving home.',
            image='/images/villa-catering-dubai-hero.webp',
            imageAlt='Villa private chef in Dubai',
            cta="{ label: 'Request a Villa Chef', href: WHATSAPP_LINK, external: true }",
            secondaryCta="{ label: 'Chat on WhatsApp', href: WHATSAPP_LINK, external: true }",
            breadcrumb="[{ label: 'Home', href: '/' }, { label: 'Villas & Private Residences' }]",
            minHeight='tall',
            overlay='dark',
        ),
        'replacements': [
            (r'^\s*gsap\.from\(\'\.villas-hero-eyebrow\'.*\n', ''),
            (r'^\s*gsap\.from\(\'\.villas-hero-h1\'.*\n', ''),
            (r'^\s*gsap\.from\(\'\.villas-hero-sub\'.*\n', ''),
            (r'^\s*gsap\.from\(\'\.villas-hero-cta\'.*\n', ''),
        ],
    },
    'Locations.tsx': {
        'import_path': '../components/PageHero',
        'hero': pagehero(
            import_path='../components/PageHero',
            eyebrow='Dubai Coverage',
            title='We Serve All of Dubai',
            subtitle='From Palm Jumeirah to Downtown, Emirates Hills to Dubai Marina — we bring premium dining to your doorstep.',
            image='/images/locations-dubai-hero.webp',
            imageAlt='Map of Dubai locations served by myCHEF',
            breadcrumb="[{ label: 'Home', href: '/' }, { label: 'Locations' }]",
            minHeight='medium',
            overlay='dark',
        ),
        'replacements': [
            (r'^\s*const heroRef = useRef<HTMLDivElement>\(null\)\n', ''),
            (r'^\s*gsap\.from\(\'\.gsap-hero\'.*\n', ''),
        ],
    },
    'OurChefs.tsx': {
        'import_path': '@/components/PageHero',
        'hero': pagehero(
            import_path='@/components/PageHero',
            eyebrow='THE TEAM',
            title='<>The Hands Behind<br className="hidden sm:block" /> Every Extraordinary Meal</>',
            subtitle='Experienced professionals. Passionate craftspeople. Dedicated to your experience.',
            image='/images/about-mychef-dubai-hero.webp',
            imageAlt='myCHEF culinary team at work',
            breadcrumb="[{ label: 'Home', href: '/' }, { label: 'Our Chefs' }]",
            minHeight='medium',
            overlay='dark',
        ),
        'replacements': [
            (r'^\s*const heroRef = useRef<HTMLDivElement>\(null\)\n', ''),
            (r'^\s*const heroTitleRef = useRef<HTMLHeadingElement>\(null\)\n', ''),
            (r'^\s*const heroSubRef = useRef<HTMLParagraphElement>\(null\)\n', ''),
            (r'\s*// Hero title word stagger[\s\S]*?(?=\n\s*// Philosophy section)', ''),
            (r'\s*\{\/\* Breadcrumb Navigation \*/\}\s*<div className="bg-black border-b border-charcoal-light">[\s\S]*?</div>\s*</div>\s*</div>\n', '\n'),
        ],
    },
    'Menus.tsx': {
        'import_path': '@/components/PageHero',
        'hero': pagehero(
            import_path='@/components/PageHero',
            eyebrow='CULINARY OFFERINGS',
            title='<>Bespoke Menus,<br className="hidden sm:block" /> Crafted for Every Palate</>',
            subtitle='Every menu is designed from scratch. Here is a glimpse of what we create.',
            breadcrumb="[{ label: 'Home', href: '/' }, { label: 'Menus' }]",
            minHeight='medium',
            overlay='dark',
        ),
        'replacements': [
            (r'^\s*const heroRef = useRef<HTMLDivElement>\(null\)\n', ''),
            (r'^\s*const heroTitleRef = useRef<HTMLHeadingElement>\(null\)\n', ''),
            (r'^\s*const heroSubRef = useRef<HTMLParagraphElement>\(null\)\n', ''),
            (r'\s*// Hero title word stagger[\s\S]*?(?=\n\s*// Gallery cards scroll reveal)', ''),
            (r'\s*\{\/\* Breadcrumb Navigation \*/\}\s*<div className="bg-black border-b border-charcoal-light">[\s\S]*?</div>\s*</div>\s*</div>\n', '\n'),
        ],
    },
    'HowItWorks.tsx': {
        'import_path': '@/components/PageHero',
        'hero': pagehero(
            import_path='@/components/PageHero',
            eyebrow='THE EXPERIENCE',
            title='<>Simple. Seamless.<br />Extraordinary.</>',
            subtitle='From your first message to the final course — every step is handled with care.',
            image='/images/how-it-works-dubai-hero.webp',
            imageAlt='How myCHEF works',
            breadcrumb="[{ label: 'Home', href: '/' }, { label: 'How It Works' }]",
            minHeight='tall',
            overlay='dark',
        ),
        'replacements': [
            (r'^\s*gsap\.from\(\'\.hiw-hero-eyebrow\'.*\n', ''),
            (r'^\s*gsap\.from\(\'\.hiw-hero-h1\'.*\n', ''),
            (r'^\s*gsap\.from\(\'\.hiw-hero-sub\'.*\n', ''),
            (r'^\s*import \{([^}]*)ChevronRight,([^}]*)\} from \'lucide-react\'\n', r'import {\1\2} from \'lucide-react\'\n'),
        ],
    },
    'FAQ.tsx': {
        'import_path': '@/components/PageHero',
        'hero': pagehero(
            import_path='@/components/PageHero',
            eyebrow='HELP CENTER',
            title='<>Frequently Asked<br />Questions</>',
            subtitle='Everything you need to know about our private chef and catering services in Dubai.',
            breadcrumb="[{ label: 'Home', href: '/' }, { label: 'FAQ' }]",
            minHeight='short',
            overlay='dark',
        ),
        'replacements': [
            (r'^\s*gsap\.from\(\'\.faq-hero-eyebrow\'.*\n', ''),
            (r'^\s*gsap\.from\(\'\.faq-hero-h1\'.*\n', ''),
            (r'^\s*gsap\.from\(\'\.faq-hero-sub\'.*\n', ''),
            (r'^\s*import \{([^}]*)ChevronRight,([^}]*)\} from \'lucide-react\'\n', r'import {\1\2} from \'lucide-react\'\n'),
        ],
    },
    'Guides.tsx': {
        'import_path': '../components/PageHero',
        'hero': pagehero(
            import_path='../components/PageHero',
            eyebrow='Free Planning Resources',
            title='Catering Guides for Dubai',
            subtitle='Practical guides to help you plan private dining, events, weddings, corporate functions and celebrations across Dubai — from budgets and checklists to menu ideas and timing.',
            image='/images/guides-hub-dubai-hero.webp',
            imageAlt='Dubai catering guides',
            cta="{ label: 'Request a Custom Quote', href: '/inquiry?utm_source=mychef.ae&utm_medium=cta_button&utm_campaign=guides' }",
            secondaryCta="{ label: 'Chat on WhatsApp', href: WHATSAPP_LINK, external: true }",
            breadcrumb="[{ label: 'Home', href: '/' }, { label: 'Guides' }]",
            minHeight='tall',
            overlay='dark',
        ),
        'replacements': [
            (r'^\s*gsap\.to\(\'\.guides-hero-h1\'.*\n', ''),
            (r'^\s*gsap\.to\(\'\.guides-hero-sub\'.*\n', ''),
            (r'^\s*gsap\.to\(\'\.guides-hero-cta\'.*\n', ''),
        ],
    },
    'Privacy.tsx': {
        'import_path': '@/components/PageHero',
        'hero': pagehero(
            import_path='@/components/PageHero',
            eyebrow='LEGAL',
            title='Privacy Policy',
            breadcrumb="[{ label: 'Home', href: '/' }, { label: 'Privacy Policy' }]",
            minHeight='short',
            overlay='dark',
            children='<p className="font-inter text-body-sm text-gray-500 mt-4">Last updated: January 2025</p>',
        ),
        'replacements': [
            (r'^\s*gsap\.from\(\'\.privacy-hero-h1\'.*\n', ''),
            (r'^\s*gsap\.from\(\'\.privacy-hero-date\'.*\n', ''),
            (r'^\s*import \{ Link \} from \'react-router\'\n', ''),
            (r'^\s*import \{([^}]*)ChevronRight,([^}]*)\} from \'lucide-react\'\n', r'import {\1\2} from \'lucide-react\'\n'),
        ],
    },
    'Terms.tsx': {
        'import_path': '@/components/PageHero',
        'hero': pagehero(
            import_path='@/components/PageHero',
            eyebrow='LEGAL',
            title='Terms of Service',
            breadcrumb="[{ label: 'Home', href: '/' }, { label: 'Terms of Service' }]",
            minHeight='short',
            overlay='dark',
            children='<p className="font-inter text-body-sm text-gray-500 mt-4">Last updated: January 2025</p>',
        ),
        'replacements': [
            (r'^\s*gsap\.from\(\'\.terms-hero-h1\'.*\n', ''),
            (r'^\s*import \{ ChevronRight \} from \'lucide-react\'\n', ''),
        ],
    },
}


def add_pagehero_import(text: str, default_import_path: str) -> str:
    """Insert PageHero import after the existing SEO import line."""
    match = re.search(r"import SEO from ['\"](?P<path>.+?)['\"]", text)
    if not match:
        raise ValueError('SEO import not found')
    seo_import = match.group(0)
    import_path = match.group('path')
    return text.replace(seo_import, f"{seo_import}\nimport PageHero from '{import_path}'", 1)


def replace_first_section(text: str, replacement: str) -> str:
    """Replace the first <section ...min-h-[...] ... </section> block."""
    pattern = re.compile(r'<section\b[^>]*?min-h-\[[^\]]+\][^>]*>[\s\S]*?</section>')
    m = pattern.search(text)
    if not m:
        raise ValueError('Hero section not found')
    return text[:m.start()] + replacement + text[m.end():]


def apply_replacements(text: str, replacements: list) -> str:
    for old, new in replacements:
        text = re.sub(old, new, text, flags=re.MULTILINE)
    return text


def process_target_file(path: Path, config: dict) -> str:
    text = path.read_text()
    text = add_pagehero_import(text, config['import_path'])
    text = replace_first_section(text, config['hero'])
    text = apply_replacements(text, config['replacements'])
    return text


def bulk_update(path: Path) -> str:
    text = path.read_text()
    # Hero mobile height
    text = text.replace('min-h-[100dvh]', 'min-h-[85dvh] md:min-h-[100dvh]')
    # Fluid heading sizes
    text = text.replace('text-h1 md:text-[56px]', 'text-fluid-h1')
    text = text.replace('text-h1 md:text-[3.5rem]', 'text-fluid-h1')
    text = text.replace('text-h2 md:text-[48px]', 'text-fluid-h2')
    text = text.replace('text-[40px] md:text-[56px] lg:text-[72px]', 'text-fluid-h1')
    text = text.replace('text-[32px]', 'text-fluid-h3')
    text = text.replace('text-[24px]', 'text-h3')
    return text


def main():
    changed = []
    errors = []

    # Apply PageHero to selected pages
    for filename in TARGET_FILES:
        path = PAGES_DIR / filename
        if not path.exists():
            errors.append(f'Missing target file: {path}')
            continue
        config = PAGE_HERO_CONFIG[filename]
        try:
            new_text = process_target_file(path, config)
            path.write_text(new_text)
            changed.append(str(path.relative_to(ROOT)))
        except Exception as e:
            errors.append(f'{filename}: {e}')

    # Bulk update all remaining .tsx pages and guides
    all_paths = list(PAGES_DIR.rglob('*.tsx'))
    for path in all_paths:
        if path.name in TARGET_FILES:
            continue
        try:
            new_text = bulk_update(path)
            if new_text != path.read_text():
                path.write_text(new_text)
                changed.append(str(path.relative_to(ROOT)))
        except Exception as e:
            errors.append(f'{path.name}: {e}')

    print('CHANGED FILES:')
    for f in changed:
        print(f'  {f}')
    if errors:
        print('ERRORS:')
        for e in errors:
            print(f'  {e}')


if __name__ == '__main__':
    main()
