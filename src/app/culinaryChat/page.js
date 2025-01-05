'use client'
import { useState, useEffect } from "react";
import Header from "../components/Header";
import api from "../services/api";
import useRecipeStore from "../stores/recipeDataStore";
import openAIQuestionFormat from "../utils/openAIQuestionFormat";

export default function CulinaryChat() {
  const { recipeData } = useRecipeStore();
  const [messages, setMessages] = useState([]);

   useEffect(() => {
    const questionBody = openAIQuestionFormat(recipeData);

    api.post('/api/ask', {question: questionBody}).then(response => {
      setMessages(response.data);
    });
   }, []);

  return (
    <div className="h-screen w-full bg-gray-800">
        <Header />
        <h1>Culinary Chat</h1>
        <div className="flex flex-col items-center justify-center">
          {Object.entries(messages).map(([key, value], index) => (
            <div key={index} className="flex flex-col items-center justify-center">
              <p>{key}: {value}</p>
            </div>
          ))}
        </div>
    </div>
  );
}