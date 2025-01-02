import { LuWheatOff, LuMilkOff } from "react-icons/lu";
import { useEffect } from "react";

export default function RestrictionsCards({ title, description, checked, onChange }) {
    return (
        <div className='flex flex-col items-center justify-center'>
            <ul className="grid w-full gap-6 md:grid-cols-2">
                <li>
                    <input type="checkbox" id="sem-gluten-option" value="" className="hidden peer"/>
                    <label htmlFor="sem-gluten-option" className="inline-flex items-center justify-between w-full p-5 text-gray-500 bg-white border-2 border-gray-200 rounded-lg cursor-pointer dark:hover:text-gray-300 dark:border-gray-700 peer-checked:border-blue-600 hover:text-gray-600 dark:peer-checked:text-gray-300 peer-checked:text-gray-600 hover:bg-gray-50 dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700">
                        <div className="block">
                            <LuWheatOff className="mb-2 text-yellow-500 w-7 h-7" />
                            <div className="w-full text-lg font-semibold">Sem glúten</div>
                            <div className="w-full text-sm">Não contém glúten. Nada que derive do trigo.</div>
                        </div>
                    </label>
                </li>
                <li>
                    <input type="checkbox" id="sem-lactose-option" value="" className="hidden peer"/>
                    <label htmlFor="sem-lactose-option" className="inline-flex items-center justify-between w-full p-5 text-gray-500 bg-white border-2 border-gray-200 rounded-lg cursor-pointer dark:hover:text-gray-300 dark:border-gray-700 peer-checked:border-blue-600 hover:text-gray-600 dark:peer-checked:text-gray-300 peer-checked:text-gray-600 hover:bg-gray-50 dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700">
                        <div className="block">
                            <LuMilkOff className="mb-2 text-white w-7 h-7" />
                            <div className="w-full text-lg font-semibold">Sem lactose</div>
                            <div className="w-full text-sm">Não contém leite. Nada que derive de leite, queijo, etc.</div>
                        </div>
                    </label>
                </li>
            </ul>
        </div>
    );
}