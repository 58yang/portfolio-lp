import { MessageCircle } from "lucide-react";
import { motion } from "framer-motion";
import styles from "./ChatBot.module.css";

export default function ChatBotButton({ onClick, isOpen }) {
  return (
    <motion.button
      className={styles.chatBotButton}
      onClick={onClick}
      initial={{ scale: 0 }}
      animate={{ scale: 1 }}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
    >
      <MessageCircle size={24} />
      {!isOpen && (
        <motion.div
          className={styles.chatBotTooltip}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
        >
          お気軽にご相談ください
        </motion.div>
      )}
    </motion.button>
  );
}
