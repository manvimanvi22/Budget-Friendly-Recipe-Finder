
import { useState, useMemo } from "react";
import { Navbar } from "@/components/layout/Navbar";
import { RecipeCard } from "@/components/RecipeCard";
import { FilterBar } from "@/components/FilterBar";
import { recipes } from "@/data/recipes";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

export default function Home() {
  const [maxBudget, setMaxBudget] = useState(20);
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [searchTerm, setSearchTerm] = useState("");
  
  // Extract unique categories
  const categories = useMemo(() => {
    return Array.from(new Set(recipes.map(recipe => recipe.category)));
  }, []);

  // Filter recipes based on filters
  const filteredRecipes = useMemo(() => {
    return recipes.filter(recipe => {
      const matchesPrice = recipe.price <= maxBudget;
      const matchesCategory = selectedCategory === "all" || 
        recipe.category.toLowerCase() === selectedCategory;
      const matchesSearch = searchTerm === "" || 
        recipe.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        recipe.description.toLowerCase().includes(searchTerm.toLowerCase());
      
      return matchesPrice && matchesCategory && matchesSearch;
    });
  }, [maxBudget, selectedCategory, searchTerm]);

  // Group recipes by budget category
  const budgetCategories = {
    low: filteredRecipes.filter(r => r.price < 7),
    medium: filteredRecipes.filter(r => r.price >= 7 && r.price < 12),
    high: filteredRecipes.filter(r => r.price >= 12)
  };
  
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <main className="container py-8">
        <section className="mb-8">
          <h1 className="recipe-title text-3xl md:text-4xl font-bold mb-4">
            Delicious Recipes for Every Budget
          </h1>
          <p className="text-muted-foreground max-w-3xl">
            Discover recipes that fit your budget without compromising on flavor. 
            Filter by budget range, cuisine type, or search for specific ingredients.
          </p>
        </section>
        
        <FilterBar 
          maxBudget={maxBudget}
          setMaxBudget={setMaxBudget}
          categories={categories}
          selectedCategory={selectedCategory}
          setSelectedCategory={setSelectedCategory}
          searchTerm={searchTerm}
          setSearchTerm={setSearchTerm}
          className="mb-8"
        />
        
        {filteredRecipes.length === 0 ? (
          <div className="text-center py-12">
            <h3 className="text-lg font-medium mb-2">No recipes match your filters</h3>
            <p className="text-muted-foreground">
              Try adjusting your budget range or search terms
            </p>
          </div>
        ) : (
          <Tabs defaultValue="all" className="w-full">
            <TabsList className="w-full max-w-md mx-auto grid grid-cols-4 mb-8">
              <TabsTrigger value="all">All</TabsTrigger>
              <TabsTrigger value="low" className="flex items-center gap-1">
                <span className="h-2 w-2 rounded-full bg-budget-low"></span>
                Budget
              </TabsTrigger>
              <TabsTrigger value="medium" className="flex items-center gap-1">
                <span className="h-2 w-2 rounded-full bg-budget-medium"></span>
                Medium
              </TabsTrigger>
              <TabsTrigger value="high" className="flex items-center gap-1">
                <span className="h-2 w-2 rounded-full bg-budget-high"></span>
                Premium
              </TabsTrigger>
            </TabsList>
            
            <TabsContent value="all">
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                {filteredRecipes.map(recipe => (
                  <RecipeCard key={recipe.id} recipe={recipe} />
                ))}
              </div>
            </TabsContent>
            
            <TabsContent value="low">
              {budgetCategories.low.length === 0 ? (
                <div className="text-center py-8">
                  <p>No budget recipes match your filters</p>
                </div>
              ) : (
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                  {budgetCategories.low.map(recipe => (
                    <RecipeCard key={recipe.id} recipe={recipe} />
                  ))}
                </div>
              )}
            </TabsContent>
            
            <TabsContent value="medium">
              {budgetCategories.medium.length === 0 ? (
                <div className="text-center py-8">
                  <p>No medium-priced recipes match your filters</p>
                </div>
              ) : (
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                  {budgetCategories.medium.map(recipe => (
                    <RecipeCard key={recipe.id} recipe={recipe} />
                  ))}
                </div>
              )}
            </TabsContent>
            
            <TabsContent value="high">
              {budgetCategories.high.length === 0 ? (
                <div className="text-center py-8">
                  <p>No premium recipes match your filters</p>
                </div>
              ) : (
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                  {budgetCategories.high.map(recipe => (
                    <RecipeCard key={recipe.id} recipe={recipe} />
                  ))}
                </div>
              )}
            </TabsContent>
          </Tabs>
        )}
      </main>
      
      <footer className="border-t py-6 bg-muted/40">
        <div className="container text-center text-sm text-muted-foreground">
          <p>RecipeBudgetHub — Find recipes that match your budget</p>
        </div>
      </footer>
    </div>
  );
}
