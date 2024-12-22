import React from 'react'

export default function Hero() {
  return (
    <main className="bg-gray-800 flex flex-col justify-center px-6 py-40">
      <section className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        <div className="bg-gray-800 p-6 rounded-lg shadow-md">
          <h2 className="text-xl font-semibold">Entrada de Ingredientes</h2>
          <p className="text-gray-400 mt-2">Insira seus ingredientes por texto, imagem (OCR), ou comando de voz.</p>
        </div>
        <div className="bg-gray-800 p-6 rounded-lg shadow-md">
          <h2 className="text-xl font-semibold">Receitas Personalizadas</h2>
          <p className="text-gray-400 mt-2">Receba sugestões de receitas baseadas nos seus ingredientes e preferências alimentares.</p>
        </div>
        <div className="bg-gray-800 p-6 rounded-lg shadow-md">
          <h2 className="text-xl font-semibold">Modo de Preparo Detalhado</h2>
          <p className="text-gray-400 mt-2">Instruções passo a passo com timers integrados e sugestões de substituição.</p>
        </div>
      </section>

      <section className="mt-12 text-center">
        <h2 className="text-2xl font-bold">Pronto para criar sua próxima receita?</h2>
        <button className="mt-4 bg-purple-600 hover:bg-purple-700 text-white font-medium py-2 px-4 rounded">Comece Agora</button>
      </section>
    </main>
  )
}
