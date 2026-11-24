import { PORTFOLIO_DATA } from "./portfolio";
import type { CollabItem, SkillCategory } from "./portfolio";
import { PORTFOLIO_ES } from "./portfolio.es";
import { PARTNER_TYPE_ES, toLang } from "../i18n/ui";

export type Portfolio = typeof PORTFOLIO_DATA;

/** Contenido del portafolio en el idioma pedido (inglés por defecto). */
export function getPortfolio(lang: string | undefined | null): Portfolio {
  if (toLang(lang) !== "es") return PORTFOLIO_DATA;

  const tr = (text: string) => PORTFOLIO_ES.skillText[text] ?? text;
  const base = PORTFOLIO_DATA;

  const skills: SkillCategory[] = base.skills.map((cat) => ({
    ...cat,
    category: tr(cat.category),
    skills: cat.skills.map((s) => ({
      ...s,
      name: tr(s.name),
      experience: tr(s.experience),
      tag: tr(s.tag),
    })),
  }));

  const collabs: CollabItem[] = base.collabs.map((c) => {
    const t = PORTFOLIO_ES.collabs[c.id];
    if (!t) return c;
    const { snippetTitles, ...texts } = t;
    return {
      ...c,
      ...texts,
      snippets: c.snippets?.map((sn, i) => ({
        ...sn,
        title: snippetTitles?.[i] ?? sn.title,
      })),
    };
  });

  return {
    ...base,
    developer: {
      ...base.developer,
      ...PORTFOLIO_ES.developer,
      specs: { ...base.developer.specs, ...PORTFOLIO_ES.developer.specs },
    },
    presentation: { ...base.presentation, ...PORTFOLIO_ES.presentation },
    skills,
    collabs,
    commands: base.commands.map((c) => ({
      ...c,
      desc: PORTFOLIO_ES.commands[c.name]?.desc ?? c.desc,
      usage: PORTFOLIO_ES.commands[c.name]?.usage ?? c.usage.replace(" [or ", " [o "),
    })),
  };
}

/** Etiqueta visible de partnerType en el idioma pedido. */
export function partnerTypeLabel(type: string, lang: string | undefined | null) {
  return toLang(lang) === "es" ? (PARTNER_TYPE_ES[type] ?? type) : type;
}
