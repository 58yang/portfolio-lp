import Link from "next/link";
import Image from "next/image";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuList,
} from "@radix-ui/react-navigation-menu";
import styles from "./Header.module.css";

/**
 * ヘッダーコンポーネント
 * @returns {JSX.Element} ヘッダーコンポーネント
 */
export default function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.headerContent}>
        <Link href="/" className={styles.logo}>
          <Image
            src="/images/logo1.png"
            alt="Drone Service"
            width={200}
            height={44}
            priority
          />
          <div className={styles.companyName}>
            <span className={styles.companyNameMain}>DRONE</span>
            <span className={styles.companyNameSub}>COMPANY</span>
          </div>
        </Link>
        <NavigationMenu>
          <NavigationMenuList className={styles.nav}>
            <NavigationMenuItem>
              <Link href="/" className={styles.navLink}>
                HOME
              </Link>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <Link href="/about" className={styles.navLink}>
                会社概要
              </Link>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <Link href="/works" className={styles.navLink}>
                実績紹介
              </Link>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <Link href="/services" className={styles.navLink}>
                サービス
              </Link>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <Link href="/contact" className={styles.navLink}>
                お問い合わせ
              </Link>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>
      </div>
    </header>
  );
}
