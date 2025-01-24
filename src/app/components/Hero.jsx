'use client'
import React from 'react'
import { useNavigate } from 'react-router-dom';

export default function Hero() {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/personalSetup');
  };

  return (
    <main className="bg-background flex flex-col justify-center px-6 py-40">
      <section className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        <div className="bg-[#1e1e1e] p-6 rounded-lg shadow-md cursor-pointer">
          <h2 className="text-xl font-semibold">Entrada de ingredientes e preferências alimentares</h2>
          <p className="text-gray-400 mt-2">Insira seus ingredientes por texto/tags, imagem (OCR), ou comando de voz.</p>
        </div>
        <div className="bg-[#1e1e1e] p-6 rounded-lg shadow-md cursor-pointer">
          <h2 className="text-xl font-semibold">Receitas Personalizadas</h2>
          <p className="text-gray-400 mt-2">Receba sugestões de receitas baseadas nos seus ingredientes e preferências alimentares.</p>
        </div>
        <div className="bg-[#1e1e1e] p-6 rounded-lg shadow-md cursor-pointer">
          <h2 className="text-xl font-semibold">Modo de Preparo Detalhado</h2>
          <p className="text-gray-400 mt-2">Instruções passo a passo com timers integrados e sugestões de substituição.</p>
        </div>
      </section>

      <section className="mt-12 text-center">
        <h2 className="text-2xl font-bold">Pronto para criar sua próxima receita?</h2>
        <button onClick={handleClick} className="mt-4 bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded">Comece Agora</button>
      </section>
    </main>
  )
}
