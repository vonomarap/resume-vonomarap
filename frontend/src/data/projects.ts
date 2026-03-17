export const projectsContent = {
  ru: {
    section: {
      eyebrow: "Проекты",
      title: "Отобранные проекты",
      description:
        "Здесь собраны backend, fullstack, admin, mobile и SQL-проекты, которые лучше всего показывают мой текущий стек и подход к разработке.",
    },
    card: {
      tag: "Featured project",
      featuresLabel: "Что реализовано",
      primaryButton: "GitHub",
      secondaryButton: "Подробнее",
    },
    items: [
      {
        title: "Auth Service",
        description:
          "Сервис аутентификации и авторизации с регистрацией, логином, JWT access token, refresh token и защищёнными endpoint-ами.",
        stack: ["Java", "Spring Boot", "Spring Security", "JWT", "PostgreSQL"],
        features: [
          "Регистрация и логин",
          "JWT access + refresh token flow",
          "Роли и защищённые endpoints",
          "BCrypt, DTO и глобальные ошибки",
        ],
        githubUrl: "https://github.com/vonomarap/auth-service",
        detailsUrl: "https://github.com/vonomarap/auth-service#readme",
      },
      {
        title: "kanokna",
        description:
          "Fullstack-проект на Spring Boot и Angular, который показывает связку backend-логики и отдельного web-клиента.",
        stack: ["Java", "Spring Boot", "Angular", "REST API", "SQL"],
        features: [
          "Связка backend + web client",
          "REST-слой и прикладная логика",
          "Fullstack-структура в одном проекте",
          "Продуктовый public repository",
        ],
        githubUrl: "https://github.com/vonomarap/kanokna",
      },
      {
        title: "admin-web",
        description:
          "Админ-панель на TypeScript и Next.js со структурой app/components/lib, отдельным UI-слоем и конфигами деплоя.",
        stack: ["TypeScript", "Next.js", "Firebase", "Admin UI"],
        features: [
          "Отдельный admin frontend",
          "App Router структура",
          "Компонентный UI-слой",
          "Конфиги окружения и деплоя",
        ],
        githubUrl: "https://github.com/vonomarap/admin-web",
      },
      {
        title: "mobile-app",
        description:
          "Публичный TypeScript mobile-клиент, который расширяет портфолио в сторону клиентской архитектуры и мобильных интерфейсов.",
        stack: ["TypeScript", "Mobile", "Client UI"],
        features: [
          "Отдельный mobile repository",
          "TypeScript codebase",
          "Клиентская часть под мобильный сценарий",
          "Расширение mixed portfolio",
        ],
        githubUrl: "https://github.com/vonomarap/mobile-app",
      },
      {
        title: "SQL Learning Lab",
        description:
          "Структурированный SQL-репозиторий со скриптами, заметками, упражнениями и архивами PostgreSQL, MySQL и Oracle материалов.",
        stack: ["SQL", "PostgreSQL", "MySQL", "Oracle", "Docs"],
        features: [
          "SQL scripts и заметки",
          "PostgreSQL dumps для практики",
          "MySQL и Oracle archive blocks",
          "Структурированный learning repository",
        ],
        githubUrl: "https://github.com/vonomarap/sql-learning-lab",
        detailsUrl: "https://github.com/vonomarap/sql-learning-lab#readme",
      },
    ],
  },
  en: {
    section: {
      eyebrow: "Projects",
      title: "Selected projects",
      description:
        "This section highlights the backend, fullstack, admin, mobile, and SQL projects that best represent my current stack and engineering approach.",
    },
    card: {
      tag: "Featured project",
      featuresLabel: "Implemented",
      primaryButton: "GitHub",
      secondaryButton: "Details",
    },
    items: [
      {
        title: "Auth Service",
        description:
          "Authentication and authorization service with registration, login, JWT access tokens, refresh tokens, and protected endpoints.",
        stack: ["Java", "Spring Boot", "Spring Security", "JWT", "PostgreSQL"],
        features: [
          "Registration and login",
          "JWT access + refresh token flow",
          "Role-based protected endpoints",
          "BCrypt, DTOs, and global errors",
        ],
        githubUrl: "https://github.com/vonomarap/auth-service",
        detailsUrl: "https://github.com/vonomarap/auth-service#readme",
      },
      {
        title: "kanokna",
        description:
          "Fullstack project built with Spring Boot and Angular that shows the combination of backend logic and a separate web client.",
        stack: ["Java", "Spring Boot", "Angular", "REST API", "SQL"],
        features: [
          "Backend + web client setup",
          "REST layer and business logic",
          "Fullstack project structure",
          "Product-oriented public repository",
        ],
        githubUrl: "https://github.com/vonomarap/kanokna",
      },
      {
        title: "admin-web",
        description:
          "TypeScript and Next.js admin panel with app/components/lib structure, a dedicated UI layer, and deployment configuration.",
        stack: ["TypeScript", "Next.js", "Firebase", "Admin UI"],
        features: [
          "Dedicated admin frontend",
          "App Router structure",
          "Component-based UI layer",
          "Environment and deployment configs",
        ],
        githubUrl: "https://github.com/vonomarap/admin-web",
      },
      {
        title: "mobile-app",
        description:
          "Public TypeScript mobile client that broadens the portfolio toward client architecture and mobile user interfaces.",
        stack: ["TypeScript", "Mobile", "Client UI"],
        features: [
          "Standalone mobile repository",
          "TypeScript codebase",
          "Client-side mobile implementation",
          "Mixed-portfolio expansion",
        ],
        githubUrl: "https://github.com/vonomarap/mobile-app",
      },
      {
        title: "SQL Learning Lab",
        description:
          "Structured SQL repository with scripts, notes, exercises, and PostgreSQL, MySQL, and Oracle learning archives.",
        stack: ["SQL", "PostgreSQL", "MySQL", "Oracle", "Docs"],
        features: [
          "SQL scripts and notes",
          "PostgreSQL practice dumps",
          "MySQL and Oracle archive blocks",
          "Structured learning repository",
        ],
        githubUrl: "https://github.com/vonomarap/sql-learning-lab",
        detailsUrl: "https://github.com/vonomarap/sql-learning-lab#readme",
      },
    ],
  },
} as const;
