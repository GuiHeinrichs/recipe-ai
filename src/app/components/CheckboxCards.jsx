import { LuWheatOff, LuVegan, LuBeef } from "react-icons/lu";
import { FaLeaf } from "react-icons/fa";

export default function CheckboxCards({ title, description, checked, handleCheckBoxChange }) {
    const handleChange = (id) => {
        const newCheckedState = {
            ...checked,
            [id]: !checked[id],
        };
        handleCheckBoxChange(newCheckedState);
    };

    return (
        <div className='flex flex-col items-center justify-center'>
            <ul className="grid w-full gap-6 md:grid-cols-3">
                <li>
                    <input
                        type="checkbox"
                        id="vegetariano-option"
                        className="hidden peer"
                        checked={checked["vegetariano-option"]}
                        onChange={() => handleChange("vegetariano-option")}
                    />
                    <label htmlFor="vegetariano-option" className="inline-flex items-center justify-between w-full p-5 text-gray-500 bg-white border-2 border-gray-200 rounded-lg cursor-pointer dark:hover:text-gray-300 dark:border-gray-700 peer-checked:border-blue-600 hover:text-gray-600 dark:peer-checked:text-gray-300 peer-checked:text-gray-600 hover:bg-gray-50 dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700">
                        <div className="block">
                            <FaLeaf className="mb-2 text-green-400 w-7 h-7" />
                            <div className="w-full text-lg font-semibold">Vegetariano</div>
                            <div className="w-full text-sm">Não contém carne. Pode conter ovos e leite.</div>
                        </div>
                    </label>
                </li>
                <li>
                    <input
                        type="checkbox"
                        id="vegano-option"
                        className="hidden peer"
                        checked={checked["vegano-option"]}
                        onChange={() => handleChange("vegano-option")}
                    />
                    <label htmlFor="vegano-option" className="inline-flex items-center justify-between w-full p-5 text-gray-500 bg-white border-2 border-gray-200 rounded-lg cursor-pointer dark:hover:text-gray-300 dark:border-gray-700 peer-checked:border-blue-600 hover:text-gray-600 dark:peer-checked:text-gray-300 peer-checked:text-gray-600 hover:bg-gray-50 dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700">
                        <div className="block">
                            <LuVegan className="mb-2 text-green-400 w-7 h-7" />
                            <div className="w-full text-lg font-semibold">Vegano</div>
                            <div className="w-full text-sm">Não contém derivados de animais.</div>
                        </div>
                    </label>
                </li>
                <li>
                    <input
                        type="checkbox"
                        id="sem-opcoes-option"
                        className="hidden peer"
                        checked={checked["sem-opcoes-option"]}
                        onChange={() => handleChange("sem-opcoes-option")}
                    />
                    <label htmlFor="sem-opcoes-option" className="inline-flex items-center justify-between w-full p-5 text-gray-500 bg-white border-2 border-gray-200 rounded-lg cursor-pointer dark:hover:text-gray-300 dark:border-gray-700 peer-checked:border-blue-600 hover:text-gray-600 dark:peer-checked:text-gray-300 peer-checked:text-gray-600 hover:bg-gray-50 dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700">
                        <div className="block">
                            <LuBeef className="mb-2 text-red-500 w-7 h-7" />
                            <div className="w-full text-lg font-semibold">Nenhuma das opções</div>
                            <div className="w-full text-sm">Não se encaixa em nenhuma das opções.</div>
                        </div>
                    </label>
                </li>
            </ul>
        </div>
    );
}
