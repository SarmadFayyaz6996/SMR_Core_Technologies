/** Fills `{placeholders}` in a translated string: format('Hi {name}', { name: 'Jane' }). */
export const format = (template: string, values: Record<string, string | number>) =>
  template.replace(/\{(\w+)\}/g, (match, key: string) =>
    key in values ? String(values[key]) : match,
  );
