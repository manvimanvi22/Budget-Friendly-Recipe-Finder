
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { Recipe, getBudgetCategory } from "@/data/recipes";
import { useUser } from "@/contexts/UserContext";
import { Heart } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { cn } from "@/lib/utils";
import { Button } from "./ui/button";

interface RecipeCardProps {
  recipe: Recipe;
}

export function RecipeCard({ recipe }: RecipeCardProps) {
  const { isAuthenticated, isRecipeFavorite, addToFavorites, removeFromFavorites } = useUser();
  const navigate = useNavigate();
  
  const budgetCategory = getBudgetCategory(recipe.price);
  const isFavorite = isRecipeFavorite(recipe.id);
  
  const handleFavoriteToggle = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (isFavorite) {
      removeFromFavorites(recipe.id);
    } else {
      addToFavorites(recipe.id);
    }
  };

  return (
    <Card 
      className="recipe-card overflow-hidden h-full flex flex-col" 
      onClick={() => navigate(`/recipe/${recipe.id}`)}
    >
      <div className="relative aspect-video overflow-hidden">
        <img 
          src={recipe.imageUrl} 
          alt={recipe.name}
          className="object-cover w-full h-full transition-transform hover:scale-105"
        />
        <div className="absolute top-2 right-2">
          <Badge className={`bg-budget-${budgetCategory}`}>
            ${recipe.price.toFixed(2)}
          </Badge>
        </div>
      </div>
      
      <CardHeader className="p-4 pb-2">
        <div className="flex justify-between items-start">
          <h3 className="recipe-title text-lg font-medium line-clamp-1">{recipe.name}</h3>
          {isAuthenticated && (
            <Button
              variant="ghost"
              size="icon"
              className="h-8 w-8 rounded-full"
              onClick={handleFavoriteToggle}
            >
              <Heart 
                className={cn(
                  "h-5 w-5", 
                  isFavorite ? "fill-destructive text-destructive" : "text-muted-foreground"
                )} 
              />
              <span className="sr-only">
                {isFavorite ? "Remove from favorites" : "Add to favorites"}
              </span>
            </Button>
          )}
        </div>
        <Badge variant="outline" className="w-fit text-xs">
          {recipe.category}
        </Badge>
      </CardHeader>
      
      <CardContent className="px-4 py-2 flex-grow">
        <p className="text-muted-foreground text-sm line-clamp-2">
          {recipe.description}
        </p>
      </CardContent>
      
      <CardFooter className="p-4 pt-2 text-xs text-muted-foreground">
        <div className="flex justify-between w-full">
          <span>Prep: {recipe.prepTime}m</span>
          <span>Cook: {recipe.cookTime}m</span>
          <span>Serves: {recipe.servings}</span>
        </div>
      </CardFooter>
    </Card>
  );
}
