"use client";

import { useState } from "react";
import ChatBotButton from "./ChatBotButton";
import ChatBotWindow from "./ChatBotWindow";

export default function ChatBot() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleChat = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <ChatBotButton onClick={toggleChat} isOpen={isOpen} />
      <ChatBotWindow isOpen={isOpen} onClose={() => setIsOpen(false)} />
    </>
  );
}
