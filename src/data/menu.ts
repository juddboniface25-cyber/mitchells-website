/**
 * Transcribed from photos of the printed 2026 menu (July 2026) and checked
 * against the copy the page posted on 2026-07-24 ("Below is our 2026 menu").
 * Spelling of item names kept as printed. Prices are the printed prices.
 * `favorite` marks the green-highlighted items on the physical menu, `new`
 * the items printed under "new sandwiches" or flagged NEW.
 */
export type Tag = "favorite" | "new" | "gf";
export type Item = { name: string; desc?: string; price?: string; tags?: Tag[] };
export type Section = {
  id: string;
  title: string;
  note?: string;
  footer?: string;
  items?: Item[];
  /** Inline list, for sections the menu prints as a single line. */
  inline?: string;
  inlineNote?: string;
};
export type Group = { id: string; label: string; sub: string; sections: Section[] };

export const menuMeta = {
  printedSeason: "2026 season",
  disclaimer:
    "Consuming raw or undercooked meats, poultry, seafood, shellfish or eggs may increase your risk of foodborne illness.",
  cardNote:
    "A 3% credit card charge applies to all credit transactions; a cash discount is available upon paying cash.",
};

export const pizzaTable = {
  rows: [
    { name: "Cheese", small: "16.99", large: "22.99" },
    { name: "1 Topping", small: "17.99", large: "23.99" },
    { name: "2 Toppings", small: "18.99", large: "24.99" },
    { name: "3 Toppings", small: "19.99", large: "25.99" },
    { name: "4 Toppings", small: "20.99", large: "26.99" },
    { name: "Extra Cheese", small: "3", large: "4" },
  ],
  glutenFree: "Gluten-free crust +2.75, small only",
  toppings:
    "Pepperoni · bacon · beef · sausage · onion · green pepper · mushroom · banana pepper · black olive · tomato · jalapeño",
};

export const menuGroups: Group[] = [
  {
    id: "starters",
    label: "Starters & Salads",
    sub: "Baskets for the table, salads with the house dressings.",
    sections: [
      {
        id: "starters-list",
        title: "Starters",
        items: [
          { name: "Wings*", price: "12.99 / 23.99 / 39.99", desc: "Classic or boneless, 6, 12 or 24. Tossed in Hot, Mild, BBQ, Sweet Chili, or Hopp'd Up Bourbon", tags: ["favorite"] },
          { name: "Cheesefries", price: "13.99", desc: "Our classic fries smothered in cheese" },
          { name: "Mozzarella Balls", price: "11.99", desc: "7 stuffed mozzarella balls fried golden brown" },
          { name: "Calamari*", price: "18.49", desc: "Lightly battered & served with marinara" },
          { name: "Pepperjack Bites", price: "11.99", desc: "Deep fried, stuffed with pepper jack & cheddar" },
          { name: "Buffalo Chicken Dip*", price: "16.99", desc: "A new appetizer you will love, served with pita chips", tags: ["new"] },
          { name: "Popcorn Shrimp*", price: "15.99", desc: "Shrimp basket breaded & deep-fried" },
          { name: "Clam Strips*", price: "15.99", desc: "Basket of deep fried clam strips" },
          { name: "Nachos Grande*", price: "16.49", desc: "Tortilla chips topped with chili, fresh made pico, lettuce, cheese & sour cream", tags: ["favorite"] },
          { name: "Southwest Egg Rolls", price: "14.99", desc: "Our spin on the southwest eggroll" },
        ],
      },
      {
        id: "salads",
        title: "Salads",
        note: "Ranch · Bleu Cheese · 1000 Island · Italian · Honey Mustard · Balsamic Vinaigrette",
        footer: "Add chicken or steak to any salad 7 · popcorn shrimp or crab cake 8",
        items: [
          { name: "House Salad", price: "10.99", desc: "Lettuce, tomatoes, cucumbers, cheese & croutons" },
          { name: "Taco Salad*", price: "16.99", desc: "Fried tortilla filled with lettuce, seasoned beef, homemade pico, sour cream & cheese" },
          { name: "Caesar Salad", price: "10.99", desc: "Romaine wedge, parmesan, croutons & Caesar" },
          { name: "Chef Salad", price: "15.99", desc: "Ham, turkey, egg & cheese over greens" },
          { name: "Ahi Tuna", price: "18.99", desc: "Seared rare ahi over a light salad blend, diced oranges, avocado, poke dressing & tortilla strips" },
          { name: "Summer Beet Salad", price: "15.99", desc: "Roasted beets, mandarin oranges, goat cheese on spring mix, blood orange vinaigrette" },
          { name: "Side Salad", price: "5.99", desc: "A smaller version of our house or Caesar salad" },
        ],
      },
    ],
  },
  {
    id: "pizza",
    label: "Pizza",
    sub: "Hand-tossed, small or large, plus calzones and stromboli.",
    sections: [
      {
        id: "pizza-specials",
        title: "From the oven",
        items: [
          { name: "Mitchell's Margherita Pizza", price: "19.99", desc: '12" pie, fresh mozzarella, basil & sauce', tags: ["favorite"] },
          { name: "Calzone", price: "16.50", desc: "Mozzarella, ricotta & pepperoni" },
          { name: "Stromboli", price: "17.50", desc: "Mozzarella, pepperoni, beef, onion, mushroom & green pepper" },
          { name: "Breadsticks with Cheese", price: "13.99" },
        ],
      },
    ],
  },
  {
    id: "sandwiches",
    label: "Sandwiches",
    sub: "Served with one side. Sub a side salad +3, add bacon +2.50, make it a wrap +1.",
    sections: [
      {
        id: "sandwiches-list",
        title: "Sandwiches",
        items: [
          { name: "Fish Sandwich*", price: "14.99", desc: "Golden fried cod, lettuce, tomato & tartar" },
          { name: "Cheeseburger*", price: "14.99", desc: "Hand-pattied burger, cheese, lettuce, tomato & mayo" },
          { name: "Mitchell's Burger*", price: "16.99", desc: "Hand-pattied burger, cheese, lettuce, tomato, mayo & a fried egg", tags: ["favorite"] },
          { name: "The Primetime Burger*", price: "19.49", desc: "8oz brisket short-rib chuck blend cooked medium-well, lettuce, tomato & mayo", tags: ["new"] },
          { name: "The Clifford", price: "16.49", desc: '8" steak sub, diced jalapeños & onions, American cheese' },
          { name: "Jersey Dog", price: "7.99", desc: "Sabrett hot dog with sauerkraut & mustard" },
          { name: "BLT", price: "12.99", desc: "The classic bacon, lettuce & tomato with mayo" },
          { name: "Smoked Brisket Sandwich", price: "16.99", desc: "Pit-smoked seasoned brisket on a kaiser roll, small side of slaw" },
          { name: "Pizza Steak Sub", price: "16.49", desc: '8" steak sub, mozzarella & homemade pizza sauce' },
          { name: "Reuben", price: "14.99", desc: "Corned beef or turkey, sauerkraut, 1000 island & swiss" },
          { name: "Grilled Chicken*", price: "14.99", desc: "Grilled chicken breast, lettuce, tomato & mayo" },
          { name: "Pulled Pork BBQ", price: "14.99", desc: "Pulled pork topped with BBQ sauce" },
          { name: "Triple Club", price: "15.99", desc: "Ham, turkey, bacon, lettuce, tomato & mayo on white" },
          { name: "Crab Cake Sandwich*", price: "16.49", desc: "Homemade crab cake, lettuce, tomato & tartar" },
        ],
      },
      {
        id: "new-sandwiches",
        title: "New this season",
        items: [
          { name: "Chicken Parmesan Sub*", price: "16.99", tags: ["new"] },
          { name: "Meatball Sub", price: "16.99", tags: ["new"] },
          { name: "The Italian", price: "15.49", desc: "Ham, salami, pepperoni & provolone, lettuce, tomato & Italian mix", tags: ["new"] },
          { name: "Steak & Cheese Sub*", price: "16.49", desc: '8" sub, thinly sliced beef, green peppers & onions, provolone', tags: ["favorite"] },
          { name: "Turkey & Swiss Wrap", price: "14.99", desc: "Turkey, swiss, lettuce, tomato & mayo", tags: ["new"] },
          { name: "Chicken Salad Sandwich", price: "14.99", desc: "Homemade chicken salad, lettuce & tomato", tags: ["new"] },
          { name: "Chipotle Chicken Wrap*", price: "15.99", desc: "Seasoned grilled chicken, lettuce, tomato & chipotle mayo", tags: ["new"] },
          { name: "Quesadilla*, Chicken or Steak", price: "16.49", desc: "Grilled chicken or steak, sautéed peppers & onions (no side)", tags: ["new"] },
        ],
      },
    ],
  },
  {
    id: "plates",
    label: "Plates & Sides",
    sub: "Dinner plates with two sides, the kids' menu, and what to drink.",
    sections: [
      {
        id: "dinner-plates",
        title: "Dinner plates",
        items: [
          { name: "Smoked Brisket Plate", price: "19.99", desc: "Pit-smoked seasoned brisket served with 2 sides" },
          { name: "BBQ Plate", price: "17.99", desc: "Pulled pork BBQ served with fries & slaw" },
          { name: "Crab Cake Plate", price: "20.49", desc: "2 crab cakes served with 2 sides" },
          { name: "Fish & Chips*", price: "18.99", desc: "2 cod filets battered & served with fries & slaw", tags: ["favorite"] },
          { name: "Chicken Salad Plate", price: "17.99", desc: "Homemade chicken salad, choice of 2 sides" },
          { name: "Adult Tenders", price: "14.49", desc: "3 chicken tenders with 1 side" },
          { name: "Seafood Combo Platter*", price: "19.99", desc: "Cod & popcorn shrimp served with slaw & pups" },
          { name: "Popcorn Shrimp Plate*", price: "19.99", desc: "½ lb popcorn shrimp served with fries & slaw" },
        ],
      },
      {
        id: "sides",
        title: "Sides",
        inline: "French Fries · Onion Rings · Macaroni Salad · Baked Beans · Coleslaw · Hushpuppies · Potato Salad",
        inlineNote: "Ask your server about our iced coffee & desserts.",
      },
      {
        id: "kids",
        title: "Kid's menu",
        inline: "2 Tenders & Fries · Corndog & Fries · Nuggets & Fries · Macaroni & Cheese · Grilled Cheese & Fries",
        inlineNote: "12 & under · 7.99",
      },
      {
        id: "beverages",
        title: "Beverages",
        inline: "Pepsi Products · Unsweet Tea · Sweet Tea · Iced Coffee",
        inlineNote: "Beer and wine at the bar.",
      },
    ],
  },
];

/** Flat category list for the header and footer links. */
export const menuCategories = menuGroups.map((g) => ({ id: g.id, label: g.label }));
