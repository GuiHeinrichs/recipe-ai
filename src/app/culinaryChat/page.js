"use client";
import React, { useState, useEffect } from "react";
import ReactMarkdown from "react-markdown";
import Header from "../components/Header";
import PdfGenerator from "../components/PdfGenerator";
import api from "../services/api";
import useRecipeStore from "../stores/recipeDataStore";
import openAIQuestionFormat from "../utils/openAIQuestionFormat";
import { motion, useInView } from "framer-motion";
import { GiCook } from "react-icons/gi";

export default function CulinaryChat() {
  const { recipeData } = useRecipeStore();
  const [messages, setMessages] = useState("Resposta sendo gerada...");

  useEffect(() => {
    const questionBody = openAIQuestionFormat(recipeData);

    api.post("/api/ask", { question: questionBody })
      .then(response => {
        const { answer } = response.data;
        setMessages(answer || "Nenhuma resposta recebida.");
      })
      .catch(error => {
        console.error("Erro na API:", error);
        setMessages("Erro ao carregar resposta.");
      });
  }, [recipeData]);

  const pullUpVariant = {
    initial: { y: 20, opacity: 0 },
    animate: (i) => ({
      y: 0,
      opacity: 1,
      transition: {
        delay: i * 0.05,
      },
    }),
  };

  const ref = React.useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <div className="flex flex-col items-center h-screen w-screen bg-background">
      <Header ShowBurger={true} className="py-0"/>
      <div className="flex items-start mt-4 gap-2">
        <div className="bg-gray-500 p-3 rounded-lg">
          <GiCook className="text-sm md:text-xl" />
        </div>
        <div className="
          border border-l-blue-500 border-l-8 border-gray-500 rounded-md p-6 text-sm shadow-sm 
          max-w-xs md:max-w-7xl w-full break-words whitespace-normal"
        >
          {
            messages.split("\n").map((line, lineIndex) => (
              <div key={lineIndex} className="mb-2">
                {line.split(" ").map((word, wordIndex) => (
                  <motion.span
                    key={wordIndex}
                    ref={ref}
                    variants={pullUpVariant}
                    initial="initial"
                    animate={isInView ? 'animate' : ''}
                    custom={wordIndex}
                    className="text-md tracking-tighter md:leading-[1rem] pr-1"
                  >
                    <ReactMarkdown components={{ p: "span" }}>
                      {word}
                    </ReactMarkdown>
                    {wordIndex < line.split(" ").length - 1 && " "}
                  </motion.span>
                ))}
              </div>
            ))
          }
        </div>
      </div>
      <PdfGenerator />
    </div>
  );
}
