"use client";
import useHeroSetup from "../../../hooks/useHeroSetup";
import HeroSetup from "../presentation/HeroSetup";

const HeroSetupContainer = () => {
  const {
    ingredients,
    preferences,
    restrictions,
    handleChangeIngredients,
    handleChangePreferences,
    handleChangeRestrictions,
    anyValueEntered,
    handleSearch,
  } = useHeroSetup();

  return (
    <HeroSetup
      ingredients={ingredients}
      preferences={preferences}
      restrictions={restrictions}
      handleChangeIngredients={handleChangeIngredients}
      handleChangePreferences={handleChangePreferences}
      handleChangeRestrictions={handleChangeRestrictions}
      anyValueEntered={anyValueEntered}
      handleSearch={handleSearch}
    />
  );
};

export default HeroSetupContainer;
