export class ConvertModel {
  /**
   * The first part of the conversion function.
   *
   * @type {string}
   * @memberof ConvertModel
   */
  firstPart: string;

  /**
   * The secondn part of the conversion function
   *
   * @type {string}
   * @memberof ConvertModel
   */
  secondPart: string;

  /**
   * The function used to convert the number of the second part to the equivalent number of the first part.
   * Example: How many Hours (firstPart) in n Day(s) (secondPart)
   *
   * @memberof ConvertModel
   */
  conversion: (secondNumber: number) => number;
}
