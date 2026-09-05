import { createContext, useContext } from 'react';
import type { Lang } from './i18n';

interface LangCtx {
  lang: Lang;
  setLang: (l: Lang) => void;
}

export const LangContext = createContext<LangCtx>({ lang: 'en', setLang: () => {} });
export const useLang = () => useContext(LangContext);
