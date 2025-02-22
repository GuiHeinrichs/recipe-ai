"use client";
import React from "react";
import useChatMessages from "../../../hooks/useChatMessages";
import useRecipeStore from "../../stores/recipeDataStore";
import Chat from "../../components/presentation/Chat";

const ChatContainer = () => {
  const { recipeData } = useRecipeStore();
  const { messages, isLoading } = useChatMessages(recipeData);

  return <Chat messages={messages} isLoading={isLoading} />;
};

export default ChatContainer;
