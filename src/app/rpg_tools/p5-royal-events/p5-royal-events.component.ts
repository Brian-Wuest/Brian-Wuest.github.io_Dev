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
      miscMonthInfo: 'Tons of cutscenes this month, try to keep up with schedule.',
      exitStats: ['Knowledge: 1, Guts: 2, Proficiency: 2, Kindness: 2, Charm: 2', 'Hierophant: 3, Lovers: 1, Chariot: 3, Death: 1'],
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
      miscMonthInfo: 'You must keep on track for the Chariot and Temperance confidants.',
      exitStats: [
        'Knowledge: 3, Guts: 3, Proficiency: 3, Kindness: 2, Charm: 2',
        'Hierophant: 3, Lovers: 4, Chariot: 5, Death: 5, Temperance: 1, Moon: 2, Sun: 1, Faith: 1, Consultant: 2',
      ],
      events: [
        {
          day: 1,
          dayTimeInfo: [
            'Check TV for home shopping (Optional, Muscle set recommended)',
            'Get Aojiru (Proficiency +1)',
            'Death 2, requires Guts rank 2!',
            '2, 0, 0',
            '2, 0, 0',
            '2, 0, 2',
          ],
          eveningInfo: ['Yongen Bathhouse (Charm +3)'],
          miscInfo: '',
        },
        {
          day: 2,
          dayTimeInfo: ['Story segment'],
          eveningInfo: ['Solve crossword (Knowledge +1). Study (Knowledge rank 2)'],
          miscInfo: '',
        },
        {
          day: 3,
          dayTimeInfo: ['Story segment'],
          eveningInfo: ['Watch Wraith (Kindness +2)'],
          miscInfo: '',
        },
        {
          day: 4,
          dayTimeInfo: ['Story segment'],
          eveningInfo: ['Craft infiltration tools (Proficiency +2)'],
          miscInfo: "Have at least 4 lockpicks for the locked chests in Madarame's palace",
        },
        {
          day: 5,
          dayTimeInfo: ['Story segment'],
          eveningInfo: ['Feed plant (Kindness +2)', 'Save your game and watch Wrait (Kindness +2)'],
          miscInfo: '',
        },
        {
          day: 6,
          dayTimeInfo: [
            'Buy all books at Shibuya bookstore',
            'Replace Wraith and borrow Bubbly Hills 90210',
            'Lovers 2 (requires Kindness Rank 2',
            '3, 3, 2',
            '2, 3, 2',
            '2, 3',
            '3, 3',
            '2, 2, 2',
          ],
          eveningInfo: ['Talk to the man making speach at central square', 'Apply and work at beef boal (Proficiency +2, Prereq for SUN)'],
          miscInfo: 'Class Event: (Knowledge +1), make sure to re-load to try to dodge the chaulk to get Charm +2',
        },
        {
          day: 7,
          dayTimeInfo: ['Mementos tutorial.'],
          eveningInfo: ['Study at Leblanc (Knowledge +2)'],
          miscInfo: 'Class answer: Fatal woman (Knowledge +1)',
        },
        {
          day: 8,
          dayTimeInfo: ['Home shopping (Optional, Plant Nutrient set recommended)', 'Story segment'],
          eveningInfo: ['Get Aojiru (Guts +1)', 'Work at beef bowl, SUN Prereq'],
          miscInfo: '',
        },
        {
          day: 9,
          dayTimeInfo: ['Death 3 (Guts +1):', '0, 0', '0, 0', '2, 0, 2', '2, 0, 0'],
          eveningInfo: ["Accept Panther's invitation for a study hangout (Knowledge +3)"],
          miscInfo: 'Receive Mementos mission from Mishima',
        },
        {
          day: 10,
          dayTimeInfo: [
            'Lovers 3 (Inokashira Park unlocked):',
            '0, 0',
            '0, 0, 0',
            '0, 0, 0',
            '0, 0, 0',
            '2, 2, 3',
            '0, 0, 0',
            '0, 0',
            '2, 3',
            '0, 2',
            '2, 0, 0',
          ],
          eveningInfo: ['Solve crossword (Knowledge +1)', "Accept Skull's invitation to study (Knowledge +3)"],
          miscInfo: 'Class answer: The Heian period (Knowledge +1)',
        },
        {
          day: 11,
          dayTimeInfo: ['Minamoto no Yoshitsune', 'Minamoto no Toritomo, Yoritomo wonn, the weak'],
          eveningInfo: ['Unavailable'],
          miscInfo: 'Finals week begings!',
        },
        {
          day: 12,
          dayTimeInfo: ['Cognition', 'Both'],
          eveningInfo: ['Unavailable'],
          miscInfo: '',
        },
        {
          day: 13,
          dayTimeInfo: ["The Devil's Dictionary", 'Femma Fatale'],
          eveningInfo: ['Unavailable'],
          miscInfo: '',
        },
        {
          day: 14,
          dayTimeInfo: ['Last day of midterms'],
          eveningInfo: ['Watch Bubbly Hills (Charm +2)'],
          miscInfo: '',
        },
        {
          day: 15,
          dayTimeInfo: ['Home shopping (optional, no recommendations)', 'Story segment'],
          eveningInfo: ['Study at Leblanc (Knowledge +2)'],
          miscInfo: '',
        },
        {
          day: 16,
          dayTimeInfo: ['Madarame Palace introduction'],
          eveningInfo: ['Unavailable'],
          miscInfo: 'Class answer: The Placebo effect (Knowledge +1)',
        },
        {
          day: 17,
          dayTimeInfo: ['Story segment'],
          eveningInfo: ['Save game. Craft infiltration tools, reload until you make extra (Proficiency rank 3)'],
          miscInfo: '',
        },
        {
          day: 18,
          dayTimeInfo: ['Death 4 (Guts +1):', '0, 2', '3, 2, 2', '2, 0, 0'],
          eveningInfo: ['Solve crossword (Knowledge +1).', 'Talk to Yoshida at Central Square (SUN Prereq)'],
          miscInfo: '',
        },
        {
          day: 19,
          dayTimeInfo: ['Study at the diner, order the sandwich set (Guts +1, Knowledge +2)'],
          eveningInfo: ['Answer TV quiz, “Make noise to cause neurosis” (Knowledge +1)', 'Bathhouse (Charm +2, Guts +1)'],
          miscInfo: 'Class answer: Katsushika Hokusai* (Knowledge +1)',
        },
        {
          day: 20,
          dayTimeInfo: ['Buy medicine and equipment as you see fit.', 'Madarame Palace infiltration route part 1 (until the roadblock at the central garden)'],
          eveningInfo: ['Study (Knowledge +2)'],
          miscInfo: 'Test results (Charm +2), Make sure to get the Treasure Demon today, weak to nuclear attacks',
        },
        {
          day: 21,
          dayTimeInfo: ['Madarame Palace part 2'],
          eveningInfo: ['Feed plant (Kindness +2)', ' Watch Bubbly Hills (Charm +2)'],
          miscInfo: 'Train reading: Alluring Dancer (Charm +3), Class answer: 1:1.414 (Knowledge +1)',
        },
        {
          day: 22,
          dayTimeInfo: ['Home shopping (optional, no recommendations)', 'Aojiru (Kindness +1)', 'Chariot 4:', '0, 2, 0', '3, 2, 3'],
          eveningInfo: ['Bathhouse (Charm +3)'],
          miscInfo: '',
        },
        {
          day: 23,
          dayTimeInfo: ["Secure infiltration route at Madarame's Palace"],
          eveningInfo: ['Save. Craft infiltration tools, reload until you get the bonus (Proficiency +3)'],
          miscInfo: 'Together, senses, senses coming together (Knowledge +1)',
        },
        {
          day: 24,
          dayTimeInfo: ['Buy equipment and medicine as needed', 'Return Alluring Dancer, take Gallant Rogue', 'Send Calling Card!'],
          eveningInfo: ['Study (Knowledge +2)'],
          miscInfo: 'Train reading: Buchiko',
        },
        {
          day: 25,
          dayTimeInfo: ['Madarame Palace cleared'],
          eveningInfo: ['Study (Knowledge rank 3)'],
          miscInfo: '',
        },
        {
          day: 26,
          dayTimeInfo: [
            'Receive Mementos mission. Travel to Yongen-Jaya. Talk to the mother and child in the alleyway near Sojiro’s house, then the old man listening to the radio by the bathhouse near the end of the alley to receive target name',
            'Chariot: 5',
            '2, 3',
            '2, 2, 0',
            '2, 3',
            '2, 0, 0',
          ],
          eveningInfo: ['TV Quiz show “Queen of evidence” (Knowledge +1)', 'Solve crossword (Knowledge +1)', 'Talk to Yoshida (Sun 1)'],
          miscInfo: 'Class answer: Arther Conan Doyle (Knowledge +1)',
        },
        {
          day: 27,
          dayTimeInfo: ['Death 5 (Guts +1)', '0, 0', '0, 0', '3, 2, 0', '2, 0, 0'],
          eveningInfo: ['Story segment'],
          miscInfo: '',
        },
        {
          day: 28,
          dayTimeInfo: [
            'Talk to Kawakami on the second floor in front of the faculty office (Temperance prerequisite)',
            'Lovers 4:',
            '3, 0, 2',
            '2, 3, 0',
            '3, 2, 0',
            '3, 2',
            '0, 0, 3',
            '2, 0, 2',
          ],
          eveningInfo: [
            'Make sure you have a chariot and a lovers persona.',
            'Attempt Big Bang Challenge (Guts Rank 3, Knowledge +1, Charm +1, Proficiency + 1',
            "Accept Skull's invitation",
          ],
          miscInfo: '',
        },
        {
          day: 29,
          dayTimeInfo: [
            'Harajuku date with Chariot, Lovers, Moon',
            '3, 0, 1 (For Moon)',
            '3, 2, 3 (For Lovers and Chariot)',
            'Home shopping (optional, amulet set recommended)',
          ],
          eveningInfo: ['Aojiru (Knowledge + 1)', 'Call Kawakami (Requires Guts rank 3, Temperance 1)'],
          miscInfo: '',
        },
        {
          day: 30,
          dayTimeInfo: ['Story segment'],
          eveningInfo: ['Study at diner, order steak (Knowledge +1, Kindness +1)'],
          miscInfo: '',
        },
        {
          day: 31,
          dayTimeInfo: ['Buy equipment and medicine as you see fit', 'Enter Mementos (Note: Walk out with at least 80K yen'],
          eveningInfo: ['Solve crossword (Knowledge +1)', 'Study (Knowledge +2)'],
          miscInfo: 'Class answer: John Silver (Knowledge +1)',
        },
      ] as Array<MonthEvent>,
    } as MonthEvents);
  }

  loadJuneData() {
    // June
    this.months.push({
      name: 'June',
      miscMonthInfo: '',
      exitStats: [],
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
      exitStats: [],
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
      exitStats: [],
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
      exitStats: [],
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
      exitStats: [],
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
      exitStats: [],
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
      exitStats: [],
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
      exitStats: [],
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
      exitStats: [],
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
      exitStats: [],
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
