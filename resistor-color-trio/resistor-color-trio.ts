const METRIC = "ohms";
const COLORS = [
  "black",
  "brown",
  "red",
  "orange",
  "yellow",
  "green",
  "blue",
  "violet",
  "grey",
  "white",
];

export function decodedResistorValue(resistorValues: string[]): string {
  if (resistorValues.length !== 3) {
    throw new Error("At least two colors need to be present");
  }
  const resistor =
    (COLORS.indexOf(resistorValues[0]) * 10 +
      COLORS.indexOf(resistorValues[1])) *
    Math.pow(10, COLORS.indexOf(resistorValues[2]));

  if (resistor >= 1000) {
    return `${resistor / 1000} kilo${METRIC}`;
  }
  return `${resistor} ${METRIC}`;
}
