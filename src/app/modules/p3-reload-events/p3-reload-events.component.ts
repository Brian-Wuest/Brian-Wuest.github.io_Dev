import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { MonthEvent } from '../p5-royal-events/models/Event';
import { MonthEvents } from '../p5-royal-events/models/MonthEvents';

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
          miscInfo: ['Question Answer: Vivid carp streamers.'],
        },
        {
          day: 9,
          dayTimeInfo: ['Stay Awake in class.'],
          eveningInfo: ['Mandatory Story Battle.'],
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
          miscInfo: ['Question Answer: Middens.'],
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
          miscInfo: ['Tartarus Tutorial.'],
        },
        {
          day: 21,
          dayTimeInfo: [
            'Do not spend money on weapons, you will need the money in order to go to the Arcade.',
            'Head to Iwatodai Strip Mall and Buy a Weird Takoyaki from Octopia. (Can be done on a different day if you lack the funds)',
            'Paulownia Mall Arcade - Play House of the Deceased.',
          ],
          eveningInfo: ['Head to Tartarus.'],
          miscInfo: ['Stay Awake in class.', 'Obtain 40,000 Yen worth of materials (minimum)'],
        },
        {
          day: 22,
          dayTimeInfo: ['Magician Rank 1'],
          eveningInfo: ['Sell all of your materials. (If You are holding less than 40,000 Yen, reload)', 'Paulownia Mall Karaoke - Sing solo karaoke.'],
          miscInfo: [''],
        },
        {
          day: 23,
          dayTimeInfo: ['Join the Track Team. (Chariot Rank 1)', 'Event with Yuko. (1,1)'],
          eveningInfo: ['Iwatodai Dorm 2F Vending Machine - Buy Mad Bull.', 'Paulownia Mall Arcade - Play High School of Youth.'],
          miscInfo: [''],
        },
        {
          day: 24,
          dayTimeInfo: ['Hang out with Kazushi. (2, Any, Any) (Chariot Rank 2)', 'Event with Yuko. (1,1, Any) (Strength Rank 1)'],
          eveningInfo: ['Paulownia Mall Arcade - Play House of the Deceased.'],
          miscInfo: [''],
        },
        {
          day: 25,
          dayTimeInfo: [
            'Iwatodai Strip Mall - Enter Bookworms.',
            'Gekkoukan High School Corridor - Obtain a Persimmon Leaf from the Young Tree.',
            'Iwatodai Strip Mall - Enter Bookworms. (Hierophant Rank 1)',
          ],
          eveningInfo: ["Paulownia Mall Arcade - Play You're the Answer."],
          miscInfo: [''],
        },
        {
          day: 26,
          dayTimeInfo: ['Hang out with The Old Couple', '1, 1, Any, Any, Any', 'Hierophant Rank 2'],
          eveningInfo: ['Iwatodai Strip Mall - Eat at Wild Duck Burger.'],
          miscInfo: [''],
        },
        {
          day: 27,
          dayTimeInfo: ['Gekkoukan High School Faculty Office - Join The Student Council.', 'Enter the Student Council Room. (Emperor Rank 1)'],
          eveningInfo: ['Iwatodai Strip Mall - Eat at Wakatsu Kitchen.'],
          miscInfo: ['Question Answer: A.'],
        },
        {
          day: 28,
          dayTimeInfo: ['Gekkoukan High School F2 - Talk to Chihiro, select: “I just wanted to talk…”', 'Hang out with Kazushi', '(2, 1) (Chariot Rank 3)'],
          eveningInfo: ['Iwatodai Strip Mall - Eat at Wild Duck Burger. (Courage Rank 2)'],
          miscInfo: [''],
        },
        {
          day: 29,
          dayTimeInfo: ['Play the MMORPG. (Hermit Rank 1)'],
          eveningInfo: ['Iwatodai Dorm Shared Computer - Select Digital Cram School.'],
          miscInfo: [''],
        },
        {
          day: 30,
          dayTimeInfo: [
            "Gekkoukan High School F2 - Talk to Chihiro, select: “I'm a guy.”",
            'Iwatodai Strip Mall - Hang out with The Old Couple',
            '(1, 2, Any, Any, Any, Any) (Hierophant Rank 3)',
          ],
          eveningInfo: ['Iwatodai Strip Mall - Buy all of the available software at the Net Cafe.', 'Iwatodai Dorm Shared Computer - Select Animal Othello.'],
          miscInfo: ['Stay Awake in class.'],
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
          eveningInfo: ['Paulownia Mall - Buy both notes from the Suspicious Man in Club Escapade', 'Iwatodai Dorm Shared Computer - Select TypinGhoul.'],
          miscInfo: [''],
        },
        {
          day: 2,
          dayTimeInfo: [
            "Gekkoukan High School F2 - Talk to Chihiro, select: “Hello.” and then “Let's hang out.”",
            'Hang out with Yuko.',
            '(1, 2, 1) (Strength Rank 2)',
          ],
          eveningInfo: ['Iwatodai Dorm Shared Computer - Select Lessons in Etiquette.'],
          miscInfo: [''],
        },
        {
          day: 3,
          dayTimeInfo: ['Shopping Channel: Rose Bouquet set. (Optional)', 'Play the MMORPG.', '(1, 2) (Hermit Rank 2)'],
          eveningInfo: ['Iwatodai Dorm Shared Computer - Select Language Made Easy. (Academics Rank 2)'],
          miscInfo: [''],
        },
        {
          day: 4,
          dayTimeInfo: ['Play the MMORPG. (1, 1) (Hermit Rank 3)'],
          eveningInfo: ['Iwatodai Dorm Shared Computer - Select Virtual Diet. (Charm Rank 2)'],
          miscInfo: [''],
        },
        {
          day: 5,
          dayTimeInfo: ['Play the MMORPG. (3) (Hermit Rank 4)'],
          eveningInfo: [
            "Iwatodai Dorm 2F Vending Machine - Last chance to Buy Mad Bull if you haven't already.",
            'Iwatodai Strip Mall - Eat at Wild Duck Burger.',
          ],
          miscInfo: [''],
        },
        {
          day: 6,
          dayTimeInfo: [
            'Naganaki Shrine - Give Maiko the Weird Takoyaki and Mad Bull, select: “Of course.” when prompted.',
            'Hang out with Yuko.',
            '(Any, 2, 1) (Strength Rank 3)',
          ],
          eveningInfo: [''],
          miscInfo: ['Question Answer: A pantograph.'],
        },
        {
          day: 7,
          dayTimeInfo: ['Hang out with Chihiro. (Justice Rank 1)'],
          eveningInfo: ['Paulownia Mall Arcade - Play High School of Youth.'],
          miscInfo: [''],
        },
        {
          day: 8,
          dayTimeInfo: ['Gekkoukan High School - Enter the Home Economics Room, say hi to Bebe and sign up for the fashion club. (Temperance Rank 1)'],
          eveningInfo: ['Iwatodai Strip Mall - Eat at Wild Duck Burger.'],
          miscInfo: [''],
        },
        {
          day: 9,
          dayTimeInfo: [''],
          eveningInfo: [''],
          miscInfo: ['Mandatory Story Battle. (Fool Rank 3)'],
        },
        {
          day: 10,
          dayTimeInfo: ['Shopping Channel: Antibiotic Gel set (Optional)', 'Play the MMORPG. (3, 3) (Hermit Rank 5)'],
          eveningInfo: [
            'Talk to Elizabeth to get requests, activate all requests',
            "Talk to Yukari, obtain Pine Resin, and complete Elizabeth's 12th Request",
            "Talk to Junpei, obtain Handheld Game Console, and complete Elizabeth's 13th Request",
            'Club Escapade - Get a Rarity Fortune Reading so you can earn more money tonight.',
            'Head to Tartarus.',
          ],
          miscInfo: ['Have at least 100k in materials/money before leaving!'],
        },
        {
          day: 11,
          dayTimeInfo: ['Sell all of your materials.', 'Naganaki Shrine - Hang out with Maiko. (Hanged Man Rank 1)'],
          eveningInfo: ['Iwatodai Dorm Command Room - Watch the Video Recording.', 'Paulownia Mall Arcade - Play High School of Youth'],
          miscInfo: ['Stay Awake in class.'],
        },
        {
          day: 12,
          dayTimeInfo: ['Hang out with Junpei (Linked Episode 1)'],
          eveningInfo: ['Paulownia Mall Cafe - Work part-time.'],
          miscInfo: [''],
        },
        {
          day: 13,
          dayTimeInfo: ['Hang out with Maiko.', '(1, Any, Any) (Hanged Man Rank 2)'],
          eveningInfo: ['Paulownia Mall Cafe - Work part-time.'],
          miscInfo: ['Question Answer: The Pendulum. (Charm Rank 3)'],
        },
        {
          day: 14,
          dayTimeInfo: ['Hang out with The Old Couple.', '(1, Any, 2) (Hierophant Rank 4)'],
          eveningInfo: ['Iwatodai Strip Mall - Eat the Seafood Full Course at Wakatsu Kitchen'],
          miscInfo: [''],
        },
        {
          day: 15,
          dayTimeInfo: ['Hang out with The Old Couple.', '(1, 1) (Hierophant Rank 5)'],
          eveningInfo: ['Study with Mitsuru and Akihiko'],
          miscInfo: ['Question Answer: May Blues.'],
        },
        {
          day: 16,
          dayTimeInfo: ['Hang out with Maiko.', '(Any, 3) (Hanged Man Rank 3)'],
          eveningInfo: ['Study with Yukari and Junpei.'],
          miscInfo: ['Stay Awake in class.'],
        },
        {
          day: 17,
          dayTimeInfo: ['Shopping Channel: Blinding Flashlight set (Optional)', 'Play the MMORPG.'],
          eveningInfo: ['Study with Teammates.'],
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
          dayTimeInfo: ['Question Answer: May Blues.'],
          eveningInfo: [''],
          miscInfo: [''],
        },
        {
          day: 20,
          dayTimeInfo: ['Question Answer: A pendulum.'],
          eveningInfo: [''],
          miscInfo: [''],
        },
        {
          day: 21,
          dayTimeInfo: ['Question Answer: Electricity.'],
          eveningInfo: [''],
          miscInfo: [''],
        },
        {
          day: 22,
          dayTimeInfo: ['Question Answer: Jomon.'],
          eveningInfo: [''],
          miscInfo: [''],
        },
        {
          day: 23,
          dayTimeInfo: ['Hang out with Chihiro.', '(1, 2, 1, Any, Any) (Justice Rank 2)'],
          eveningInfo: ["Paulownia Mall Arcade - Play You're the Answer."],
          miscInfo: [''],
        },
        {
          day: 24,
          dayTimeInfo: ['Shopping Channel: All-Purpose Apron set (Optional)', 'Play the MMORPG. (2) (Hermit Rank 6)'],
          eveningInfo: ['Iwatodai Strip Mall - Eat the Seafood Full Course at Wakatsu Kitchen.'],
          miscInfo: [''],
        },
        {
          day: 25,
          dayTimeInfo: [
            'Talk to Mitsuru in the Faculty Office Hallway to receive a reward for your exam score',
            'Hang out with Hidetoshi in the Student Council Room.',
            '(2) (Emperor Rank 2)',
          ],
          eveningInfo: [
            'Iwatodai Dorm Rooftop - Plant the Healthy Tomato Sprout.',
            'Iwatodai Strip Mall - Eat the Seafood Full Course at Wakatsu Kitchen. (Academics Rank 3)',
          ],
          miscInfo: ['Stay Awake in class.'],
        },
        {
          day: 26,
          dayTimeInfo: ['Hang out with Kenji.', '(3, 1) (Magician Rank 2)'],
          eveningInfo: ['Paulownia Mall Cafe - Work part-time.'],
          miscInfo: [''],
        },
        {
          day: 27,
          dayTimeInfo: ['Hang out with Hidetoshi in the Student Council Room.', '(1) (Emperor Rank 3)'],
          eveningInfo: ['Paulownia Mall Cafe - Work part-time.'],
          miscInfo: [''],
        },
        {
          day: 28,
          dayTimeInfo: ['Hang out with Kenji.', '(3, 2) (Magician Rank 3)'],
          eveningInfo: ['Iwatodai Strip Mall - Eat the Seafood Full Course at Wakatsu Kitchen'],
          miscInfo: ['Stay Awake in class.'],
        },
        {
          day: 29,
          dayTimeInfo: ['Hang out with Kenji.', '(Any, 1) (Magician Rank 4)'],
          eveningInfo: ['Hang out with Akihiko, he is in the strip mall station. (Linked Episode 1)'],
          miscInfo: ['Stay Awake in class.'],
        },
        {
          day: 30,
          dayTimeInfo: [
            'Paulownia Mall - Ask the Chubby Student what he is eating and he will quiz you.',
            'Quiz Answers: Pheromone Coffee, Red, Hagakure Bowl.',
            'After the quiz, you must give the Chubby Student an Odd Morsel, then choose to spend time with him. (Moon Rank 1)',
          ],
          eveningInfo: ["Paulownia Mall Arcade - Play You're the Answer."],
          miscInfo: [''],
        },
        {
          day: 31,
          dayTimeInfo: ['Shopping Channel: Health Sandals set (Optional)', 'Hang out with Nozomi.', '(1) (Moon Rank 2)'],
          eveningInfo: ['Iwatodai Strip Mall - Eat the Seafood Full Course at Wakatsu Kitchen.'],
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
        {
          day: 31,
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
        {
          day: 31,
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
