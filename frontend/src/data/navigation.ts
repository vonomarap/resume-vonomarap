export const observableSectionIds = [
  "home",
  "about",
  "skills",
  "projects",
  "education",
  "contact",
] as const;

export const navigationItems = {
  ru: [
    { label: "Обо мне", href: "#about" },
    { label: "Навыки", href: "#skills" },
    { label: "Проекты", href: "#projects" },
    { label: "Образование", href: "#education" },
    { label: "Контакты", href: "#contact" },
  ],
  en: [
    { label: "About", href: "#about" },
    { label: "Skills", href: "#skills" },
    { label: "Projects", href: "#projects" },
    { label: "Education", href: "#education" },
    { label: "Contact", href: "#contact" },
  ],
} as const;

export const headerCopy = {
  ru: {
    roleLabel: "Java / Spring Backend",
    contactButton: "Связаться",
    openMenuLabel: "Открыть меню",
    mobileTitle: "Навигация",
    mobileDescription: "Перейти к разделам резюме и портфолио.",
  },
  en: {
    roleLabel: "Java / Spring Backend",
    contactButton: "Contact Me",
    openMenuLabel: "Open menu",
    mobileTitle: "Navigate",
    mobileDescription: "Explore sections of the resume website.",
  },
} as const;
