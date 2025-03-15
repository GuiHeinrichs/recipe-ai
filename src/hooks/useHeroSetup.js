import { useState } from "react";
import { useRouter } from "next/navigation";
import useRecipeStore from "../stores/recipeDataStore";

const useHeroSetup = () => {
  const router = useRouter();

  const [ingredients, setIngredients] = useState([]);
  const [preferences, setPreferences] = useState({
    vegetariano: false,
    vegano: false,
    "sem-opcoes": false,
  });
  const [restrictions, setRestrictions] = useState([
    {
      "sem-gluten": false,
      "sem-lactose": false,
    },
  ]);

  const handleChangeIngredients = (data) => {
    setIngredients(data);
  };
  const handleChangePreferences = (data) => {
    setPreferences(data);
  };
  const handleChangeRestrictions = (data) => {
    setRestrictions(data);
  };

  const handleSearch = () => {
    const recipeData = { ingredients, preferences, restrictions };
    setRecipeData(recipeData);
    router.push("/culinaryChat");
  };

  const anyValueEntered = () => {
    return (
      ingredients.length > 0 ||
      preferences["vegetariano"] ||
      preferences["vegano"] ||
      preferences["sem-opcoes"] ||
      restrictions["sem-gluten"] ||
      restrictions["sem-lactose"]
    );
  };

  const { setRecipeData } = useRecipeStore();

  return {
    ingredients,
    preferences,
    restrictions,
    handleChangeIngredients,
    handleChangePreferences,
    handleChangeRestrictions,
    handleSearch,
    anyValueEntered,
  };
};

export default useHeroSetup;
