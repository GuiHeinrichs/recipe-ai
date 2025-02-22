"use client";
import React, { useState } from "react";
import { RxHamburgerMenu } from "react-icons/rx";
import { AiOutlineClose } from "react-icons/ai";
import Link from "next/link";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="md:py-6 py-4 w-full border-b border-blue-500 bg-background">
      <div className="flex items-center justify-between md:justify-center px-4">
        {/* Botão de menu hambúrguer - visível apenas em telas menores que md */}
        <button 
          onClick={() => setIsOpen(!isOpen)} 
          className="text-4xl md:hidden"
        >
          {isOpen ? <AiOutlineClose /> : <RxHamburgerMenu />}
        </button>

        {/* Título Centralizado */}
        <Link href="/" passHref>
          <h1 className="md:text-4xl text-2xl font-bold flex-grow text-center cursor-pointer">
            Recipe AI
          </h1>
        </Link>

        {/* Espaço vazio para manter alinhamento - somente quando o menu estiver visível */}
        <div className="w-10 md:hidden"></div>
      </div>

      {/* Descrição */}
      <p className="text-gray-400 mt-2 md:text-md text-sm text-center">
        Crie receitas personalizadas com inteligência artificial.
      </p>

      {/* Menu lateral */}
      <div
        className={`fixed top-0 left-0 h-full w-60 bg-background shadow-lg transform ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        } transition-transform duration-300 ease-in-out md:hidden`}
      >
        <button
          onClick={() => setIsOpen(false)}
          className="absolute top-4 right-4 text-2xl"
        >
          <AiOutlineClose />
        </button>
        <nav className="flex flex-col justify-evenly h-full space-y-4 px-6">
          <div>
            <Link href="/" passHref>
              <span className="block text-2xl font-semibold hover:text-blue-500">
                Home
              </span>
            </Link>
          </div>
          <div>
            <Link href="/personalSetup">
              <span className="block text-2xl font-semibold hover:text-blue-500">
                Geração de nova receita
              </span>
            </Link>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;
