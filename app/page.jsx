import Link from "next/link";
import Image from "next/image";
import styles from "./page.module.css";
import { Button } from "./components/ui/button";

/**
 * トップページ
 * @returns {JSX.Element} トップページ
 */
export default function Home() {
  return (
    <div className={styles.container}>
      <section className={styles.hero}>
        <div className={styles.heroBackground}>
          <Image
            src="/images/top1.png"
            alt="ドローンサービスのヒーロー画像"
            fill
            priority
            quality={100}
            sizes="100vw"
            style={{
              objectFit: "cover",
              objectPosition: "center 30%",
            }}
            className={styles.heroImage}
          />
          <div className={styles.heroOverlay} />
        </div>
        <div className={styles.heroContent}>
          <h1>
            革新的な視点で
            <br />
            未来を切り開く
          </h1>
          <p className={styles.heroText}>
            最新のドローンテクノロジーを駆使し、空からの新しい可能性を提供。
            <br />
            建設、点検、映像制作など、あらゆるビジネスシーンで革新的なソリューションをお届けします。
          </p>
          <Link href="/contact">
            <Button size="lg" variant="default" className={styles.heroButton}>
              無料相談はこちら
            </Button>
          </Link>
        </div>
      </section>

      <section className={styles.features}>
        <h2>サービス内容</h2>
        <div className={styles.featureGrid}>
          <div className={styles.featureCard}>
            <div className={styles.featureImageWrapper}>
              <Image
                src="/images/pic1.jpg"
                alt="ドローン撮影"
                width={400}
                height={300}
                className={styles.featureImage}
              />
            </div>
            <div className={styles.featureContent}>
              <h3>ドローン撮影</h3>
              <p>
                4K高画質での空撮サービスを提供。イベント、不動産、観光スポットなど、
                あらゆるシーンで印象的な映像を実現します。独自の撮影技術で、
                見る人の心に残る作品を創り出します。
              </p>
            </div>
          </div>
          <div className={styles.featureCard}>
            <div className={styles.featureImageWrapper}>
              <Image
                src="/images/pic2.jpg"
                alt="点検サービス"
                width={400}
                height={300}
                className={styles.featureImage}
              />
            </div>
            <div className={styles.featureContent}>
              <h3>点検サービス</h3>
              <p>
                建物や設備の点検をドローンで効率的に実施。高所や危険箇所も
                安全に調査が可能です。AI解析との組み合わせで、
                より詳細な点検レポートを提供します。
              </p>
            </div>
          </div>
          <div className={styles.featureCard}>
            <div className={styles.featureImageWrapper}>
              <Image
                src="/images/pic3.jpg"
                alt="3Dモデル生成"
                width={400}
                height={300}
                className={styles.featureImage}
              />
            </div>
            <div className={styles.featureContent}>
              <h3>3Dモデル生成</h3>
              <p>
                ドローンで撮影したデータから高精度な3Dモデルを生成。
                建設現場の進捗管理や文化財のデジタルアーカイブなど、
                幅広い用途に対応します。
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className={styles.cta}>
        <h2>お気軽にお問い合わせください</h2>
        <p>
          プロジェクトについてのご相談、お見積りのご依頼など、
          まずはお気軽にお問い合わせください。
          専門スタッフが丁寧にご対応させていただきます。
        </p>
        <Link href="/contact">
          <Button variant="default" size="lg" className={styles.ctaButton}>
            お問い合わせ
          </Button>
        </Link>
      </section>
    </div>
  );
}
