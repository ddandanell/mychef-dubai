const fs = require('fs');
const path = require('path');

const PAGES_DIR = path.join(__dirname, '..', 'src/pages');

const ctaMap = {
  'GiftCards.tsx': 'Get a Tailored Quote',
  'VIPClub.tsx': 'Get a Tailored Quote',
  'Gallery.tsx': 'Get a Tailored Quote',
  'Press.tsx': 'Get a Tailored Quote',
  'HowWeVetOurChefs.tsx': 'Get a Tailored Quote',
  'CaseStudies.tsx': 'Get a Tailored Quote',
  'BookingProtectionInsurance.tsx': 'Get a Tailored Quote',
  'NurseryCatering.tsx': 'Get a Tailored Quote',
  'SchoolCatering.tsx': 'Get a Tailored Quote',
  'CateringCostCalculator.tsx': 'Get a Tailored Quote',
};

let totalFiles = 0;
let totalReplacements = 0;

for (const [file, cta] of Object.entries(ctaMap)) {
  const filePath = path.join(PAGES_DIR, file);
  if (!fs.existsSync(filePath)) {
    console.log(`SKIP (not found): ${file}`);
    continue;
  }
  let content = fs.readFileSync(filePath, 'utf-8');
  const before = content;
  content = content.replace(/Request a Proposal/g, cta);
  if (content !== before) {
    fs.writeFileSync(filePath, content);
    const count = (before.match(/Request a Proposal/g) || []).length;
    console.log(`UPDATED ${file}: ${count} replacement(s) -> "${cta}"`);
    totalFiles++;
    totalReplacements += count;
  } else {
    console.log(`NO CHANGE ${file}`);
  }
}

console.log(`\nUpdated ${totalFiles} files, ${totalReplacements} replacements total.`);
