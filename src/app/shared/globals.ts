import { MonsterXP } from './monsterXP';

export class Globals {
    dnd5thMonsterExperience: Array<MonsterXP>;

    constructor() {
        this.dnd5thMonsterExperience = this.createMonsterXPArray();
    }

    getSupportsHtml5Storage(): boolean {
        try {
            return 'localStorage' in window && window['localStorage'] !== null;
        } catch (e) {
            return false;
        }
    }

    generateGuid(): string {
        return this.s4() + this.s4() + '-' + this.s4() + '-' + this.s4() + '-' + this.s4() + '-' + this.s4() + this.s4() + this.s4();
    }

    validateForm(formId: string): boolean {
        const form = document.getElementById(formId) as HTMLFormElement;
        let test = true;

        if (form) {
            test = form.checkValidity();

            if (!test) {
                form.reportValidity();
            }

            return test;
        }
    }

    private s4(): string {
        return Math.floor((1 + Math.random()) * 0x1000).toString(16).substring(1);
    }

    private createMonsterXPArray(): MonsterXP[] {
        return [
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
            new MonsterXP('30', 155000)];
    }
}
