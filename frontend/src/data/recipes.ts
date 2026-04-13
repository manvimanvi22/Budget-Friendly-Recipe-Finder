
export interface Recipe {
  id: number;
  name: string;
  category: string;
  imageUrl: string;
  description: string;
  price: number;
  ingredients: string[];
  instructions: string[];
  prepTime: number; // in minutes
  cookTime: number; // in minutes
  servings: number;
}

export const recipes: Recipe[] = [
  {
    id: 1,
    name: "Spaghetti Carbonara",
    category: "Italian",
    imageUrl: "https://images.unsplash.com/photo-1600803907087-f56d462fd26b?q=80&w=800&auto=format&fit=crop",
    description: "A classic Italian pasta dish with creamy egg sauce, pancetta, and cheese.",
    price: 8.50,
    ingredients: [
      "200g spaghetti", 
      "100g pancetta", 
      "2 large eggs", 
      "50g Pecorino Romano cheese", 
      "50g Parmesan cheese", 
      "2 cloves garlic", 
      "Black pepper", 
      "Salt"
    ],
    instructions: [
      "Cook the spaghetti in salted water until al dente.",
      "Fry the pancetta until crispy.",
      "Beat the eggs and mix with grated cheeses.",
      "Combine pasta with pancetta, then mix in egg mixture off heat.",
      "Serve immediately with black pepper and extra cheese."
    ],
    prepTime: 10,
    cookTime: 15,
    servings: 2
  },
  {
    id: 2,
    name: "Vegetable Stir Fry",
    category: "Asian",
    imageUrl: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?q=80&w=800&auto=format&fit=crop",
    description: "A quick and healthy vegetable stir fry with a savory sauce.",
    price: 6.20,
    ingredients: [
      "2 bell peppers", 
      "1 carrot", 
      "1 broccoli head", 
      "1 onion", 
      "2 cloves garlic", 
      "2 tbsp soy sauce", 
      "1 tbsp sesame oil", 
      "1 tsp ginger", 
      "1 cup rice"
    ],
    instructions: [
      "Cook rice according to package instructions.",
      "Chop all vegetables into bite-sized pieces.",
      "Heat oil in a wok and add garlic and ginger.",
      "Add vegetables and stir fry for 5-7 minutes.",
      "Add soy sauce and sesame oil, then serve over rice."
    ],
    prepTime: 15,
    cookTime: 10,
    servings: 3
  },
  {
    id: 3,
    name: "Avocado Toast",
    category: "Breakfast",
    imageUrl: "https://images.unsplash.com/photo-1588137378633-dea1166d4c35?q=80&w=800&auto=format&fit=crop",
    description: "Simple and nutritious breakfast toast topped with avocado and eggs.",
    price: 4.80,
    ingredients: [
      "2 slices whole grain bread", 
      "1 ripe avocado", 
      "2 eggs", 
      "Red pepper flakes", 
      "Salt and pepper", 
      "Lemon juice"
    ],
    instructions: [
      "Toast the bread until golden and crispy.",
      "Mash the avocado with a fork and add lemon juice, salt, and pepper.",
      "Spread the avocado mash on the toast.",
      "Fry or poach the eggs to your liking.",
      "Place the eggs on top of the avocado and sprinkle with red pepper flakes."
    ],
    prepTime: 5,
    cookTime: 5,
    servings: 1
  },
  {
    id: 4,
    name: "Beef Bourguignon",
    category: "French",
    imageUrl: "https://images.unsplash.com/photo-1534939561126-855b8675edd7?q=80&w=800&auto=format&fit=crop",
    description: "Rich and flavorful slow-cooked beef stew with red wine and vegetables.",
    price: 15.20,
    ingredients: [
      "800g beef chuck", 
      "200g bacon", 
      "2 carrots", 
      "1 onion", 
      "2 cloves garlic", 
      "2 cups red wine", 
      "2 cups beef stock", 
      "200g mushrooms", 
      "Fresh thyme", 
      "Bay leaves"
    ],
    instructions: [
      "Cut beef into chunks and brown in a large pot.",
      "Add bacon, onions, and carrots and cook until softened.",
      "Add garlic, red wine, beef stock, thyme, and bay leaves.",
      "Simmer on low heat for 3 hours until meat is tender.",
      "Add mushrooms and cook for another 30 minutes.",
      "Serve hot with mashed potatoes or crusty bread."
    ],
    prepTime: 30,
    cookTime: 240,
    servings: 6
  },
  {
    id: 5,
    name: "Black Bean Tacos",
    category: "Mexican",
    imageUrl: "https://images.unsplash.com/photo-1565299585323-38d6b0865b47?q=80&w=800&auto=format&fit=crop",
    description: "Quick vegetarian tacos with spiced black beans and fresh toppings.",
    price: 5.40,
    ingredients: [
      "8 corn tortillas", 
      "1 can black beans", 
      "1 avocado", 
      "1 tomato", 
      "1 onion", 
      "Fresh cilantro", 
      "1 lime", 
      "Cumin", 
      "Chili powder"
    ],
    instructions: [
      "Heat black beans with cumin and chili powder.",
      "Dice tomato, onion, and avocado for toppings.",
      "Warm the tortillas in a dry pan.",
      "Fill tortillas with beans and add toppings.",
      "Squeeze lime juice on top and garnish with cilantro."
    ],
    prepTime: 10,
    cookTime: 10,
    servings: 4
  },
  {
    id: 6,
    name: "Chicken Curry",
    category: "Indian",
    imageUrl: "https://images.unsplash.com/photo-1604908176997-125f25cc6f3d?q=80&w=800&auto=format&fit=crop",
    description: "Aromatic Indian curry with tender chicken and a rich spice blend.",
    price: 9.90,
    ingredients: [
      "500g chicken breast", 
      "2 onions", 
      "3 cloves garlic", 
      "1 can coconut milk", 
      "2 tbsp curry powder", 
      "1 tbsp garam masala", 
      "1 tsp turmeric", 
      "Fresh ginger", 
      "Cilantro", 
      "2 cups rice"
    ],
    instructions: [
      "Cook rice according to package instructions.",
      "Sauté onions, garlic, and ginger until soft.",
      "Add curry powder, garam masala, and turmeric, and cook for 1 minute.",
      "Add diced chicken and cook until browned.",
      "Pour in coconut milk and simmer for 20 minutes.",
      "Serve over rice and garnish with cilantro."
    ],
    prepTime: 15,
    cookTime: 30,
    servings: 4
  },
  {
    id: 7,
    name: "Greek Salad",
    category: "Mediterranean",
    imageUrl: "https://images.unsplash.com/photo-1551248429-40975aa4de74?q=80&w=800&auto=format&fit=crop",
    description: "Fresh and healthy Greek salad with feta cheese and olives.",
    price: 7.30,
    ingredients: [
      "1 cucumber", 
      "3 tomatoes", 
      "1 red onion", 
      "200g feta cheese", 
      "100g kalamata olives", 
      "3 tbsp olive oil", 
      "1 tbsp red wine vinegar", 
      "Oregano", 
      "Salt and pepper"
    ],
    instructions: [
      "Chop cucumber, tomatoes, and red onion into chunks.",
      "Combine vegetables in a large bowl.",
      "Add olives and crumbled feta cheese.",
      "Mix olive oil, red wine vinegar, oregano, salt, and pepper.",
      "Drizzle dressing over salad and toss gently to combine."
    ],
    prepTime: 15,
    cookTime: 0,
    servings: 4
  },
  {
    id: 8,
    name: "Chocolate Lava Cake",
    category: "Dessert",
    imageUrl: "https://images.unsplash.com/photo-1600326145359-584bbc1b0111?q=80&w=800&auto=format&fit=crop",
    description: "Decadent chocolate cake with a gooey molten center.",
    price: 6.80,
    ingredients: [
      "100g dark chocolate", 
      "100g butter", 
      "2 eggs", 
      "2 egg yolks", 
      "80g sugar", 
      "40g flour", 
      "Cocoa powder", 
      "Vanilla ice cream (optional)"
    ],
    instructions: [
      "Preheat oven to 425°F (220°C) and butter ramekins.",
      "Melt chocolate and butter together.",
      "Whisk eggs, yolks, and sugar until light and fluffy.",
      "Fold chocolate mixture into eggs, then fold in flour.",
      "Pour into ramekins and bake for 12 minutes.",
      "Serve warm with vanilla ice cream if desired."
    ],
    prepTime: 15,
    cookTime: 12,
    servings: 4
  }
];

// Function to filter recipes by budget range
export const filterRecipesByBudget = (maxPrice: number) => {
  return recipes.filter(recipe => recipe.price <= maxPrice);
};

// Function to get budget category
export const getBudgetCategory = (price: number): "low" | "medium" | "high" => {
  if (price < 7) return "low";
  if (price < 12) return "medium";
  return "high";
};
