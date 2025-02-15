"use client";

import Link from "next/link";
import styles from "./Footer.module.css";

/**
 * フッターコンポーネント
 * @returns {JSX.Element} フッターコンポーネント
 */
export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerContent}>
        <div className={styles.footerLinks}>
          <Link href="/" className={styles.footerLink}>
            HOME
          </Link>
          <Link href="/about" className={styles.footerLink}>
            会社概要
          </Link>
          <Link href="/works" className={styles.footerLink}>
            実績紹介
          </Link>
          <Link href="/services" className={styles.footerLink}>
            サービス
          </Link>
          <Link href="/contact" className={styles.footerLink}>
            お問い合わせ
          </Link>
        </div>
        <div className={styles.copyright}>
          © {new Date().getFullYear()} DRONE COMPANY. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
