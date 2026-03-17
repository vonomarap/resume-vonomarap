export const skillsContent = {
  ru: {
    section: {
      eyebrow: "Навыки",
      title: "Текущий стек и направления развития",
      description:
        "Инструменты, которые уже использую, и направления, которые продолжаю развивать.",
    },
    categoriesTitle: "Текущий стек",
    categories: [
      {
        title: "Backend",
        items: ["Java", "Spring Framework", "SOLID", "ООП"],
      },
      {
        title: "Базы данных",
        items: ["SQL", "MySQL", "PostgreSQL"],
      },
      {
        title: "Языки программирования",
        items: ["Java", "Python"],
      },
      {
        title: "Инструменты",
        items: ["Git", "GitHub", "Codex", "Antigravity", "Maven", "Emdash"],
      },
    ],
    learningTitle: "Продолжаю усиливать",
    learningDescription:
      "Фокус — backend-фундамент: Java, Spring, SQL и практическая разработка.",
    learning: [
      "Углубление знаний Java",
      "Развитие навыков в экосистеме Spring",
      "SQL и проектирование реляционных баз данных",
      "Расширение практики backend-разработки",
      "RAG",
    ],
  },
  en: {
    section: {
      eyebrow: "Skills",
      title: "Current stack and growth areas",
      description:
        "Tools already in use and areas still being developed.",
    },
    categoriesTitle: "Current stack",
    categories: [
      {
        title: "Backend",
        items: ["Java", "Spring Framework", "SOLID", "OOP"],
      },
      {
        title: "Databases",
        items: ["SQL", "MySQL", "PostgreSQL"],
      },
      {
        title: "Programming Languages",
        items: ["Java", "Python"],
      },
      {
        title: "Tools",
        items: ["Git", "GitHub", "Codex", "Antigravity", "Maven", "Emdash"],
      },
    ],
    learningTitle: "Currently strengthening",
    learningDescription:
      "Focused on backend fundamentals: Java, Spring, SQL, and hands-on development.",
    learning: [
      "Deepening Java knowledge",
      "Growing within the Spring ecosystem",
      "SQL and relational database design",
      "Expanding backend development practice",
      "RAG",
    ],
  },
} as const;
