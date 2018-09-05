export class StaticRefs {
	constructor() {}

	/**
	 * Separates a string from a property name into something more human readable.
	 * @param value The value to separate.
	 */
	static separateStringIntoWords(value: string) {
		for (let i = 0; i < value.length; i++) {
			if (value.charAt(i).toUpperCase() === value.charAt(i)) {
				value = value.substring(0, i) + ' ' + value.substring(i);

				// Since the string just got longer, increment this value again so we get past the upper case character.
				i++;
			}
		}

		return value.trim();
	}
}
