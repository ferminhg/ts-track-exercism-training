export function decodedValue(resistorValues: string[]): number {
  const colors = [
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

  if (resistorValues.length < 2) {
    throw new Error("At least two colors need to be present");
  }
  const firstColor = colors.indexOf(resistorValues[0]);
  const secondColor = colors.indexOf(resistorValues[1]);

  return firstColor * 10 + secondColor;
}
