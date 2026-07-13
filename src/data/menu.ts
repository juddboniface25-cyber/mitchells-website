// Menu content verified against photos of the current physical menu
// (July 2026) — see docs/requirements.md in the project folder.

export type MenuItem = {
  name: string;
  price: string;
  desc?: string;
  isNew?: boolean;
  star?: boolean; // green-highlighted favorite on the physical menu
};

export type MenuSection = {
  id: string;
  title: string;
  bannerBg: string;
  bannerColor: string;
  note?: string;
  footnote?: string;
  items?: MenuItem[];
  inline?: string;
  inlineNote?: string;
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
  glutenFree: "Gluten-free crust +2.75 (small only)",
  toppings:
    "Toppings: pepperoni · bacon · beef · sausage · onion · green pepper · mushroom · banana pepper · black olive · tomato · jalapeño",
  specials: [
    {
      name: "Mitchell's Margherita Pizza",
      price: "19.99",
      desc: '12" — fresh mozzarella, basil & sauce',
    },
    { name: "Calzone", price: "16.50", desc: "Mozzarella, ricotta & pepperoni" },
    {
      name: "Stromboli",
      price: "17.50",
      desc: "Mozzarella, pepperoni, beef, onion, mushroom & green pepper",
    },
    { name: "Breadsticks with Cheese", price: "13.99" },
  ] as MenuItem[],
};

export const menuSections: MenuSection[] = [
  {
    id: "starters",
    title: "starters",
    bannerBg: "#f4c020",
    bannerColor: "#2b6b2f",
    items: [
      {
        name: "Wings*",
        price: "12.99 / 23.99 / 39.99",
        desc: "Classic or boneless — 6, 12 or 24. Tossed in Hot, Mild, BBQ, Sweet Chili, or Hopp'd Up Bourbon",
      },
      { name: "Cheesefries", price: "13.99", desc: "Our classic fries smothered in cheese" },
      {
        name: "Mozzarella Balls",
        price: "11.99",
        desc: "7 stuffed mozzarella balls fried golden brown",
      },
      { name: "Calamari*", price: "18.49", desc: "Lightly battered & served with marinara" },
      {
        name: "Pepperjack Bites",
        price: "11.99",
        desc: "Deep fried, stuffed with pepper jack & cheddar",
      },
      {
        name: "Buffalo Chicken Dip*",
        price: "16.99",
        desc: "A new appetizer you will love, served with pita chips",
      },
      { name: "Popcorn Shrimp*", price: "15.99", desc: "Shrimp basket breaded & deep-fried" },
      { name: "Clam Strips*", price: "15.99", desc: "Basket of deep fried clam strips" },
      {
        name: "Nachos Grande*",
        price: "16.49",
        desc: "Tortilla chips topped with chili, fresh made pico, lettuce, cheese & sour cream",
      },
      {
        name: "Southwest Egg Rolls",
        price: "14.99",
        desc: "Our spin on the southwest eggroll",
      },
    ],
  },
  {
    id: "salads",
    title: "salads",
    bannerBg: "#e14b25",
    bannerColor: "#ffffff",
    note: "Ranch · Bleu Cheese · 1000 Island · Italian · Honey Mustard · Balsamic",
    footnote: "+ Add chicken or steak to any salad 7 · popcorn shrimp or crab cake 8",
    items: [
      {
        name: "House Salad",
        price: "10.99",
        desc: "Lettuce, tomatoes, cucumbers, cheese & croutons",
      },
      {
        name: "Taco Salad*",
        price: "16.99",
        desc: "Fried tortilla filled with lettuce, seasoned beef, homemade pico, sour cream & cheese",
      },
      {
        name: "Caesar Salad",
        price: "10.99",
        desc: "Romaine wedge, parmesan, croutons & Caesar",
      },
      { name: "Chef Salad", price: "15.99", desc: "Ham, turkey, egg & cheese over greens" },
      {
        name: "Ahi Tuna",
        price: "18.99",
        desc: "Seared rare ahi over a light salad blend, diced oranges, avocado, poke dressing & tortilla strips",
      },
      {
        name: "Summer Beet Salad",
        price: "15.99",
        desc: "Roasted beets, mandarin oranges, goat cheese on spring mix, blood orange vinaigrette",
      },
      {
        name: "Side Salad",
        price: "5.99",
        desc: "A smaller version of our house or Caesar salad",
      },
    ],
  },
  {
    id: "sandwiches",
    title: "sandwiches",
    bannerBg: "#2f7d3f",
    bannerColor: "#ffe08a",
    note: "Served with one side · sub a side salad +3 · add bacon +2.50 · make it a wrap +1",
    items: [
      {
        name: "Fish Sandwich*",
        price: "14.99",
        desc: "Golden fried cod, lettuce, tomato & tartar",
      },
      {
        name: "Cheeseburger*",
        price: "14.99",
        desc: "Hand-pattied burger, cheese, lettuce, tomato & mayo",
      },
      {
        name: "Mitchell's Burger*",
        price: "16.99",
        desc: "Hand-pattied burger, cheese, lettuce, tomato, mayo & a fried egg",
        star: true,
      },
      {
        name: "The Primetime Burger*",
        price: "19.49",
        desc: "8oz brisket short-rib chuck blend cooked medium-well, lettuce, tomato & mayo",
        isNew: true,
      },
      {
        name: "The Clifford",
        price: "16.49",
        desc: '8" steak sub, diced jalapeños & onions, American cheese',
      },
      { name: "Jersey Dog", price: "7.99", desc: "Sabrett hot dog with sauerkraut & mustard" },
      { name: "BLT", price: "12.99", desc: "The classic bacon, lettuce & tomato with mayo" },
      {
        name: "Smoked Brisket Sandwich",
        price: "16.99",
        desc: "Pit-smoked seasoned brisket on a kaiser roll, small side of slaw",
      },
      {
        name: "Pizza Steak Sub",
        price: "16.49",
        desc: '8" steak sub, mozzarella & homemade pizza sauce',
      },
      {
        name: "Reuben",
        price: "14.99",
        desc: "Corned beef or turkey, sauerkraut, 1000 island & swiss",
      },
      {
        name: "Grilled Chicken*",
        price: "14.99",
        desc: "Grilled chicken breast, lettuce, tomato & mayo",
      },
      { name: "Pulled Pork BBQ", price: "14.99", desc: "Pulled pork topped with BBQ sauce" },
      {
        name: "Triple Club",
        price: "15.99",
        desc: "Ham, turkey, bacon, lettuce, tomato & mayo on white",
      },
      {
        name: "Crab Cake Sandwich*",
        price: "16.49",
        desc: "Homemade crab cake, lettuce, tomato & tartar",
      },
    ],
  },
  {
    id: "new-sandwiches",
    title: "new sandwiches",
    bannerBg: "#f39a12",
    bannerColor: "#ffffff",
    items: [
      { name: "Chicken Parmesan Sub*", price: "16.99" },
      { name: "Meatball Sub", price: "16.99" },
      {
        name: "The Italian",
        price: "15.49",
        desc: "Ham, salami, pepperoni & provolone, lettuce, tomato & Italian mix",
      },
      {
        name: "Steak & Cheese Sub*",
        price: "16.49",
        desc: '8" — thinly sliced beef, green peppers & onions, provolone',
        star: true,
      },
      {
        name: "Turkey & Swiss Wrap",
        price: "14.99",
        desc: "Turkey, swiss, lettuce, tomato & mayo",
      },
      {
        name: "Chicken Salad Sandwich",
        price: "14.99",
        desc: "Homemade chicken salad, lettuce & tomato",
      },
      {
        name: "Chipotle Chicken Wrap*",
        price: "15.99",
        desc: "Seasoned grilled chicken, lettuce, tomato & chipotle mayo",
      },
      {
        name: "Quesadilla* — Chicken or Steak",
        price: "16.49",
        desc: "Grilled chicken or steak, sautéed peppers & onions (no side)",
      },
    ],
  },
  {
    id: "dinner-plates",
    title: "dinner plates",
    bannerBg: "#e14b25",
    bannerColor: "#ffffff",
    items: [
      {
        name: "Smoked Brisket Plate",
        price: "19.99",
        desc: "Pit-smoked seasoned brisket served with 2 sides",
      },
      { name: "BBQ Plate", price: "17.99", desc: "Pulled pork BBQ served with fries & slaw" },
      { name: "Crab Cake Plate", price: "20.49", desc: "2 crab cakes served with 2 sides" },
      {
        name: "Fish & Chips*",
        price: "18.99",
        desc: "2 cod filets battered & served with fries & slaw",
        star: true,
      },
      {
        name: "Chicken Salad Plate",
        price: "17.99",
        desc: "Homemade chicken salad, choice of 2 sides",
      },
      { name: "Adult Tenders", price: "14.49", desc: "3 chicken tenders with 1 side" },
      {
        name: "Seafood Combo Platter*",
        price: "19.99",
        desc: "Cod & popcorn shrimp served with slaw & pups",
      },
      {
        name: "Popcorn Shrimp Plate*",
        price: "19.99",
        desc: "½ lb popcorn shrimp served with fries & slaw",
      },
    ],
  },
  {
    id: "sides",
    title: "sides",
    bannerBg: "#1f8fc4",
    bannerColor: "#ffffff",
    inline:
      "French Fries · Onion Rings · Macaroni Salad · Baked Beans · Coleslaw · Hushpuppies · Potato Salad",
    inlineNote: "Ask your server about our iced coffee & desserts!",
  },
  {
    id: "kids-menu",
    title: "kid's menu",
    bannerBg: "#f4c020",
    bannerColor: "#2b6b2f",
    inline:
      "2 Tenders & Fries · Corndog & Fries · Nuggets & Fries · Macaroni & Cheese · Grilled Cheese & Fries",
    inlineNote: "12 & under · 7.99",
  },
  {
    id: "beverages",
    title: "beverages",
    bannerBg: "#12857a",
    bannerColor: "#ffffff",
    inline: "Pepsi Products · Unsweet Tea · Sweet Tea · Iced Coffee",
  },
];

export const menuCategories = [
  { id: "starters", label: "Starters" },
  { id: "salads", label: "Salads" },
  { id: "pizza", label: "Pizza" },
  { id: "sandwiches", label: "Sandwiches" },
  { id: "new-sandwiches", label: "New Sandwiches", isNew: true },
  { id: "dinner-plates", label: "Dinner Plates" },
  { id: "sides", label: "Sides" },
  { id: "kids-menu", label: "Kid's Menu" },
  { id: "beverages", label: "Beverages" },
];

export const finePrint =
  "*Consuming raw or undercooked meats, poultry, seafood, shellfish or eggs may increase your risk of foodborne illness. A 3% credit card charge applies to all credit transactions; a cash discount is available upon paying cash.";
