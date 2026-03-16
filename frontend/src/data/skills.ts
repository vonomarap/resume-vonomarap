export const skillsContent = {
  ru: {
    section: {
      eyebrow: "Навыки",
      title: "Текущий стек и направления развития",
      description:
        "Секция показывает реальные навыки, которые уже использую, и аккуратно отделяет направления, которые продолжаю усиливать.",
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
        items: ["Git"],
      },
    ],
    learningTitle: "Продолжаю усиливать",
    learningDescription:
      "Фокус развития остается на backend-фундаменте: Java, Spring, SQL и практической разработке.",
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
        "This section shows the tools I already use and clearly separates the areas I am still strengthening.",
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
        items: ["Git"],
      },
    ],
    learningTitle: "Currently strengthening",
    learningDescription:
      "The current learning path stays focused on backend fundamentals: Java, Spring, SQL, and practical development.",
    learning: [
      "Deepening Java knowledge",
      "Growing within the Spring ecosystem",
      "SQL and relational database design",
      "Expanding backend development practice",
      "RAG",
    ],
  },
} as const;
