const fs = require('fs');
const path = require('path');

const PAGES_DIR = path.join(__dirname, '..', 'src/pages');

const ctaMap = {
  'IndianCatering.tsx': 'Get My Indian Catering Quote',
  'ArabicCatering.tsx': 'Get My Arabic Catering Quote',
  'MediterraneanCatering.tsx': 'Get My Mediterranean Catering Quote',
  'ItalianCatering.tsx': 'Get My Italian Catering Quote',
  'AsianCatering.tsx': 'Get My Asian Catering Quote',
  'SushiCatering.tsx': 'Get My Sushi Catering Quote',
  'VeganCatering.tsx': 'Get My Vegan Catering Quote',
  'VegetarianCatering.tsx': 'Get My Vegetarian Catering Quote',
  'HalalCatering.tsx': 'Get My Halal Catering Quote',
  'HealthyCatering.tsx': 'Get My Healthy Catering Quote',
  'BBQCatering.tsx': 'Get a Tailored BBQ Quote',
  'BuffetCatering.tsx': 'Get a Buffet Quote',
  'CanapeCatering.tsx': 'Get a Canapé Menu Quote',
  'GrazingTable.tsx': 'Get a Grazing Table Quote',
  'LiveCookingStations.tsx': 'Build My Live Station Package',
  'FingerFoodCatering.tsx': 'Get a Finger Food Quote',
  'DessertTableCatering.tsx': 'Get a Dessert Table Quote',
  'CocktailPartyCatering.tsx': 'Plan My Cocktail Reception',
  'MocktailBarCatering.tsx': 'Get a Mocktail Bar Quote',
  'BrunchCatering.tsx': 'Get a Brunch Quote',
  'DropOffCatering.tsx': 'Get a Drop-Off Quote',
  'LuxuryDining.tsx': 'Request My Private Dining Proposal',
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
