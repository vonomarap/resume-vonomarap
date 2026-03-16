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
      description:
        "Секция оставляет прямые контакты и аккуратную форму, которая валидирует данные в браузере и подготавливает письмо в почтовом клиенте.",
    },
    directTitle: "Связаться напрямую",
    form: {
      nameLabel: "Имя",
      namePlaceholder: "Ваше имя",
      emailLabel: "Email",
      emailPlaceholder: "your@email.com",
      messageLabel: "Сообщение",
      messagePlaceholder: "Напишите о вакансии, проекте или вопросе.",
      description:
        "Форма проверяет данные в браузере и открывает готовый черновик письма.",
      successMessage: "Открываю почтовый клиент с подготовленным письмом.",
      submitLabel: "Подготовить письмо",
      validation: {
        name: "Введите имя.",
        email: "Введите корректный email.",
        message: "Введите не менее 10 символов.",
      },
      mailto: {
        subjectPrefix: "Сообщение с сайта от",
        nameLabel: "Имя",
        emailLabel: "Email",
      },
    },
    footerSignature:
      "Сайт-резюме с централизованным контентом, аккуратным frontend-слоем и сдержанной подачей junior backend-профиля.",
    footerRights: "Все права защищены.",
  },
  en: {
    section: {
      eyebrow: "Contact",
      title: "A simple way to get in touch",
      description:
        "This section keeps direct contact links and a lightweight form that validates in the browser and prepares a message in the user's email client.",
    },
    directTitle: "Reach out directly",
    form: {
      nameLabel: "Name",
      namePlaceholder: "Your name",
      emailLabel: "Email",
      emailPlaceholder: "your@email.com",
      messageLabel: "Message",
      messagePlaceholder: "Tell me about your opportunity, project, or question.",
      description:
        "The form validates in the browser and opens a pre-filled email draft.",
      successMessage: "Opening your email client with a pre-filled message.",
      submitLabel: "Prepare Email",
      validation: {
        name: "Please enter your name.",
        email: "Please enter a valid email address.",
        message: "Please enter at least 10 characters.",
      },
      mailto: {
        subjectPrefix: "Portfolio contact from",
        nameLabel: "Name",
        emailLabel: "Email",
      },
    },
    footerSignature:
      "Built as a focused resume site with centralized content files, direct contact options, and a clean engineering-style UI.",
    footerRights: "All rights reserved.",
  },
} as const;
