'use client';
import React, { useState } from 'react';
import { TagsInput } from './TagSelect';
import CheckboxCards from './CheckboxCards';
import RestrictionsCards from './RestrictionsCards';
import useRecipeStore from '../stores/recipeDataStore';
import { useRouter } from 'next/navigation'

export default function HeroSetup() {
    const router = useRouter();
    const [ingredients, setIngredients] = useState([]);
    const [preferences, setPreferences] = useState({
        'vegetariano': false,
        'vegano': false,
        'sem-opcoes': false
    });
    const [restrictions, setRestrictions] = useState([]);
    const { setRecipeData } = useRecipeStore();

    const handleChangePreferences = (data) => {
        setPreferences(data);
        console.log(preferences);
    };

    const handleChangeIngredients = (data) => {
        setIngredients(data);
        console.log(ingredients);
    };

    const handleSearch = () => {
        const recipeData = { ingredients, preferences, restrictions };
        setRecipeData(recipeData); // Salva os dados na store
        router.push("/culinaryChat");
    };

    return (
        <div className='h-screen w-full flex flex-col items-center justify-center space-y-8 px-10 bg-gray-800'>
            <div className='w-full flex flex-col items-center justify-center space-y-3 px-10 text-sm bg-gray-800'>
                <p className="text-xl">Ingredientes disponíveis</p>
                <TagsInput
                    name="ingredients"
                    value={ingredients}
                    onChange={handleChangeIngredients}
                    placeHolder="Adicione seus ingredientes"
                    className="w-full max-w-md"
                />
                <p className='text-xs text-gray-400'>Digite o ingrediente e aperte Enter/Tab</p>
            </div>
            <div className='w-full flex flex-col items-center justify-center space-y-3 px-10 text-sm bg-gray-800'>
                <p className="text-xl">Preferências alimentares</p>
                <CheckboxCards
                    title="Preferências alimentares"
                    description="Selecione suas preferências alimentares"
                    checked={preferences}
                    handleCheckBoxChange={handleChangePreferences}
                />
            </div>
            <div className='w-full flex flex-col items-center justify-center space-y-3 px-10 text-sm bg-gray-800'>
                <p className="text-xl">Restrições alimentares</p>
                <RestrictionsCards
                    title="Restrições alimentares"
                    description="Selecione suas restrições alimentares"
                    checked={restrictions}
                    onChange={setRestrictions}
                />
            </div>
            {
                ingredients.length > 0 || preferences['vegetariano-option'] || preferences['vegano-option'] || preferences['sem-opcoes-option'] || restrictions.length ? (
                    <button className='bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600' onClick={handleSearch}>
                        Buscar 
                    </button>
                ) : null
            }
        </div>
    );
}