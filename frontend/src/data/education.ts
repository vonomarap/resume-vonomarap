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
  },
} as const;
