import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { MonthEvents } from '../p5-royal-events/models/MonthEvents';
import { MonthEvent } from '../p5-royal-events/models/Event';

@Component({
  selector: 'app-p3-reload-events',
  templateUrl: './p3-reload-events.component.html',
  styleUrls: ['./p3-reload-events.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class P3ReloadEventsComponent implements OnInit {
  months: Array<MonthEvents>;
  columns: Array<{ header: string; field: string; width: string }>;
  flowerShopData: Array<{ request: string; combination: string }>;
  strengthConfidantData: Array<{ personaNeeded: string; howToMake: string }>;
  crosswordAnswerData: Array<string>;

  constructor() {
    this.months = new Array<MonthEvents>();
    this.columns = new Array<{ header: string; field: string; width: string }>();
    this.flowerShopData = new Array<{ request: string; combination: string }>();
    this.strengthConfidantData = new Array<{ personaNeeded: string; howToMake: string }>();
    this.crosswordAnswerData = new Array<string>();

    this.columns.push({
      header: 'Day',
      field: 'day',
      width: '50px',
    });

    this.columns.push({
      header: 'Day/After School',
      field: 'dayTimeInfo',
      width: '300px',
    });

    this.columns.push({
      header: 'Evening/Late Night',
      field: 'eveningInfo',
      width: '300px',
    });

    this.columns.push({
      header: 'Misc Info',
      field: 'miscInfo',
      width: '300px',
    });
  }

  ngOnInit(): void {
    this.loadAprilData();
    this.loadMayData();
    this.loadJuneData();
    this.loadJulyData();
    this.loadAugustData();
    this.loadSeptemberData();
    this.loadOctoberData();
    this.loadNovemberData();
    this.loadDecemberData();
    this.loadJanuaryData();
  }

  loadAprilData() {
    // April
    this.months.push({
      name: 'April',
      miscMonthInfo: '',
      exitStats: [''],
      events: [
        {
          day: 8,
          dayTimeInfo: [''],
          eveningInfo: [''],
          miscInfo: [''],
        },
        {
          day: 9,
          dayTimeInfo: [''],
          eveningInfo: [''],
          miscInfo: [''],
        },
        {
          day: 10,
          dayTimeInfo: [''],
          eveningInfo: [''],
          miscInfo: [''],
        },
        {
          day: 11,
          dayTimeInfo: [''],
          eveningInfo: [''],
          miscInfo: [''],
        },
        {
          day: 12,
          dayTimeInfo: [''],
          eveningInfo: [''],
          miscInfo: [''],
        },
        {
          day: 13,
          dayTimeInfo: [''],
          eveningInfo: [''],
          miscInfo: [''],
        },
        {
          day: 14,
          dayTimeInfo: [''],
          eveningInfo: [''],
          miscInfo: [''],
        },
        {
          day: 15,
          dayTimeInfo: [''],
          eveningInfo: [''],
          miscInfo: [''],
        },
        {
          day: 16,
          dayTimeInfo: [''],
          eveningInfo: [''],
          miscInfo: [''],
        },
        {
          day: 17,
          dayTimeInfo: [''],
          eveningInfo: [''],
          miscInfo: [''],
        },
        {
          day: 18,
          dayTimeInfo: [''],
          eveningInfo: [''],
          miscInfo: [''],
        },
        {
          day: 19,
          dayTimeInfo: [''],
          eveningInfo: [''],
          miscInfo: [''],
        },
        {
          day: 20,
          dayTimeInfo: [''],
          eveningInfo: [''],
          miscInfo: [''],
        },
        {
          day: 21,
          dayTimeInfo: [''],
          eveningInfo: [''],
          miscInfo: [''],
        },
        {
          day: 22,
          dayTimeInfo: [''],
          eveningInfo: [''],
          miscInfo: [''],
        },
        {
          day: 23,
          dayTimeInfo: [''],
          eveningInfo: [''],
          miscInfo: [''],
        },
        {
          day: 24,
          dayTimeInfo: [''],
          eveningInfo: [''],
          miscInfo: [''],
        },
        {
          day: 25,
          dayTimeInfo: [''],
          eveningInfo: [''],
          miscInfo: [''],
        },
        {
          day: 26,
          dayTimeInfo: [''],
          eveningInfo: [''],
          miscInfo: [''],
        },
        {
          day: 27,
          dayTimeInfo: [''],
          eveningInfo: [''],
          miscInfo: [''],
        },
        {
          day: 28,
          dayTimeInfo: [''],
          eveningInfo: [''],
          miscInfo: [''],
        },
        {
          day: 29,
          dayTimeInfo: [''],
          eveningInfo: [''],
          miscInfo: [''],
        },
        {
          day: 30,
          dayTimeInfo: [''],
          eveningInfo: [''],
          miscInfo: [''],
        },
        {
          day: 31,
          dayTimeInfo: [''],
          eveningInfo: [''],
          miscInfo: [''],
        },
      ] as Array<MonthEvent>,
    } as MonthEvents);
  }

  loadMayData() {
    // May
    this.months.push({
      name: 'May',
      miscMonthInfo: '',
      exitStats: [''],
      events: [
        {
          day: 1,
          dayTimeInfo: [''],
          eveningInfo: [''],
          miscInfo: [''],
        },
        {
          day: 2,
          dayTimeInfo: [''],
          eveningInfo: [''],
          miscInfo: [''],
        },
        {
          day: 3,
          dayTimeInfo: [''],
          eveningInfo: [''],
          miscInfo: [''],
        },
        {
          day: 4,
          dayTimeInfo: [''],
          eveningInfo: [''],
          miscInfo: [''],
        },
        {
          day: 5,
          dayTimeInfo: [''],
          eveningInfo: [''],
          miscInfo: [''],
        },
        {
          day: 6,
          dayTimeInfo: [''],
          eveningInfo: [''],
          miscInfo: [''],
        },
        {
          day: 7,
          dayTimeInfo: [''],
          eveningInfo: [''],
          miscInfo: [''],
        },
        {
          day: 8,
          dayTimeInfo: [''],
          eveningInfo: [''],
          miscInfo: [''],
        },
        {
          day: 9,
          dayTimeInfo: [''],
          eveningInfo: [''],
          miscInfo: [''],
        },
        {
          day: 10,
          dayTimeInfo: [''],
          eveningInfo: [''],
          miscInfo: [''],
        },
        {
          day: 11,
          dayTimeInfo: [''],
          eveningInfo: [''],
          miscInfo: [''],
        },
        {
          day: 12,
          dayTimeInfo: [''],
          eveningInfo: [''],
          miscInfo: [''],
        },
        {
          day: 13,
          dayTimeInfo: [''],
          eveningInfo: [''],
          miscInfo: [''],
        },
        {
          day: 14,
          dayTimeInfo: [''],
          eveningInfo: [''],
          miscInfo: [''],
        },
        {
          day: 15,
          dayTimeInfo: [''],
          eveningInfo: [''],
          miscInfo: [''],
        },
        {
          day: 16,
          dayTimeInfo: [''],
          eveningInfo: [''],
          miscInfo: [''],
        },
        {
          day: 17,
          dayTimeInfo: [''],
          eveningInfo: [''],
          miscInfo: [''],
        },
        {
          day: 18,
          dayTimeInfo: [''],
          eveningInfo: [''],
          miscInfo: [''],
        },
        {
          day: 19,
          dayTimeInfo: [''],
          eveningInfo: [''],
          miscInfo: [''],
        },
        {
          day: 20,
          dayTimeInfo: [''],
          eveningInfo: [''],
          miscInfo: [''],
        },
        {
          day: 21,
          dayTimeInfo: [''],
          eveningInfo: [''],
          miscInfo: [''],
        },
        {
          day: 22,
          dayTimeInfo: [''],
          eveningInfo: [''],
          miscInfo: [''],
        },
        {
          day: 23,
          dayTimeInfo: [''],
          eveningInfo: [''],
          miscInfo: [''],
        },
        {
          day: 24,
          dayTimeInfo: [''],
          eveningInfo: [''],
          miscInfo: [''],
        },
        {
          day: 25,
          dayTimeInfo: [''],
          eveningInfo: [''],
          miscInfo: [''],
        },
        {
          day: 26,
          dayTimeInfo: [''],
          eveningInfo: [''],
          miscInfo: [''],
        },
        {
          day: 27,
          dayTimeInfo: [''],
          eveningInfo: [''],
          miscInfo: [''],
        },
        {
          day: 28,
          dayTimeInfo: [''],
          eveningInfo: [''],
          miscInfo: [''],
        },
        {
          day: 29,
          dayTimeInfo: [''],
          eveningInfo: [''],
          miscInfo: [''],
        },
        {
          day: 30,
          dayTimeInfo: [''],
          eveningInfo: [''],
          miscInfo: [''],
        },
        {
          day: 31,
          dayTimeInfo: [''],
          eveningInfo: [''],
          miscInfo: [''],
        },
      ] as Array<MonthEvent>,
    } as MonthEvents);
  }

  loadJuneData() {
    // June
    this.months.push({
      name: 'June',
      miscMonthInfo: '',
      exitStats: [''],
      events: [
        {
          day: 1,
          dayTimeInfo: [''],
          eveningInfo: [''],
          miscInfo: [''],
        },
        {
          day: 2,
          dayTimeInfo: [''],
          eveningInfo: [''],
          miscInfo: [''],
        },
        {
          day: 3,
          dayTimeInfo: [''],
          eveningInfo: [''],
          miscInfo: [''],
        },
        {
          day: 4,
          dayTimeInfo: [''],
          eveningInfo: [''],
          miscInfo: [''],
        },
        {
          day: 5,
          dayTimeInfo: [''],
          eveningInfo: [''],
          miscInfo: [''],
        },
        {
          day: 6,
          dayTimeInfo: [''],
          eveningInfo: [''],
          miscInfo: [''],
        },
        {
          day: 7,
          dayTimeInfo: [''],
          eveningInfo: [''],
          miscInfo: [''],
        },
        {
          day: 8,
          dayTimeInfo: [''],
          eveningInfo: [''],
          miscInfo: [''],
        },
        {
          day: 9,
          dayTimeInfo: [''],
          eveningInfo: [''],
          miscInfo: [''],
        },
        {
          day: 10,
          dayTimeInfo: [''],
          eveningInfo: [''],
          miscInfo: [''],
        },
        {
          day: 11,
          dayTimeInfo: [''],
          eveningInfo: [''],
          miscInfo: [''],
        },
        {
          day: 12,
          dayTimeInfo: [''],
          eveningInfo: [''],
          miscInfo: [''],
        },
        {
          day: 13,
          dayTimeInfo: [''],
          eveningInfo: [''],
          miscInfo: [''],
        },
        {
          day: 14,
          dayTimeInfo: [''],
          eveningInfo: [''],
          miscInfo: [''],
        },
        {
          day: 15,
          dayTimeInfo: [''],
          eveningInfo: [''],
          miscInfo: [''],
        },
        {
          day: 16,
          dayTimeInfo: [''],
          eveningInfo: [''],
          miscInfo: [''],
        },
        {
          day: 17,
          dayTimeInfo: [''],
          eveningInfo: [''],
          miscInfo: [''],
        },
        {
          day: 18,
          dayTimeInfo: [''],
          eveningInfo: [''],
          miscInfo: [''],
        },
        {
          day: 19,
          dayTimeInfo: [''],
          eveningInfo: [''],
          miscInfo: [''],
        },
        {
          day: 20,
          dayTimeInfo: [''],
          eveningInfo: [''],
          miscInfo: [''],
        },
        {
          day: 21,
          dayTimeInfo: [''],
          eveningInfo: [''],
          miscInfo: [''],
        },
        {
          day: 22,
          dayTimeInfo: [''],
          eveningInfo: [''],
          miscInfo: [''],
        },
        {
          day: 23,
          dayTimeInfo: [''],
          eveningInfo: [''],
          miscInfo: [''],
        },
        {
          day: 24,
          dayTimeInfo: [''],
          eveningInfo: [''],
          miscInfo: [''],
        },
        {
          day: 25,
          dayTimeInfo: [''],
          eveningInfo: [''],
          miscInfo: [''],
        },
        {
          day: 26,
          dayTimeInfo: [''],
          eveningInfo: [''],
          miscInfo: [''],
        },
        {
          day: 27,
          dayTimeInfo: [''],
          eveningInfo: [''],
          miscInfo: [''],
        },
        {
          day: 28,
          dayTimeInfo: [''],
          eveningInfo: [''],
          miscInfo: [''],
        },
        {
          day: 29,
          dayTimeInfo: [''],
          eveningInfo: [''],
          miscInfo: [''],
        },
        {
          day: 30,
          dayTimeInfo: [''],
          eveningInfo: [''],
          miscInfo: [''],
        },
      ] as Array<MonthEvent>,
    } as MonthEvents);
  }

  loadJulyData() {
    // July
    this.months.push({
      name: 'July',
      miscMonthInfo: '',
      exitStats: [''],
      events: [
        {
          day: 1,
          dayTimeInfo: [''],
          eveningInfo: [''],
          miscInfo: [''],
        },
        {
          day: 2,
          dayTimeInfo: [''],
          eveningInfo: [''],
          miscInfo: [''],
        },
        {
          day: 3,
          dayTimeInfo: [''],
          eveningInfo: [''],
          miscInfo: [''],
        },
        {
          day: 4,
          dayTimeInfo: [''],
          eveningInfo: [''],
          miscInfo: [''],
        },
        {
          day: 5,
          dayTimeInfo: [''],
          eveningInfo: [''],
          miscInfo: [''],
        },
        {
          day: 6,
          dayTimeInfo: [''],
          eveningInfo: [''],
          miscInfo: [''],
        },
        {
          day: 7,
          dayTimeInfo: [''],
          eveningInfo: [''],
          miscInfo: [''],
        },
        {
          day: 8,
          dayTimeInfo: [''],
          eveningInfo: [''],
          miscInfo: [''],
        },
        {
          day: 9,
          dayTimeInfo: [''],
          eveningInfo: [''],
          miscInfo: [''],
        },
        {
          day: 10,
          dayTimeInfo: [''],
          eveningInfo: [''],
          miscInfo: [''],
        },
        {
          day: 11,
          dayTimeInfo: [''],
          eveningInfo: [''],
          miscInfo: [''],
        },
        {
          day: 12,
          dayTimeInfo: [''],
          eveningInfo: [''],
          miscInfo: [''],
        },
        {
          day: 13,
          dayTimeInfo: [''],
          eveningInfo: [''],
          miscInfo: [''],
        },
        {
          day: 14,
          dayTimeInfo: [''],
          eveningInfo: [''],
          miscInfo: [''],
        },
        {
          day: 15,
          dayTimeInfo: [''],
          eveningInfo: [''],
          miscInfo: [''],
        },
        {
          day: 16,
          dayTimeInfo: [''],
          eveningInfo: [''],
          miscInfo: [''],
        },
        {
          day: 17,
          dayTimeInfo: [''],
          eveningInfo: [''],
          miscInfo: [''],
        },
        {
          day: 18,
          dayTimeInfo: [''],
          eveningInfo: [''],
          miscInfo: [''],
        },
        {
          day: 19,
          dayTimeInfo: [''],
          eveningInfo: [''],
          miscInfo: [''],
        },
        {
          day: 20,
          dayTimeInfo: [''],
          eveningInfo: [''],
          miscInfo: [''],
        },
        {
          day: 21,
          dayTimeInfo: [''],
          eveningInfo: [''],
          miscInfo: [''],
        },
        {
          day: 22,
          dayTimeInfo: [''],
          eveningInfo: [''],
          miscInfo: [''],
        },
        {
          day: 23,
          dayTimeInfo: [''],
          eveningInfo: [''],
          miscInfo: [''],
        },
        {
          day: 24,
          dayTimeInfo: [''],
          eveningInfo: [''],
          miscInfo: [''],
        },
        {
          day: 25,
          dayTimeInfo: [''],
          eveningInfo: [''],
          miscInfo: [''],
        },
        {
          day: 26,
          dayTimeInfo: [''],
          eveningInfo: [''],
          miscInfo: [''],
        },
        {
          day: 27,
          dayTimeInfo: [''],
          eveningInfo: [''],
          miscInfo: [''],
        },
        {
          day: 28,
          dayTimeInfo: [''],
          eveningInfo: [''],
          miscInfo: [''],
        },
        {
          day: 29,
          dayTimeInfo: [''],
          eveningInfo: [''],
          miscInfo: [''],
        },
        {
          day: 30,
          dayTimeInfo: [''],
          eveningInfo: [''],
          miscInfo: [''],
        },
        {
          day: 31,
          dayTimeInfo: [''],
          eveningInfo: [''],
          miscInfo: [''],
        },
      ] as Array<MonthEvent>,
    } as MonthEvents);
  }

  loadAugustData() {
    // August
    this.months.push({
      name: 'August',
      miscMonthInfo: '',
      exitStats: [''],
      events: [
        {
          day: 1,
          dayTimeInfo: [''],
          eveningInfo: [''],
          miscInfo: [''],
        },
        {
          day: 2,
          dayTimeInfo: [''],
          eveningInfo: [''],
          miscInfo: [''],
        },
        {
          day: 3,
          dayTimeInfo: [''],
          eveningInfo: [''],
          miscInfo: [''],
        },
        {
          day: 4,
          dayTimeInfo: [''],
          eveningInfo: [''],
          miscInfo: [''],
        },
        {
          day: 5,
          dayTimeInfo: [''],
          eveningInfo: [''],
          miscInfo: [''],
        },
        {
          day: 6,
          dayTimeInfo: [''],
          eveningInfo: [''],
          miscInfo: [''],
        },
        {
          day: 7,
          dayTimeInfo: [''],
          eveningInfo: [''],
          miscInfo: [''],
        },
        {
          day: 8,
          dayTimeInfo: [''],
          eveningInfo: [''],
          miscInfo: [''],
        },
        {
          day: 9,
          dayTimeInfo: [''],
          eveningInfo: [''],
          miscInfo: [''],
        },
        {
          day: 10,
          dayTimeInfo: [''],
          eveningInfo: [''],
          miscInfo: [''],
        },
        {
          day: 11,
          dayTimeInfo: [''],
          eveningInfo: [''],
          miscInfo: [''],
        },
        {
          day: 12,
          dayTimeInfo: [''],
          eveningInfo: [''],
          miscInfo: [''],
        },
        {
          day: 13,
          dayTimeInfo: [''],
          eveningInfo: [''],
          miscInfo: [''],
        },
        {
          day: 14,
          dayTimeInfo: [''],
          eveningInfo: [''],
          miscInfo: [''],
        },
        {
          day: 15,
          dayTimeInfo: [''],
          eveningInfo: [''],
          miscInfo: [''],
        },
        {
          day: 16,
          dayTimeInfo: [''],
          eveningInfo: [''],
          miscInfo: [''],
        },
        {
          day: 17,
          dayTimeInfo: [''],
          eveningInfo: [''],
          miscInfo: [''],
        },
        {
          day: 18,
          dayTimeInfo: [''],
          eveningInfo: [''],
          miscInfo: [''],
        },
        {
          day: 19,
          dayTimeInfo: [''],
          eveningInfo: [''],
          miscInfo: [''],
        },
        {
          day: 20,
          dayTimeInfo: [''],
          eveningInfo: [''],
          miscInfo: [''],
        },
        {
          day: 21,
          dayTimeInfo: [''],
          eveningInfo: [''],
          miscInfo: [''],
        },
        {
          day: 22,
          dayTimeInfo: [''],
          eveningInfo: [''],
          miscInfo: [''],
        },
        {
          day: 23,
          dayTimeInfo: [''],
          eveningInfo: [''],
          miscInfo: [''],
        },
        {
          day: 24,
          dayTimeInfo: [''],
          eveningInfo: [''],
          miscInfo: [''],
        },
        {
          day: 25,
          dayTimeInfo: [''],
          eveningInfo: [''],
          miscInfo: [''],
        },
        {
          day: 26,
          dayTimeInfo: [''],
          eveningInfo: [''],
          miscInfo: [''],
        },
        {
          day: 27,
          dayTimeInfo: [''],
          eveningInfo: [''],
          miscInfo: [''],
        },
        {
          day: 28,
          dayTimeInfo: [''],
          eveningInfo: [''],
          miscInfo: [''],
        },
        {
          day: 29,
          dayTimeInfo: [''],
          eveningInfo: [''],
          miscInfo: [''],
        },
        {
          day: 30,
          dayTimeInfo: [''],
          eveningInfo: [''],
          miscInfo: [''],
        },
        {
          day: 31,
          dayTimeInfo: [''],
          eveningInfo: [''],
          miscInfo: [''],
        },
      ] as Array<MonthEvent>,
    } as MonthEvents);
  }

  loadSeptemberData() {
    // September
    this.months.push({
      name: 'September',
      miscMonthInfo: '',
      exitStats: [''],
      events: [
        {
          day: 1,
          dayTimeInfo: [''],
          eveningInfo: [''],
          miscInfo: [''],
        },
        {
          day: 2,
          dayTimeInfo: [''],
          eveningInfo: [''],
          miscInfo: [''],
        },
        {
          day: 3,
          dayTimeInfo: [''],
          eveningInfo: [''],
          miscInfo: [''],
        },
        {
          day: 4,
          dayTimeInfo: [''],
          eveningInfo: [''],
          miscInfo: [''],
        },
        {
          day: 5,
          dayTimeInfo: [''],
          eveningInfo: [''],
          miscInfo: [''],
        },
        {
          day: 6,
          dayTimeInfo: [''],
          eveningInfo: [''],
          miscInfo: [''],
        },
        {
          day: 7,
          dayTimeInfo: [''],
          eveningInfo: [''],
          miscInfo: [''],
        },
        {
          day: 8,
          dayTimeInfo: [''],
          eveningInfo: [''],
          miscInfo: [''],
        },
        {
          day: 9,
          dayTimeInfo: [''],
          eveningInfo: [''],
          miscInfo: [''],
        },
        {
          day: 10,
          dayTimeInfo: [''],
          eveningInfo: [''],
          miscInfo: [''],
        },
        {
          day: 11,
          dayTimeInfo: [''],
          eveningInfo: [''],
          miscInfo: [''],
        },
        {
          day: 12,
          dayTimeInfo: [''],
          eveningInfo: [''],
          miscInfo: [''],
        },
        {
          day: 13,
          dayTimeInfo: [''],
          eveningInfo: [''],
          miscInfo: [''],
        },
        {
          day: 14,
          dayTimeInfo: [''],
          eveningInfo: [''],
          miscInfo: [''],
        },
        {
          day: 15,
          dayTimeInfo: [''],
          eveningInfo: [''],
          miscInfo: [''],
        },
        {
          day: 16,
          dayTimeInfo: [''],
          eveningInfo: [''],
          miscInfo: [''],
        },
        {
          day: 17,
          dayTimeInfo: [''],
          eveningInfo: [''],
          miscInfo: [''],
        },
        {
          day: 18,
          dayTimeInfo: [''],
          eveningInfo: [''],
          miscInfo: [''],
        },
        {
          day: 19,
          dayTimeInfo: [''],
          eveningInfo: [''],
          miscInfo: [''],
        },
        {
          day: 20,
          dayTimeInfo: [''],
          eveningInfo: [''],
          miscInfo: [''],
        },
        {
          day: 21,
          dayTimeInfo: [''],
          eveningInfo: [''],
          miscInfo: [''],
        },
        {
          day: 22,
          dayTimeInfo: [''],
          eveningInfo: [''],
          miscInfo: [''],
        },
        {
          day: 23,
          dayTimeInfo: [''],
          eveningInfo: [''],
          miscInfo: [''],
        },
        {
          day: 24,
          dayTimeInfo: [''],
          eveningInfo: [''],
          miscInfo: [''],
        },
        {
          day: 25,
          dayTimeInfo: [''],
          eveningInfo: [''],
          miscInfo: [''],
        },
        {
          day: 26,
          dayTimeInfo: [''],
          eveningInfo: [''],
          miscInfo: [''],
        },
        {
          day: 27,
          dayTimeInfo: [''],
          eveningInfo: [''],
          miscInfo: [''],
        },
        {
          day: 28,
          dayTimeInfo: [''],
          eveningInfo: [''],
          miscInfo: [''],
        },
        {
          day: 29,
          dayTimeInfo: [''],
          eveningInfo: [''],
          miscInfo: [''],
        },
        {
          day: 30,
          dayTimeInfo: [''],
          eveningInfo: [''],
          miscInfo: [''],
        },
      ] as Array<MonthEvent>,
    } as MonthEvents);
  }

  loadOctoberData() {
    // October
    this.months.push({
      name: 'October',
      miscMonthInfo: '',
      exitStats: [''],
      events: [
        {
          day: 1,
          dayTimeInfo: [''],
          eveningInfo: [''],
          miscInfo: [''],
        },
        {
          day: 2,
          dayTimeInfo: [''],
          eveningInfo: [''],
          miscInfo: [''],
        },
        {
          day: 3,
          dayTimeInfo: [''],
          eveningInfo: [''],
          miscInfo: [''],
        },
        {
          day: 4,
          dayTimeInfo: [''],
          eveningInfo: [''],
          miscInfo: [''],
        },
        {
          day: 5,
          dayTimeInfo: [''],
          eveningInfo: [''],
          miscInfo: [''],
        },
        {
          day: 6,
          dayTimeInfo: [''],
          eveningInfo: [''],
          miscInfo: [''],
        },
        {
          day: 7,
          dayTimeInfo: [''],
          eveningInfo: [''],
          miscInfo: [''],
        },
        {
          day: 8,
          dayTimeInfo: [''],
          eveningInfo: [''],
          miscInfo: [''],
        },
        {
          day: 9,
          dayTimeInfo: [''],
          eveningInfo: [''],
          miscInfo: [''],
        },
        {
          day: 10,
          dayTimeInfo: [''],
          eveningInfo: [''],
          miscInfo: [''],
        },
        {
          day: 11,
          dayTimeInfo: [''],
          eveningInfo: [''],
          miscInfo: [''],
        },
        {
          day: 12,
          dayTimeInfo: [''],
          eveningInfo: [''],
          miscInfo: [''],
        },
        {
          day: 13,
          dayTimeInfo: [''],
          eveningInfo: [''],
          miscInfo: [''],
        },
        {
          day: 14,
          dayTimeInfo: [''],
          eveningInfo: [''],
          miscInfo: [''],
        },
        {
          day: 15,
          dayTimeInfo: [''],
          eveningInfo: [''],
          miscInfo: [''],
        },
        {
          day: 16,
          dayTimeInfo: [''],
          eveningInfo: [''],
          miscInfo: [''],
        },
        {
          day: 17,
          dayTimeInfo: [''],
          eveningInfo: [''],
          miscInfo: [''],
        },
        {
          day: 18,
          dayTimeInfo: [''],
          eveningInfo: [''],
          miscInfo: [''],
        },
        {
          day: 19,
          dayTimeInfo: [''],
          eveningInfo: [''],
          miscInfo: [''],
        },
        {
          day: 20,
          dayTimeInfo: [''],
          eveningInfo: [''],
          miscInfo: [''],
        },
        {
          day: 21,
          dayTimeInfo: [''],
          eveningInfo: [''],
          miscInfo: [''],
        },
        {
          day: 22,
          dayTimeInfo: [''],
          eveningInfo: [''],
          miscInfo: [''],
        },
        {
          day: 23,
          dayTimeInfo: [''],
          eveningInfo: [''],
          miscInfo: [''],
        },
        {
          day: 24,
          dayTimeInfo: [''],
          eveningInfo: [''],
          miscInfo: [''],
        },
        {
          day: 25,
          dayTimeInfo: [''],
          eveningInfo: [''],
          miscInfo: [''],
        },
        {
          day: 26,
          dayTimeInfo: [''],
          eveningInfo: [''],
          miscInfo: [''],
        },
        {
          day: 27,
          dayTimeInfo: [''],
          eveningInfo: [''],
          miscInfo: [''],
        },
        {
          day: 28,
          dayTimeInfo: [''],
          eveningInfo: [''],
          miscInfo: [''],
        },
        {
          day: 29,
          dayTimeInfo: [''],
          eveningInfo: [''],
          miscInfo: [''],
        },
        {
          day: 30,
          dayTimeInfo: [''],
          eveningInfo: [''],
          miscInfo: [''],
        },
        {
          day: 31,
          dayTimeInfo: [''],
          eveningInfo: [''],
          miscInfo: [''],
        },
      ] as Array<MonthEvent>,
    } as MonthEvents);
  }

  loadNovemberData() {
    // November
    this.months.push({
      name: 'November',
      miscMonthInfo: '',
      exitStats: [''],
      events: [
        {
          day: 1,
          dayTimeInfo: [''],
          eveningInfo: [''],
          miscInfo: [''],
        },
        {
          day: 2,
          dayTimeInfo: [''],
          eveningInfo: [''],
          miscInfo: [''],
        },
        {
          day: 3,
          dayTimeInfo: [''],
          eveningInfo: [''],
          miscInfo: [''],
        },
        {
          day: 4,
          dayTimeInfo: [''],
          eveningInfo: [''],
          miscInfo: [''],
        },
        {
          day: 5,
          dayTimeInfo: [''],
          eveningInfo: [''],
          miscInfo: [''],
        },
        {
          day: 6,
          dayTimeInfo: [''],
          eveningInfo: [''],
          miscInfo: [''],
        },
        {
          day: 7,
          dayTimeInfo: [''],
          eveningInfo: [''],
          miscInfo: [''],
        },
        {
          day: 8,
          dayTimeInfo: [''],
          eveningInfo: [''],
          miscInfo: [''],
        },
        {
          day: 9,
          dayTimeInfo: [''],
          eveningInfo: [''],
          miscInfo: [''],
        },
        {
          day: 10,
          dayTimeInfo: [''],
          eveningInfo: [''],
          miscInfo: [''],
        },
        {
          day: 11,
          dayTimeInfo: [''],
          eveningInfo: [''],
          miscInfo: [''],
        },
        {
          day: 12,
          dayTimeInfo: [''],
          eveningInfo: [''],
          miscInfo: [''],
        },
        {
          day: 13,
          dayTimeInfo: [''],
          eveningInfo: [''],
          miscInfo: [''],
        },
        {
          day: 14,
          dayTimeInfo: [''],
          eveningInfo: [''],
          miscInfo: [''],
        },
        {
          day: 15,
          dayTimeInfo: [''],
          eveningInfo: [''],
          miscInfo: [''],
        },
        {
          day: 16,
          dayTimeInfo: [''],
          eveningInfo: [''],
          miscInfo: [''],
        },
        {
          day: 17,
          dayTimeInfo: [''],
          eveningInfo: [''],
          miscInfo: [''],
        },
        {
          day: 18,
          dayTimeInfo: [''],
          eveningInfo: [''],
          miscInfo: [''],
        },
        {
          day: 19,
          dayTimeInfo: [''],
          eveningInfo: [''],
          miscInfo: [''],
        },
        {
          day: 20,
          dayTimeInfo: [''],
          eveningInfo: [''],
          miscInfo: [''],
        },
        {
          day: 21,
          dayTimeInfo: [''],
          eveningInfo: [''],
          miscInfo: [''],
        },
        {
          day: 22,
          dayTimeInfo: [''],
          eveningInfo: [''],
          miscInfo: [''],
        },
        {
          day: 23,
          dayTimeInfo: [''],
          eveningInfo: [''],
          miscInfo: [''],
        },
        {
          day: 24,
          dayTimeInfo: [''],
          eveningInfo: [''],
          miscInfo: [''],
        },
        {
          day: 25,
          dayTimeInfo: [''],
          eveningInfo: [''],
          miscInfo: [''],
        },
        {
          day: 26,
          dayTimeInfo: [''],
          eveningInfo: [''],
          miscInfo: [''],
        },
        {
          day: 27,
          dayTimeInfo: [''],
          eveningInfo: [''],
          miscInfo: [''],
        },
        {
          day: 28,
          dayTimeInfo: [''],
          eveningInfo: [''],
          miscInfo: [''],
        },
        {
          day: 29,
          dayTimeInfo: [''],
          eveningInfo: [''],
          miscInfo: [''],
        },
        {
          day: 30,
          dayTimeInfo: [''],
          eveningInfo: [''],
          miscInfo: [''],
        },
      ] as Array<MonthEvent>,
    } as MonthEvents);
  }

  loadDecemberData() {
    // December
    this.months.push({
      name: 'December',
      miscMonthInfo: '',
      exitStats: [''],
      events: [
        {
          day: 1,
          dayTimeInfo: [''],
          eveningInfo: [''],
          miscInfo: [''],
        },
        {
          day: 2,
          dayTimeInfo: [''],
          eveningInfo: [''],
          miscInfo: [''],
        },
        {
          day: 3,
          dayTimeInfo: [''],
          eveningInfo: [''],
          miscInfo: [''],
        },
        {
          day: 4,
          dayTimeInfo: [''],
          eveningInfo: [''],
          miscInfo: [''],
        },
        {
          day: 5,
          dayTimeInfo: [''],
          eveningInfo: [''],
          miscInfo: [''],
        },
        {
          day: 6,
          dayTimeInfo: [''],
          eveningInfo: [''],
          miscInfo: [''],
        },
        {
          day: 7,
          dayTimeInfo: [''],
          eveningInfo: [''],
          miscInfo: [''],
        },
        {
          day: 8,
          dayTimeInfo: [''],
          eveningInfo: [''],
          miscInfo: [''],
        },
        {
          day: 9,
          dayTimeInfo: [''],
          eveningInfo: [''],
          miscInfo: [''],
        },
        {
          day: 10,
          dayTimeInfo: [''],
          eveningInfo: [''],
          miscInfo: [''],
        },
        {
          day: 11,
          dayTimeInfo: [''],
          eveningInfo: [''],
          miscInfo: [''],
        },
        {
          day: 12,
          dayTimeInfo: [''],
          eveningInfo: [''],
          miscInfo: [''],
        },
        {
          day: 13,
          dayTimeInfo: [''],
          eveningInfo: [''],
          miscInfo: [''],
        },
        {
          day: 14,
          dayTimeInfo: [''],
          eveningInfo: [''],
          miscInfo: [''],
        },
        {
          day: 15,
          dayTimeInfo: [''],
          eveningInfo: [''],
          miscInfo: [''],
        },
        {
          day: 16,
          dayTimeInfo: [''],
          eveningInfo: [''],
          miscInfo: [''],
        },
        {
          day: 17,
          dayTimeInfo: [''],
          eveningInfo: [''],
          miscInfo: [''],
        },
        {
          day: 18,
          dayTimeInfo: [''],
          eveningInfo: [''],
          miscInfo: [''],
        },
        {
          day: 19,
          dayTimeInfo: [''],
          eveningInfo: [''],
          miscInfo: [''],
        },
        {
          day: 20,
          dayTimeInfo: [''],
          eveningInfo: [''],
          miscInfo: [''],
        },
        {
          day: 21,
          dayTimeInfo: [''],
          eveningInfo: [''],
          miscInfo: [''],
        },
        {
          day: 22,
          dayTimeInfo: [''],
          eveningInfo: [''],
          miscInfo: [''],
        },
        {
          day: 23,
          dayTimeInfo: [''],
          eveningInfo: [''],
          miscInfo: [''],
        },
        {
          day: 24,
          dayTimeInfo: [''],
          eveningInfo: [''],
          miscInfo: [''],
        },
        {
          day: 25,
          dayTimeInfo: [''],
          eveningInfo: [''],
          miscInfo: [''],
        },
        {
          day: 26,
          dayTimeInfo: [''],
          eveningInfo: [''],
          miscInfo: [''],
        },
        {
          day: 27,
          dayTimeInfo: [''],
          eveningInfo: [''],
          miscInfo: [''],
        },
        {
          day: 28,
          dayTimeInfo: [''],
          eveningInfo: [''],
          miscInfo: [''],
        },
        {
          day: 29,
          dayTimeInfo: [''],
          eveningInfo: [''],
          miscInfo: [''],
        },
        {
          day: 30,
          dayTimeInfo: [''],
          eveningInfo: [''],
          miscInfo: [''],
        },
        {
          day: 31,
          dayTimeInfo: [''],
          eveningInfo: [''],
          miscInfo: [''],
        },
      ] as Array<MonthEvent>,
    } as MonthEvents);
  }

  loadJanuaryData() {
    // January
    this.months.push({
      name: 'January',
      miscMonthInfo: '',
      exitStats: [''],
      events: [
        {
          day: 1,
          dayTimeInfo: [''],
          eveningInfo: [''],
          miscInfo: [''],
        },
        {
          day: 2,
          dayTimeInfo: [''],
          eveningInfo: [''],
          miscInfo: [''],
        },
        {
          day: 3,
          dayTimeInfo: [''],
          eveningInfo: [''],
          miscInfo: [''],
        },
        {
          day: 4,
          dayTimeInfo: [''],
          eveningInfo: [''],
          miscInfo: [''],
        },
        {
          day: 5,
          dayTimeInfo: [''],
          eveningInfo: [''],
          miscInfo: [''],
        },
        {
          day: 6,
          dayTimeInfo: [''],
          eveningInfo: [''],
          miscInfo: [''],
        },
        {
          day: 7,
          dayTimeInfo: [''],
          eveningInfo: [''],
          miscInfo: [''],
        },
        {
          day: 8,
          dayTimeInfo: [''],
          eveningInfo: [''],
          miscInfo: [''],
        },
        {
          day: 9,
          dayTimeInfo: [''],
          eveningInfo: [''],
          miscInfo: [''],
        },
        {
          day: 10,
          dayTimeInfo: [''],
          eveningInfo: [''],
          miscInfo: [''],
        },
        {
          day: 11,
          dayTimeInfo: [''],
          eveningInfo: [''],
          miscInfo: [''],
        },
        {
          day: 12,
          dayTimeInfo: [''],
          eveningInfo: [''],
          miscInfo: [''],
        },
        {
          day: 13,
          dayTimeInfo: [''],
          eveningInfo: [''],
          miscInfo: [''],
        },
        {
          day: 14,
          dayTimeInfo: [''],
          eveningInfo: [''],
          miscInfo: [''],
        },
        {
          day: 15,
          dayTimeInfo: [''],
          eveningInfo: [''],
          miscInfo: [''],
        },
        {
          day: 16,
          dayTimeInfo: [''],
          eveningInfo: [''],
          miscInfo: [''],
        },
        {
          day: 17,
          dayTimeInfo: [''],
          eveningInfo: [''],
          miscInfo: [''],
        },
        {
          day: 18,
          dayTimeInfo: [''],
          eveningInfo: [''],
          miscInfo: [''],
        },
        {
          day: 19,
          dayTimeInfo: [''],
          eveningInfo: [''],
          miscInfo: [''],
        },
        {
          day: 20,
          dayTimeInfo: [''],
          eveningInfo: [''],
          miscInfo: [''],
        },
        {
          day: 21,
          dayTimeInfo: [''],
          eveningInfo: [''],
          miscInfo: [''],
        },
        {
          day: 22,
          dayTimeInfo: [''],
          eveningInfo: [''],
          miscInfo: [''],
        },
        {
          day: 23,
          dayTimeInfo: [''],
          eveningInfo: [''],
          miscInfo: [''],
        },
        {
          day: 24,
          dayTimeInfo: [''],
          eveningInfo: [''],
          miscInfo: [''],
        },
        {
          day: 25,
          dayTimeInfo: [''],
          eveningInfo: [''],
          miscInfo: [''],
        },
        {
          day: 26,
          dayTimeInfo: [''],
          eveningInfo: [''],
          miscInfo: [''],
        },
        {
          day: 27,
          dayTimeInfo: [''],
          eveningInfo: [''],
          miscInfo: [''],
        },
        {
          day: 28,
          dayTimeInfo: [''],
          eveningInfo: [''],
          miscInfo: [''],
        },
        {
          day: 29,
          dayTimeInfo: [''],
          eveningInfo: [''],
          miscInfo: [''],
        },
        {
          day: 30,
          dayTimeInfo: [''],
          eveningInfo: [''],
          miscInfo: [''],
        },
        {
          day: 31,
          dayTimeInfo: [''],
          eveningInfo: [''],
          miscInfo: [''],
        },
      ] as Array<MonthEvent>,
    } as MonthEvents);
  }
}
