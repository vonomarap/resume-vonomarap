export const projects = [
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
] as const;
