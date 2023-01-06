interface PlanetAge {
    [key: string]: number;
}

const PLANET_YEARS: PlanetAge = {
  earth: 1,
  mercury: 0.2408467,
  venus: 0.61519726,
  mars: 1.8808158,
  jupiter: 11.862615,
  saturn: 29.447498,
  uranus: 84.016846,
  neptune: 164.79132,
}
export function age(planet: string, seconds: number): number {
  if (!PLANET_YEARS[planet]) {
    throw new Error('Invalid planet')
  }

  return Number((seconds / 31557600 / PLANET_YEARS[planet]).toFixed(2))
}
