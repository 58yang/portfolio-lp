"use client";

import Link from "next/link";
import { Button } from "../components/ui/button";
import styles from "./page.module.css";

/**
 * サービス紹介ページ
 * @returns {JSX.Element} サービス紹介ページ
 */
export default function Services() {
  const services = [
    {
      id: 1,
      title: "ドローン撮影",
      description:
        "最新のドローン機材を使用し、4K画質での空撮サービスを提供します。イベントや不動産、観光スポットなど、様々なシーンでの撮影に対応いたします。",
      features: [
        "4K高画質撮影",
        "360度パノラマ撮影",
        "タイムラプス撮影",
        "リアルタイム映像配信",
      ],
    },
    {
      id: 2,
      title: "点検サービス",
      description:
        "ドローンを使用した建物や設備の点検サービスを提供します。高所や危険な場所の点検も、安全かつ効率的に実施いたします。",
      features: [
        "建物外壁点検",
        "ソーラーパネル点検",
        "橋梁点検",
        "赤外線カメラによる異常検知",
      ],
    },
    {
      id: 3,
      title: "3Dモデル生成",
      description:
        "ドローンで撮影したデータから、高精度な3Dモデルを生成します。建設現場の進捗管理や、文化財のデジタルアーカイブなどに活用できます。",
      features: [
        "高精度3Dモデリング",
        "地形測量",
        "土量計算",
        "オルソ画像作成",
      ],
    },
  ];

  return (
    <div className={styles.container}>
      <h1>サービス紹介</h1>
      <div className={styles.grid}>
        {services.map((service) => (
          <div key={service.id} className={styles.card}>
            <h2>{service.title}</h2>
            <p className={styles.description}>{service.description}</p>
            <div className={styles.features}>
              <h3>主な機能</h3>
              <ul>
                {service.features.map((feature, index) => (
                  <li key={index}>{feature}</li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
      <div className={styles.cta}>
        <h2>お気軽にお問い合わせください</h2>
        <p>
          サービスについての詳細な説明や、お見積りのご依頼を承っております。
        </p>
        <Link href="/contact">
          <Button size="lg">お問い合わせ</Button>
        </Link>
      </div>
    </div>
  );
}
