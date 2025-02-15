"use client";

import styles from "./page.module.css";

/**
 * 会社概要ページ
 * @returns {JSX.Element} 会社概要ページ
 */
export default function About() {
  const companyInfo = [
    {
      title: "会社名",
      content: "DRONE COMPANY",
    },
    {
      title: "設立",
      content: "2020年4月",
    },
    {
      title: "所在地",
      content: "〒430-0933 静岡県浜松市中区鍛冶町100-1",
    },
    {
      title: "代表者",
      content: "山田 太郎",
    },
    {
      title: "事業内容",
      content: [
        "ドローンによる空撮・映像制作",
        "建築物・インフラの点検サービス",
        "3Dモデリング・測量サービス",
        "ドローンパイロット育成",
        "各種空撮許可申請代行",
      ],
    },
    {
      title: "資格・許認可",
      content: [
        "国土交通省認定 無人航空機操縦技能",
        "JUIDA無人航空機操縦技能証明",
        "DJI認定パイロット",
      ],
    },
  ];

  return (
    <div className={styles.container}>
      <h1>会社概要</h1>

      <section className={styles.aboutSection}>
        <h2>企業理念</h2>
        <p className={styles.philosophy}>
          「空からの新しい価値創造」をミッションに、
          <br />
          最新のドローンテクノロジーで社会に貢献します。
        </p>
        <p className={styles.description}>
          私たちは、ドローン技術の可能性を追求し、お客様のニーズに合わせた革新的なソリューションを提供します。
          安全性と品質を最優先に、環境に配慮しながら、産業の発展に貢献してまいります。
        </p>
      </section>

      <section className={styles.infoSection}>
        <h2>会社情報</h2>
        <div className={styles.infoGrid}>
          {companyInfo.map((info, index) => (
            <div key={index} className={styles.infoItem}>
              <h3>{info.title}</h3>
              {Array.isArray(info.content) ? (
                <ul>
                  {info.content.map((item, i) => (
                    <li key={i}>{item}</li>
                  ))}
                </ul>
              ) : (
                <p>{info.content}</p>
              )}
            </div>
          ))}
        </div>
      </section>

      <section className={styles.accessSection}>
        <h2>アクセス</h2>
        <div className={styles.accessContainer}>
          <div className={styles.accessInfoWrapper}>
            <div className={styles.accessInfo}>
              <p>
                <span className={styles.accessLabel}>所在地：</span>
                〒430-0933 静岡県浜松市中区鍛冶町100-1
              </p>
              <p>
                <span className={styles.accessLabel}>最寄り駅：</span>
                JR東海道本線「浜松駅」より徒歩5分
              </p>
              <p className={styles.accessDetail}>
                浜松駅北口を出て、モール街を直進。
                <br />
                鍛冶町交差点を右折、徒歩1分。
                <br />
                1階に本社受付がございます。
              </p>
            </div>
          </div>
          <div className={styles.mapWrapper}>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3279.809733456565!2d137.72288397675072!3d34.70392458042946!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x601ade7b6986fe55%3A0x77df8eed44c3723!2z44CSNDMwLTA5MzMg6Z2Z5bKh55yM5rWc5p2-5biC5Lit5Yy65YGl5YWG55S6!5e0!3m2!1sja!2sjp!4v1710900567159!5m2!1sja!2sjp"
              width="100%"
              height="400"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="DRONE COMPANY所在地"
            ></iframe>
          </div>
        </div>
      </section>
    </div>
  );
}
