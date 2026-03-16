type ContactFormValues = {
  name: string;
  email: string;
  message: string;
};

export function createMailtoLink(
  emailLink: { value: string } | undefined,
  values: ContactFormValues,
  copy: {
    subjectPrefix: string;
    nameLabel: string;
    emailLabel: string;
  },
) {
  const emailAddress = emailLink?.value || "your@email.com";
  const subject = `${copy.subjectPrefix} ${values.name}`;
  const body = [
    `${copy.nameLabel}: ${values.name}`,
    `${copy.emailLabel}: ${values.email}`,
    "",
    values.message,
  ].join("\n");

  return `mailto:${emailAddress}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
}
