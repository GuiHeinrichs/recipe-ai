import { useState, useEffect } from "react";
import api from "../lib/services/api";
import openAIQuestionFormat from "../utils/openAIQuestionFormat";

const useChatMessages = (recipeData) => {
  const [messages, setMessages] = useState(null);
  const [isLoading, setLoading] = useState(false);

  useEffect(() => {
    if (!recipeData) return;

    const fetchMessages = async () => {
      setLoading(true);
      try {
        const questionBody = openAIQuestionFormat(recipeData);
        const response = await api.post("/api/ask", { question: questionBody });
        setMessages(response.data.answer || "Receita sendo gerada...");
      } catch (error) {
        console.error("Erro na API:", error);
        setMessages("Ocorreu um erro ao gerar a sua receita, volte e tente novamente.");
      } finally {
        setLoading(false);
      }
    };

    fetchMessages();
  }, [recipeData]);

  return { messages, isLoading };
};

export default useChatMessages;
