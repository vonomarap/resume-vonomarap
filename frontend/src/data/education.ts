export const educationContent = {
  ru: {
    section: {
      eyebrow: "Образование",
      title: "Образование и самостоятельное развитие",
      description:
        "Образовательная база и самостоятельное развитие в backend.",
    },
    items: [
      {
        title: "Ростовский колледж связи и информатики (РКСИ)",
        period: "Выпуск 2024",
        description: "Специальность: техник-программист.",
      },
      {
        title: "Самостоятельное развитие в backend",
        period: "Продолжается",
        description:
          "Практика в Java, Spring, SQL и реляционных базах данных через учебные задачи и pet-проекты.",
      },
    ],
    selfStudyTitle: "Фокус самостоятельного обучения",
    selfStudyDescription:
      "Основной прогресс — через закрепление backend-фундамента на небольших практических проектах.",
    selfStudyTopics: ["Java", "Spring Framework", "SQL", "MySQL", "PostgreSQL"],
    learningSection: {
      eyebrow: "Сейчас изучаю",
      title: "Следующий шаг — углублять backend-базу и практику",
      description:
        "Сейчас основной фокус — более глубокое понимание Java, Spring и проектирования данных.",
      roadmapLabel: "Текущий фокус",
      roadmapTitle:
        "Углубляю знания в Java, Spring, SQL и проектировании баз данных",
      roadmapDescription:
        "Упор на углубление Java, развитие в экосистеме Spring, работу с SQL и проектированием БД.",
      badges: ["Java", "Spring", "SQL", "Проектирование БД", "Практика"],
      topics: [
        "Углубление знаний Java",
        "Развитие навыков в экосистеме Spring",
        "Усиление знаний SQL и проектирования баз данных",
        "Расширение практики backend-разработки",
      ],
    },
  },
  en: {
    section: {
      eyebrow: "Education",
      title: "Education and self-study",
      description:
        "Formal education and ongoing self-directed backend practice.",
    },
    items: [
      {
        title: "Rostov College of Communications and Informatics (RKSI)",
        period: "Graduated in 2024",
        description: "Qualification: technician-programmer.",
      },
      {
        title: "Self-study in backend development",
        period: "Ongoing",
        description:
          "Practice in Java, Spring, SQL, and relational databases through study tasks and pet projects.",
      },
    ],
    selfStudyTitle: "Self-study focus areas",
    selfStudyDescription:
      "Progress comes from reinforcing backend fundamentals on small practical projects.",
    selfStudyTopics: ["Java", "Spring Framework", "SQL", "MySQL", "PostgreSQL"],
    learningSection: {
      eyebrow: "Learning Now",
      title: "The next step is deepening the backend foundation and practice",
      description:
        "The current focus is a deeper understanding of Java, Spring, and data design.",
      roadmapLabel: "Current focus",
      roadmapTitle:
        "Deepening Java, Spring, SQL, and database design skills",
      roadmapDescription:
        "Focused on deepening Java, growing within the Spring ecosystem, and improving SQL and database design.",
      badges: ["Java", "Spring", "SQL", "DB design", "Practice"],
      topics: [
        "Deepening Java knowledge",
        "Growing within the Spring ecosystem",
        "Strengthening SQL and database design skills",
        "Expanding backend development practice",
      ],
    },
  },
} as const;
