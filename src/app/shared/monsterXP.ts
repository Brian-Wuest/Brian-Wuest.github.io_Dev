export class MonsterXP {
	public static dnd5thMonsterExperience = [
		new MonsterXP('0', 10),
		new MonsterXP('1/8', 25),
		new MonsterXP('1/4', 50),
		new MonsterXP('1/2', 100),
		new MonsterXP('1', 200),
		new MonsterXP('2', 450),
		new MonsterXP('3', 700),
		new MonsterXP('4', 1100),
		new MonsterXP('5', 1800),
		new MonsterXP('6', 2300),
		new MonsterXP('7', 2900),
		new MonsterXP('8', 3900),
		new MonsterXP('9', 5000),
		new MonsterXP('10', 5900),
		new MonsterXP('11', 7200),
		new MonsterXP('12', 8400),
		new MonsterXP('13', 10000),
		new MonsterXP('14', 11500),
		new MonsterXP('15', 13000),
		new MonsterXP('16', 15000),
		new MonsterXP('17', 18000),
		new MonsterXP('18', 20000),
		new MonsterXP('19', 22000),
		new MonsterXP('20', 25000),
		new MonsterXP('21', 33000),
		new MonsterXP('22', 41000),
		new MonsterXP('23', 50000),
		new MonsterXP('24', 62000),
		new MonsterXP('25', 75000),
		new MonsterXP('26', 90000),
		new MonsterXP('27', 105000),
		new MonsterXP('28', 120000),
		new MonsterXP('29', 135000),
		new MonsterXP('30', 155000)
	];

	constructor(public challengeRating: string, public experience: number) {}

	/**
	 * Finds a monster xp object for a specific challene rating. Returns challenge rating zero if it's not found.
	 * @param rating The rating to look for.
	 */
	public static getMonsterXpForChallengeRating(rating: string) {
		if (rating && rating.trim() !== '') {
			for (const challengeRating of MonsterXP.dnd5thMonsterExperience) {
				if (challengeRating.challengeRating === rating) {
					return challengeRating.Clone();
				}
			}
		}

		return MonsterXP.Zero();
	}

	/**
	 * Returns a monster xp object representing challenge rating zero.
	 */
	public static Zero() {
		return new MonsterXP('0', 10);
	}

	Clone(): MonsterXP {
		const result = new MonsterXP(this.challengeRating, this.experience);

		return result;
	}
}
