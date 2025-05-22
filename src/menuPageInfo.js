const beverages = [
  {
    name: "Barolo",
    description: `
        Red, dry wine from the Piedmont region. Made from the Nebbiolo grape, it’s often referred to as 
        one of the finest wines of Italy. It has a rich taste with hints of roses, dried fruits, mint, 
        plum, and white truffle.
        `,
    type: "alcohol",
    price: "€15.00",
  },
  {
    name: "Gavi",
    description: `
        Dry white wine from the Alessandria province. This wine is made from the Cortese grape variety.
        It boasts a straw-like color with a gentle and neutral aroma. Its taste carries a somewhat tart flavor 
        complemented by enduring fruity notes.
        `,
    type: "alcohol",
    price: "€12.00",
  },
  {
    name: "Aranciata",
    description: `
        Beverage based on orange juice, water, sugar, and carbon dioxide.
        `,
    type: "non-alcohol",
    price: "€11.00",
  },
  {
    name: "Chinotto",
    description: `
        It’s made from the juice of the citrus fruit (Citrus myrtifolia) 
        and other plant extracts. It’s a sparkling, dark-colored beverage 
        with a bitter taste.
        `,
    type: "non-alcohol",
    price: "€10.00",
  },
  {
    name: "Cappucino",
    description: `
        Coffee concoction traditionally made with a double 
        shot of espresso, milk, and foam. Its name translates as “hood”, 
        reminiscent of the hue of the Capuchin monks’ robes.
        `,
    type: "coffee",
    price: "€9.50",
  },
  {
    name: "Marocchino",
    description: `
        Coffee delicacy originating from Alessandria. It’s an espresso topped 
        with a layer of milk foam, served in a glass mug dusted with cocoa.
        `,
    type: "coffee",
    price: "€8.50",
  },
];

const mainDishes = [
  {
    name: "Agnolotti del Plin",
    description: `
        These tiny, meat-filled Piedmontese agnolotti (the name translates as 
        agnolotti with the pinch") originated as a means of using up braised meat.
        The agnolotti are stuffed with a pork, chicken, veal, and vegetable filling 
        bound with butter and cheese.
      `,
    price: "€31.00",
  },
  {
    name: "Soppressata Pizza with Calabrian Chiles and Hot Honey",
    description: `
        Top homemade pizza with Italian cured meat and fiery chiles from Italy, which 
        add heat and a distinctly fruity flavor balanced by the sweetness of hot honey.
        `,
    price: "€30.00",
  },
  {
    name: "Tuscan Grilled Trout",
    description: `
        A simple garlic-and-herb-infused oil combined with wine vinegar 
        acts as both a basting liquid and a sauce for the fish.
        `,
    price: "€35.00",
  },
];

const sides = [
  {
    name: "Tomato Burrata Salad",
    description: `
        This fresh tomato burrata salad is made with fresh cherry
        tomatoes that are marinated in garlic, and balsamic vinegar,
        and is topped with a ball of burrata cheese that is drizzled
        with pesto and served with toasted bread.
        `,
    price: "€20.00",
  },
  {
    name: "Eggplant involtini with tomato sauce and ricotta",
    description: `
        This eggplant involtini recipe features roasted eggplant
        stuffed with an herby ricotta filling and baked in a garlicky
        homemade tomato sauce dotted with melted cheese.
        `,
    price: "€20.00",
  },
  {
    name: "Mascarpone polenta",
    description: `
        This mascarpone polenta is rich and nourishing with subtle notes
        of sweet corn, creamy mascarpone cheese, and hints of black pepper.
        `,
    price: "€21.50",
  },
  {
    name: "Panzanella toscana with fresh mozzarella caprese",
    description: `
        Panzanella Toscana with Fresh Mozzarella Caprese is a Tuscan-inspired,
        bread and vegetable salad with a strong nod to the southern Italian island
        of Capri–with fresh mozzarella, extra tomatoes and extra basil.
        `,
    price: "€22.00",
  },
  {
    name: "Risotto ai funghi",
    description: `
        Risotto ai funghi, also known as mushroom risotto, is a rich, creamy, and
        delicious dish that is both comforting and filling. This hearty dish is made
        with mushrooms, arborio rice, and other tasty flavors, resulting in an earthy
        and savory flavor.
        `,
    price: "€24.50",
  },
];

export { beverages, mainDishes, sides };
