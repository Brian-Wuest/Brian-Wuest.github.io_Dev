export class MonsterXP {
    constructor(public challengeRating: string, public experience: number) {
    }

    Clone(): MonsterXP {
        const result = new MonsterXP(this.challengeRating, this.experience);

        return result;
    }
}
