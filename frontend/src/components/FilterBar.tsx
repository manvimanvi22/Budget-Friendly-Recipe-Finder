
import { useState } from "react";
import { Slider } from "@/components/ui/slider";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { 
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue
} from "@/components/ui/select";
import { Search, SlidersHorizontal, X } from "lucide-react";
import { cn } from "@/lib/utils";

interface FilterBarProps {
  maxBudget: number;
  setMaxBudget: (value: number) => void;
  categories: string[];
  selectedCategory: string;
  setSelectedCategory: (category: string) => void;
  searchTerm: string;
  setSearchTerm: (term: string) => void;
  className?: string;
}

export function FilterBar({
  maxBudget,
  setMaxBudget,
  categories,
  selectedCategory,
  setSelectedCategory,
  searchTerm,
  setSearchTerm,
  className
}: FilterBarProps) {
  const [isFilterExpanded, setIsFilterExpanded] = useState(false);
  
  const clearFilters = () => {
    setMaxBudget(20);
    setSelectedCategory("all");
    setSearchTerm("");
  };
  
  return (
    <div className={cn("w-full", className)}>
      <div className="flex items-center gap-2 mb-4">
        <div className="relative flex-grow">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
          <Input
            type="text"
            placeholder="Search recipes..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="pl-9 pr-4"
          />
          {searchTerm && (
            <button
              className="absolute right-3 top-1/2 transform -translate-y-1/2"
              onClick={() => setSearchTerm("")}
            >
              <X className="h-4 w-4 text-muted-foreground" />
            </button>
          )}
        </div>
        
        <Button 
          variant={isFilterExpanded ? "default" : "outline"}
          className="flex items-center gap-2"
          onClick={() => setIsFilterExpanded(!isFilterExpanded)}
        >
          <SlidersHorizontal className="h-4 w-4" />
          <span className="hidden sm:inline">Filters</span>
        </Button>
      </div>
      
      {isFilterExpanded && (
        <div className="bg-card border rounded-md p-4 mb-6 animate-in fade-in slide-in-from-top-5 duration-300">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div>
              <Label htmlFor="max-budget" className="mb-2 block text-sm">
                Max Budget: ${maxBudget.toFixed(2)}
              </Label>
              <Slider
                id="max-budget"
                min={5}
                max={20}
                step={1}
                value={[maxBudget]}
                onValueChange={(values) => setMaxBudget(values[0])}
                className="py-4"
              />
            </div>
            
            <div>
              <Label htmlFor="category" className="mb-2 block text-sm">
                Category
              </Label>
              <Select 
                value={selectedCategory} 
                onValueChange={setSelectedCategory}
              >
                <SelectTrigger id="category">
                  <SelectValue placeholder="Select category" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Categories</SelectItem>
                  {categories.map((category) => (
                    <SelectItem key={category} value={category.toLowerCase()}>
                      {category}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
            
            <div className="flex items-end">
              <Button 
                variant="outline" 
                className="w-full"
                onClick={clearFilters}
              >
                Clear Filters
              </Button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
