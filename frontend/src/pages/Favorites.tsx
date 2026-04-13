
import { useMemo } from "react";
import { Navbar } from "@/components/layout/Navbar";
import { RecipeCard } from "@/components/RecipeCard";
import { useUser } from "@/contexts/UserContext";
import { recipes } from "@/data/recipes";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Heart } from "lucide-react";

export default function Favorites() {
  const { isAuthenticated, favorites } = useUser();
  const navigate = useNavigate();
  
  const favoriteRecipes = useMemo(() => {
    return recipes.filter(recipe => favorites.includes(recipe.id));
  }, [favorites]);
  
  if (!isAuthenticated) {
    return (
      <div className="min-h-screen bg-background">
        <Navbar />
        <div className="container py-12 text-center">
          <h1 className="text-2xl font-bold mb-4">Login Required</h1>
          <p className="mb-6">Please log in to view your favorites.</p>
          <Button onClick={() => navigate("/login")}>
            Log In
          </Button>
        </div>
      </div>
    );
  }
  
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <main className="container py-8">
        <h1 className="recipe-title text-3xl font-bold mb-2">Your Favorite Recipes</h1>
        <p className="text-muted-foreground mb-8">All your saved recipes in one place</p>
        
        {favoriteRecipes.length === 0 ? (
          <div className="text-center py-12 bg-muted/20 rounded-lg">
            <Heart className="h-12 w-12 mx-auto mb-4 text-muted-foreground/50" />
            <h3 className="text-lg font-medium mb-2">No favorites yet</h3>
            <p className="text-muted-foreground mb-6">
              Start adding recipes to your favorites to see them here
            </p>
            <Button onClick={() => navigate("/")}>
              Browse Recipes
            </Button>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {favoriteRecipes.map(recipe => (
              <RecipeCard key={recipe.id} recipe={recipe} />
            ))}
          </div>
        )}
      </main>
      
      <footer className="border-t py-6 bg-muted/40 mt-auto">
        <div className="container text-center text-sm text-muted-foreground">
          <p>RecipeBudgetHub — Find recipes that match your budget</p>
        </div>
      </footer>
    </div>
  );
}
