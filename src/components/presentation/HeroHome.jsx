"use client";
import React from "react";
import Link from "next/link";

const HeroHome = ({ features }) => {
  return (
    <main className="bg-background flex flex-col justify-center px-6 py-12 md:py-40">
      <section className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {features.map((feature, index) => (
          <div key={index} className="bg-[#1e1e1e] p-6 rounded-lg shadow-md cursor-pointer">
            <h2 className="text-xl font-semibold">{feature.title}</h2>
            <p className="text-gray-400 mt-2">{feature.description}</p>
          </div>
        ))}
      </section>

      <section className="md:mt-12 mt-10 text-center">
        <h2 className="text-2xl font-bold mb-6">Pronto para criar sua próxima receita?</h2>
        <Link
          href="/personalSetup"
          className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded"
        >
          Comece Agora
        </Link>
      </section>
    </main>
  );
};
export default HeroHome;
