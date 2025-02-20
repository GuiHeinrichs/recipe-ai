'use client';
import React, { useState } from 'react';

//icons
import { GiCook } from "react-icons/gi";

//components
import { useRouter } from 'next/navigation';
import { TagsInput } from './TagSelect';
import Header from './Header';
import useRecipeStore from '../stores/recipeDataStore';
import CheckboxCards from './CheckboxCards';
import RestrictionsCards from './RestrictionsCards';

//libs
import { motion } from "framer-motion";

export default function HeroSetup() {
    const router = useRouter();
    
    const [ingredients, setIngredients] = useState([]);
    const [preferences, setPreferences] = useState({
        'vegetariano': false,
        'vegano': false,
        'sem-opcoes': false
    });
    const [restrictions, setRestrictions] = useState([{
        'sem-gluten': false,
        'sem-lactose': false
    }]);
    
    const { setRecipeData } = useRecipeStore();
    
    const handleChangePreferences = (data) => {
        setPreferences(data);
    };
    
    const handleChangeIngredients = (data) => {
        setIngredients(data);
    };
    
    const handleChangeRestrictions = (data) => {
        setRestrictions(data);
    };
    
    const handleSearch = () => {
        const recipeData = { ingredients, preferences, restrictions };
        setRecipeData(recipeData); // Salva os dados na store
        router.push("/culinaryChat");
    };
    
    const anyValueEntered = () => {
        return ingredients.length > 0 ||
        preferences['vegetariano'] || preferences['vegano'] || preferences['sem-opcoes'] ||
        restrictions['sem-gluten'] || restrictions['sem-lactose'];
    };
    
    return (
        <div className='flex flex-col items-center justify-center space-y-8 md:px-10 bg-background'>
            <Header ShowBurger={true} />
            <div className='w-full flex flex-col items-center justify-center space-y-3 md:px-10 text-sm bg-background'>
                <p className="text-xl">Ingredientes disponíveis</p>
                <TagsInput
                    name="ingredients"
                    value={ingredients}
                    onChange={handleChangeIngredients}
                    placeHolder="Adicione seus ingredientes"
                    className="w-full max-w-xl md:max-w-md"
                />
                <p className='text-xs text-gray-400'>Digite o ingrediente e aperte Enter/Tab</p>
            </div>
            <div className='w-full flex flex-col items-center justify-center space-y-3 px-10 text-sm bg-background'>
                <p className="text-xl">Preferências alimentares</p>
                <CheckboxCards
                    title="Preferências alimentares"
                    description="Selecione suas preferências alimentares"
                    checked={preferences}
                    handleCheckBoxChange={handleChangePreferences}
                />
            </div>
            <div className='w-full flex flex-col items-center justify-center space-y-3 px-10 text-sm bg-background'>
                <p className="text-xl">Restrições alimentares</p>
                <RestrictionsCards
                    title="Restrições alimentares"
                    description="Selecione suas restrições alimentares"
                    checked={restrictions}
                    handleCheckBoxChange={handleChangeRestrictions}
                />
            </div>
            {
                anyValueEntered() && (
                    <motion.div
                        className='pb-8'
                        initial={{ opacity: 0, scale: 0.5 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{
                            duration: 0.5,
                            ease: [0, 0.71, 0.2, 1.01],
                        }}
                    >
                        <button
                            className='flex justify-center gap-x-1 bg-blue-500 text-white px-16 py-3 rounded-md hover:bg-blue-600'
                            onClick={handleSearch}
                        >
                            <GiCook className='text-2xl' />
                        </button>
                    </motion.div>
                )
            }
        </div>
    );
}
