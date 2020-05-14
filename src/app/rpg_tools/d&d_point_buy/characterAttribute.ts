export class CharacterAttribute {
  constructor(public name: string, public raceModifier: number, public points?: number) {
    if (!points) {
      points = 0;
    }
  }
}
