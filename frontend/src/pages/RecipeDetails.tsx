
import { useParams, useNavigate } from "react-router-dom";
import { Navbar } from "@/components/layout/Navbar";
import { recipes, getBudgetCategory } from "@/data/recipes";
import { useUser } from "@/contexts/UserContext";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Clock, Heart, ChevronLeft, Users } from "lucide-react";
import { cn } from "@/lib/utils";

export default function RecipeDetails() {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const recipeId = parseInt(id || "0");
  
  const recipe = recipes.find(r => r.id === recipeId);
  const { isAuthenticated, isRecipeFavorite, addToFavorites, removeFromFavorites } = useUser();
  
  const isFavorite = isRecipeFavorite(recipeId);
  
  const handleFavoriteToggle = () => {
    if (isFavorite) {
      removeFromFavorites(recipeId);
    } else {
      addToFavorites(recipeId);
    }
  };
  
  if (!recipe) {
    return (
      <div className="min-h-screen bg-background">
        <Navbar />
        <div className="container py-12 text-center">
          <h1 className="text-2xl font-bold mb-4">Recipe Not Found</h1>
          <p className="mb-6">The recipe you're looking for doesn't exist.</p>
          <Button onClick={() => navigate("/")}>
            Back to Recipes
          </Button>
        </div>
      </div>
    );
  }
  
  const budgetCategory = getBudgetCategory(recipe.price);
  
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <main className="container py-8">
        <Button 
          variant="ghost" 
          className="mb-6 flex items-center"
          onClick={() => navigate(-1)}
        >
          <ChevronLeft className="h-4 w-4 mr-1" />
          Back
        </Button>
        
        <div className="grid md:grid-cols-2 gap-8">
          <div className="rounded-lg overflow-hidden">
            <img 
              src={recipe.imageUrl} 
              alt={recipe.name} 
              className="w-full h-auto object-cover aspect-[4/3]"
            />
          </div>
          
          <div>
            <div className="flex flex-wrap items-start justify-between gap-2 mb-2">
              <h1 className="recipe-title text-3xl font-bold">{recipe.name}</h1>
              <Badge className={`bg-budget-${budgetCategory}`}>
                ${recipe.price.toFixed(2)}
              </Badge>
            </div>
            
            <Badge variant="outline" className="mb-4">
              {recipe.category}
            </Badge>
            
            <p className="text-muted-foreground mb-6">
              {recipe.description}
            </p>
            
            <div className="grid grid-cols-3 gap-4 mb-6">
              <div className="flex flex-col items-center justify-center p-3 bg-muted/50 rounded-lg">
                <Clock className="h-4 w-4 mb-1" />
                <span className="text-xs text-muted-foreground">Prep</span>
                <span className="font-medium">{recipe.prepTime} min</span>
              </div>
              
              <div className="flex flex-col items-center justify-center p-3 bg-muted/50 rounded-lg">
                <Clock className="h-4 w-4 mb-1" />
                <span className="text-xs text-muted-foreground">Cook</span>
                <span className="font-medium">{recipe.cookTime} min</span>
              </div>
              
              <div className="flex flex-col items-center justify-center p-3 bg-muted/50 rounded-lg">
                <Users className="h-4 w-4 mb-1" />
                <span className="text-xs text-muted-foreground">Serves</span>
                <span className="font-medium">{recipe.servings}</span>
              </div>
            </div>
            
            {isAuthenticated && (
              <Button 
                variant={isFavorite ? "outline" : "default"}
                className="mb-6 w-full"
                onClick={handleFavoriteToggle}
              >
                <Heart className={cn(
                  "h-4 w-4 mr-2", 
                  isFavorite ? "fill-destructive text-destructive" : ""
                )} />
                {isFavorite ? "Remove from Favorites" : "Add to Favorites"}
              </Button>
            )}
          </div>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8 mt-8">
          <div>
            <h2 className="recipe-title text-xl font-bold mb-4">Ingredients</h2>
            <ul className="space-y-2">
              {recipe.ingredients.map((ingredient, index) => (
                <li key={index} className="flex items-baseline gap-2">
                  <span className="h-1.5 w-1.5 rounded-full bg-recipe-500 mt-1.5"></span>
                  <span>{ingredient}</span>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h2 className="recipe-title text-xl font-bold mb-4">Instructions</h2>
            <ol className="space-y-4">
              {recipe.instructions.map((step, index) => (
                <li key={index} className="flex gap-3">
                  <div className="flex-none">
                    <span className="flex items-center justify-center w-6 h-6 rounded-full bg-recipe-500 text-white text-sm font-medium">
                      {index + 1}
                    </span>
                  </div>
                  <p>{step}</p>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </main>
      
      <footer className="border-t py-6 bg-muted/40">
        <div className="container text-center text-sm text-muted-foreground">
          <p>RecipeBudgetHub — Find recipes that match your budget</p>
        </div>
      </footer>
    </div>
  );
}
