"use client";
import { FcGoogle } from "react-icons/fc";
import Image from "next/image";

const Register = ({ fullName, email, password, setFullName, setEmail, setPassword }) => {
  return (
    <div className="flex md:flex-row flex-col h-screen">
      <div className="flex flex-col items-center justify-center md:w-1/2 bg-background h-screen">
        <p className="md:text-4xl text-3xl mt-28 md:mt-0 md:mb-2 font-bold w-[20.8rem] md:w-[34rem]">
          Registrar-se
        </p>
        <p className="text-xs font-thin mb-4 w-[20.8rem] md:w-[34rem]">
          Crie uma conta para continuar!
        </p>
        <div className="flex justify-end mb-4 space-x-1 font-extralight text-sm w-[20.8rem] md:w-[34rem]">
          <p>Já tem uma conta?</p>
          <a className="text-blue-600 underline" href="/">
            Logar-se
          </a>
        </div>
        {/* Inputs */}
        <div className="flex flex-col w-[20.8rem] md:w-[34rem]">
          <label htmlFor="fullName">Nome Completo</label>
          <input
            className="bg-zinc-900 text-sm border-zinc-600 text-white border rounded p-2"
            id="fullName"
            type="text"
            placeholder="Digite seu nome completo"
            value={fullName}
            onChange={(e) => setFullName(e.target.value)}
          />
        </div>
        <div className="flex flex-col mt-2 w-[20.8rem] md:w-[34rem]">
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
        <div className="flex flex-col mt-2 w-[20.8rem] md:w-[34rem]">
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
        <div className="flex justify-center mt-6 md:mt-8 w-[20.8rem] md:w-[34rem]">
          <button
            type="button"
            className="flex items-center whitespace-nowrap gap-x-2 text-md md:text-md bg-blue-600 
            md:px-[14.2rem] px-[7.4rem] py-3 rounded-xl border border-gray-500 hover:bg-blue-700"
          >
            Registrar-se
          </button>
        </div>

        {/* Divider */}
        <div className="flex items-center my-6 md:my-8 w-[20.8rem] md:w-[34rem]">
          <div className="flex-grow border-t border-zinc-600"></div>
          <span className="px-1 text-gray-500 text-sm">Ou</span>
          <div className="flex-grow border-t border-zinc-600"></div>
        </div>
        <div className="flex md:flex-row mt-0 flex-col justify-center gap-y-2 md:gap-x-4">
          <button
            type="button"
            className="flex items-center md:mb-0 mb-8 gap-x-1 text-sm bg-zinc-900 md:px-[11.5rem] px-20 py-2 rounded-xl border border-zinc-600 hover:bg-zinc-800"
          >
            <FcGoogle size={22} />
            Acessar com o Google
          </button>
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
};

export default Register;
