export const projectsContent = {
  ru: {
    section: {
      eyebrow: "Проекты",
      title: "Учебные и pet-проекты по backend-разработке",
      description:
        "В этом разделе собраны самостоятельные backend-проекты с реальными API, документацией и рабочей инфраструктурой для локального запуска.",
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
        description:
          "REST API для управления пользователями и задачами с назначением исполнителя, фильтрацией, пагинацией и OpenAPI-документацией.",
        stack: ["Java", "Spring Boot", "PostgreSQL", "Spring Data JPA", "OpenAPI"],
        features: [
          "CRUD для пользователей и задач",
          "Назначение задач исполнителю",
          "Фильтры по статусу и приоритету",
          "DTO, валидация и обработка ошибок",
        ],
        githubUrl: "https://github.com/vonomarap/task-management-api",
        detailsUrl: "https://github.com/vonomarap/task-management-api#readme",
      },
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
        title: "Booking Service",
        description:
          "Сервис записи на встречи и временные слоты с управлением провайдерами, доступностью, бронированием, переносом и отменой.",
        stack: ["Java", "Spring Boot", "PostgreSQL", "Docker Compose", "OpenAPI"],
        features: [
          "Провайдеры и доступные слоты",
          "Бронирование, перенос и отмена",
          "Статусы брони и проверка конфликтов",
          "DTO, валидация и API-документация",
        ],
        githubUrl: "https://github.com/vonomarap/booking-service",
        detailsUrl: "https://github.com/vonomarap/booking-service#readme",
      },
    ],
  },
  en: {
    section: {
      eyebrow: "Projects",
      title: "Study and pet backend projects",
      description:
        "This section highlights standalone backend projects with working APIs, documentation, and local development infrastructure.",
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
        description:
          "REST API for managing users and tasks with assignment, filtering, pagination, and OpenAPI documentation.",
        stack: ["Java", "Spring Boot", "PostgreSQL", "Spring Data JPA", "OpenAPI"],
        features: [
          "User and task CRUD",
          "Task assignment workflow",
          "Status and priority filtering",
          "DTO validation and error handling",
        ],
        githubUrl: "https://github.com/vonomarap/task-management-api",
        detailsUrl: "https://github.com/vonomarap/task-management-api#readme",
      },
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
        title: "Booking Service",
        description:
          "Appointment and slot booking service with provider availability, booking lifecycle, rescheduling, and conflict checks.",
        stack: ["Java", "Spring Boot", "PostgreSQL", "Docker Compose", "OpenAPI"],
        features: [
          "Providers and availability slots",
          "Booking, rescheduling, and cancellation",
          "Status management and conflict prevention",
          "DTO validation and API docs",
        ],
        githubUrl: "https://github.com/vonomarap/booking-service",
        detailsUrl: "https://github.com/vonomarap/booking-service#readme",
      },
    ],
  },
} as const;
