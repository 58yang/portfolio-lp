"use client";

import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";
import { supabase } from "@/app/lib/supabase";
import styles from "./ChatBot.module.css";
import ChatBotMessages from "./ChatBotMessages";
import ChatBotInput from "./ChatBotInput";

export default function ChatBotWindow({ isOpen, onClose }) {
  const [sessionId, setSessionId] = useState(null);
  const [messages, setMessages] = useState([
    {
      role: "assistant",
      content:
        "こんにちは！ドローンサービスについて、どのようなことでもお気軽にご質問ください。",
    },
  ]);
  const [isLoading, setIsLoading] = useState(false);

  // セッションIDの初期化
  useEffect(() => {
    const initSession = async () => {
      try {
        // セッションIDの取得または生成を/api経由で行う
        const response = await fetch("/api/chat/session", {
          method: "POST",
        });
        const { sessionId } = await response.json();
        setSessionId(sessionId);
        localStorage.setItem("chatSessionId", sessionId);
      } catch (error) {
        console.error("Error initializing session:", error);
      }
    };

    const savedSessionId = localStorage.getItem("chatSessionId");
    if (savedSessionId) {
      setSessionId(savedSessionId);
    } else {
      initSession();
    }
  }, []);

  // メッセージの読み込み
  useEffect(() => {
    // セッションIDがない場合は何もしない
    if (!sessionId || !isOpen) return;

    const loadMessages = async () => {
      try {
        const { data, error } = await supabase
          .from("chat_messages")
          .select()
          .eq("session_id", sessionId)
          .order("created_at", { ascending: true });

        if (error) throw error;

        if (data.length === 0) {
          // 初期メッセージを設定
          const initialMessage = {
            role: "assistant",
            content:
              "こんにちは！ドローンサービスについて、どのようなことでもお気軽にご質問ください。",
          };
          setMessages([initialMessage]);
          // 初期メッセージをSupabaseに保存
          await supabase.from("chat_messages").insert({
            session_id: sessionId,
            ...initialMessage,
          });
        } else {
          setMessages(data.map(({ role, content }) => ({ role, content })));
        }
      } catch (error) {
        console.error("Error loading messages:", error);
      }
    };

    loadMessages();
  }, [isOpen, sessionId]);

  const handleSendMessage = async (message) => {
    if (!message.trim() || !sessionId) return;

    // ユーザーメッセージを追加
    const newMessage = { role: "user", content: message };
    setMessages((prev) => [...prev, newMessage]);
    setIsLoading(true);

    try {
      // ユーザーメッセージをSupabaseに保存
      const { error: insertError } = await supabase
        .from("chat_messages")
        .insert([
          {
            session_id: sessionId,
            ...newMessage,
          },
        ]);

      if (insertError) {
        console.error("Error inserting user message:", insertError);
        throw insertError;
      }

      // メッセージ履歴を準備
      const messageHistory = [
        ...messages.slice(-5), // 直近5メッセージのみを含める
        newMessage,
      ];

      // APIルートを呼び出し
      const response = await fetch("/api/chat", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ messages: messageHistory }),
      });

      if (!response.ok) {
        throw new Error("API request failed");
      }

      const data = await response.json();

      // アシスタントの応答を追加
      const assistantMessage = {
        role: "assistant",
        content: data.content,
      };
      setMessages((prev) => [...prev, assistantMessage]);

      // アシスタントの応答をSupabaseに保存
      const { error: assistantError } = await supabase
        .from("chat_messages")
        .insert([
          {
            session_id: sessionId,
            ...assistantMessage,
          },
        ]);

      if (assistantError) {
        console.error("Error inserting assistant message:", assistantError);
        throw assistantError;
      }
    } catch (error) {
      console.error("Detailed error:", error);
      // エラーメッセージを表示
      const errorMessage = {
        role: "assistant",
        content:
          "申し訳ありません。エラーが発生しました。しばらく経ってからもう一度お試しください。",
      };
      setMessages((prev) => [...prev, errorMessage]);

      // エラーメッセージをSupabaseに保存
      await supabase.from("chat_messages").insert([
        {
          session_id: sessionId,
          ...errorMessage,
        },
      ]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className={styles.chatBotWindow}
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 100 }}
        >
          <div className={styles.chatBotHeader}>
            <h3>ドローンサービスサポート</h3>
            <button onClick={onClose} className={styles.closeButton}>
              <X size={20} />
            </button>
          </div>
          <ChatBotMessages messages={messages} isLoading={isLoading} />
          <ChatBotInput
            onSendMessage={handleSendMessage}
            isLoading={isLoading}
          />
        </motion.div>
      )}
    </AnimatePresence>
  );
}
