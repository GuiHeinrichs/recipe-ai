import { LuWheatOff, LuMilkOff } from "react-icons/lu";

export default function RestrictionsCards({
  title,
  description,
  checked = {},
  handleCheckBoxChange,
}) {
  const handleChange = (id) => {
    const newCheckedState = {
      ...checked,
      [id]: !checked[id],
    };
    handleCheckBoxChange(newCheckedState);
  };

  return (
    <div className="flex flex-col items-center justify-center">
      <ul className="grid w-full gap-6 md:grid-cols-2">
        <li>
          <input
            type="checkbox"
            id="sem-gluten"
            className="hidden peer"
            checked={checked["sem-gluten"] || false}
            onChange={() => handleChange("sem-gluten")}
          />
          <label
            htmlFor="sem-gluten"
            className="inline-flex items-center justify-between w-full p-5 text-gray-500 bg-white border-2 border-neutral-800 rounded-lg cursor-pointer dark:hover:text-gray-300 dark:border-neutral-800 peer-checked:border-[#82b29a] hover:text-gray-600 dark:peer-checked:text-gray-300 peer-checked:text-gray-600 hover:bg-gray-50 dark:text-gray-400 dark:bg-[#1e1e1e] dark:hover:bg-[#1e1e1e]"
          >
            <div className="block">
              <LuWheatOff className="mb-2 text-yellow-500 w-7 h-7" />
              <div className="w-full text-lg font-semibold">Sem glúten</div>
              <div className="w-full text-sm">Não contém glúten. Nada que derive do trigo.</div>
            </div>
          </label>
        </li>
        <li>
          <input
            type="checkbox"
            id="sem-lactose"
            className="hidden peer"
            checked={checked["sem-lactose"] || false}
            onChange={() => handleChange("sem-lactose")}
          />
          <label
            htmlFor="sem-lactose"
            className="inline-flex items-center justify-between w-full p-5 text-gray-500 bg-white border-2 border-neutral-800 rounded-lg cursor-pointer dark:hover:text-gray-300 dark:border-neutral-800 peer-checked:border-[#82b29a] hover:text-gray-600 dark:peer-checked:text-gray-300 peer-checked:text-gray-600 hover:bg-gray-50 dark:text-gray-400 dark:bg-[#1e1e1e] dark:hover:bg-[#1e1e1e]"
          >
            <div className="block">
              <LuMilkOff className="mb-2 text-white w-7 h-7" />
              <div className="w-full text-lg font-semibold">Sem lactose</div>
              <div className="w-full text-sm">
                Não contém leite. Nada que derive de leite, queijo, etc.
              </div>
            </div>
          </label>
        </li>
      </ul>
    </div>
  );
}
