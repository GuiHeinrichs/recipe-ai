import React from "react";
import Header from "../layout/Header";
import { TagsInput } from "../ui/TagSelect";
import CheckboxCards from "../ui/CheckboxCards";
import RestrictionsCards from "../ui/RestrictionsCards";
import { GiCook } from "react-icons/gi";
import { motion } from "framer-motion";

const HeroSetup = ({
  ingredients,
  preferences,
  restrictions,
  handleChangeIngredients,
  handleChangePreferences,
  handleChangeRestrictions,
  anyValueEntered,
  handleSearch,
}) => {
  return (
    <div className="flex flex-col items-center justify-center space-y-8 md:px-10 bg-background">
      <Header ShowBurger={true} />
      <div className="w-full flex flex-col items-center justify-center space-y-3 md:px-10 text-sm bg-background">
        <p className="text-xl">Ingredientes disponíveis</p>
        <TagsInput
          name="ingredients"
          value={ingredients}
          onChange={handleChangeIngredients}
          placeHolder="Adicione seus ingredientes"
          className="w-full max-w-xl md:max-w-md"
        />
        <p className="text-xs text-gray-400">Digite o ingrediente e aperte Enter/Tab</p>
      </div>
      <div className="w-full flex flex-col items-center justify-center space-y-3 px-10 text-sm bg-background">
        <p className="text-xl">Preferências alimentares</p>
        <CheckboxCards
          title="Preferências alimentares"
          description="Selecione suas preferências alimentares"
          checked={preferences}
          handleCheckBoxChange={handleChangePreferences}
        />
      </div>
      <div className="w-full flex flex-col items-center justify-center space-y-3 px-10 text-sm bg-background">
        <p className="text-xl">Restrições alimentares</p>
        <RestrictionsCards
          title="Restrições alimentares"
          description="Selecione suas restrições alimentares"
          checked={restrictions}
          handleCheckBoxChange={handleChangeRestrictions}
        />
      </div>
      {anyValueEntered() && (
        <motion.div
          className="pb-8"
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{
            duration: 0.5,
            ease: [0, 0.71, 0.2, 1.01],
          }}
        >
          <button
            className="flex justify-center gap-x-1 bg-blue-500 text-white px-16 py-3 rounded-md hover:bg-blue-600"
            onClick={handleSearch}
          >
            <GiCook className="text-2xl" />
          </button>
        </motion.div>
      )}
    </div>
  );
};

export default HeroSetup;
