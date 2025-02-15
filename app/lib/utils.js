import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";

/**
 * クラス名を結合するユーティリティ関数
 * @param {...(string | undefined | null | boolean | {[key: string]: boolean})} inputs - 結合するクラス名
 * @returns {string} 結合されたクラス名
 */
export function cn(...inputs) {
  return twMerge(clsx(inputs));
}
