export const educationContent = {
  ru: {
    section: {
      eyebrow: "Образование",
      title: "Образование и самостоятельное развитие",
      description:
        "Раздел показывает реальную образовательную базу и то, как backend-навыки усиливаются через самостоятельную практику.",
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
      "Основной прогресс сейчас приходит через закрепление базы в backend-разработке и регулярную практику на небольших проектах.",
    selfStudyTopics: ["Java", "Spring Framework", "SQL", "MySQL", "PostgreSQL"],
    learningSection: {
      eyebrow: "Сейчас изучаю",
      title: "Следующий шаг — углублять backend-базу и практику",
      description:
        "Сейчас основной фокус — более глубокое понимание Java, Spring и проектирования данных.",
      roadmapLabel: "Текущий фокус",
      roadmapTitle:
        "Развитие backend-мышления через системную практику и более уверенную работу с базовыми технологиями",
      roadmapDescription:
        "Сейчас упор идет на углубление Java, развитие в экосистеме Spring, улучшение работы с SQL и проектированием БД, а также на накопление реальной backend-практики.",
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
        "This section keeps the real educational foundation visible and shows how backend skills are being strengthened through self-directed practice.",
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
      "Most current progress comes from reinforcing backend fundamentals and applying them regularly in small practical projects.",
    selfStudyTopics: ["Java", "Spring Framework", "SQL", "MySQL", "PostgreSQL"],
    learningSection: {
      eyebrow: "Learning Now",
      title: "The next step is deepening the backend foundation and practice",
      description:
        "The current focus is a deeper understanding of Java, Spring, and data design.",
      roadmapLabel: "Current focus",
      roadmapTitle:
        "Building stronger backend habits through steady practice and deeper work with core technologies",
      roadmapDescription:
        "The emphasis is on deepening Java, growing inside the Spring ecosystem, improving SQL and database design skills, and expanding real backend practice.",
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
