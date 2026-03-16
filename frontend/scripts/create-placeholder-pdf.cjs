const fs = require("node:fs");
const path = require("node:path");

const objects = [
  "1 0 obj\n<< /Type /Catalog /Pages 2 0 R >>\nendobj",
  "2 0 obj\n<< /Type /Pages /Kids [3 0 R] /Count 1 >>\nendobj",
  "3 0 obj\n<< /Type /Page /Parent 2 0 R /MediaBox [0 0 595 842] /Contents 4 0 R /Resources << /Font << /F1 5 0 R >> >> >>\nendobj",
  "4 0 obj\n<< /Length 173 >>\nstream\nBT\n/F1 24 Tf\n72 760 Td\n(Vlad Resume Placeholder) Tj\n0 -32 Td\n/F1 12 Tf\n(Replace this PDF with your real CV before deployment.) Tj\n0 -22 Td\n(Frontend path: public/Vlad-Junior-Java-Backend-Developer-Resume.pdf) Tj\nET\nendstream\nendobj",
  "5 0 obj\n<< /Type /Font /Subtype /Type1 /BaseFont /Helvetica >>\nendobj",
];

let pdf = "%PDF-1.4\n";
const offsets = [0];

for (const object of objects) {
  offsets.push(Buffer.byteLength(pdf, "utf8"));
  pdf += `${object}\n`;
}

const xrefStart = Buffer.byteLength(pdf, "utf8");
pdf += `xref\n0 ${objects.length + 1}\n`;
pdf += "0000000000 65535 f \n";

for (const offset of offsets.slice(1)) {
  pdf += `${String(offset).padStart(10, "0")} 00000 n \n`;
}

pdf += `trailer\n<< /Size ${objects.length + 1} /Root 1 0 R >>\nstartxref\n${xrefStart}\n%%EOF\n`;

const outputPath = path.join(
  __dirname,
  "..",
  "public",
  "Vlad-Junior-Java-Backend-Developer-Resume.pdf",
);

fs.writeFileSync(outputPath, pdf);
