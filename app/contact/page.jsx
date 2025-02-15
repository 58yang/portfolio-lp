"use client";

import { useState } from "react";
import { Button } from "../components/ui/button";
import styles from "./page.module.css";

/**
 * お問い合わせページ
 * @returns {JSX.Element} お問い合わせページ
 */
export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    // ここにフォーム送信の処理を実装
    console.log("Form submitted:", formData);
    // フォームをリセット
    setFormData({ name: "", email: "", message: "" });
    alert("お問い合わせを受け付けました。");
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  return (
    <div className={styles.container}>
      <h1>お問い合わせ</h1>
      <div className={styles.formWrapper}>
        <form onSubmit={handleSubmit} className={styles.form}>
          <div className={styles.formGroup}>
            <label htmlFor="name">お名前</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              className={styles.input}
              placeholder="山田 太郎"
            />
          </div>

          <div className={styles.formGroup}>
            <label htmlFor="email">メールアドレス</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className={styles.input}
              placeholder="example@email.com"
            />
          </div>

          <div className={styles.formGroup}>
            <label htmlFor="message">メッセージ</label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
              className={styles.textarea}
              rows={5}
              placeholder="お問い合わせ内容をご記入ください"
            />
          </div>

          <Button type="submit" size="lg" className={styles.submitButton}>
            送信する
          </Button>
        </form>
      </div>
    </div>
  );
}
