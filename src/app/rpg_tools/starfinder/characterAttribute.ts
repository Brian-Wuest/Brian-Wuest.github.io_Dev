export class CharacterAttribute {
	constructor(public name: string, public raceModifier: number, public themeModifier: number, public points?: number) {
		if (!points) {
			points = 0;
		}
	}
}
