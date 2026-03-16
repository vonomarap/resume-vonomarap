type ContactFormValues = {
  name: string;
  email: string;
  message: string;
};

export function createMailtoLink(
  emailLink: { value: string } | undefined,
  values: ContactFormValues,
) {
  const emailAddress = emailLink?.value || "your@email.com";
  const subject = `Portfolio contact from ${values.name}`;
  const body = [
    `Name: ${values.name}`,
    `Email: ${values.email}`,
    "",
    values.message,
  ].join("\n");

  return `mailto:${emailAddress}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
}
