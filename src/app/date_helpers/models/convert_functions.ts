import { ConvertModel } from './convert.model';
import { DatePart } from './date_part';

export class ConvertFunctions {
  availableFunctions: Array<ConvertModel>;

  constructor() {
    this.availableFunctions = [
      {
        firstPart: DatePart.Millisecond,
        secondPart: DatePart.Second,
        conversion: (secondNumber: number) => {
          return secondNumber * 1000;
        },
      },
      {
        firstPart: DatePart.Millisecond,
        secondPart: DatePart.Minute,
        conversion: (secondNumber: number) => {
          return secondNumber * 1000 * 60;
        },
      },
      {
        firstPart: DatePart.Millisecond,
        secondPart: DatePart.Hour,
        conversion: (secondNumber: number) => {
          return secondNumber * 1000 * 60 * 60;
        },
      },
      {
        firstPart: DatePart.Millisecond,
        secondPart: DatePart.Day,
        conversion: (secondNumber: number) => {
          return secondNumber * 1000 * 60 * 60 * 24;
        },
      },
      {
        firstPart: DatePart.Millisecond,
        secondPart: DatePart.Week,
        conversion: (secondNumber: number) => {
          return secondNumber * 1000 * 60 * 60 * 24 * 7;
        },
      },
      // Seconds
      {
        firstPart: DatePart.Second,
        secondPart: DatePart.Millisecond,
        conversion: (secondNumber: number) => {
          return secondNumber / 1000;
        },
      },
      {
        firstPart: DatePart.Second,
        secondPart: DatePart.Minute,
        conversion: (secondNumber: number) => {
          return secondNumber * 60;
        },
      },
      {
        firstPart: DatePart.Second,
        secondPart: DatePart.Hour,
        conversion: (secondNumber: number) => {
          return secondNumber * 60 * 60;
        },
      },
      {
        firstPart: DatePart.Second,
        secondPart: DatePart.Day,
        conversion: (secondNumber: number) => {
          return secondNumber * 60 * 60 * 24;
        },
      },
      {
        firstPart: DatePart.Second,
        secondPart: DatePart.Week,
        conversion: (secondNumber: number) => {
          return secondNumber * 60 * 60 * 24 * 7;
        },
      },
      // Minutes
      {
        firstPart: DatePart.Minute,
        secondPart: DatePart.Millisecond,
        conversion: (secondNumber: number) => {
          return secondNumber / 60 / 1000;
        },
      },
      {
        firstPart: DatePart.Minute,
        secondPart: DatePart.Second,
        conversion: (secondNumber: number) => {
          return secondNumber / 60;
        },
      },
      {
        firstPart: DatePart.Minute,
        secondPart: DatePart.Hour,
        conversion: (secondNumber: number) => {
          return secondNumber * 60;
        },
      },
      {
        firstPart: DatePart.Minute,
        secondPart: DatePart.Day,
        conversion: (secondNumber: number) => {
          return secondNumber * 60 * 24;
        },
      },
      {
        firstPart: DatePart.Minute,
        secondPart: DatePart.Week,
        conversion: (secondNumber: number) => {
          return secondNumber * 60 * 24 * 7;
        },
      },
      // Hours
      {
        firstPart: DatePart.Hour,
        secondPart: DatePart.Millisecond,
        conversion: (secondNumber: number) => {
          return secondNumber / 60 / 60 / 1000;
        },
      },
      {
        firstPart: DatePart.Hour,
        secondPart: DatePart.Second,
        conversion: (secondNumber: number) => {
          return secondNumber / 60 / 60;
        },
      },
      {
        firstPart: DatePart.Hour,
        secondPart: DatePart.Minute,
        conversion: (secondNumber: number) => {
          return secondNumber / 60;
        },
      },
      {
        firstPart: DatePart.Hour,
        secondPart: DatePart.Day,
        conversion: (secondNumber: number) => {
          return secondNumber * 24;
        },
      },
      {
        firstPart: DatePart.Hour,
        secondPart: DatePart.Week,
        conversion: (secondNumber: number) => {
          return secondNumber * 24 * 7;
        },
      },
    ];
  }
}
