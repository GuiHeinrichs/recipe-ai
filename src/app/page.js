"use client";
import { useState } from "react";

import Footer from "../app/components/layout/Footer";
import { FcGoogle } from "react-icons/fc";
import { FaGithub } from "react-icons/fa6";
import Image from "next/image";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [rememberMe, setRememberMe] = useState(false);

  return (
    <div className="flex md:flex-row flex-col h-screen">
      <div className="flex flex-col items-center justify-center md:w-1/2 bg-background h-screen">
        <p className="md:text-2xl text-2xl mt-28 md:mt-0 md:mb-8 font-bold w-[20.8rem] md:w-[34rem]">
          Bem vindo de volta!
        </p>
        <div className="flex md:flex-row mt-6 md:mt-0 flex-col justify-center gap-y-2 md:gap-x-4">
          <button
            type="button"
            className="flex items-center gap-x-1 text-sm bg-zinc-900 md:px-12 px-20 py-2 rounded-xl border border-zinc-600 hover:bg-zinc-800"
          >
            <FcGoogle size={22} />
            Acessar com o Google
          </button>
          <button
            type="button"
            className="flex items-center gap-x-1 text-sm bg-zinc-900 md:px-12 px-20 py-2 rounded-xl border border-zinc-600 hover:bg-zinc-800"
          >
            <FaGithub size={22} />
            Acessar com GitHub
          </button>
        </div>
        {/* Divider */}
        <div className="flex items-center my-3 w-[20.8rem] md:w-[34rem]">
          <div className="flex-grow border-t border-zinc-600"></div>
          <span className="px-1 text-gray-500 text-sm">Ou</span>
          <div className="flex-grow border-t border-zinc-600"></div>
        </div>
        {/* Inputs */}
        <div className="flex flex-col w-[20.8rem] md:w-[34rem]">
          <label htmlFor="email">E-mail</label>
          <input
            className="bg-zinc-900 text-sm border-zinc-600 text-white border rounded p-2"
            id="email"
            type="email"
            placeholder="Digite seu e-mail"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="flex flex-col mt-4 w-[20.8rem] md:w-[34rem]">
          <label htmlFor="password">Senha</label>
          <input
            className="text-white text-sm bg-zinc-900 border-zinc-600 border rounded p-2"
            id="password"
            type="password"
            placeholder="&#9679;&#9679;&#9679;&#9679;&#9679;&#9679;&#9679;&#9679;"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <div className="flex justify-between mt-4 w-[20.8rem] md:w-[34rem]">
          <div className="flex items-center gap-x-2">
            <label htmlFor="remember-me" className="flex items-center gap-x-2 cursor-pointer">
              <input
                id="remember-me"
                type="checkbox"
                checked={rememberMe}
                onChange={() => setRememberMe(!rememberMe)}
                className="peer hidden"
              />
              <div className="w-5 h-5 border-2 border-zinc-600 rounded-md bg-background flex items-center justify-center transition-all peer-checked:bg-blue-600 peer-checked:border-blue-600">
                {rememberMe && (
                  <svg
                    className="w-4 h-4 text-white"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M20.25 5.75a.75.75 0 010 1.06l-10.5 10.5a.75.75 0 01-1.06 0l-4.5-4.5a.75.75 0 011.06-1.06L9 15.19l9.97-9.97a.75.75 0 011.06 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                )}
              </div>
              <span className="text-sm font-medium text-gray-900 dark:text-gray-300">
                Manter Login
              </span>
            </label>
          </div>
          <div>
            <a href="#" className="text-blue-600 text-sm md:hover:underline">
              Esqueceu a senha?
            </a>
          </div>
        </div>
        <div className="flex justify-center mt-8 md:mt-10 w-[20.8rem] md:w-[34rem]">
          <button
            type="button"
            className="flex items-center whitespace-nowrap gap-x-2 text-md md:text-md bg-blue-600 
            md:px-[12.3rem] px-24 py-3 rounded-xl border border-gray-500 hover:bg-blue-700"
          >
            Entrar na sua conta
          </button>
        </div>
        <div className="flex justify-start space-x-2 font-extralight text-sm mt-4 md:mb-0 mb-4 w-[20.8rem] md:w-[34rem]">
          <p>Não tem uma conta?</p>
          <a className="text-blue-600 hover:underline" href="#">
            Registre-se
          </a>
        </div>
      </div>
      <div className="h-screen flex flex-col gap-6 justify-center items-start md:w-1/2 p-16 bg-blue-600">
        <div className="flex items-center gap-x-4">
          <Image src="/logo.png" alt="Descrição da imagem" width={40} height={50} />
          <p className="text-3xl font-bold">Recipe AI</p>
        </div>
        <div className="flex justify-center items-center text-5xl font-extrabold gap-x-4">
          Recipe AI é uma plataforma interativa que combina inteligência artificial e culinária.
        </div>
        <div className="flex justify-center items-center text-lg font-extralight gap-x-4">
          O objetivo é ajudar os usuários a criar receitas personalizadas com base nos ingredientes
          disponíveis, considerando preferências alimentares, restrições e histórico de uso.
        </div>
      </div>
    </div>
  );
}
