"use client";

import Image from "next/image";
import styles from "./page.module.css";

/**
 * 実績紹介ページ
 * @returns {JSX.Element} 実績紹介ページ
 */
export default function Works() {
  const works = [
    {
      id: 1,
      title: "プロフェッショナルな空撮・映像制作",
      description:
        "4K高画質での空撮から編集まで一貫して対応。観光地や不動産、イベントなど、目的に応じた映像制作を提供しています。ドローンならではの迫力ある空撮映像で、魅力的な作品に仕上げます。",
      image: "/images/pic4.jpg",
    },
    {
      id: 2,
      title: "ビル外壁点検",
      description:
        "高層ビルの外壁点検をドローンで実施。高所作業のリスクを軽減しながら、効率的かつ安全に建物の状態を確認。AI技術との組み合わせにより、損傷箇所を正確に特定し、詳細な点検レポートを提供しました。",
      image: "/images/pic5.jpg",
    },
    {
      id: 3,
      title: "建設現場の3Dモデル化",
      description:
        "建設現場の進捗管理のため、定期的な空撮と3Dモデル生成を実施。高精度な3Dデータにより、工事の進捗を可視化し、効率的なプロジェクト管理を実現。関係者間での情報共有もスムーズに行えるようになりました。",
      image: "/images/pic3.jpg",
    },
  ];

  return (
    <div className={styles.container}>
      <h1>実績紹介</h1>

      {/* YouTube動画セクション */}
      <section className={styles.videoSection}>
        <h2>ドローン空撮映像</h2>
        <div className={styles.videoWrapper}>
          <iframe
            width="100%"
            height="100%"
            src="https://www.youtube.com/embed/yx_KJ6YQFD8"
            title="ドローン空撮映像"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            className={styles.video}
          ></iframe>
        </div>
        <p className={styles.videoDescription}>
          当社が手がけた様々なドローン撮影の一例です。
          4K画質での撮影により、鮮明な映像を提供しています。
          空からの視点で、新しい魅力や価値を引き出します。
        </p>
      </section>

      <div className={styles.grid}>
        {works.map((work) => (
          <div key={work.id} className={styles.card}>
            <div className={styles.imageWrapper}>
              <Image
                src={work.image}
                alt={work.title}
                width={800}
                height={600}
                className={styles.image}
              />
            </div>
            <div className={styles.content}>
              <h2>{work.title}</h2>
              <p>{work.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
