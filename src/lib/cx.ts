/** Joins truthy class names. */
export const cx = (...classes: Array<string | false | null | undefined>) =>
  classes.filter(Boolean).join(' ');
