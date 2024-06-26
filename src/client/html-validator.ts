export function validateHTML(html: string): string[] {
  const errors: string[] = [];
  if (html.includes('<div>')) {
    errors.push('Div tags are not allowed.');
  }
  return errors;
}
