import { Component, OnInit } from '@angular/core';
import { MonthEvent } from './models/event';
import { MonthEvents } from './models/MonthEvents';

@Component({
  selector: 'app-p5-royal-events',
  templateUrl: './p5-royal-events.component.html',
  styleUrls: ['./p5-royal-events.component.scss'],
})
export class P5RoyalEventsComponent implements OnInit {
  months: Array<MonthEvents>;
  columns: Array<{ header: string; field: string; width: string }>;

  constructor() {
    this.months = new Array<MonthEvents>();
    this.columns = new Array<{ header: string; field: string; width: string }>();

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
    this.loadFebruaryData();
    this.loadMarchData();
  }

  loadAprilData() {
    // April
    this.months.push({
      name: 'April',
      miscMonthInfo: 'The month the game starts',
      events: [
        {
          day: 12,
          dayTimeInfo: ['Forced palace infiltration'],
          eveningInfo: ['unavailable'],
          miscInfo: 'Class answer: Villains (Knowledge +1)',
        },
        {
          day: 13,
          dayTimeInfo: [],
          eveningInfo: [],
          miscInfo: 'Story scripted events',
        },
        {
          day: 14,
          dayTimeInfo: [],
          eveningInfo: [],
          miscInfo: 'Story scripted events',
        },
        {
          day: 15,
          dayTimeInfo: ['Forced palace infiltration'],
          eveningInfo: ['Unavailable'],
          miscInfo: 'Make sure you have 1,500 yen and buy plant nutrients',
        },
        {
          day: 16,
          dayTimeInfo: ['Story scripted events'],
          eveningInfo: ['Story scripted events'],
          miscInfo: '',
        },
        {
          day: 17,
          dayTimeInfo: ['Unavailable'],
          eveningInfo: ['Scripted tools crafting tutorial (Proficiency +2)'],
          miscInfo: '',
        },
        {
          day: 18,
          dayTimeInfo: ['Get [Pirate Legent] from library.', 'Buy Plant Nutrients. Buy materials for crafting lockpicks.', 'Talk to doctor at clinic.'],
          eveningInfo: ['Complete crossword on the first floor table (Knowledge +1).', 'Clean your room (find Yongen Wanderer and Social Thought)'],
          miscInfo: '',
        },
        {
          day: 19,
          dayTimeInfo: ['Chariot 2', '3, 2, 1', '0, 0', '1, 1', '1, 1, 1'],
          eveningInfo: ['Use plant nutrients on the plant in your room (Kindness +2).', 'Craft lockpicks (Proficiency +2)'],
          miscInfo: "Class answer: They're the same (knowledge +1)",
        },
        {
          day: 20,
          dayTimeInfo: ['Buy many healing items from the clinic', "Secure infiltration route at Kamoshida's palace"],
          eveningInfo: ['Study at Leblanc (Knowledge +3)'],
          miscInfo: 'Read Pirate Legend on the train',
        },
        {
          day: 21,
          dayTimeInfo: ['Study at the library (Knowledge +3)'],
          eveningInfo: ['Talk to Sojiro (Hierophant 1)', '3, 2, 2'],
          miscInfo: '',
        },
        {
          day: 22,
          dayTimeInfo: ['Apply at and work at the convenience store at underground walkway (Charm +2, trophy)'],
          eveningInfo: ['Hierophant 2', '2, 0, 0', '0, 2, 0', '2, 0', '2, 0, 0'],
          miscInfo: 'Yongen-Jaya at night is unlocked',
        },
        {
          day: 23,
          dayTimeInfo: ['Study at the library (Guts +1, Knowledge +1)'],
          eveningInfo: ['Make coffee (Charm +1)'],
          miscInfo: 'Class answer: All of them (Knowledge +1)',
        },
        {
          day: 24,
          dayTimeInfo: ['Get Aojiru from underground walkway drink stand (Charm Rank 2)', 'Apply for and work at Flower shop (Kindness + 2)'],
          eveningInfo: ['Go to the bathhouse in Yongen (Charm + 3)'],
          miscInfo: 'Home shopping (Optional, Share of Spring set recommended)',
        },
        {
          day: 25,
          dayTimeInfo: [
            'Library: Get Alluring Dancer',
            'Buy DVD Player from Yongen secondhand shop',
            'Buy membership at DVD rental store in Shibuya',
            'Borrow X Folders DVD',
            'Work at Flowershop (Kindess rank 2)',
          ],
          eveningInfo: ['Hierophant 3', '2, 0, 0', '0, 2, 0', '2, 0, 2'],
          miscInfo: 'Finish Pirate Legend on the train (Guts +3). Class answer: You unquestionably support it, You have a duty to correct it (Charm +1)',
        },
        {
          day: 26,
          dayTimeInfo: ['Study at the library (Guts rank 2, Knowledge +1)'],
          eveningInfo: ['Watch X Folders (Guts +2)'],
          miscInfo: '',
        },
        {
          day: 27,
          dayTimeInfo: ['Send calling card.'],
          eveningInfo: ['Solve crossword (Knowledge +1).', 'Craft infiltration tools (Proficiency +2)'],
          miscInfo: 'Class answer: Four color theorem (Knowledge +1)',
        },
        {
          day: 28,
          dayTimeInfo: ["Clear Kamoshida's palace."],
          eveningInfo: ['Watch X Folders (Guts +2)'],
          miscInfo: '',
        },
        {
          day: 29,
          dayTimeInfo: ['Turn in X Folders and rent Wraith', 'Chariot 3', '2, 0, 0', '3, 2, 0', '2, 0, 0'],
          eveningInfo: ['Study (Knowledge + 2)'],
          miscInfo: '',
        },
        {
          day: 30,
          dayTimeInfo: ['Watch the movie at Shibuya theatre (Guts +3).'],
          eveningInfo: [
            'Buy materials for infiltration tools if needed.',
            'Craft infiltration tools— reload until you get the bonus point (Proficiency rank 2)',
          ],
          miscInfo: 'Read Alluring Dancer on the train. Class answer: Wonder, Child, A prodigy (Knowledge +1)',
        },
      ] as Array<MonthEvent>,
    } as MonthEvents);
  }

  loadMayData() {
    // May
    this.months.push({
      name: 'May',
      miscMonthInfo: '',
      events: [
        {
          day: 1,
          dayTimeInfo: [],
          eveningInfo: [],
          miscInfo: '',
        },
        {
          day: 2,
          dayTimeInfo: [],
          eveningInfo: [],
          miscInfo: '',
        },
        {
          day: 3,
          dayTimeInfo: [],
          eveningInfo: [],
          miscInfo: '',
        },
        {
          day: 4,
          dayTimeInfo: [],
          eveningInfo: [],
          miscInfo: '',
        },
        {
          day: 5,
          dayTimeInfo: [],
          eveningInfo: [],
          miscInfo: '',
        },
        {
          day: 6,
          dayTimeInfo: [],
          eveningInfo: [],
          miscInfo: '',
        },
        {
          day: 7,
          dayTimeInfo: [],
          eveningInfo: [],
          miscInfo: '',
        },
        {
          day: 8,
          dayTimeInfo: [],
          eveningInfo: [],
          miscInfo: '',
        },
        {
          day: 9,
          dayTimeInfo: [],
          eveningInfo: [],
          miscInfo: '',
        },
        {
          day: 10,
          dayTimeInfo: [],
          eveningInfo: [],
          miscInfo: '',
        },
        {
          day: 11,
          dayTimeInfo: [],
          eveningInfo: [],
          miscInfo: '',
        },
        {
          day: 12,
          dayTimeInfo: [],
          eveningInfo: [],
          miscInfo: '',
        },
        {
          day: 13,
          dayTimeInfo: [],
          eveningInfo: [],
          miscInfo: '',
        },
        {
          day: 14,
          dayTimeInfo: [],
          eveningInfo: [],
          miscInfo: '',
        },
        {
          day: 15,
          dayTimeInfo: [],
          eveningInfo: [],
          miscInfo: '',
        },
        {
          day: 16,
          dayTimeInfo: [],
          eveningInfo: [],
          miscInfo: '',
        },
        {
          day: 17,
          dayTimeInfo: [],
          eveningInfo: [],
          miscInfo: '',
        },
        {
          day: 18,
          dayTimeInfo: [],
          eveningInfo: [],
          miscInfo: '',
        },
        {
          day: 19,
          dayTimeInfo: [],
          eveningInfo: [],
          miscInfo: '',
        },
        {
          day: 20,
          dayTimeInfo: [],
          eveningInfo: [],
          miscInfo: '',
        },
        {
          day: 21,
          dayTimeInfo: [],
          eveningInfo: [],
          miscInfo: '',
        },
        {
          day: 22,
          dayTimeInfo: [],
          eveningInfo: [],
          miscInfo: '',
        },
        {
          day: 23,
          dayTimeInfo: [],
          eveningInfo: [],
          miscInfo: '',
        },
        {
          day: 24,
          dayTimeInfo: [],
          eveningInfo: [],
          miscInfo: '',
        },
        {
          day: 25,
          dayTimeInfo: [],
          eveningInfo: [],
          miscInfo: '',
        },
        {
          day: 26,
          dayTimeInfo: [],
          eveningInfo: [],
          miscInfo: '',
        },
        {
          day: 27,
          dayTimeInfo: [],
          eveningInfo: [],
          miscInfo: '',
        },
        {
          day: 28,
          dayTimeInfo: [],
          eveningInfo: [],
          miscInfo: '',
        },
        {
          day: 29,
          dayTimeInfo: [],
          eveningInfo: [],
          miscInfo: '',
        },
        {
          day: 30,
          dayTimeInfo: [],
          eveningInfo: [],
          miscInfo: '',
        },
        {
          day: 31,
          dayTimeInfo: [],
          eveningInfo: [],
          miscInfo: '',
        },
      ] as Array<MonthEvent>,
    } as MonthEvents);
  }

  loadJuneData() {
    // June
    this.months.push({
      name: 'June',
      miscMonthInfo: '',
      events: [
        {
          day: 1,
          dayTimeInfo: [],
          eveningInfo: [],
          miscInfo: '',
        },
        {
          day: 2,
          dayTimeInfo: [],
          eveningInfo: [],
          miscInfo: '',
        },
        {
          day: 3,
          dayTimeInfo: [],
          eveningInfo: [],
          miscInfo: '',
        },
        {
          day: 4,
          dayTimeInfo: [],
          eveningInfo: [],
          miscInfo: '',
        },
        {
          day: 5,
          dayTimeInfo: [],
          eveningInfo: [],
          miscInfo: '',
        },
        {
          day: 6,
          dayTimeInfo: [],
          eveningInfo: [],
          miscInfo: '',
        },
        {
          day: 7,
          dayTimeInfo: [],
          eveningInfo: [],
          miscInfo: '',
        },
        {
          day: 8,
          dayTimeInfo: [],
          eveningInfo: [],
          miscInfo: '',
        },
        {
          day: 9,
          dayTimeInfo: [],
          eveningInfo: [],
          miscInfo: '',
        },
        {
          day: 10,
          dayTimeInfo: [],
          eveningInfo: [],
          miscInfo: '',
        },
        {
          day: 11,
          dayTimeInfo: [],
          eveningInfo: [],
          miscInfo: '',
        },
        {
          day: 12,
          dayTimeInfo: [],
          eveningInfo: [],
          miscInfo: '',
        },
        {
          day: 13,
          dayTimeInfo: [],
          eveningInfo: [],
          miscInfo: '',
        },
        {
          day: 14,
          dayTimeInfo: [],
          eveningInfo: [],
          miscInfo: '',
        },
        {
          day: 15,
          dayTimeInfo: [],
          eveningInfo: [],
          miscInfo: '',
        },
        {
          day: 16,
          dayTimeInfo: [],
          eveningInfo: [],
          miscInfo: '',
        },
        {
          day: 17,
          dayTimeInfo: [],
          eveningInfo: [],
          miscInfo: '',
        },
        {
          day: 18,
          dayTimeInfo: [],
          eveningInfo: [],
          miscInfo: '',
        },
        {
          day: 19,
          dayTimeInfo: [],
          eveningInfo: [],
          miscInfo: '',
        },
        {
          day: 20,
          dayTimeInfo: [],
          eveningInfo: [],
          miscInfo: '',
        },
        {
          day: 21,
          dayTimeInfo: [],
          eveningInfo: [],
          miscInfo: '',
        },
        {
          day: 22,
          dayTimeInfo: [],
          eveningInfo: [],
          miscInfo: '',
        },
        {
          day: 23,
          dayTimeInfo: [],
          eveningInfo: [],
          miscInfo: '',
        },
        {
          day: 24,
          dayTimeInfo: [],
          eveningInfo: [],
          miscInfo: '',
        },
        {
          day: 25,
          dayTimeInfo: [],
          eveningInfo: [],
          miscInfo: '',
        },
        {
          day: 26,
          dayTimeInfo: [],
          eveningInfo: [],
          miscInfo: '',
        },
        {
          day: 27,
          dayTimeInfo: [],
          eveningInfo: [],
          miscInfo: '',
        },
        {
          day: 28,
          dayTimeInfo: [],
          eveningInfo: [],
          miscInfo: '',
        },
        {
          day: 29,
          dayTimeInfo: [],
          eveningInfo: [],
          miscInfo: '',
        },
        {
          day: 30,
          dayTimeInfo: [],
          eveningInfo: [],
          miscInfo: '',
        },
        {
          day: 31,
          dayTimeInfo: [],
          eveningInfo: [],
          miscInfo: '',
        },
      ] as Array<MonthEvent>,
    } as MonthEvents);
  }

  loadJulyData() {
    // July
    this.months.push({
      name: 'July',
      miscMonthInfo: '',
      events: [
        {
          day: 1,
          dayTimeInfo: [],
          eveningInfo: [],
          miscInfo: '',
        },
        {
          day: 2,
          dayTimeInfo: [],
          eveningInfo: [],
          miscInfo: '',
        },
        {
          day: 3,
          dayTimeInfo: [],
          eveningInfo: [],
          miscInfo: '',
        },
        {
          day: 4,
          dayTimeInfo: [],
          eveningInfo: [],
          miscInfo: '',
        },
        {
          day: 5,
          dayTimeInfo: [],
          eveningInfo: [],
          miscInfo: '',
        },
        {
          day: 6,
          dayTimeInfo: [],
          eveningInfo: [],
          miscInfo: '',
        },
        {
          day: 7,
          dayTimeInfo: [],
          eveningInfo: [],
          miscInfo: '',
        },
        {
          day: 8,
          dayTimeInfo: [],
          eveningInfo: [],
          miscInfo: '',
        },
        {
          day: 9,
          dayTimeInfo: [],
          eveningInfo: [],
          miscInfo: '',
        },
        {
          day: 10,
          dayTimeInfo: [],
          eveningInfo: [],
          miscInfo: '',
        },
        {
          day: 11,
          dayTimeInfo: [],
          eveningInfo: [],
          miscInfo: '',
        },
        {
          day: 12,
          dayTimeInfo: [],
          eveningInfo: [],
          miscInfo: '',
        },
        {
          day: 13,
          dayTimeInfo: [],
          eveningInfo: [],
          miscInfo: '',
        },
        {
          day: 14,
          dayTimeInfo: [],
          eveningInfo: [],
          miscInfo: '',
        },
        {
          day: 15,
          dayTimeInfo: [],
          eveningInfo: [],
          miscInfo: '',
        },
        {
          day: 16,
          dayTimeInfo: [],
          eveningInfo: [],
          miscInfo: '',
        },
        {
          day: 17,
          dayTimeInfo: [],
          eveningInfo: [],
          miscInfo: '',
        },
        {
          day: 18,
          dayTimeInfo: [],
          eveningInfo: [],
          miscInfo: '',
        },
        {
          day: 19,
          dayTimeInfo: [],
          eveningInfo: [],
          miscInfo: '',
        },
        {
          day: 20,
          dayTimeInfo: [],
          eveningInfo: [],
          miscInfo: '',
        },
        {
          day: 21,
          dayTimeInfo: [],
          eveningInfo: [],
          miscInfo: '',
        },
        {
          day: 22,
          dayTimeInfo: [],
          eveningInfo: [],
          miscInfo: '',
        },
        {
          day: 23,
          dayTimeInfo: [],
          eveningInfo: [],
          miscInfo: '',
        },
        {
          day: 24,
          dayTimeInfo: [],
          eveningInfo: [],
          miscInfo: '',
        },
        {
          day: 25,
          dayTimeInfo: [],
          eveningInfo: [],
          miscInfo: '',
        },
        {
          day: 26,
          dayTimeInfo: [],
          eveningInfo: [],
          miscInfo: '',
        },
        {
          day: 27,
          dayTimeInfo: [],
          eveningInfo: [],
          miscInfo: '',
        },
        {
          day: 28,
          dayTimeInfo: [],
          eveningInfo: [],
          miscInfo: '',
        },
        {
          day: 29,
          dayTimeInfo: [],
          eveningInfo: [],
          miscInfo: '',
        },
        {
          day: 30,
          dayTimeInfo: [],
          eveningInfo: [],
          miscInfo: '',
        },
        {
          day: 31,
          dayTimeInfo: [],
          eveningInfo: [],
          miscInfo: '',
        },
      ] as Array<MonthEvent>,
    } as MonthEvents);
  }

  loadAugustData() {
    // August
    this.months.push({
      name: 'August',
      miscMonthInfo: '',
      events: [
        {
          day: 1,
          dayTimeInfo: [],
          eveningInfo: [],
          miscInfo: '',
        },
        {
          day: 2,
          dayTimeInfo: [],
          eveningInfo: [],
          miscInfo: '',
        },
        {
          day: 3,
          dayTimeInfo: [],
          eveningInfo: [],
          miscInfo: '',
        },
        {
          day: 4,
          dayTimeInfo: [],
          eveningInfo: [],
          miscInfo: '',
        },
        {
          day: 5,
          dayTimeInfo: [],
          eveningInfo: [],
          miscInfo: '',
        },
        {
          day: 6,
          dayTimeInfo: [],
          eveningInfo: [],
          miscInfo: '',
        },
        {
          day: 7,
          dayTimeInfo: [],
          eveningInfo: [],
          miscInfo: '',
        },
        {
          day: 8,
          dayTimeInfo: [],
          eveningInfo: [],
          miscInfo: '',
        },
        {
          day: 9,
          dayTimeInfo: [],
          eveningInfo: [],
          miscInfo: '',
        },
        {
          day: 10,
          dayTimeInfo: [],
          eveningInfo: [],
          miscInfo: '',
        },
        {
          day: 11,
          dayTimeInfo: [],
          eveningInfo: [],
          miscInfo: '',
        },
        {
          day: 12,
          dayTimeInfo: [],
          eveningInfo: [],
          miscInfo: '',
        },
        {
          day: 13,
          dayTimeInfo: [],
          eveningInfo: [],
          miscInfo: '',
        },
        {
          day: 14,
          dayTimeInfo: [],
          eveningInfo: [],
          miscInfo: '',
        },
        {
          day: 15,
          dayTimeInfo: [],
          eveningInfo: [],
          miscInfo: '',
        },
        {
          day: 16,
          dayTimeInfo: [],
          eveningInfo: [],
          miscInfo: '',
        },
        {
          day: 17,
          dayTimeInfo: [],
          eveningInfo: [],
          miscInfo: '',
        },
        {
          day: 18,
          dayTimeInfo: [],
          eveningInfo: [],
          miscInfo: '',
        },
        {
          day: 19,
          dayTimeInfo: [],
          eveningInfo: [],
          miscInfo: '',
        },
        {
          day: 20,
          dayTimeInfo: [],
          eveningInfo: [],
          miscInfo: '',
        },
        {
          day: 21,
          dayTimeInfo: [],
          eveningInfo: [],
          miscInfo: '',
        },
        {
          day: 22,
          dayTimeInfo: [],
          eveningInfo: [],
          miscInfo: '',
        },
        {
          day: 23,
          dayTimeInfo: [],
          eveningInfo: [],
          miscInfo: '',
        },
        {
          day: 24,
          dayTimeInfo: [],
          eveningInfo: [],
          miscInfo: '',
        },
        {
          day: 25,
          dayTimeInfo: [],
          eveningInfo: [],
          miscInfo: '',
        },
        {
          day: 26,
          dayTimeInfo: [],
          eveningInfo: [],
          miscInfo: '',
        },
        {
          day: 27,
          dayTimeInfo: [],
          eveningInfo: [],
          miscInfo: '',
        },
        {
          day: 28,
          dayTimeInfo: [],
          eveningInfo: [],
          miscInfo: '',
        },
        {
          day: 29,
          dayTimeInfo: [],
          eveningInfo: [],
          miscInfo: '',
        },
        {
          day: 30,
          dayTimeInfo: [],
          eveningInfo: [],
          miscInfo: '',
        },
        {
          day: 31,
          dayTimeInfo: [],
          eveningInfo: [],
          miscInfo: '',
        },
      ] as Array<MonthEvent>,
    } as MonthEvents);
  }

  loadSeptemberData() {
    // September
    this.months.push({
      name: 'September',
      miscMonthInfo: '',
      events: [
        {
          day: 1,
          dayTimeInfo: [],
          eveningInfo: [],
          miscInfo: '',
        },
        {
          day: 2,
          dayTimeInfo: [],
          eveningInfo: [],
          miscInfo: '',
        },
        {
          day: 3,
          dayTimeInfo: [],
          eveningInfo: [],
          miscInfo: '',
        },
        {
          day: 4,
          dayTimeInfo: [],
          eveningInfo: [],
          miscInfo: '',
        },
        {
          day: 5,
          dayTimeInfo: [],
          eveningInfo: [],
          miscInfo: '',
        },
        {
          day: 6,
          dayTimeInfo: [],
          eveningInfo: [],
          miscInfo: '',
        },
        {
          day: 7,
          dayTimeInfo: [],
          eveningInfo: [],
          miscInfo: '',
        },
        {
          day: 8,
          dayTimeInfo: [],
          eveningInfo: [],
          miscInfo: '',
        },
        {
          day: 9,
          dayTimeInfo: [],
          eveningInfo: [],
          miscInfo: '',
        },
        {
          day: 10,
          dayTimeInfo: [],
          eveningInfo: [],
          miscInfo: '',
        },
        {
          day: 11,
          dayTimeInfo: [],
          eveningInfo: [],
          miscInfo: '',
        },
        {
          day: 12,
          dayTimeInfo: [],
          eveningInfo: [],
          miscInfo: '',
        },
        {
          day: 13,
          dayTimeInfo: [],
          eveningInfo: [],
          miscInfo: '',
        },
        {
          day: 14,
          dayTimeInfo: [],
          eveningInfo: [],
          miscInfo: '',
        },
        {
          day: 15,
          dayTimeInfo: [],
          eveningInfo: [],
          miscInfo: '',
        },
        {
          day: 16,
          dayTimeInfo: [],
          eveningInfo: [],
          miscInfo: '',
        },
        {
          day: 17,
          dayTimeInfo: [],
          eveningInfo: [],
          miscInfo: '',
        },
        {
          day: 18,
          dayTimeInfo: [],
          eveningInfo: [],
          miscInfo: '',
        },
        {
          day: 19,
          dayTimeInfo: [],
          eveningInfo: [],
          miscInfo: '',
        },
        {
          day: 20,
          dayTimeInfo: [],
          eveningInfo: [],
          miscInfo: '',
        },
        {
          day: 21,
          dayTimeInfo: [],
          eveningInfo: [],
          miscInfo: '',
        },
        {
          day: 22,
          dayTimeInfo: [],
          eveningInfo: [],
          miscInfo: '',
        },
        {
          day: 23,
          dayTimeInfo: [],
          eveningInfo: [],
          miscInfo: '',
        },
        {
          day: 24,
          dayTimeInfo: [],
          eveningInfo: [],
          miscInfo: '',
        },
        {
          day: 25,
          dayTimeInfo: [],
          eveningInfo: [],
          miscInfo: '',
        },
        {
          day: 26,
          dayTimeInfo: [],
          eveningInfo: [],
          miscInfo: '',
        },
        {
          day: 27,
          dayTimeInfo: [],
          eveningInfo: [],
          miscInfo: '',
        },
        {
          day: 28,
          dayTimeInfo: [],
          eveningInfo: [],
          miscInfo: '',
        },
        {
          day: 29,
          dayTimeInfo: [],
          eveningInfo: [],
          miscInfo: '',
        },
        {
          day: 30,
          dayTimeInfo: [],
          eveningInfo: [],
          miscInfo: '',
        },
        {
          day: 31,
          dayTimeInfo: [],
          eveningInfo: [],
          miscInfo: '',
        },
      ] as Array<MonthEvent>,
    } as MonthEvents);
  }

  loadOctoberData() {
    // October
    this.months.push({
      name: 'October',
      miscMonthInfo: '',
      events: [
        {
          day: 1,
          dayTimeInfo: [],
          eveningInfo: [],
          miscInfo: '',
        },
        {
          day: 2,
          dayTimeInfo: [],
          eveningInfo: [],
          miscInfo: '',
        },
        {
          day: 3,
          dayTimeInfo: [],
          eveningInfo: [],
          miscInfo: '',
        },
        {
          day: 4,
          dayTimeInfo: [],
          eveningInfo: [],
          miscInfo: '',
        },
        {
          day: 5,
          dayTimeInfo: [],
          eveningInfo: [],
          miscInfo: '',
        },
        {
          day: 6,
          dayTimeInfo: [],
          eveningInfo: [],
          miscInfo: '',
        },
        {
          day: 7,
          dayTimeInfo: [],
          eveningInfo: [],
          miscInfo: '',
        },
        {
          day: 8,
          dayTimeInfo: [],
          eveningInfo: [],
          miscInfo: '',
        },
        {
          day: 9,
          dayTimeInfo: [],
          eveningInfo: [],
          miscInfo: '',
        },
        {
          day: 10,
          dayTimeInfo: [],
          eveningInfo: [],
          miscInfo: '',
        },
        {
          day: 11,
          dayTimeInfo: [],
          eveningInfo: [],
          miscInfo: '',
        },
        {
          day: 12,
          dayTimeInfo: [],
          eveningInfo: [],
          miscInfo: '',
        },
        {
          day: 13,
          dayTimeInfo: [],
          eveningInfo: [],
          miscInfo: '',
        },
        {
          day: 14,
          dayTimeInfo: [],
          eveningInfo: [],
          miscInfo: '',
        },
        {
          day: 15,
          dayTimeInfo: [],
          eveningInfo: [],
          miscInfo: '',
        },
        {
          day: 16,
          dayTimeInfo: [],
          eveningInfo: [],
          miscInfo: '',
        },
        {
          day: 17,
          dayTimeInfo: [],
          eveningInfo: [],
          miscInfo: '',
        },
        {
          day: 18,
          dayTimeInfo: [],
          eveningInfo: [],
          miscInfo: '',
        },
        {
          day: 19,
          dayTimeInfo: [],
          eveningInfo: [],
          miscInfo: '',
        },
        {
          day: 20,
          dayTimeInfo: [],
          eveningInfo: [],
          miscInfo: '',
        },
        {
          day: 21,
          dayTimeInfo: [],
          eveningInfo: [],
          miscInfo: '',
        },
        {
          day: 22,
          dayTimeInfo: [],
          eveningInfo: [],
          miscInfo: '',
        },
        {
          day: 23,
          dayTimeInfo: [],
          eveningInfo: [],
          miscInfo: '',
        },
        {
          day: 24,
          dayTimeInfo: [],
          eveningInfo: [],
          miscInfo: '',
        },
        {
          day: 25,
          dayTimeInfo: [],
          eveningInfo: [],
          miscInfo: '',
        },
        {
          day: 26,
          dayTimeInfo: [],
          eveningInfo: [],
          miscInfo: '',
        },
        {
          day: 27,
          dayTimeInfo: [],
          eveningInfo: [],
          miscInfo: '',
        },
        {
          day: 28,
          dayTimeInfo: [],
          eveningInfo: [],
          miscInfo: '',
        },
        {
          day: 29,
          dayTimeInfo: [],
          eveningInfo: [],
          miscInfo: '',
        },
        {
          day: 30,
          dayTimeInfo: [],
          eveningInfo: [],
          miscInfo: '',
        },
        {
          day: 31,
          dayTimeInfo: [],
          eveningInfo: [],
          miscInfo: '',
        },
      ] as Array<MonthEvent>,
    } as MonthEvents);
  }

  loadNovemberData() {
    // November
    this.months.push({
      name: 'November',
      miscMonthInfo: '',
      events: [
        {
          day: 1,
          dayTimeInfo: [],
          eveningInfo: [],
          miscInfo: '',
        },
        {
          day: 2,
          dayTimeInfo: [],
          eveningInfo: [],
          miscInfo: '',
        },
        {
          day: 3,
          dayTimeInfo: [],
          eveningInfo: [],
          miscInfo: '',
        },
        {
          day: 4,
          dayTimeInfo: [],
          eveningInfo: [],
          miscInfo: '',
        },
        {
          day: 5,
          dayTimeInfo: [],
          eveningInfo: [],
          miscInfo: '',
        },
        {
          day: 6,
          dayTimeInfo: [],
          eveningInfo: [],
          miscInfo: '',
        },
        {
          day: 7,
          dayTimeInfo: [],
          eveningInfo: [],
          miscInfo: '',
        },
        {
          day: 8,
          dayTimeInfo: [],
          eveningInfo: [],
          miscInfo: '',
        },
        {
          day: 9,
          dayTimeInfo: [],
          eveningInfo: [],
          miscInfo: '',
        },
        {
          day: 10,
          dayTimeInfo: [],
          eveningInfo: [],
          miscInfo: '',
        },
        {
          day: 11,
          dayTimeInfo: [],
          eveningInfo: [],
          miscInfo: '',
        },
        {
          day: 12,
          dayTimeInfo: [],
          eveningInfo: [],
          miscInfo: '',
        },
        {
          day: 13,
          dayTimeInfo: [],
          eveningInfo: [],
          miscInfo: '',
        },
        {
          day: 14,
          dayTimeInfo: [],
          eveningInfo: [],
          miscInfo: '',
        },
        {
          day: 15,
          dayTimeInfo: [],
          eveningInfo: [],
          miscInfo: '',
        },
        {
          day: 16,
          dayTimeInfo: [],
          eveningInfo: [],
          miscInfo: '',
        },
        {
          day: 17,
          dayTimeInfo: [],
          eveningInfo: [],
          miscInfo: '',
        },
        {
          day: 18,
          dayTimeInfo: [],
          eveningInfo: [],
          miscInfo: '',
        },
        {
          day: 19,
          dayTimeInfo: [],
          eveningInfo: [],
          miscInfo: '',
        },
        {
          day: 20,
          dayTimeInfo: [],
          eveningInfo: [],
          miscInfo: '',
        },
        {
          day: 21,
          dayTimeInfo: [],
          eveningInfo: [],
          miscInfo: '',
        },
        {
          day: 22,
          dayTimeInfo: [],
          eveningInfo: [],
          miscInfo: '',
        },
        {
          day: 23,
          dayTimeInfo: [],
          eveningInfo: [],
          miscInfo: '',
        },
        {
          day: 24,
          dayTimeInfo: [],
          eveningInfo: [],
          miscInfo: '',
        },
        {
          day: 25,
          dayTimeInfo: [],
          eveningInfo: [],
          miscInfo: '',
        },
        {
          day: 26,
          dayTimeInfo: [],
          eveningInfo: [],
          miscInfo: '',
        },
        {
          day: 27,
          dayTimeInfo: [],
          eveningInfo: [],
          miscInfo: '',
        },
        {
          day: 28,
          dayTimeInfo: [],
          eveningInfo: [],
          miscInfo: '',
        },
        {
          day: 29,
          dayTimeInfo: [],
          eveningInfo: [],
          miscInfo: '',
        },
        {
          day: 30,
          dayTimeInfo: [],
          eveningInfo: [],
          miscInfo: '',
        },
        {
          day: 31,
          dayTimeInfo: [],
          eveningInfo: [],
          miscInfo: '',
        },
      ] as Array<MonthEvent>,
    } as MonthEvents);
  }

  loadDecemberData() {
    // December
    this.months.push({
      name: 'December',
      miscMonthInfo: '',
      events: [
        {
          day: 1,
          dayTimeInfo: [],
          eveningInfo: [],
          miscInfo: '',
        },
        {
          day: 2,
          dayTimeInfo: [],
          eveningInfo: [],
          miscInfo: '',
        },
        {
          day: 3,
          dayTimeInfo: [],
          eveningInfo: [],
          miscInfo: '',
        },
        {
          day: 4,
          dayTimeInfo: [],
          eveningInfo: [],
          miscInfo: '',
        },
        {
          day: 5,
          dayTimeInfo: [],
          eveningInfo: [],
          miscInfo: '',
        },
        {
          day: 6,
          dayTimeInfo: [],
          eveningInfo: [],
          miscInfo: '',
        },
        {
          day: 7,
          dayTimeInfo: [],
          eveningInfo: [],
          miscInfo: '',
        },
        {
          day: 8,
          dayTimeInfo: [],
          eveningInfo: [],
          miscInfo: '',
        },
        {
          day: 9,
          dayTimeInfo: [],
          eveningInfo: [],
          miscInfo: '',
        },
        {
          day: 10,
          dayTimeInfo: [],
          eveningInfo: [],
          miscInfo: '',
        },
        {
          day: 11,
          dayTimeInfo: [],
          eveningInfo: [],
          miscInfo: '',
        },
        {
          day: 12,
          dayTimeInfo: [],
          eveningInfo: [],
          miscInfo: '',
        },
        {
          day: 13,
          dayTimeInfo: [],
          eveningInfo: [],
          miscInfo: '',
        },
        {
          day: 14,
          dayTimeInfo: [],
          eveningInfo: [],
          miscInfo: '',
        },
        {
          day: 15,
          dayTimeInfo: [],
          eveningInfo: [],
          miscInfo: '',
        },
        {
          day: 16,
          dayTimeInfo: [],
          eveningInfo: [],
          miscInfo: '',
        },
        {
          day: 17,
          dayTimeInfo: [],
          eveningInfo: [],
          miscInfo: '',
        },
        {
          day: 18,
          dayTimeInfo: [],
          eveningInfo: [],
          miscInfo: '',
        },
        {
          day: 19,
          dayTimeInfo: [],
          eveningInfo: [],
          miscInfo: '',
        },
        {
          day: 20,
          dayTimeInfo: [],
          eveningInfo: [],
          miscInfo: '',
        },
        {
          day: 21,
          dayTimeInfo: [],
          eveningInfo: [],
          miscInfo: '',
        },
        {
          day: 22,
          dayTimeInfo: [],
          eveningInfo: [],
          miscInfo: '',
        },
        {
          day: 23,
          dayTimeInfo: [],
          eveningInfo: [],
          miscInfo: '',
        },
        {
          day: 24,
          dayTimeInfo: [],
          eveningInfo: [],
          miscInfo: '',
        },
        {
          day: 25,
          dayTimeInfo: [],
          eveningInfo: [],
          miscInfo: '',
        },
        {
          day: 26,
          dayTimeInfo: [],
          eveningInfo: [],
          miscInfo: '',
        },
        {
          day: 27,
          dayTimeInfo: [],
          eveningInfo: [],
          miscInfo: '',
        },
        {
          day: 28,
          dayTimeInfo: [],
          eveningInfo: [],
          miscInfo: '',
        },
        {
          day: 29,
          dayTimeInfo: [],
          eveningInfo: [],
          miscInfo: '',
        },
        {
          day: 30,
          dayTimeInfo: [],
          eveningInfo: [],
          miscInfo: '',
        },
        {
          day: 31,
          dayTimeInfo: [],
          eveningInfo: [],
          miscInfo: '',
        },
      ] as Array<MonthEvent>,
    } as MonthEvents);
  }

  loadJanuaryData() {
    // January
    this.months.push({
      name: 'January',
      miscMonthInfo: '',
      events: [
        {
          day: 1,
          dayTimeInfo: [],
          eveningInfo: [],
          miscInfo: '',
        },
        {
          day: 2,
          dayTimeInfo: [],
          eveningInfo: [],
          miscInfo: '',
        },
        {
          day: 3,
          dayTimeInfo: [],
          eveningInfo: [],
          miscInfo: '',
        },
        {
          day: 4,
          dayTimeInfo: [],
          eveningInfo: [],
          miscInfo: '',
        },
        {
          day: 5,
          dayTimeInfo: [],
          eveningInfo: [],
          miscInfo: '',
        },
        {
          day: 6,
          dayTimeInfo: [],
          eveningInfo: [],
          miscInfo: '',
        },
        {
          day: 7,
          dayTimeInfo: [],
          eveningInfo: [],
          miscInfo: '',
        },
        {
          day: 8,
          dayTimeInfo: [],
          eveningInfo: [],
          miscInfo: '',
        },
        {
          day: 9,
          dayTimeInfo: [],
          eveningInfo: [],
          miscInfo: '',
        },
        {
          day: 10,
          dayTimeInfo: [],
          eveningInfo: [],
          miscInfo: '',
        },
        {
          day: 11,
          dayTimeInfo: [],
          eveningInfo: [],
          miscInfo: '',
        },
        {
          day: 12,
          dayTimeInfo: [],
          eveningInfo: [],
          miscInfo: '',
        },
        {
          day: 13,
          dayTimeInfo: [],
          eveningInfo: [],
          miscInfo: '',
        },
        {
          day: 14,
          dayTimeInfo: [],
          eveningInfo: [],
          miscInfo: '',
        },
        {
          day: 15,
          dayTimeInfo: [],
          eveningInfo: [],
          miscInfo: '',
        },
        {
          day: 16,
          dayTimeInfo: [],
          eveningInfo: [],
          miscInfo: '',
        },
        {
          day: 17,
          dayTimeInfo: [],
          eveningInfo: [],
          miscInfo: '',
        },
        {
          day: 18,
          dayTimeInfo: [],
          eveningInfo: [],
          miscInfo: '',
        },
        {
          day: 19,
          dayTimeInfo: [],
          eveningInfo: [],
          miscInfo: '',
        },
        {
          day: 20,
          dayTimeInfo: [],
          eveningInfo: [],
          miscInfo: '',
        },
        {
          day: 21,
          dayTimeInfo: [],
          eveningInfo: [],
          miscInfo: '',
        },
        {
          day: 22,
          dayTimeInfo: [],
          eveningInfo: [],
          miscInfo: '',
        },
        {
          day: 23,
          dayTimeInfo: [],
          eveningInfo: [],
          miscInfo: '',
        },
        {
          day: 24,
          dayTimeInfo: [],
          eveningInfo: [],
          miscInfo: '',
        },
        {
          day: 25,
          dayTimeInfo: [],
          eveningInfo: [],
          miscInfo: '',
        },
        {
          day: 26,
          dayTimeInfo: [],
          eveningInfo: [],
          miscInfo: '',
        },
        {
          day: 27,
          dayTimeInfo: [],
          eveningInfo: [],
          miscInfo: '',
        },
        {
          day: 28,
          dayTimeInfo: [],
          eveningInfo: [],
          miscInfo: '',
        },
        {
          day: 29,
          dayTimeInfo: [],
          eveningInfo: [],
          miscInfo: '',
        },
        {
          day: 30,
          dayTimeInfo: [],
          eveningInfo: [],
          miscInfo: '',
        },
        {
          day: 31,
          dayTimeInfo: [],
          eveningInfo: [],
          miscInfo: '',
        },
      ] as Array<MonthEvent>,
    } as MonthEvents);
  }

  loadFebruaryData() {
    // February
    this.months.push({
      name: 'February',
      miscMonthInfo: '',
      events: [
        {
          day: 1,
          dayTimeInfo: [],
          eveningInfo: [],
          miscInfo: '',
        },
        {
          day: 2,
          dayTimeInfo: [],
          eveningInfo: [],
          miscInfo: '',
        },
        {
          day: 3,
          dayTimeInfo: [],
          eveningInfo: [],
          miscInfo: '',
        },
        {
          day: 4,
          dayTimeInfo: [],
          eveningInfo: [],
          miscInfo: '',
        },
        {
          day: 5,
          dayTimeInfo: [],
          eveningInfo: [],
          miscInfo: '',
        },
        {
          day: 6,
          dayTimeInfo: [],
          eveningInfo: [],
          miscInfo: '',
        },
        {
          day: 7,
          dayTimeInfo: [],
          eveningInfo: [],
          miscInfo: '',
        },
        {
          day: 8,
          dayTimeInfo: [],
          eveningInfo: [],
          miscInfo: '',
        },
        {
          day: 9,
          dayTimeInfo: [],
          eveningInfo: [],
          miscInfo: '',
        },
        {
          day: 10,
          dayTimeInfo: [],
          eveningInfo: [],
          miscInfo: '',
        },
        {
          day: 11,
          dayTimeInfo: [],
          eveningInfo: [],
          miscInfo: '',
        },
        {
          day: 12,
          dayTimeInfo: [],
          eveningInfo: [],
          miscInfo: '',
        },
        {
          day: 13,
          dayTimeInfo: [],
          eveningInfo: [],
          miscInfo: '',
        },
        {
          day: 14,
          dayTimeInfo: [],
          eveningInfo: [],
          miscInfo: '',
        },
        {
          day: 15,
          dayTimeInfo: [],
          eveningInfo: [],
          miscInfo: '',
        },
        {
          day: 16,
          dayTimeInfo: [],
          eveningInfo: [],
          miscInfo: '',
        },
        {
          day: 17,
          dayTimeInfo: [],
          eveningInfo: [],
          miscInfo: '',
        },
        {
          day: 18,
          dayTimeInfo: [],
          eveningInfo: [],
          miscInfo: '',
        },
        {
          day: 19,
          dayTimeInfo: [],
          eveningInfo: [],
          miscInfo: '',
        },
        {
          day: 20,
          dayTimeInfo: [],
          eveningInfo: [],
          miscInfo: '',
        },
        {
          day: 21,
          dayTimeInfo: [],
          eveningInfo: [],
          miscInfo: '',
        },
        {
          day: 22,
          dayTimeInfo: [],
          eveningInfo: [],
          miscInfo: '',
        },
        {
          day: 23,
          dayTimeInfo: [],
          eveningInfo: [],
          miscInfo: '',
        },
        {
          day: 24,
          dayTimeInfo: [],
          eveningInfo: [],
          miscInfo: '',
        },
        {
          day: 25,
          dayTimeInfo: [],
          eveningInfo: [],
          miscInfo: '',
        },
        {
          day: 26,
          dayTimeInfo: [],
          eveningInfo: [],
          miscInfo: '',
        },
        {
          day: 27,
          dayTimeInfo: [],
          eveningInfo: [],
          miscInfo: '',
        },
        {
          day: 28,
          dayTimeInfo: [],
          eveningInfo: [],
          miscInfo: '',
        },
        {
          day: 29,
          dayTimeInfo: [],
          eveningInfo: [],
          miscInfo: '',
        },
        {
          day: 30,
          dayTimeInfo: [],
          eveningInfo: [],
          miscInfo: '',
        },
        {
          day: 31,
          dayTimeInfo: [],
          eveningInfo: [],
          miscInfo: '',
        },
      ] as Array<MonthEvent>,
    } as MonthEvents);
  }

  loadMarchData() {
    // March
    this.months.push({
      name: 'March',
      miscMonthInfo: '',
      events: [
        {
          day: 1,
          dayTimeInfo: [],
          eveningInfo: [],
          miscInfo: '',
        },
        {
          day: 2,
          dayTimeInfo: [],
          eveningInfo: [],
          miscInfo: '',
        },
        {
          day: 3,
          dayTimeInfo: [],
          eveningInfo: [],
          miscInfo: '',
        },
        {
          day: 4,
          dayTimeInfo: [],
          eveningInfo: [],
          miscInfo: '',
        },
        {
          day: 5,
          dayTimeInfo: [],
          eveningInfo: [],
          miscInfo: '',
        },
        {
          day: 6,
          dayTimeInfo: [],
          eveningInfo: [],
          miscInfo: '',
        },
        {
          day: 7,
          dayTimeInfo: [],
          eveningInfo: [],
          miscInfo: '',
        },
        {
          day: 8,
          dayTimeInfo: [],
          eveningInfo: [],
          miscInfo: '',
        },
        {
          day: 9,
          dayTimeInfo: [],
          eveningInfo: [],
          miscInfo: '',
        },
        {
          day: 10,
          dayTimeInfo: [],
          eveningInfo: [],
          miscInfo: '',
        },
        {
          day: 11,
          dayTimeInfo: [],
          eveningInfo: [],
          miscInfo: '',
        },
        {
          day: 12,
          dayTimeInfo: [],
          eveningInfo: [],
          miscInfo: '',
        },
        {
          day: 13,
          dayTimeInfo: [],
          eveningInfo: [],
          miscInfo: '',
        },
        {
          day: 14,
          dayTimeInfo: [],
          eveningInfo: [],
          miscInfo: '',
        },
        {
          day: 15,
          dayTimeInfo: [],
          eveningInfo: [],
          miscInfo: '',
        },
        {
          day: 16,
          dayTimeInfo: [],
          eveningInfo: [],
          miscInfo: '',
        },
        {
          day: 17,
          dayTimeInfo: [],
          eveningInfo: [],
          miscInfo: '',
        },
        {
          day: 18,
          dayTimeInfo: [],
          eveningInfo: [],
          miscInfo: '',
        },
        {
          day: 19,
          dayTimeInfo: [],
          eveningInfo: [],
          miscInfo: '',
        },
        {
          day: 20,
          dayTimeInfo: [],
          eveningInfo: [],
          miscInfo: '',
        },
        {
          day: 21,
          dayTimeInfo: [],
          eveningInfo: [],
          miscInfo: '',
        },
        {
          day: 22,
          dayTimeInfo: [],
          eveningInfo: [],
          miscInfo: '',
        },
        {
          day: 23,
          dayTimeInfo: [],
          eveningInfo: [],
          miscInfo: '',
        },
        {
          day: 24,
          dayTimeInfo: [],
          eveningInfo: [],
          miscInfo: '',
        },
        {
          day: 25,
          dayTimeInfo: [],
          eveningInfo: [],
          miscInfo: '',
        },
        {
          day: 26,
          dayTimeInfo: [],
          eveningInfo: [],
          miscInfo: '',
        },
        {
          day: 27,
          dayTimeInfo: [],
          eveningInfo: [],
          miscInfo: '',
        },
        {
          day: 28,
          dayTimeInfo: [],
          eveningInfo: [],
          miscInfo: '',
        },
        {
          day: 29,
          dayTimeInfo: [],
          eveningInfo: [],
          miscInfo: '',
        },
        {
          day: 30,
          dayTimeInfo: [],
          eveningInfo: [],
          miscInfo: '',
        },
        {
          day: 31,
          dayTimeInfo: [],
          eveningInfo: [],
          miscInfo: '',
        },
      ] as Array<MonthEvent>,
    } as MonthEvents);
  }
}
