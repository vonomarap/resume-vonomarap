import fs from "node:fs";
import os from "node:os";
import path from "node:path";
import { spawnSync } from "node:child_process";
import { pathToFileURL } from "node:url";

const rootDir = path.resolve(import.meta.dirname, "..");
const publicDir = path.join(rootDir, "public");
const tempDir = fs.mkdtempSync(path.join(os.tmpdir(), "vlad-cv-"));

const browserCandidates = [
  "C:\\Program Files (x86)\\Microsoft\\Edge\\Application\\msedge.exe",
  "C:\\Program Files\\Microsoft\\Edge\\Application\\msedge.exe",
  "C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe",
  "C:\\Program Files (x86)\\Google\\Chrome\\Application\\chrome.exe",
];

const browserPath = browserCandidates.find((candidate) => fs.existsSync(candidate));

if (!browserPath) {
  throw new Error("Could not find Edge or Chrome for PDF generation.");
}

const cvContent = {
  ru: {
    fileName: "Vladislav-Paramonov-Junior-Java-Backend-Developer-Resume-ru.pdf",
    title: "Владислав Парамонов",
    role: "Junior Java / Spring Backend Developer",
    contacts: [
      { label: "Email", value: "fed.richter@gmail.com", href: "mailto:fed.richter@gmail.com" },
      { label: "Telegram", value: "@unecto", href: "https://t.me/unecto" },
      { label: "GitHub", value: "github.com/vonomarap", href: "https://github.com/vonomarap" },
      { label: "LinkedIn", value: "linkedin.com/in/vonomarap", href: "https://linkedin.com/in/vonomarap" },
    ],
    summaryTitle: "Профиль",
    summary:
      "Junior backend-разработчик с фокусом на Java, Spring Framework, SQL и реляционные базы данных. В 2024 году окончил Ростовский колледж связи и информатики (РКСИ) по специальности техник-программист. Ищу junior backend позицию и развиваюсь через pet-проекты и практику.",
    skillsTitle: "Навыки",
    skillGroups: [
      { label: "Backend", items: ["Java", "Spring Framework", "SOLID", "ООП"] },
      { label: "Базы данных", items: ["SQL", "MySQL", "PostgreSQL"] },
      { label: "Языки", items: ["Java", "Python"] },
      { label: "Инструменты", items: ["Git", "GitHub", "Maven", "Codex", "Antigravity", "Emdash"] },
    ],
    educationTitle: "Образование",
    educationItems: [
      {
        title: "Ростовский колледж связи и информатики (РКСИ)",
        period: "Выпуск 2024",
        description: "Специальность: техник-программист",
      },
    ],
    projectsTitle: "Избранные проекты",
    projects: [
      {
        title: "kanokna",
        stack: "Java, Spring Boot, Angular, REST API, SQL",
        bullets: [
          "Fullstack-проект со связкой backend-логики и отдельного web-клиента",
          "REST-слой, прикладная логика и структура продукта в public repository",
          "Практика взаимодействия Spring Boot backend и клиентского приложения",
        ],
        href: "https://github.com/vonomarap/kanokna",
      },
      {
        title: "SQL Learning Lab",
        stack: "SQL, PostgreSQL, MySQL, Oracle",
        bullets: [
          "Структурированный репозиторий со скриптами, заметками и SQL-упражнениями",
          "Практика на PostgreSQL и MySQL через dumps, архивы и учебные материалы",
          "Фокус на реляционном мышлении и проектировании данных",
        ],
        href: "https://github.com/vonomarap/sql-learning-lab",
      },
      {
        title: "admin-web",
        stack: "TypeScript, Next.js, Firebase",
        bullets: [
          "Админ-панель с App Router структурой и отдельным UI-слоем",
          "Компонентная организация frontend-кода и конфиги деплоя",
          "Проект расширяет практику в сторону клиентской и product-oriented разработки",
        ],
        href: "https://github.com/vonomarap/admin-web",
      },
    ],
  },
  en: {
    fileName: "Vladislav-Paramonov-Junior-Java-Backend-Developer-Resume-en.pdf",
    title: "Владислав Парамонов",
    role: "Junior Java / Spring Backend Developer",
    contacts: [
      { label: "Email", value: "fed.richter@gmail.com", href: "mailto:fed.richter@gmail.com" },
      { label: "Telegram", value: "@unecto", href: "https://t.me/unecto" },
      { label: "GitHub", value: "github.com/vonomarap", href: "https://github.com/vonomarap" },
      { label: "LinkedIn", value: "linkedin.com/in/vonomarap", href: "https://linkedin.com/in/vonomarap" },
    ],
    summaryTitle: "Profile",
    summary:
      "Junior backend developer focused on Java, Spring Framework, SQL, and relational databases. Graduated from Rostov College of Communications and Informatics (RKSI) in 2024 as a technician-programmer. Looking for a junior backend role and strengthening engineering fundamentals through pet projects and hands-on practice.",
    skillsTitle: "Skills",
    skillGroups: [
      { label: "Backend", items: ["Java", "Spring Framework", "SOLID", "OOP"] },
      { label: "Databases", items: ["SQL", "MySQL", "PostgreSQL"] },
      { label: "Languages", items: ["Java", "Python"] },
      { label: "Tools", items: ["Git", "GitHub", "Maven", "Codex", "Antigravity", "Emdash"] },
    ],
    educationTitle: "Education",
    educationItems: [
      {
        title: "Rostov College of Communications and Informatics (RKSI)",
        period: "Graduated in 2024",
        description: "Qualification: technician-programmer",
      },
    ],
    projectsTitle: "Selected Projects",
    projects: [
      {
        title: "kanokna",
        stack: "Java, Spring Boot, Angular, REST API, SQL",
        bullets: [
          "Fullstack project combining backend logic with a separate web client",
          "REST layer, business logic, and product-oriented public repository structure",
          "Hands-on work around Spring Boot backend integration with a client application",
        ],
        href: "https://github.com/vonomarap/kanokna",
      },
      {
        title: "SQL Learning Lab",
        stack: "SQL, PostgreSQL, MySQL, Oracle",
        bullets: [
          "Structured repository with SQL scripts, notes, and practice materials",
          "Hands-on PostgreSQL and MySQL practice through dumps and learning archives",
          "Focused on relational thinking and database design fundamentals",
        ],
        href: "https://github.com/vonomarap/sql-learning-lab",
      },
      {
        title: "admin-web",
        stack: "TypeScript, Next.js, Firebase",
        bullets: [
          "Admin panel with App Router structure and a dedicated UI layer",
          "Component-based frontend organization and deployment-related configuration",
          "Expands practical experience toward client-side and product-oriented engineering",
        ],
        href: "https://github.com/vonomarap/admin-web",
      },
    ],
  },
};

function escapeHtml(value) {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;");
}

function renderCvHtml(locale, content) {
  const contactHtml = content.contacts
    .map(
      (item) =>
        `<a href="${escapeHtml(item.href)}"><strong>${escapeHtml(item.label)}:</strong> ${escapeHtml(item.value)}</a>`,
    )
    .join(" · ");

  const skillsHtml = content.skillGroups
    .map(
      (group) =>
        `<p><strong>${escapeHtml(group.label)}:</strong> ${escapeHtml(group.items.join(", "))}</p>`,
    )
    .join("");

  const educationHtml = content.educationItems
    .map(
      (item) => `
        <div class="item">
          <div class="item-header">
            <h3>${escapeHtml(item.title)}</h3>
            <span>${escapeHtml(item.period)}</span>
          </div>
          <p>${escapeHtml(item.description)}</p>
        </div>
      `,
    )
    .join("");

  const projectsHtml = content.projects
    .map(
      (project) => `
        <div class="item">
          <div class="item-header">
            <h3>${escapeHtml(project.title)}</h3>
            <a href="${escapeHtml(project.href)}">${escapeHtml(project.href.replace("https://", ""))}</a>
          </div>
          <p><strong>Stack:</strong> ${escapeHtml(project.stack)}</p>
          <ul>
            ${project.bullets.map((bullet) => `<li>${escapeHtml(bullet)}</li>`).join("")}
          </ul>
        </div>
      `,
    )
    .join("");

  return `<!doctype html>
<html lang="${locale}">
  <head>
    <meta charset="utf-8" />
    <title>${escapeHtml(content.title)} CV</title>
    <style>
      @page { size: A4; margin: 14mm; }
      :root {
        color-scheme: only light;
        --text: #0f172a;
        --muted: #475569;
        --line: #dbe4f0;
        --accent: #2563eb;
      }
      * { box-sizing: border-box; }
      body {
        margin: 0;
        font-family: "Segoe UI", Arial, sans-serif;
        color: var(--text);
        background: white;
        font-size: 11.5pt;
        line-height: 1.45;
      }
      .page {
        width: 100%;
        max-width: 180mm;
        margin: 0 auto;
      }
      header {
        border-bottom: 1px solid var(--line);
        padding-bottom: 14px;
        margin-bottom: 14px;
      }
      h1 {
        margin: 0;
        font-size: 24pt;
        line-height: 1.05;
      }
      .role {
        margin-top: 6px;
        font-size: 12.5pt;
        color: var(--accent);
        font-weight: 700;
      }
      .contacts {
        margin-top: 10px;
        color: var(--muted);
        font-size: 10pt;
      }
      .contacts a {
        color: inherit;
        text-decoration: none;
      }
      section {
        margin-top: 14px;
      }
      h2 {
        margin: 0 0 8px;
        font-size: 12pt;
        text-transform: uppercase;
        letter-spacing: 0.08em;
        color: var(--accent);
      }
      p {
        margin: 0 0 6px;
      }
      .item {
        margin-bottom: 10px;
      }
      .item-header {
        display: flex;
        justify-content: space-between;
        gap: 16px;
        align-items: baseline;
      }
      .item-header h3 {
        margin: 0 0 2px;
        font-size: 11.5pt;
      }
      .item-header span,
      .item-header a {
        color: var(--muted);
        font-size: 9.5pt;
        text-decoration: none;
        white-space: nowrap;
      }
      ul {
        margin: 6px 0 0 18px;
        padding: 0;
      }
      li {
        margin: 0 0 4px;
      }
    </style>
  </head>
  <body>
    <main class="page">
      <header>
        <h1>${escapeHtml(content.title)}</h1>
        <div class="role">${escapeHtml(content.role)}</div>
        <div class="contacts">${contactHtml}</div>
      </header>

      <section>
        <h2>${escapeHtml(content.summaryTitle)}</h2>
        <p>${escapeHtml(content.summary)}</p>
      </section>

      <section>
        <h2>${escapeHtml(content.skillsTitle)}</h2>
        ${skillsHtml}
      </section>

      <section>
        <h2>${escapeHtml(content.educationTitle)}</h2>
        ${educationHtml}
      </section>

      <section>
        <h2>${escapeHtml(content.projectsTitle)}</h2>
        ${projectsHtml}
      </section>
    </main>
  </body>
</html>`;
}

function generatePdf(locale, content) {
  const htmlPath = path.join(tempDir, `${locale}.html`);
  const pdfPath = path.join(publicDir, content.fileName);

  fs.writeFileSync(htmlPath, renderCvHtml(locale, content), "utf8");

  const result = spawnSync(
    browserPath,
    [
      "--headless=new",
      "--disable-gpu",
      "--no-first-run",
      "--no-default-browser-check",
      "--allow-file-access-from-files",
      "--print-to-pdf-no-header",
      `--print-to-pdf=${pdfPath}`,
      pathToFileURL(htmlPath).href,
    ],
    {
      encoding: "utf8",
      windowsHide: true,
    },
  );

  if (result.status !== 0) {
    throw new Error(result.stderr || result.stdout || `Failed to generate ${content.fileName}`);
  }
}

for (const [locale, content] of Object.entries(cvContent)) {
  generatePdf(locale, content);
}

console.log("Generated CV PDFs:");
for (const content of Object.values(cvContent)) {
  console.log(`- public/${content.fileName}`);
}
