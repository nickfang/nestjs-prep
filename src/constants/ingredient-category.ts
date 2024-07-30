// ingredient-category.ts

interface IngredientGroup {
  name: string;
  subcategories: IngredientCategory[];
}

interface IngredientCategory {
  name: string;
}

export const ingredientCategories: IngredientGroup[] = [
  {
    name: 'Produce',
    subcategories: [
      { name: 'Fruit' },
      { name: 'Vegetable' },
      { name: 'Herb' },
      { name: 'Spice' },
    ],
  },
  {
    name: 'Grain/Legume',
    subcategories: [{ name: 'Grain' }, { name: 'Legume' }],
  },
  {
    name: 'Dairy/Egg',
    subcategories: [{ name: 'Dairy' }, { name: 'Egg' }],
  },
  {
    name: 'Protein',
    subcategories: [
      { name: 'Meat' },
      { name: 'Seafood' },
      { name: 'Tofu/Tempeh' },
    ],
  },
  {
    name: 'Fat/Oil',
    subcategories: [{ name: 'Oil' }, { name: 'Fat' }],
  },
  {
    name: 'Nut/Seed',
    subcategories: [{ name: 'Nut' }, { name: 'Seed' }],
  },
  {
    name: 'Baking/Sweetener',
    subcategories: [{ name: 'Baking' }, { name: 'Sweetener' }],
  },
  { name: 'Beverage', subcategories: [] },
  { name: 'Alcohol', subcategories: [] },
  { name: 'Condiment/Sauce', subcategories: [] },
  { name: 'Other', subcategories: [] },
];
