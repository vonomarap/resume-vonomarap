export const projectsContent = {
  ru: {
    section: {
      eyebrow: "Проекты",
      title: "Backend pet-проект",
      description:
        "Здесь оставлен один актуальный backend-проект с реальным API, документацией и готовой инфраструктурой для локального запуска.",
    },
    card: {
      tag: "Актуальный backend project",
      featuresLabel: "Реализовано",
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
    ],
  },
  en: {
    section: {
      eyebrow: "Projects",
      title: "Current backend pet project",
      description:
        "This section now highlights a single current backend project with a working API, documentation, and local development infrastructure.",
    },
    card: {
      tag: "Current backend project",
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
    ],
  },
} as const;
