
import { createContext, useContext, useState, ReactNode } from "react";

interface User {
  id: number;
  username: string;
}

interface UserContextType {
  user: User | null;
  isAuthenticated: boolean;
  login: (username: string, password: string) => Promise<boolean>;
  signup: (username: string, password: string) => Promise<boolean>;
  logout: () => void;
  favorites: number[];
  addToFavorites: (recipeId: number) => void;
  removeFromFavorites: (recipeId: number) => void;
  isRecipeFavorite: (recipeId: number) => boolean;
}

const UserContext = createContext<UserContextType | undefined>(undefined);

// Mock users data
const mockUsers = [
  { id: 1, username: "user1", password: "password1" },
  { id: 2, username: "user2", password: "password2" },
];

export const UserProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<User | null>(null);
  const [favorites, setFavorites] = useState<number[]>([]);

  const login = async (username: string, password: string): Promise<boolean> => {
    // Simulate API call with delay
    return new Promise((resolve) => {
      setTimeout(() => {
        const foundUser = mockUsers.find(
          (u) => u.username === username && u.password === password
        );
        
        if (foundUser) {
          setUser({ id: foundUser.id, username: foundUser.username });
          // Load user's favorites (mock data)
          setFavorites([1, 3]);
          resolve(true);
        } else {
          resolve(false);
        }
      }, 500);
    });
  };

  const signup = async (username: string, password: string): Promise<boolean> => {
    // Simulate API call with delay
    return new Promise((resolve) => {
      setTimeout(() => {
        const userExists = mockUsers.some((u) => u.username === username);
        
        if (userExists) {
          resolve(false); // User already exists
        } else {
          // In a real app, we would add the user to the database
          // Here we just simulate successful signup
          setUser({ id: mockUsers.length + 1, username });
          setFavorites([]);
          resolve(true);
        }
      }, 500);
    });
  };

  const logout = () => {
    setUser(null);
    setFavorites([]);
  };

  const addToFavorites = (recipeId: number) => {
    if (!favorites.includes(recipeId)) {
      setFavorites([...favorites, recipeId]);
    }
  };

  const removeFromFavorites = (recipeId: number) => {
    setFavorites(favorites.filter((id) => id !== recipeId));
  };

  const isRecipeFavorite = (recipeId: number) => {
    return favorites.includes(recipeId);
  };

  const value = {
    user,
    isAuthenticated: !!user,
    login,
    signup,
    logout,
    favorites,
    addToFavorites,
    removeFromFavorites,
    isRecipeFavorite,
  };

  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
};

export const useUser = () => {
  const context = useContext(UserContext);
  if (context === undefined) {
    throw new Error("useUser must be used within a UserProvider");
  }
  return context;
};
