'use client'
import { useState, useEffect } from "react";
import Header from "../components/Header";
import api from "../services/api";
import useRecipeStore from "../stores/recipeDataStore";
import openAIQuestionFormat from "../utils/openAIQuestionFormat";
import { motion } from "framer-motion";

export default function CulinaryChat() {
  const { recipeData } = useRecipeStore();
  const [messages, setMessages] = useState("Carregando...");

  useEffect(() => {
    const questionBody = openAIQuestionFormat(recipeData);

    api.post('/api/ask', { question: questionBody })
      .then(response => {
        const { answer } = response.data;
        setMessages(answer || "Nenhuma resposta recebida.");
      })
      .catch(error => {
        console.error("Erro na API:", error);
        setMessages("Erro ao carregar resposta. Olá, mundo! Este é um teste para verificar espaçamento, vírgulas, pontos finais e outros caracteres especiais: @, #, $, %. Vamos organizar tudo corretamente?DASDASDASdadadadad, dasdasdasddasdadasd");
      });
  }, [recipeData]);

  return (
    <div className="h-screen w-full bg-background">
      <Header />
      <h1 className="text-2xl font-bold text-center mt-4">Culinary Chat</h1>
      <div className="flex flex-wrap items-center justify-center mt-8 gap-2 px-4">
        {messages.split(" ").map((word, index) => (
          <motion.span
            key={index}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{
              duration: 0.25,
              delay: index / 10,
            }}
          >
            {word}
          </motion.span>
        ))}
      </div>
    </div>
  );
}