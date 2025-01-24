'use client';
import React, { useState } from 'react';
import useMouse from "@react-hook/mouse-position";
import CheckboxCards from './CheckboxCards';
import RestrictionsCards from './RestrictionsCards';
import useRecipeStore from '../stores/recipeDataStore';
import { useRouter } from 'next/navigation';
import { GiCook } from "react-icons/gi";
import { TagsInput } from './TagSelect';
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

    const [cursorText, setCursorText] = useState("");
    const [cursorVariant, setCursorVariant] = useState("default");

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

    const ref = React.useRef(null);
    const mouse = useMouse(ref, {
        enterDelay: 100,
        leaveDelay: 100
    });

    let mouseXPosition = 0;
    let mouseYPosition = 0;

    if (mouse.x !== null) {
        mouseXPosition = mouse.clientX;
    }

    if (mouse.y !== null) {
        mouseYPosition = mouse.clientY;
    }

    const variants = {
        contact: {
            opacity: 1,
            backgroundColor: "transparent",
            color: "#FFFFFF",
            height: 20,
            width: 200,
            fontSize: "1rem",
        }
    };

    const spring = {
        type: "spring",
        stiffness: 500,
        damping: 28
    };

    function contactEnter() {
        setCursorText("Gerar receita");
        setCursorVariant("contact");
    }

    function contactLeave() {
        setCursorText("");
        setCursorVariant("default");
    }

    return (
        <div className='h-screen w-full flex flex-col items-center justify-center space-y-8 px-10 bg-background' ref={ref}>
            <div className='w-full flex flex-col items-center justify-center space-y-3 px-10 text-sm bg-background'>
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
                        initial={{ opacity: 0, scale: 0.5 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{
                            duration: 0.5,
                            ease: [0, 0.71, 0.2, 1.01],
                        }}
                        onMouseEnter={contactEnter}
                        onMouseLeave={contactLeave}
                    >
                        <button
                            className='flex justify-center gap-x-1 bg-blue-500 text-white px-16 py-3 rounded-md hover:bg-blue-600'
                            onClick={handleSearch}
                        >
                            <GiCook className='text-2xl' />
                        </button>
                        <motion.div
                            variants={variants}
                            className="fixed flex justify-end mt-4 text-white text-[1rem]"
                            animate={cursorVariant}
                            transition={spring}
                        >
                            <span className="flex pointer-events-none">{cursorText}</span>
                        </motion.div>
                    </motion.div>
                )
            }
        </div>
    );
}
