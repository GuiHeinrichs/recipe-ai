import React from 'react';
import { PiHamburgerDuotone } from "react-icons/pi";

const Header = () => {
  return (
    <header className="py-6 text-center border-b border-blue-500 bg-background">
      <div className="flex justify-center space-x-2 items-center">
        <h1 className="text-4xl font-bold">Recipe AI</h1>
        <PiHamburgerDuotone className="text-4xl" />
      </div>
      <p className="text-gray-400 mt-2">Crie receitas personalizadas com inteligência artificial.</p>
    </header>
  );
};

export default Header;
