import { generateGuid } from 'src/app/util/globals';

/**
 * A stat of a character.
 */
export class Stat {
  /**
   * Determines if this stat has been selected.
   */
  public selected: boolean;

  /**
   * The id of this stat.
   */
  public id: string;

  /**
   * Creates a new stat.
   * @param {string} name The name of the statistic.
   * @param {number} value The value of the statistic.
   */
  constructor(public name: string, public value: number, public minValue: number, public maxValue: number) {
    this.selected = false;

    this.id = generateGuid();
  }
}
