export const projectsContent = {
  ru: {
    section: {
      eyebrow: "Проекты",
      title: "Учебные и pet-проекты по backend-разработке",
      description:
        "В этом разделе собраны учебные и pet-проекты. Карточки можно заменить на актуальные проекты по мере обновления портфолио.",
    },
    card: {
      tag: "Учебный / pet project",
      featuresLabel: "Реализовано",
      primaryButton: "GitHub",
      secondaryButton: "Подробнее",
    },
    items: [
      {
        title: "Task Management API",
        description: "REST API для управления задачами и пользователями.",
        stack: ["Java", "Spring Boot", "PostgreSQL", "Spring Data JPA", "Swagger"],
        features: ["CRUD", "Валидация", "DTO", "Интеграция с БД", "Обработка ошибок"],
        githubUrl: "https://github.com/yourusername/task-management-api",
      },
      {
        title: "Auth Service",
        description: "Сервис аутентификации и авторизации для backend-приложений.",
        stack: ["Java", "Spring Boot", "Spring Security", "JWT", "PostgreSQL"],
        features: ["Регистрация", "Логин", "JWT", "Защищенные endpoints"],
        githubUrl: "https://github.com/yourusername/auth-service",
      },
      {
        title: "Booking Service",
        description: "Сервис бронирования с API и базовой бизнес-логикой.",
        stack: ["Java", "Spring Boot", "PostgreSQL", "Docker"],
        features: ["Процесс бронирования", "Статусы", "Связи между сущностями", "Docker setup"],
        githubUrl: "https://github.com/yourusername/booking-service",
      },
    ],
  },
  en: {
    section: {
      eyebrow: "Projects",
      title: "Study and pet backend projects",
      description:
        "This section contains study and pet projects. The cards can be replaced with current projects as the portfolio evolves.",
    },
    card: {
      tag: "Study / pet project",
      featuresLabel: "Implemented",
      primaryButton: "GitHub",
      secondaryButton: "Details",
    },
    items: [
      {
        title: "Task Management API",
        description: "REST API for managing tasks and users.",
        stack: ["Java", "Spring Boot", "PostgreSQL", "Spring Data JPA", "Swagger"],
        features: ["CRUD", "Validation", "DTOs", "Database integration", "Error handling"],
        githubUrl: "https://github.com/yourusername/task-management-api",
      },
      {
        title: "Auth Service",
        description: "Backend authentication and authorization service.",
        stack: ["Java", "Spring Boot", "Spring Security", "JWT", "PostgreSQL"],
        features: ["Registration", "Login", "JWT", "Protected endpoints"],
        githubUrl: "https://github.com/yourusername/auth-service",
      },
      {
        title: "Booking Service",
        description: "Booking service with API and business logic.",
        stack: ["Java", "Spring Boot", "PostgreSQL", "Docker"],
        features: ["Booking flow", "Statuses", "Entity relationships", "Docker setup"],
        githubUrl: "https://github.com/yourusername/booking-service",
      },
    ],
  },
} as const;
