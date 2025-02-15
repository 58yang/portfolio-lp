import { useState } from "react";
import { Send } from "lucide-react";
import styles from "./ChatBot.module.css";

export default function ChatBotInput({ onSendMessage, isLoading }) {
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!message.trim() || isLoading) return;

    onSendMessage(message);
    setMessage("");
  };

  return (
    <form onSubmit={handleSubmit} className={styles.chatBotInput}>
      <input
        type="text"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        placeholder="メッセージを入力..."
        disabled={isLoading}
      />
      <button type="submit" disabled={!message.trim() || isLoading}>
        <Send size={20} />
      </button>
    </form>
  );
}
