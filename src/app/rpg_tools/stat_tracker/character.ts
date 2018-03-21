import { Stat } from './stat';
import { Globals } from './../../../ts/globals';

/**
 * A character which contains various stats.
 */
export class Character {
    /**
     * An array of stats.
     */
    public stats: Array<Stat>;

    /**
     * The id of this character.
     */
    public id: string;

    /**
     * Determines if this character has been selected.
     */
    public selected: boolean;

    /**
     * Creates a new isntance of the character class.
     * @param {string} name The name of this character.
     */
    constructor(public name: string) {
        this.stats = new Array<Stat>();
        this.selected = false;
        const globals = new Globals();
        this.id = globals.generateGuid();
    }
}
