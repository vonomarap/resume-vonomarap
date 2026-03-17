export const contactLinks = [
  {
    id: "email",
    label: {
      ru: "Email",
      en: "Email",
    },
    value: "fed.richter@gmail.com",
    href: "mailto:fed.richter@gmail.com",
  },
  {
    id: "telegram",
    label: {
      ru: "Telegram",
      en: "Telegram",
    },
    value: "@unecto",
    href: "https://t.me/unecto",
  },
  {
    id: "github",
    label: {
      ru: "GitHub",
      en: "GitHub",
    },
    value: "github.com/vonomarap",
    href: "https://github.com/vonomarap",
  },
  {
    id: "linkedin",
    label: {
      ru: "LinkedIn",
      en: "LinkedIn",
    },
    value: "linkedin.com/in/vonomarap",
    href: "https://linkedin.com/in/vonomarap",
  },
] as const;

export const contactContent = {
  ru: {
    section: {
      eyebrow: "Контакты",
      title: "Простой способ связаться",
    },
    directTitle: "Связаться напрямую",
    footerRights: "Все права защищены.",
  },
  en: {
    section: {
      eyebrow: "Contact",
      title: "A simple way to get in touch",
    },
    directTitle: "Reach out directly",
    footerSignature:
      "A focused resume site with clean design and direct contact options.",
    footerRights: "All rights reserved.",
  },
} as const;
