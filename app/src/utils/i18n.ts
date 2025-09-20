export const LANGS = {
  ja: "日本語",
  en: "English",
} as const;

type Lang = keyof typeof LANGS;
export type Languages = Record<Lang, string>;

export function useTranslations(lang: Lang) {
  return function t(languages: Languages): string {
    return languages[lang];
  };
}
