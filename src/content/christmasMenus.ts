import type photos from './christmasPhotos.json'

export type ChristmasPhotoId = keyof typeof photos

export interface ChristmasMenu {
  id: string
  name: string
  intro: string
  rates: readonly [number] | readonly [number, number]
  minimum: number
  stock: ChristmasPhotoId
  photo: ChristmasPhotoId
  courses: { heading: string; items: string[]; note?: string }[]
}

export const christmasMenus: ChristmasMenu[] = [
  {
    "id": "classic-christmas-menu",
    "name": "Classic Christmas Buffet",
    "intro": "A roast turkey and lamb buffet with festive sides, desserts and soft drinks.",
    "rates": [
      493,
      459
    ],
    "minimum": 15,
    "stock": "classic-stock",
    "photo": "3558",
    "courses": [
      {
        "heading": "Salads",
        "items": [
          "Rocca salad with shaved Parmesan and aged balsamic vinaigrette",
          "Roasted beetroot and feta salad with toasted walnuts",
          "Jeweled quinoa salad with pomegranate seeds and fresh herbs"
        ]
      },
      {
        "heading": "Starters",
        "items": [
          "Crushed potato with smoked turkey",
          "Tomato and Cantal quiche (vegetarian)",
          "Mini Greek chicken wrap with cucumber tzatziki sauce"
        ]
      },
      {
        "heading": "Main courses",
        "items": [
          "Herb-crusted slow-roasted turkey with traditional pan gravy and house-made cranberry and orange relish",
          "Garlic and rosemary roasted lamb leg with creamy wild mushroom sauce",
          "Crispy rosemary roasted baby potatoes",
          "Butter-glazed seasonal winter vegetables",
          "Festive spiced pilaf rice"
        ]
      },
      {
        "heading": "Desserts",
        "items": [
          "Mini mince pies",
          "Christmas log cake with raspberries",
          "Sliced seasonal fresh fruit platter"
        ]
      },
      {
        "heading": "Beverages",
        "items": [
          "Assorted soft drinks",
          "Two types of mocktail juices",
          "Mineral water"
        ]
      }
    ]
  },
  {
    "id": "deluxe-christmas-menu",
    "name": "Deluxe Christmas Buffet",
    "intro": "Roast turkey, beef tenderloin and salmon with a choice of desserts and a festive punch.",
    "rates": [
      595,
      510
    ],
    "minimum": 15,
    "stock": "deluxe-stock",
    "photo": "3722",
    "courses": [
      {
        "heading": "Cold salads",
        "items": [
          "Quinoa, avocado and pomegranate salad",
          "Italian chicken with strawberry, avocado and mango salad",
          "Burrata, tomato and pesto salad"
        ]
      },
      {
        "heading": "Cold starters",
        "items": [
          "Smoked salmon platter",
          "Prawn cocktail"
        ]
      },
      {
        "heading": "Main courses",
        "items": [
          "Herb-crusted slow-roasted turkey with traditional pan gravy and house-made cranberry and orange relish",
          "Seared beef tenderloin with rich wild mushroom jus",
          "Pan-seared herb-marinated salmon with lemon butter sauce",
          "Velvety truffle mashed potatoes",
          "Honey and thyme glazed root vegetables",
          "Aromatic wild mushroom pilaf rice"
        ]
      },
      {
        "heading": "Choose three desserts",
        "items": [
          "Assorted mini cheesecakes",
          "Christmas log cake with raspberries",
          "Decadent dark chocolate mousse cups",
          "Spiced festive Christmas cookies",
          "Fresh seasonal berries and fruit display"
        ]
      },
      {
        "heading": "Beverages",
        "items": [
          "Assorted soft drinks and mineral water"
        ]
      },
      {
        "heading": "Choose one festive non-alcoholic punch",
        "items": [
          "sparkling pomegranate-cranberry punch",
          "holiday citrus and spiced berry sangria",
          "frosty rosemary grapefruit fizz",
          "spiced ginger and pear sparkler"
        ]
      }
    ]
  },
  {
    "id": "premium-christmas-menu",
    "name": "Premium Christmas Buffet",
    "intro": "A chilled seafood bar, chef-led carving and an extended festive menu.",
    "rates": [
      1020,
      850
    ],
    "minimum": 15,
    "stock": "premium-stock",
    "photo": "3630",
    "courses": [
      {
        "heading": "Salads",
        "items": [
          "Heirloom tomato and burrata salad",
          "Burrata, fig and truffle salad",
          "Shrimp Caesar salad with white anchovies, turkey bacon, romaine lettuce and Parmesan"
        ]
      },
      {
        "heading": "Seafood bar · choose three",
        "items": [
          "Chilled butter-poached lobster tails and claws",
          "jumbo tiger prawns on ice",
          "oak-smoked salmon rosettes",
          "Freshly shucked oysters"
        ],
        "note": "Accompanied by traditional mignonette, classic cocktail sauce, lemon wedges and capers."
      },
      {
        "heading": "Cold starters · choose three",
        "items": [
          "Poached lobster medallion with citrus herb butter and microgreens",
          "Oak-smoked salmon and caviar blini with lemon-dill creme fraiche",
          "Black truffle and wild mushroom tartlet with aged Parmesan shavings",
          "Pan-seared beef tenderloin crostini with horseradish cream and micro arugula",
          "Creamy burrata and heirloom tomato tartlet with aged balsamic pearls"
        ]
      },
      {
        "heading": "Live carving station with a chef · choose one",
        "items": [
          "Whole roasted festive turkey with chestnut and sage stuffing and pan gravy",
          "Slow-roasted prime beef striploin with green peppercorn and bone marrow jus",
          "Herb-crusted rack of lamb with rosemary and garlic glaze"
        ]
      },
      {
        "heading": "Main courses",
        "items": [
          "Beef Wellington with cream and mushroom sauce",
          "Panko-baked salmon with pistachio crust",
          "Creamy black truffle potato gratin",
          "Carnaroli wild mushroom risotto with Parmesan crisp",
          "Sauteed tenderstem asparagus and glazed baby vegetables"
        ]
      },
      {
        "heading": "Choose three desserts",
        "items": [
          "Christmas entremets (multi-layered mousse and glaze cakes)",
          "pistachio and raspberry tartlet with vanilla bean diplomat cream",
          "decadent Belgian chocolate creations",
          "assorted macarons",
          "Christmas log cake with raspberries"
        ]
      },
      {
        "heading": "Beverages",
        "items": [
          "Assorted soft drinks and sparkling water"
        ]
      },
      {
        "heading": "Choose two festive non-alcoholic punches",
        "items": [
          "sparkling pomegranate-cranberry punch",
          "holiday citrus and spiced berry sangria",
          "frosty rosemary grapefruit fizz",
          "spiced ginger and pear sparkler"
        ]
      }
    ]
  },
  {
    "id": "traditional-christmas-menu",
    "name": "Traditional Christmas Menu",
    "intro": "A family-style Christmas dinner with three centrepieces and one vegetarian portion.",
    "rates": [
      1200
    ],
    "minimum": 10,
    "stock": "traditional-stock",
    "photo": "3556",
    "courses": [
      {
        "heading": "Welcome canapés",
        "items": [
          "Smoked salmon blinis with crème fraîche and dill",
          "Mini Yorkshire puddings with roast beef and horseradish",
          "Brie and cranberry tartlets"
        ]
      },
      {
        "heading": "Christmas centrepieces — family-style",
        "items": [
          "Herb-roasted turkey with butter, herbs, garlic and aromatics",
          "Honey-mustard glazed Christmas ham",
          "Beef Wellington with beef fillet, mushroom duxelles, cured ham and golden puff pastry"
        ]
      },
      {
        "heading": "Sides",
        "items": [
          "Yorkshire puddings",
          "Chestnut and sage stuffing",
          "Pigs in blankets",
          "Duck-fat roast potatoes",
          "Honey-glazed carrots and parsnips",
          "Brussels sprouts",
          "Buttery leeks",
          "Cranberry sauce and rich turkey gravy"
        ]
      },
      {
        "heading": "Vegetarian for one",
        "items": [
          "Individual vegetable and chestnut Wellington",
          "Vegetarian gravy and separately prepared vegetarian roast potatoes",
          "Suitable vegetables and sides without meat or meat-based stock"
        ]
      },
      {
        "heading": "Desserts",
        "items": [
          "Warm Christmas pudding with vanilla custard",
          "Chocolate Yule log",
          "Vanilla ice cream"
        ]
      },
      {
        "heading": "Cheese and charcuterie",
        "items": [
          "Mature Cheddar, Stilton and Camembert",
          "Cured meats",
          "Artisan bread and crackers"
        ]
      }
    ]
  }
]

export const christmasExtras = [
  [
    "Cocktail table with cover",
    "AED 136 each"
  ],
  [
    "High bar stool (minimum five)",
    "AED 170 each"
  ],
  [
    "Tiffany chair",
    "AED 47.60 each"
  ],
  [
    "Rectangular table with cover",
    "AED 136 each"
  ],
  [
    "Large round table with cover, seats ten",
    "AED 153 each"
  ],
  [
    "Medium round table with cover, seats eight",
    "AED 153 each"
  ],
  [
    "Bartender with bar setup, bar glasses and ice",
    "AED 2,550 per package"
  ],
  [
    "Bartender only, without setup, bar glasses or ice",
    "AED 1,700 per package"
  ],
  [
    "Large icebox filled with ice",
    "AED 204"
  ],
  [
    "Agreed last-minute server extension",
    "AED 340 per server per hour"
  ]
] as const
