/**
 * Polish plural form picker.
 * forms: [one, few (2-4), many] e.g. ["aplikacja", "aplikacje", "aplikacji"].
 */
export function pluralPl(n, [one, few, many]) {
  if (n === 1) return one;
  const lastDigit = n % 10;
  const lastTwo = n % 100;
  if (lastDigit >= 2 && lastDigit <= 4 && (lastTwo < 12 || lastTwo > 14)) return few;
  return many;
}
