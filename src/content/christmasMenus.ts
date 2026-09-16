/**
 * International Christmas menus rendered on /christmas-catering-dubai.
 *
 * Seven menu inspirations live on the ONE Christmas page as anchored sections.
 * They are deliberately not separate URLs: the commercial hub for "christmas
 * catering dubai" stays a single canonical page until Search Console shows
 * nationality queries with enough impressions to justify supporting pages.
 *
 * No prices here. The conversion goal at Christmas is date + guest count +
 * menu preference; the quote follows ingredients and service level.
 *
 * Images are generated with Grok only — see scripts/generate-christmas-menu-images.py.
 */

export interface ChristmasMenuDish {
  name: string
  note?: string
}

export interface ChristmasMenuCourse {
  label: string
  dishes: ChristmasMenuDish[]
}

export interface ChristmasMenu {
  /** Anchor id, e.g. "british-christmas-dinner" */
  id: string
  /** Short label used on the navigation card */
  cardTitle: string
  /** One-line description on the navigation card */
  cardBlurb: string
  /** Section H2 */
  heading: string
  /** Lead line under the H2 */
  lead: string
  /** Intro paragraphs */
  intro: string[]
  /** H3 for the menu list */
  menuTitle: string
  courses: ChristmasMenuCourse[]
  /** Button label */
  cta: string
  /** Pre-filled WhatsApp text for this menu */
  whatsapp: string
  image: {
    src: string
    alt: string
  }
}

export const CHRISTMAS_MENU_IMAGE_DIR = '/images/christmas'

/** Shown while the Grok renders are missing — the existing Christmas hero. */
export const CHRISTMAS_MENU_IMAGE_FALLBACK = '/images/christmas-catering-dubai-hero.webp'

export const christmasMenus: ChristmasMenu[] = [
  {
    id: 'british-christmas-dinner',
    cardTitle: 'British Christmas',
    cardBlurb: 'Roast turkey, pigs in blankets, proper gravy and Christmas pudding.',
    heading: 'British Christmas Dinner Catering in Dubai',
    lead: 'A proper British Christmas dinner, prepared at home',
    intro: [
      'For British families spending Christmas in Dubai, some traditions are difficult to replace.',
      'This menu brings the familiar Christmas table home: roasted turkey, crisp roast potatoes, pigs in blankets, stuffing, proper gravy and Christmas pudding.',
      'myCHEF prepares the dinner in your home or villa, so Christmas Day can be spent around the table rather than in the kitchen.',
    ],
    menuTitle: 'British Christmas Menu',
    courses: [
      {
        label: 'Starter',
        dishes: [
          { name: 'Scottish Smoked Salmon', note: 'Smoked salmon with lemon, capers, dill, pickled shallots and horseradish crème fraîche.' },
          { name: 'Warm Artisan Bread', note: 'With cultured butter and sea salt.' },
        ],
      },
      {
        label: 'Christmas Centrepiece',
        dishes: [
          { name: 'Herb & Butter Roasted Turkey', note: 'Slow-roasted turkey with sage, thyme, rosemary and citrus, finished with rich roasting juices.' },
        ],
      },
      {
        label: 'The Trimmings',
        dishes: [
          { name: 'Pigs in Blankets', note: 'Premium sausages wrapped in smoked streaky bacon.' },
          { name: 'Sage, Chestnut & Sausage Stuffing' },
          { name: 'Goose-Fat Roast Potatoes' },
          { name: 'Brussels Sprouts with Chestnuts' },
          { name: 'Honey & Thyme Glazed Carrots and Parsnips' },
          { name: 'Braised Red Cabbage with Apple' },
          { name: 'Proper Turkey Gravy' },
          { name: 'Cranberry & Port Sauce' },
          { name: 'Traditional Bread Sauce' },
        ],
      },
      {
        label: 'Dessert',
        dishes: [
          { name: 'Traditional Christmas Pudding', note: 'Served warm with brandy sauce and vanilla crème anglaise.' },
          { name: 'Mini Mince Pies', note: 'With cream.' },
        ],
      },
    ],
    cta: 'Plan a British Christmas Dinner',
    whatsapp: "Hi myCHEF Dubai, I'd like to plan a British Christmas dinner at home. Date: __ Guests: __ Area: __",
    image: {
      src: `${CHRISTMAS_MENU_IMAGE_DIR}/british-christmas-dinner-dubai.webp`,
      alt: 'Traditional British Christmas turkey with roast potatoes, pigs in blankets and stuffing on a dining table',
    },
  },
  {
    id: 'french-christmas-dinner',
    cardTitle: 'French Christmas',
    cardBlurb: 'Oysters, foie gras, truffle-roasted capon and Bûche de Noël.',
    heading: 'French Christmas Dinner & Réveillon Catering in Dubai',
    lead: 'Le Réveillon de Noël, served in your home',
    intro: [
      'A French Christmas is an occasion to take time over exceptional food.',
      'Our Réveillon-inspired menu moves through oysters, foie gras, scallops, truffle-roasted poultry, French cheese and Bûche de Noël.',
      'It suits hosts who want a longer Christmas dinner with more courses, prepared and served privately at home.',
    ],
    menuTitle: 'French Réveillon Menu',
    courses: [
      {
        label: 'Amuse-Bouche',
        dishes: [{ name: 'Fresh Oyster', note: 'Champagne mignonette, shallot and lemon.' }],
      },
      {
        label: 'Entrée',
        dishes: [{ name: 'Foie Gras Terrine', note: 'Brioche, fig compote and fleur de sel.' }],
      },
      {
        label: 'Seafood',
        dishes: [{ name: 'Seared Hokkaido Scallops', note: 'Cauliflower purée, brown butter and caviar.' }],
      },
      {
        label: 'Main',
        dishes: [{ name: 'Truffle-Roasted Capon', note: 'Black truffle, chestnuts, thyme and roasting jus.' }],
      },
      {
        label: 'Sides',
        dishes: [
          { name: 'Pommes Anna' },
          { name: 'Haricots Verts', note: 'With toasted almonds.' },
          { name: 'Chestnut & Wild Mushroom Fricassée' },
        ],
      },
      {
        label: 'Cheese',
        dishes: [{ name: 'French Cheese Selection', note: 'Selected French cheeses with grapes, walnuts, quince and artisan bread.' }],
      },
      {
        label: 'Dessert',
        dishes: [
          { name: 'Bûche de Noël', note: 'Dark chocolate, hazelnut praline and vanilla.' },
          { name: 'Petits Fours' },
        ],
      },
    ],
    cta: 'Plan a French Réveillon',
    whatsapp: "Hi myCHEF Dubai, I'd like to plan a French Réveillon dinner at home. Date: __ Guests: __ Area: __",
    image: {
      src: `${CHRISTMAS_MENU_IMAGE_DIR}/french-christmas-catering-dubai.webp`,
      alt: 'French Réveillon table with oysters, foie gras terrine and seared scallops',
    },
  },
  {
    id: 'italian-christmas-dinner',
    cardTitle: 'Italian Christmas',
    cardBlurb: 'Tortellini in brodo, herb-roasted veal and panettone.',
    heading: 'Italian Christmas Dinner Catering in Dubai',
    lead: 'Natale Italiano',
    intro: [
      'Christmas traditions vary enormously across Italy.',
      'Christmas Eve is often associated with seafood, while Christmas Day tables across Italy feature dishes ranging from rich broths and handmade pasta to roasted meats, panettone and regional desserts.',
      'Our menu brings several of those traditions together into an Italian Christmas dinner prepared in your Dubai home.',
    ],
    menuTitle: 'Italian Christmas Menu',
    courses: [
      {
        label: 'Antipasti',
        dishes: [
          { name: 'Burrata Pugliese', note: 'Heirloom tomatoes, basil oil, aged balsamic and sea salt.' },
          { name: 'Vitello Tonnato', note: 'Tender veal, tuna and caper sauce, crispy capers and lemon.' },
        ],
      },
      {
        label: 'Primo',
        dishes: [{ name: 'Tortellini in Brodo', note: 'Handmade tortellini served in a deeply flavoured capon broth.' }],
      },
      {
        label: 'Secondo',
        dishes: [{ name: 'Herb-Roasted Veal Tenderloin', note: 'Rosemary, garlic and sage with rich jus.' }],
      },
      {
        label: 'Contorni',
        dishes: [
          { name: 'Truffle Potato Purée' },
          { name: 'Roasted Seasonal Vegetables' },
          { name: 'Parmigiano & Lemon Green Beans' },
        ],
      },
      {
        label: 'Dolce',
        dishes: [
          { name: 'Panettone with Mascarpone Cream' },
          { name: 'Classic Tiramisù' },
          { name: 'Torrone, Biscotti and Chocolate Truffles' },
        ],
      },
    ],
    cta: 'Plan an Italian Christmas Dinner',
    whatsapp: "Hi myCHEF Dubai, I'd like to plan an Italian Christmas dinner at home. Date: __ Guests: __ Area: __",
    image: {
      src: `${CHRISTMAS_MENU_IMAGE_DIR}/italian-christmas-dinner-dubai.webp`,
      alt: 'Italian Christmas table with tortellini in broth, roast veal and panettone',
    },
  },
  {
    id: 'german-christmas-dinner',
    cardTitle: 'German Christmas',
    cardBlurb: 'Crispy roast goose, Kartoffelklöße, Apfelrotkohl and Stollen.',
    heading: 'German Christmas Dinner Catering in Dubai',
    lead: 'Weihnachtsessen in Dubai',
    intro: [
      'For families who associate Christmas with the aromas of roast goose, apple, red cabbage and winter spices, this menu brings a traditional German festive table to Dubai.',
      'The centrepiece is slow-roasted goose, served with potato dumplings, braised red cabbage and classic festive accompaniments.',
    ],
    menuTitle: 'German Christmas Menu',
    courses: [
      {
        label: 'Starter',
        dishes: [{ name: 'Smoked Trout', note: 'Horseradish cream, dill, cucumber and rye crisp.' }],
      },
      {
        label: 'First Course',
        dishes: [{ name: 'Wild Mushroom Soup', note: 'Forest mushrooms, herbs, cream and truffle.' }],
      },
      {
        label: 'Christmas Centrepiece',
        dishes: [{ name: 'Crispy Roast Goose', note: 'Slow-roasted goose with apple, orange, marjoram and rich roasting jus.' }],
      },
      {
        label: 'Accompaniments',
        dishes: [
          { name: 'Kartoffelklöße', note: 'Traditional German potato dumplings with browned butter.' },
          { name: 'Apfelrotkohl', note: 'Braised red cabbage with apple and winter spices.' },
          { name: 'Roasted Chestnuts' },
          { name: 'Butter-Glazed Brussels Sprouts' },
          { name: 'Apple & Goose Jus' },
        ],
      },
      {
        label: 'Dessert',
        dishes: [
          { name: 'Warm Apple Strudel', note: 'With vanilla sauce.' },
          { name: 'Christmas Stollen' },
          { name: 'Vanillekipferl' },
        ],
      },
    ],
    cta: 'Plan a German Christmas Dinner',
    whatsapp: "Hi myCHEF Dubai, I'd like to plan a German Christmas dinner at home. Date: __ Guests: __ Area: __",
    image: {
      src: `${CHRISTMAS_MENU_IMAGE_DIR}/german-christmas-goose-dubai.webp`,
      alt: 'Crispy whole roast goose with braised red cabbage and potato dumplings',
    },
  },
  {
    id: 'russian-christmas-dinner',
    cardTitle: 'Russian Christmas',
    cardBlurb: 'Blini with salmon roe, pelmeni, roast duck with apples and Medovik.',
    heading: 'Russian Christmas Dinner Catering in Dubai',
    lead: 'A Russian Christmas table in Dubai',
    intro: [
      'For families celebrating Russian and Orthodox Christmas traditions, myCHEF can prepare a generous festive table designed for sharing, on 25 December or on 7 January.',
      'Our menu takes inspiration from traditional Russian Christmas dishes and the abundant celebration that follows the Christmas fast, combining familiar flavours with premium ingredients and careful presentation.',
    ],
    menuTitle: 'Russian Christmas Menu',
    courses: [
      {
        label: 'Traditional Welcome',
        dishes: [{ name: 'Kutya', note: 'Wheat berries with honey, poppy seeds, walnuts and dried fruits.' }],
      },
      {
        label: 'Cold Festive Table',
        dishes: [
          { name: 'Premium Salmon Blini', note: 'Buckwheat blini, smoked salmon, sour cream, dill and salmon roe.' },
          { name: 'Olivier Salad', note: 'Potatoes, vegetables, egg and pickles with premium meat and house dressing.' },
          { name: 'Beetroot & Herring', note: 'A refined interpretation of the traditional layered festive salad.' },
          { name: 'Wild Mushroom Pirozhki' },
        ],
      },
      {
        label: 'Warm Course',
        dishes: [{ name: 'Handmade Beef & Wild Mushroom Pelmeni', note: 'Sour cream, browned butter and dill.' }],
      },
      {
        label: 'Christmas Centrepiece',
        dishes: [{ name: 'Roast Duck with Apples', note: 'Whole roasted duck with caramelised apples, orange, herbs and roasting jus.' }],
      },
      {
        label: 'Sides',
        dishes: [
          { name: 'Roasted Baby Potatoes with Dill' },
          { name: 'Braised Red Cabbage' },
          { name: 'Wild Mushrooms with Sour Cream' },
          { name: 'Pickled Cucumbers & Seasonal Vegetables' },
        ],
      },
      {
        label: 'Dessert',
        dishes: [
          { name: 'Medovik', note: 'Traditional layered honey cake.' },
          { name: 'Winter Berries' },
        ],
      },
    ],
    cta: 'Plan a Russian or Orthodox Christmas Dinner',
    whatsapp: "Hi myCHEF Dubai, I'd like to plan a Russian / Orthodox Christmas dinner at home. Date: __ Guests: __ Area: __",
    image: {
      src: `${CHRISTMAS_MENU_IMAGE_DIR}/russian-christmas-dinner-dubai.webp`,
      alt: 'Russian Christmas sharing table with blini, salmon roe, roast duck and Olivier salad',
    },
  },
  {
    id: 'swiss-christmas-dinner',
    cardTitle: 'Swiss Christmas',
    cardBlurb: 'Fondue Chinoise cooked at the table, Alpine board and chocolate fondant.',
    heading: 'Swiss Christmas Dinner Catering in Dubai',
    lead: 'Christmas in the Alps, in Dubai',
    intro: [
      'Swiss festive dining is built around warmth, sharing and time together at the table.',
      'Our Swiss Christmas menu keeps that interactive character with a Fondue Chinoise cooked by your guests at the table: premium meats, house-made sauces and traditional accompaniments.',
    ],
    menuTitle: 'Swiss Christmas Menu',
    courses: [
      {
        label: 'Welcome',
        dishes: [{ name: 'Roasted Chestnut Velouté', note: 'Chestnut soup with truffle cream and chives.' }],
      },
      {
        label: 'To Share',
        dishes: [{ name: 'Swiss Alpine Board', note: 'Premium cured meats, Swiss cheeses, cornichons, pickled vegetables and artisan bread.' }],
      },
      {
        label: 'Main Experience',
        dishes: [
          { name: 'Fondue Chinoise', note: 'Thinly sliced premium meats cooked by guests in aromatic broth at the table: Wagyu beef, veal tenderloin, free-range chicken and duck breast.' },
          { name: 'Sauces', note: 'Herb sauce, truffle mayonnaise, horseradish cream, garlic aioli and mustard sauce.' },
          { name: 'Accompaniments', note: 'Cornichons, pickled vegetables, baby potatoes and seasonal vegetables.' },
        ],
      },
      {
        label: 'Optional Cheese Course',
        dishes: [{ name: 'Gruyère & Vacherin Fondue', note: 'Swiss cheese fondue with artisan bread and baby potatoes.' }],
      },
      {
        label: 'Dessert',
        dishes: [
          { name: 'Swiss Chocolate Fondant', note: 'Vanilla bean ice cream and hazelnut praline.' },
          { name: 'Mini Apple Strudel' },
        ],
      },
    ],
    cta: 'Plan a Swiss Christmas Dinner',
    whatsapp: "Hi myCHEF Dubai, I'd like to plan a Swiss Christmas dinner (Fondue Chinoise) at home. Date: __ Guests: __ Area: __",
    image: {
      src: `${CHRISTMAS_MENU_IMAGE_DIR}/swiss-christmas-fondue-dubai.webp`,
      alt: 'Fondue Chinoise set on a dining table with sliced meats, sauces and a simmering broth pot',
    },
  },
  {
    id: 'american-christmas-dinner',
    cardTitle: 'American Christmas',
    cardBlurb: 'Slow-roasted USDA Prime rib, truffle mash, mac & cheese and pecan pie.',
    heading: 'American Christmas Dinner Catering in Dubai',
    lead: 'The grand American Christmas',
    intro: [
      'For American families spending Christmas in Dubai, this menu combines the generosity of a classic holiday table with premium ingredients and private-chef service.',
      'The centrepiece is slow-roasted USDA Prime rib, carved for the table and surrounded by rich American holiday sides.',
    ],
    menuTitle: 'American Christmas Menu',
    courses: [
      {
        label: 'Starter',
        dishes: [{ name: 'Jumbo Prawn Cocktail', note: 'Chilled prawns, house cocktail sauce, lemon and horseradish.' }],
      },
      {
        label: 'Christmas Centrepiece',
        dishes: [
          { name: 'USDA Prime Rib of Beef', note: 'Slow-roasted with rosemary, garlic and cracked black pepper, carved at the table. Served with natural beef jus and creamed horseradish.' },
        ],
      },
      {
        label: 'Holiday Sides',
        dishes: [
          { name: 'Truffle Mashed Potatoes' },
          { name: 'Mac & Cheese Gratin' },
          { name: 'Green Beans Almondine' },
          { name: 'Maple-Glazed Carrots' },
          { name: 'Brussels Sprouts with Smoked Bacon' },
          { name: 'Warm Buttermilk Dinner Rolls' },
        ],
      },
      {
        label: 'Dessert',
        dishes: [
          { name: 'Classic Pecan Pie', note: 'With vanilla bean ice cream.' },
          { name: 'New York Cheesecake', note: 'With berries.' },
          { name: 'Warm Chocolate Chip Cookies', note: 'With sea salt.' },
        ],
      },
    ],
    cta: 'Plan an American Christmas Dinner',
    whatsapp: "Hi myCHEF Dubai, I'd like to plan an American Christmas dinner at home. Date: __ Guests: __ Area: __",
    image: {
      src: `${CHRISTMAS_MENU_IMAGE_DIR}/american-christmas-dinner-dubai.webp`,
      alt: 'USDA Prime rib being carved at the table beside mashed potatoes and holiday sides',
    },
  },
]
