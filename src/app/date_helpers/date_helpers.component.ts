import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Router } from '@angular/router';
import differenceInDays from 'date-fns/differenceInDays';
import differenceInHours from 'date-fns/differenceInHours';
import differenceInMilliseconds from 'date-fns/differenceInMilliseconds';
import differenceInMinutes from 'date-fns/differenceInMinutes';
import differenceInSeconds from 'date-fns/differenceInSeconds';
import { SelectItem } from 'primeng/api/selectitem';
import { ConvertFunctions } from './models/convert_functions';
import { DatePart } from './models/date_part';
import formatDate from 'date-fns/format';

@Component({
  templateUrl: './date_helpers.component.html'
})
export class DateHelpersComponent {
  dateParts = DatePart;
  datePartOptions: Array<SelectItem>;
  selectedPartOneConverter: DatePart;
  selectedPartTwoConverter: DatePart;
  convertValue: number;
  convertResult: number;
  convertingFunctions: ConvertFunctions;
  dateDifferenceStart: Date;
  dateDifferenceEnd: Date;
  dateDifferenceResult: number;
  dateDifferenceType: DatePart;

  dateToFormat: Date;
  formatOptions: Array<{ label: string; value: string }>;
  formatOption: string;
  formatResult: string;

  constructor(private _titleService: Title, private router: Router) {
    this._titleService.setTitle('Date Helpers');

    this.convertingFunctions = new ConvertFunctions();
    this.datePartOptions = [];
    this.convertResult = 0;

    for (const part in DatePart) {
      const item = { label: part, value: part } as SelectItem;
      this.datePartOptions.push(item);
    }

    this.selectedPartOneConverter = DatePart.Millisecond;
    this.selectedPartTwoConverter = DatePart.Millisecond;
    this.dateDifferenceStart = new Date();
    this.dateDifferenceEnd = new Date();
    this.dateDifferenceType = DatePart.Day;

    this.calculateDifference();

    this.formatOptions = new Array<{ label: string; value: string }>();
    this.formatOptions.push(
      {
        label: 'US 12-Hour',
        value: 'MM/dd/yyyy hh:mm a',
      },
      {
        label: 'US 24-Hour',
        value: 'MM/dd/yyyy HH:mm',
      },
      {
        label: 'CAN 12-Hour',
        value: 'dd/MM/yyyy hh:mm a',
      },
      {
        label: 'CAN 24-Hour',
        value: 'dd/MM/yyyy HH:mm',
      }
    );

    this.formatOption = this.formatOptions[0].value;
  }

  calculationChanged() {
    for (const convertFunction of this.convertingFunctions.availableFunctions) {
      if (convertFunction.firstPart === this.selectedPartOneConverter && convertFunction.secondPart === this.selectedPartTwoConverter) {
        this.convertResult = convertFunction.conversion(this.convertValue);
        break;
      }
    }
  }

  calculateDifference() {
    if (this.dateDifferenceEnd === null || this.dateDifferenceStart === null) {
      this.dateDifferenceResult = 0;
      return;
    }

    switch (this.dateDifferenceType) {
      case DatePart.Millisecond: {
        this.dateDifferenceResult = differenceInMilliseconds(this.dateDifferenceEnd, this.dateDifferenceStart);
        break;
      }

      case DatePart.Second: {
        this.dateDifferenceResult = differenceInSeconds(this.dateDifferenceEnd, this.dateDifferenceStart);
        break;
      }

      case DatePart.Minute: {
        this.dateDifferenceResult = differenceInMinutes(this.dateDifferenceEnd, this.dateDifferenceStart);
        break;
      }

      case DatePart.Hour: {
        this.dateDifferenceResult = differenceInHours(this.dateDifferenceEnd, this.dateDifferenceStart);
        break;
      }

      case DatePart.Day: {
        this.dateDifferenceResult = differenceInDays(this.dateDifferenceEnd, this.dateDifferenceStart);
        break;
      }
    }
  }

  updateFormat() {
    if (this.formatOption && this.dateToFormat) {
      this.formatResult = formatDate(this.dateToFormat, this.formatOption);
    }
  }

  getSuffix(): string {
    return ' ' + this.dateDifferenceType + '(s)';
  }
}
