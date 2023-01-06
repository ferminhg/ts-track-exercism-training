export function twoFer(name?: string): string {
  const nameToUse = name || "you";
  return `One for ${nameToUse}, one for me.`;
}
