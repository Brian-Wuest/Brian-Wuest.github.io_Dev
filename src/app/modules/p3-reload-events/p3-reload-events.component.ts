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
          dayTimeInfo: ['Hang out with Hidetoshi in the Student Council Room.', '(1, 2) (Emperor Rank 4)'],
          eveningInfo: ['Paulownia Mall Cafe - Work part-time.'],
          miscInfo: [''],
        },
        {
          day: 2,
          dayTimeInfo: ['Hang out with Bebe.', '(1, 1) (Temperance Rank 2)'],
          eveningInfo: ['Paulownia Mall Cafe - Work part-time.'],
          miscInfo: ['Stay Awake in class.'],
        },
        {
          day: 3,
          dayTimeInfo: ['Hang out with Bebe.', '(1, 3) (Temperance Rank 3)'],
          eveningInfo: ['Paulownia Mall Cafe - Work part-time.'],
          miscInfo: [''],
        },
        {
          day: 4,
          dayTimeInfo: ['Buy buff potato sprout if able', 'Hang out with Chihiro.', '(1, 1) (Justice Rank 3)'],
          eveningInfo: [
            'Iwatodai Dorm Rooftop - Harvest the Healthy Tomato Sprout. (Optional)',
            'Iwatodai Dorm Rooftop - Plant the Buff Potato Sprout.',
            'Iwatodai Strip Mall - Eat at Hagakure Ramen (Charm Rank 4).',
          ],
          miscInfo: [''],
        },
        {
          day: 5,
          dayTimeInfo: ['Hang out with Bebe.', '(3, Any) (Temperance Rank 4)'],
          eveningInfo: ['Paulownia Mall Arcade - Play House of the Deceased.'],
          miscInfo: [''],
        },
        {
          day: 6,
          dayTimeInfo: ['Hang out with Maiko.', '(1) (Hanged Man Rank 4)'],
          eveningInfo: ['Paulownia Mall - Talk to the Man in a Suit and pay him 20,000 yen.', "Paulownia Mall Arcade - Play You're the Answer."],
          miscInfo: [''],
        },
        {
          day: 7,
          dayTimeInfo: ['Shopping Channel: Perfume set (Optional)', 'Accept phone invitation from Kazushi. (2)'],
          eveningInfo: ['Iwatodai Strip Mall - Eat the Seafood Full Course at Wakatsu Kitchen.'],
          miscInfo: [''],
        },
        {
          day: 8,
          dayTimeInfo: [''],
          eveningInfo: [''],
          miscInfo: ['Mandatory Story Battle.'],
        },
        {
          day: 9,
          dayTimeInfo: ["Head to the Nurse's Office and drink the Medicine. (Courage Rank 4)", 'Hang out with Kazushi.', '(Any, 2) (Chariot Rank 4)'],
          eveningInfo: ['Paulownia Mall Cafe - Work part-time.'],
          miscInfo: [''],
        },
        {
          day: 10,
          dayTimeInfo: ['Hang out with Hidetoshi in the Student Council Room.', '(1) (Emperor Rank 5)'],
          eveningInfo: ["Paulownia Mall Arcade - Play You're the Answer."],
          miscInfo: ['Stay Awake in class.'],
        },
        {
          day: 11,
          dayTimeInfo: ['Hang out with Kenji.', '(2) (Magician Rank 5)'],
          eveningInfo: ['Paulownia Mall Arcade - Play High School of Youth.'],
          miscInfo: [''],
        },
        {
          day: 12,
          dayTimeInfo: ['Hang out with Kazushi.', '(1, 1) (Chariot Rank 5)'],
          eveningInfo: ['Paulownia Mall Arcade - Play House of the Deceased.'],
          miscInfo: ['Story Event. (Death Rank 1)'],
        },
        {
          day: 13,
          dayTimeInfo: ['Hang out with Nozomi.', '(2) (Moon Rank 3)'],
          eveningInfo: [''],
          miscInfo: ['Theurgy Tutorial'],
        },
        {
          day: 14,
          dayTimeInfo: ['Shopping Channel: Brand Watch set (Optional)', 'Play the MMORPG.', '(3, 1) (Hermit Rank 7)'],
          eveningInfo: [
            "Talk to Mitsuru, obtain Triangular Sword, and complete Elizabeth's 27th Request",
            "Talk to Akihiko, obtain Protein, and complete Elizabeth's 28th Request",
            'Club Escapade - Get a Rarity Fortune Reading so you can earn more money tonight',
            'Head to Tartarus.',
          ],
          miscInfo: [
            'Reach Floor 69.',
            'Use Theurgy skills for Junpei, Fuuka, Mitsuru and Akihiko',
            'Have at least 100,000 Yen after selling materials tomorrow.',
          ],
        },
        {
          day: 15,
          dayTimeInfo: [
            'Sell all of your materials. (If You are holding less than 100,000 Yen, reload)',
            "Head to the Nurse's Office and drink the Medicine. (You will need to enter twice if you accepted Elizabeth's request to obtain medicine)",
            'Hang out with Kazushi.',
            '(2, 2, 2) (Chariot Rank 6)',
          ],
          eveningInfo: ['Paulownia Mall Cafe - Work part-time.'],
          miscInfo: ['Question Answer: Keen Eye.'],
        },
        {
          day: 16,
          dayTimeInfo: ['Hang out with Kenji.', '(Any, 1) (Magician Rank 6)'],
          eveningInfo: ['Paulownia Mall - Talk to the Man in a Suit and pay him 10,000 yen', 'Talk to Fuuka and head to the Garden with her'],
          miscInfo: [''],
        },
        {
          day: 17,
          dayTimeInfo: ['Gekkoukan High School 1F Art Room - Join the Art Club. (Fortune Rank 1)'],
          eveningInfo: ['Iwatodai Dorm Rooftop - Harvest the Buff Potato Sprout', "Paulownia Mall Arcade - Play You're the Answer."],
          miscInfo: ['Question Answer: Shamanism.'],
        },
        {
          day: 18,
          dayTimeInfo: ['Hang out with Keisuke.', '(Any, Any) (Fortune Rank 2)'],
          eveningInfo: ['Talk to Fuuka and read with her.'],
          miscInfo: [''],
        },
        {
          day: 19,
          dayTimeInfo: ['Hang out with Hidetoshi in the Student Council Room.', '(Any, 1) (Emperor Rank 6)'],
          eveningInfo: ['Paulownia Mall Arcade - Play House of the Deceased.'],
          miscInfo: [''],
        },
        {
          day: 20,
          dayTimeInfo: [''],
          eveningInfo: ['Paulownia Mall - Talk to the Man in a Suit, pay him 10,000 yen and spend time with him. (Devil Rank 1)'],
          miscInfo: [''],
        },
        {
          day: 21,
          dayTimeInfo: ['Shopping Channel: Amenity Suit set (Optional)', 'Accept phone invitation from Chihiro.', '(2)'],
          eveningInfo: ['Iwatodai Strip Mall - Eat at Wild Duck Burger. (Courage Rank 5)'],
          miscInfo: [''],
        },
        {
          day: 22,
          dayTimeInfo: ['Hang out with Kazushi.', '(1, 1) (Chariot Rank 7)'],
          eveningInfo: ['Iwatodai Dorm Command Room - Watch the Video Recording. (Optional)', 'Talk to Junpei and read with him.'],
          miscInfo: ['Question Answer: Witch of Agnesi.'],
        },
        {
          day: 23,
          dayTimeInfo: ['Hang out with Keisuke.', '(1, Any) (Fortune Rank 3)'],
          eveningInfo: ['Paulownia Mall Cafe - Work part-time.'],
          miscInfo: [''],
        },
        {
          day: 24,
          dayTimeInfo: ['Hang out with Keisuke.', '(1, 1) (Fortune Rank 4)'],
          eveningInfo: ['Paulownia Mall Cafe - Work part-time.'],
          miscInfo: [''],
        },
        {
          day: 25,
          dayTimeInfo: ['Hang out with Chihiro.', '(Any, 2) (Justice Rank 4)'],
          eveningInfo: ['Paulownia Mall Arcade - Play High School of Youth.'],
          miscInfo: ['Question Answer: The flutter effect.'],
        },
        {
          day: 26,
          dayTimeInfo: ['Hang out with Bebe.', '(1, 2) (Temperance Rank 5)'],
          eveningInfo: ['Paulownia Mall Arcade - Play House of the Deceased.'],
          miscInfo: [''],
        },
        {
          day: 27,
          dayTimeInfo: ['Hang out with Chihiro.', '(1, 1, 1, 1) (Justice Rank 5)'],
          eveningInfo: ['Talk to Akihiko and watch a DVD with him.'],
          miscInfo: [''],
        },
        {
          day: 28,
          dayTimeInfo: ['Shopping Channel: Amronion Sprout set (Optional)', 'Hang out with Nozomi.', '(2) (Moon Rank 4)'],
          eveningInfo: ['Iwatodai Strip Mall - Eat at Wild Duck Burger.'],
          miscInfo: [''],
        },
        {
          day: 29,
          dayTimeInfo: ['Hang out with Hidetoshi in the Student Council Room.', '(2) (Emperor Rank 7)'],
          eveningInfo: ['Head to Tartarus.'],
          miscInfo: [
            'Question Answer: Dowsing.',
            'Rescue the Missing Person on Floor 50.',
            'Rescue all 3 Missing Persons',
            'Obtain a Black Quartz to make Request 29 easier',
            'Have at least 100,000 Yen after selling materials tomorrow',
          ],
        },
        {
          day: 30,
          dayTimeInfo: [
            'Sell all of your materials. (If You are holding less than 100,000 Yen, reload)',
            'Collect your reward at the Police Station',
            "Head to the Nurse's Office and drink the Medicine",
            'Hang out with Bebe.',
            '(2, 1, 1) (Temperance Rank 6)',
          ],
          eveningInfo: [
            'Club Escapade - Talk to the Bartender and buy the Fashionable item from him. You can trade a Black Quartz with him to make the item cheaper.',
            'Paulownia Mall Cafe - Work part-time',
          ],
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
          dayTimeInfo: ['Hang out with Keisuke.', '(1) (Fortune Rank 5)'],
          eveningInfo: ['Paulownia Mall Cafe - Work part-time.'],
          miscInfo: [''],
        },
        {
          day: 2,
          dayTimeInfo: ['Hang out with Keisuke.', '(Any, 2) (Fortune Rank 6)'],
          eveningInfo: [
            'Paulownia Mall - Buy Revenge Site Note from the Suspicious Man in Club Escapade.',
            'watodai Dorm Shared Computer - Select Revenge Site Note. (Courage Maxed)',
          ],
          miscInfo: [''],
        },
        {
          day: 3,
          dayTimeInfo: ['Gekkoukan High School F2 - Tell Fuuka you have time, and agree to taste her cooking. (Priestess Rank 1)'],
          eveningInfo: ['Iwatodai Strip Mall - Eat the Seafood Full Course at Wakatsu Kitchen'],
          miscInfo: ['Question Answer: About romance. (Charm Rank 5)'],
        },
        {
          day: 4,
          dayTimeInfo: ['Hang out with Fuuka.', '(1, Any, 1) (Priestess Rank 2)'],
          eveningInfo: ['Hang out with Tanaka.', '(1, 1) (Devil Rank 2)'],
          miscInfo: [''],
        },
        {
          day: 5,
          dayTimeInfo: ['Shopping Channel: YABA Chocolate set (Optional)', 'Accept phone invitation from Yuko. (3)'],
          eveningInfo: ['Talk to Mitsuru and read with her. (Academics Rank 4)'],
          miscInfo: [''],
        },
        {
          day: 6,
          dayTimeInfo: ['Hang out with Fuuka.', '(1, 1, Any) (Priestess Rank 3)'],
          eveningInfo: ['Paulownia Mall Arcade - Play High School of Youth'],
          miscInfo: [''],
        },
        {
          day: 7,
          dayTimeInfo: [''],
          eveningInfo: [''],
          miscInfo: ['Mandatory Story Battle. (Fool Rank 4)'],
        },
        {
          day: 8,
          dayTimeInfo: ['Hang out with Nozomi.', '(1) (Moon Rank 5)'],
          eveningInfo: ['Iwatodai Strip Mall - Eat at Hagakure Ramen.'],
          miscInfo: ["Question Answer: Between “time” and “it's.”"],
        },
        {
          day: 9,
          dayTimeInfo: [
            'Accept Request 42 from Elizabeth.',
            'Buy 4 Super Cat Foods from the Pharmacy.',
            'Port Island Station Outskirts - Feed the Weak Cat.',
            'Hang out with Nozomi.',
            '(3) (Moon Rank 6)',
          ],
          eveningInfo: ['Study with Mitsuru and Akihiko.'],
          miscInfo: ['Question Answer: Social disparity.'],
        },
        {
          day: 10,
          dayTimeInfo: ['Port Island Station Outskirts - Feed the Weak Cat.', 'Hang out with Nozomi.', '(3, Any) (Moon Rank 7)'],
          eveningInfo: ['Study with Yukari and Fuuka.'],
          miscInfo: ['Question Answer: Kabbalah.'],
        },
        {
          day: 11,
          dayTimeInfo: ['Port Island Station Outskirts - Feed the Weak Cat.', 'Hang out with Maiko.', '(1, 2) (Hanged Man Rank 5)'],
          eveningInfo: ['Hang out with Tanaka.', '(1) (Devil Rank 3)'],
          miscInfo: ['Question Answer: The katana.'],
        },
        {
          day: 12,
          dayTimeInfo: [
            'Shopping Channel: Max Safety Shoes set (Needed for Request 40)',
            'Port Island Station Outskirts - Feed the Weak Cat',
            'Play the MMORPG.',
            '(2, 1) (Hermit Rank 8)',
          ],
          eveningInfo: ['Iwatodai Strip Mall - Eat the Seafood Full Course at Wakatsu Kitchen.'],
          miscInfo: ['Story Event. (Death Rank 3)'],
        },
        {
          day: 13,
          dayTimeInfo: ['Hang out with Maiko.', '(2, 1) (Hanged Man Rank 6)'],
          eveningInfo: ['Talk to Ikutsuki and study with everyone.'],
          miscInfo: ['Stay Awake in class.'],
        },
        {
          day: 14,
          dayTimeInfo: ['Question Answer: Dowsing.'],
          eveningInfo: [''],
          miscInfo: [''],
        },
        {
          day: 15,
          dayTimeInfo: ['Question Answer: An error in translation.'],
          eveningInfo: [''],
          miscInfo: [''],
        },
        {
          day: 16,
          dayTimeInfo: ['Question Answer: Taira No Masakado.'],
          eveningInfo: [''],
          miscInfo: [''],
        },
        {
          day: 17,
          dayTimeInfo: ['Question Answer: Comma splice.'],
          eveningInfo: [''],
          miscInfo: [''],
        },
        {
          day: 18,
          dayTimeInfo: [''],
          eveningInfo: ['Hang out with Tanaka.', '(1) (Devil Rank 4)'],
          miscInfo: [''],
        },
        {
          day: 19,
          dayTimeInfo: ['Shopping Channel: Tetracone set (Optional)', 'Hang out with Nozomi.', '(2) (Moon Rank 8)'],
          eveningInfo: ['Iwatodai Strip Mall - Eat the Seafood Full Course at Wakatsu Kitchen'],
          miscInfo: [''],
        },
        {
          day: 20,
          dayTimeInfo: [
            "Collect the Seashell near the bridge for Elizabeth's Request",
            "Collect the Strange Seaweed in the water, near the bridge for Elizabeth's Request",
            "Collect the Driftwood on the beach near Fuuka for Elizabeth's Request",
            "Collect the Small crab in the rocky area for Elizabeth's Request.",
          ],
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
          dayTimeInfo: ['Story Event. (Fool Rank 5)'],
          eveningInfo: ['Paulownia Mall Arcade - Play High School of Youth.'],
          miscInfo: [''],
        },
        {
          day: 24,
          dayTimeInfo: ['Hang out with Fuuka.', '(Any, 3, 1) (Priestess Rank 4)'],
          eveningInfo: ['Hang out with Akihiko. (Linked Episode 2)'],
          miscInfo: ['Exam Results: Top Score.'],
        },
        {
          day: 25,
          dayTimeInfo: ['Hang out with Yuko.', '(Any, 1) (Strength Rank 4)'],
          eveningInfo: ['Hang out with Tanaka.', '(2, Any, 1) (Devil Rank 5)'],
          miscInfo: ['Stay Awake in class.'],
        },
        {
          day: 26,
          dayTimeInfo: ['Shopping Channel: Brand Wallet set (Optional)', 'Hang out with Nozomi.', '(Any) (Moon Rank 9)'],
          eveningInfo: ['Talk to Mitsuru to receive a reward for your exam score', 'Talk to Mitsuru and read with her.'],
          miscInfo: [''],
        },
        {
          day: 27,
          dayTimeInfo: [''],
          eveningInfo: ['Paulownia Mall Arcade - Play High School of Youth. (Charm Maxed)'],
          miscInfo: [''],
        },
        {
          day: 28,
          dayTimeInfo: [''],
          eveningInfo: ['Hang out with Tanaka.', '(1) (Devil Rank 6)'],
          miscInfo: [''],
        },
        {
          day: 29,
          dayTimeInfo: [''],
          eveningInfo: ["Paulownia Mall Arcade - Play You're the Answer."],
          miscInfo: [''],
        },
        {
          day: 30,
          dayTimeInfo: [''],
          eveningInfo: ['Talk to Fuuka and read with her'],
          miscInfo: [''],
        },
        {
          day: 31,
          dayTimeInfo: [''],
          eveningInfo: ['Iwatodai Strip Mall - Eat the Seafood Full Course at Wakatsu Kitchen.'],
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
          eveningInfo: ['Hang out with Tanaka.', '(2, 1) (Devil Rank 7)'],
          miscInfo: [''],
        },
        {
          day: 2,
          dayTimeInfo: [''],
          eveningInfo: ['Iwatodai Strip Mall - Eat the Seafood Full Course at Wakatsu Kitchen.'],
          miscInfo: [''],
        },
        {
          day: 3,
          dayTimeInfo: ['Hang out with Maiko.', '(Any, Any) (Hanged Man Rank 7)'],
          eveningInfo: [
            "Talk to Fuuka, obtain Christmas Star, and complete Elizabeth's 43rd Request.",
            'Club Escapade - Get a Fortune Reading.',
            'Head to Tartarus.',
          ],
          miscInfo: [
            'Reach Floor 92',
            'Reach Level 31',
            'Open the chest at the deepest point of the Monad Passage on Floor 91F',
            'Use Theurgy skill for Aigis',
            'Have at least 100,000 Yen after selling materials tomorrow',
            'Rescue the 2 Missing Persons',
          ],
        },
        {
          day: 4,
          dayTimeInfo: [
            'Sell all of your materials. (If You are holding less than 100,000 Yen, reload)',
            'Collect your reward at the Police Station',
            'Accept phone invitation from Yuko. (3)',
          ],
          eveningInfo: ['Hang out with Tanaka.', '(2) (Devil Rank 8)'],
          miscInfo: [''],
        },
        {
          day: 5,
          dayTimeInfo: ['Iwatodai Strip Mall - Hang out with Mamoru (Star Rank 1)'],
          eveningInfo: ["Paulownia Mall Arcade - Play You're the Answer."],
          miscInfo: [''],
        },
        {
          day: 6,
          dayTimeInfo: [''],
          eveningInfo: [''],
          miscInfo: [
            'Mandatory Story Battle.',
            '21M: Collect the Twilight Fragment at the dead end.',
            '33M: Collect the Twilight Fragment in the little opening',
          ],
        },
        {
          day: 7,
          dayTimeInfo: ['Hang out with Mamoru', '(2, 2) (Star Rank 2)'],
          eveningInfo: ['Iwatodai Strip Mall - Eat the Seafood Full Course at Wakatsu Kitchen.'],
          miscInfo: ['Story Event. (Death Rank 5)'],
        },
        {
          day: 8,
          dayTimeInfo: ['Hang out with Maiko.'],
          eveningInfo: ['Hang out with Tanaka. (1) (Devil Rank 9)'],
          miscInfo: [''],
        },
        {
          day: 9,
          dayTimeInfo: ['Shopping Channel: Isotope Soda set (Optional)', 'Hang out with Junpei. (Linked Episode 2)'],
          eveningInfo: ['Iwatodai Strip Mall - Eat the Seafood Full Course at Wakatsu Kitchen.'],
          miscInfo: [''],
        },
        {
          day: 10,
          dayTimeInfo: ['Summer School.'],
          eveningInfo: [''],
          miscInfo: [''],
        },
        {
          day: 11,
          dayTimeInfo: ['Summer School.'],
          eveningInfo: [''],
          miscInfo: [''],
        },
        {
          day: 12,
          dayTimeInfo: ['Summer School.'],
          eveningInfo: [''],
          miscInfo: [''],
        },
        {
          day: 13,
          dayTimeInfo: ['Summer School.'],
          eveningInfo: [''],
          miscInfo: [''],
        },
        {
          day: 14,
          dayTimeInfo: ['Summer School. (Academics Rank 5)'],
          eveningInfo: [''],
          miscInfo: [''],
        },
        {
          day: 15,
          dayTimeInfo: ['Summer School.'],
          eveningInfo: ['Hang out with Tanaka. (Devil Rank 10)'],
          miscInfo: [''],
        },
        {
          day: 16,
          dayTimeInfo: ['Go to the Shrine, choose anyone.'],
          eveningInfo: [''],
          miscInfo: [''],
        },
        {
          day: 17,
          dayTimeInfo: ['Shopping Channel: Curse Paper set', 'Hang out with Maiko.', '(1, 1, 1) (Hanged Man Rank 8)'],
          eveningInfo: ['Watch TV with Koromaru.'],
          miscInfo: [''],
        },
        {
          day: 18,
          dayTimeInfo: ['Hang out with Nozomi.'],
          eveningInfo: ['Go to your room and study.'],
          miscInfo: [''],
        },
        {
          day: 19,
          dayTimeInfo: ['Hang out with Mamoru.', '(1, 1) (Star Rank 3)'],
          eveningInfo: ["Paulownia Mall Arcade - Play You're the Answer."],
          miscInfo: [''],
        },
        {
          day: 20,
          dayTimeInfo: ['Hang out with The Old Couple.'],
          eveningInfo: ['Iwatodai Strip Mall - Eat the Seafood Full Course at Wakatsu Kitchen.'],
          miscInfo: [''],
        },
        {
          day: 21,
          dayTimeInfo: ['Hang out with Mamoru.', '(1, 1, 2) (Star Rank 4)'],
          eveningInfo: ['Iwatodai Strip Mall - Eat the Seafood Full Course at Wakatsu Kitchen.'],
          miscInfo: [''],
        },
        {
          day: 22,
          dayTimeInfo: ['Outside Iwatodai Dorm - Hang out with Koromaru. (Linked Episode 1)'],
          eveningInfo: ["Paulownia Mall Arcade - Play You're the Answer."],
          miscInfo: [''],
        },
        {
          day: 23,
          dayTimeInfo: [
            'Shopping Channel: Soul Spinach Sprout set (Optional)',
            'Naganaki Shrine - Talk to the Thin Young Man and you will agree to find his pen.',
            "Head back to Iwatodai Dorm and move Koromaru's Paw to obtain the Red Fountain Pen",
            'Then take the pen back to the Thin Young Man. (Sun Rank 1)',
          ],
          eveningInfo: ['Iwatodai Strip Mall - Eat the Seafood Full Course at Wakatsu Kitchen'],
          miscInfo: [''],
        },
        {
          day: 24,
          dayTimeInfo: ['Hang out with Maiko.', '(1) (Hanged Man Rank 9)'],
          eveningInfo: ['Watch TV with Koromaru.'],
          miscInfo: [''],
        },
        {
          day: 25,
          dayTimeInfo: ['Hang out with The Old Couple.', '(2, Any) (Hierophant Rank 6)'],
          eveningInfo: ['Talk to Fuuka and read with her'],
          miscInfo: [''],
        },
        {
          day: 26,
          dayTimeInfo: ['Hang out with Mamoru.', '(2, 2) (Star Rank 5)'],
          eveningInfo: ["Paulownia Mall Arcade - Play You're the Answer."],
          miscInfo: [''],
        },
        {
          day: 27,
          dayTimeInfo: [
            'Accept Request 58 and Talk to the man in the Port Island Station Alley',
            'Then the man outside the Port Island Station Alley',
            'Finally talk to the kid at Iwatiodai Strip Mall and report back to Elizabeth to complete the Request.',
            'Hang out with The Old Couple.',
            '(1, 2, 3) (Hierophant Rank 7)',
          ],
          eveningInfo: ['Iwatodai Strip Mall - Eat the Seafood Full Course at Wakatsu Kitchen'],
          miscInfo: [''],
        },
        {
          day: 28,
          dayTimeInfo: ['Hang out with Mamoru.', '(Any, Any, Any, 2) (Star Rank 6)'],
          eveningInfo: ['Iwatodai Strip Mall - Eat the Seafood Full Course at Wakatsu Kitchen'],
          miscInfo: [''],
        },
        {
          day: 29,
          dayTimeInfo: ['Hang out with The Old Couple.', '(2, Any, 1) (Hierophant Rank 8)'],
          eveningInfo: ["Paulownia Mall Arcade - Play You're the Answer."],
          miscInfo: [''],
        },
        {
          day: 30,
          dayTimeInfo: ['Shopping Channel: Fierce Sutra set', 'Hang out with Akinari. (2, 1) (Sun Rank 2)'],
          eveningInfo: ['Iwatodai Strip Mall - Eat the Seafood Full Course at Wakatsu Kitchen.'],
          miscInfo: [''],
        },
        {
          day: 31,
          dayTimeInfo: ['Hang out with Maiko. (Hanged Man Rank 10)'],
          eveningInfo: ['Watch TV with Koromaru.'],
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
          dayTimeInfo: ['Hang out with Chihiro.', '(1, 2) (Justice Rank 6)'],
          eveningInfo: ['Paulownia Mall Cafe - Work part-time.'],
          miscInfo: ['Question Answer: Resistance.'],
        },
        {
          day: 2,
          dayTimeInfo: [''],
          eveningInfo: ['Paulownia Mall Arcade - Play You\'re the Answer.'],
          miscInfo: [''],
        },
        {
          day: 3,
          dayTimeInfo: ['Gekkoukan High School Classroom - Hang out with Yukari. (Lovers Rank 1)'],
          eveningInfo: ['Club Escapade - Get a Fortune Reading', 'Head to Tartarus'],
          miscInfo: [
            'Reach Floor 118',
            'Open the chest at the deepest point of the Monad Passage on Floor 117F',
            'Use Theurgy skills for Ken, Koromaru and Shinjiro',
            'Have at least 100,000 Yen after selling materials tomorrow',
            'Rescue the 3 Missing Persons',
          ],
        },
        {
          day: 4,
          dayTimeInfo: [
            'Sell all of your materials. (If You are holding less than 100,000 Yen, reload)',
            'Collect your reward at the Police Station',
            'Talk to Mitsuru and deliver the envelope to Shinjiro at the Port Island Station Alleyway. Spend time with him.',
          ],
          eveningInfo: ['Iwatodai Strip Mall - Eat the Seafood Full Course at Wakatsu Kitchen.'],
          miscInfo: [''],
        },
        {
          day: 5,
          dayTimeInfo: [''],
          eveningInfo: [''],
          miscInfo: ['Mandatory Story Battle.'],
        },
        {
          day: 6,
          dayTimeInfo: ['Shopping Channel: Brand Purse set', 'Hang out with Akinari.', '(2, 2) (Sun Rank 3)'],
          eveningInfo: ['Iwatodai Strip Mall - Eat the Seafood Full Course at Wakatsu Kitchen. (Academics Maxed)'],
          miscInfo: [''],
        },
        {
          day: 7,
          dayTimeInfo: [
            'Port Island Station Flower Shop - Buy at least 10 Sprouts to see the Garden events at night time.',
            'Hang out with Yukari. (1, 1) (Lovers Rank 2)',
          ],
          eveningInfo: ['Talk to Shinjiro and head to the Garden with him.'],
          miscInfo: [''],
        },
        {
          day: 8,
          dayTimeInfo: ['Hang out with Koromaru. (Linked Episode 2)'],
          eveningInfo: ['Hang out with Ken. (Linked Episode 1)'],
          miscInfo: [''],
        },
        {
          day: 9,
          dayTimeInfo: [
            'Buy all the drinks at the Port Island Station Vending Machine if you haven\'t finished Request 9 yet',
            'Talk to Yuko to learn about the Monk at the Nightclub. Do not spend time with her',
            'Hang out with Koromaru. (Linked Episode 3)',
          ],
          eveningInfo: [
            'Complete Request 9 and accept Request 11 from Elizabeth.',
            'Iwatodai Strip Mall - Take the Big Eater Challenge at Wild Duck Burger. (2, 1, 2)',
          ],
          miscInfo: [''],
        },
        {
          day: 10,
          dayTimeInfo: ['Hang out with Yukari.', '(Any) (Lovers Rank 3)'],
          eveningInfo: [
            'Paulownia Mall Club Escapade - Talk to the Monk upstairs and then the Bartender downstairs.',
            'Talk to the two people dancing and the two people standing near the Fortune Teller, then return to the Bartender',
            'Tell the Bartender the correct drinks, the right answers in order are:',
            'Margarita, Bloody Mary, Screwdriver and Oolong Tea',
            'Hang out with the Monk. (Tower Rank 1)',
          ],
          miscInfo: ['Question Answer: To reveal a secret.'],
        },
        {
          day: 11,
          dayTimeInfo: ['Hang out with Fuuka.', '(2, 1, 3) (Priestess Rank 5)'],
          eveningInfo: ['Hang out with the Monk.', '(2, 1) (Tower Rank 2)'],
          miscInfo: ['Question Answer: Hermetica.'],
        },
        {
          day: 12,
          dayTimeInfo: ['Hang out with Fuuka.', '(1, 1) (Priestess Rank 6)'],
          eveningInfo: ['Hang out with the Monk.', '(2) (Tower Rank 3)'],
          miscInfo: ['Morning: Any option.', 'Dark Hour: Story Event. (Death Rank 6)'],
        },
        {
          day: 13,
          dayTimeInfo: ['Shopping Channel: Emergency Vest set', 'Hang out with Shinjiro. (Linked Episode 2)'],
          eveningInfo: ['Hang out with the Monk.', '(1) (Tower Rank 4)'],
          miscInfo: [''],
        },
        {
          day: 14,
          dayTimeInfo: ['Hang out with Fuuka.', '(Any, Any, 3, 1) (Priestess Rank 7)'],
          eveningInfo: ['Talk to Shinjiro and head to the Garden with him.'],
          miscInfo: ['Question Answer: Their soulmate.'],
        },
        {
          day: 15,
          dayTimeInfo: ['Hang out with Koromaru. (Linked Episode 4)'],
          eveningInfo: ['Talk to Yukari and watch a DVD with her.'],
          miscInfo: [''],
        },
        {
          day: 16,
          dayTimeInfo: ['Hang out with Yuko.', '(3, 3) (Strength Rank 5)'],
          eveningInfo: ['Hang out with Ken. (Linked Episode 2)'],
          miscInfo: [''],
        },
        {
          day: 17,
          dayTimeInfo: ['Hang out with Keisuke.', '(1) (Fortune Rank 7)'],
          eveningInfo: ['Talk to Fuuka and read with her.'],
          miscInfo: [''],
        },
        {
          day: 18,
          dayTimeInfo: [''],
          eveningInfo: ['Go to bed early.'],
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
          dayTimeInfo: ['Hang out with Shinjiro. (Linked Episode 3)'],
          eveningInfo: ['Paulownia Mall Cafe - Work part-time.'],
          miscInfo: [''],
        },
        {
          day: 22,
          dayTimeInfo: ['Play the MMORPG.', '(2, Any, 1) (Hermit Rank 9)'],
          eveningInfo: ['Club Escapade - Get a Fortune Reading.', 'Head to Tartarus.'],
          miscInfo: [
            'Reach Floor 144.',
            'Open the chest at the deepest point of the Monad Passage on Floor 143F.',
            'Have at least 100,000 Yen after selling materials tomorrow',
            'Rescue the missing person on floor 120 (Needed for social link)',
            'Rescue the other 2 Missing Persons',
          ],
        },
        {
          day: 23,
          dayTimeInfo: [
            'Sell all of your materials. (If You are holding less than 100,000 Yen, reload)',
            'Collect your reward at the Police Station.',
            'Play the MMORPG. (Hermit Rank 10)',
          ],
          eveningInfo: ['Take Koromaru for a walk. (Shinjiro)'],
          miscInfo: [''],
        },
        {
          day: 24,
          dayTimeInfo: [
            'Talk to Mitsuru to start an event, when given the dialogue option, say “Wait a minute.”',
            'This will trigger the flag for Shinjiro\'s next linked episode',
            'Hang out with Chihiro.',
            '(2, 2) (Justice Rank 7)',
          ],
          eveningInfo: ['Talk to Fuuka and read with her.'],
          miscInfo: ['Any option.'],
        },
        {
          day: 25,
          dayTimeInfo: ['Hang out with Kenji.', '(1, 3, 1) (Magician Rank 7)'],
          eveningInfo: ['Talk to Yukari and cook with her.'],
          miscInfo: [''],
        },
        {
          day: 26,
          dayTimeInfo: ['Hang out with Yuko.', '(1, 2) (Strength Rank 6)'],
          eveningInfo: ['Talk to Shinjiro and cook with him.'],
          miscInfo: ['Question Answer: Tetractys.'],
        },
        {
          day: 27,
          dayTimeInfo: ['Shopping Channel: R/C Geta set', 'Hang out with Shinjiro. (Linked Episode 4)'],
          eveningInfo: ['Hang out with the Monk.', '(1, 1) (Tower Rank 5)'],
          miscInfo: [''],
        },
        {
          day: 28,
          dayTimeInfo: ['Hang out with Hidetoshi in the Student Council Room.', '(Any, 1) (Emperor Rank 8)'],
          eveningInfo: [
            'Talk to Shinjiro, obtain Fruit Knife, and complete Elizabeth\'s 68th Request.',
            'Talk to Aigis, obtain Oil, and complete Elizabeth\'s 69th Request',
            'Talk to Shinjiro and head to the Garden with him',
          ],
          miscInfo: ['Any option.'],
        },
        {
          day: 29,
          dayTimeInfo: ['Hang out with Bebe.', '(2) (Temperance Rank 7)'],
          eveningInfo: ['Iwatodai Dorm Command Room - Watch the new Video Recordings.', 'Talk to Fuuka and head to the Garden with her'],
          miscInfo: [''],
        },
        {
          day: 30,
          dayTimeInfo: ['Hang out with Yuko.', '(Any, 2, 1) (Strength Rank 7)'],
          eveningInfo: ['Talk to Akihiko and cook with him'],
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
          dayTimeInfo: ['Hang out with Kenji.', '(2, 2) (Magician Rank 8)'],
          eveningInfo: ['Talk to Fuuka and read with her.'],
          miscInfo: ['Any option.'],
        },
        {
          day: 2,
          dayTimeInfo: ['Hang out with Bebe.', '(2) (Temperance Rank 8)'],
          eveningInfo: ['Talk to Yukari and cook with her.'],
          miscInfo: [''],
        },
        {
          day: 3,
          dayTimeInfo: ['Hang out with Yuko.', '(Any, Any, 2) (Strength Rank 8)'],
          eveningInfo: ['Talk to Shinjiro and cook with him.'],
          miscInfo: ['Any option.'],
        },
        {
          day: 4,
          dayTimeInfo: [''],
          eveningInfo: [''],
          miscInfo: ['Mandatory Story Battle.'],
        },
        {
          day: 5,
          dayTimeInfo: [''],
          eveningInfo: ['Enter Shinjiro\'s room and check his drawer. (Shinjiro\'s Linked Episode Ending)', 'Take Koromaru for a walk. (Aigis)'],
          miscInfo: [''],
        },
        {
          day: 6,
          dayTimeInfo: ['Naganaki Shrine - Get a Fortune Reading for Yuko'],
          eveningInfo: ['Iwatodai Dorm Shared Computer - Select Umiushi Fan Book.'],
          miscInfo: ['Story Event. (Death Rank 8)'],
        },
        {
          day: 7,
          dayTimeInfo: ['Hang out with Mamoru.', '(2, 1, Any, 2) (Star Rank 7)'],
          eveningInfo: ['Iwatodai Dorm Shared Computer - Select School X Site Note'],
          miscInfo: ['Question Answer: Dopamine.'],
        },
        {
          day: 8,
          dayTimeInfo: ['Naganaki Shrine - Get a Fortune Reading for Yuko.'],
          eveningInfo: ['Hang out with the Monk.', '(2, 2) (Tower Rank 6)'],
          miscInfo: [''],
        },
        {
          day: 9,
          dayTimeInfo: ['Hang out with Mamoru.', '(1, 2) (Star Rank 8)'],
          eveningInfo: ['Hang out with Akihiko. (Linked Episode 3)'],
          miscInfo: ['Any option.'],
        },
        {
          day: 10,
          dayTimeInfo: ['Hang out with The Old Couple.', '(1, Any) (Hierophant Rank 9)'],
          eveningInfo: ['Hang out with the Monk.', '(2) (Tower Rank 7)'],
          miscInfo: ['Question Answer: Helena Blavatsky.'],
        },
        {
          day: 11,
          dayTimeInfo: ['Shopping Channel: Paring Knife set', 'Hang out with Akinari.', '(1, 2) (Sun Rank 4)'],
          eveningInfo: ['Hang out with the Monk.', '(1, 3, Any, 2) (Tower Rank 8)'],
          miscInfo: [''],
        },
        {
          day: 12,
          dayTimeInfo: ['Naganaki Shrine - Get a Fortune Reading for Yukari.'],
          eveningInfo: ['Talk to Mitsuru and study with everyone'],
          miscInfo: [''],
        },
        {
          day: 13,
          dayTimeInfo: ['Question Answer: Addiction.'],
          eveningInfo: [''],
          miscInfo: [''],
        },
        {
          day: 14,
          dayTimeInfo: ['Question Answer: Pythagoras.'],
          eveningInfo: [''],
          miscInfo: [''],
        },
        {
          day: 15,
          dayTimeInfo: ['Question Answer: Superconductivity.'],
          eveningInfo: [''],
          miscInfo: [''],
        },
        {
          day: 16,
          dayTimeInfo: ['Question Answer: To reveal a secret.'],
          eveningInfo: [''],
          miscInfo: [''],
        },
        {
          day: 17,
          dayTimeInfo: ['Hang out with Yuko. (Any, 2, Any, 1(romance)/2(platonic), 1) (Strength Rank 9)'],
          eveningInfo: ['Hang out with the Monk.', '(2, 2, 1) (Tower Rank 9)'],
          miscInfo: [''],
        },
        {
          day: 18,
          dayTimeInfo: ['Shopping Channel: Instant Curry set', 'Hang out with Akinari.', '(1) (Sun Rank 5)'],
          eveningInfo: ['Take Koromaru for a walk. (Yuko)'],
          miscInfo: [''],
        },
        {
          day: 19,
          dayTimeInfo: [
            'Talk to Mitsuru in the Faculty Office Hallway to receive a reward for your exam score',
            'Hang out with Yukari.',
            '(3) (Lovers Rank 4)',
          ],
          eveningInfo: ['Talk to Mitsuru and read with her'],
          miscInfo: ['Exam Results: Top Score.', 'Question Answer: India.'],
        },
        {
          day: 20,
          dayTimeInfo: ['Hang out with Chihiro.', '(Any, 2) (Justice Rank 8)'],
          eveningInfo: ['Talk to Yukari and watch a DVD with her.'],
          miscInfo: [''],
        },
        {
          day: 21,
          dayTimeInfo: ['Hang out with Yukari.', '(Any, Any, Any, Any, 1) (Lovers Rank 5)'],
          eveningInfo: ['Talk to Akihiko and cook with him'],
          miscInfo: [''],
        },
        {
          day: 22,
          dayTimeInfo: ['Talk to Ikutsuki, obtain Glasses Wipe, and complete Elizabeth\'s 76th Request.', 'Hang out with Yukari. (2, 1) (Lovers Rank 6)'],
          eveningInfo: ['Talk to Fuuka and read with her'],
          miscInfo: ['Question Answer: Venus.'],
        },
        {
          day: 23,
          dayTimeInfo: ['Hang out with Kazushi.', '(2) (Chariot Rank 8)'],
          eveningInfo: ['Talk to Yukari and cook with her'],
          miscInfo: ['Any option.'],
        },
        {
          day: 24,
          dayTimeInfo: ['Hang out with Yukari.', '(1) (Lovers Rank 7)'],
          eveningInfo: ['Take Koromaru for a walk. (Keisuke)'],
          miscInfo: [''],
        },
        {
          day: 25,
          dayTimeInfo: ['Shopping Channel: Pumpkin Mask set (Optional)', 'Accept phone invitation from Chihiro. (3)'],
          eveningInfo: ['Take Koromaru for a walk. (Mamoru)'],
          miscInfo: [''],
        },
        {
          day: 26,
          dayTimeInfo: ['Hang out with Yukari.', '(1, Any) (Lovers Rank 8)'],
          eveningInfo: ['Talk to Junpei and read with him.'],
          miscInfo: ['Question Answer: Izumo.'],
        },
        {
          day: 27,
          dayTimeInfo: ['Hang out with Keisuke.', '(1, Any, Any) (Fortune Rank 8)'],
          eveningInfo: ['Talk to Fuuka and head to the Garden with her'],
          miscInfo: [''],
        },
        {
          day: 28,
          dayTimeInfo: ['Hang out with Yukari.', '(2, 1(romance)/2(platonic)) (Lovers Rank 9)'],
          eveningInfo: ['Talk to Akihiko and cook with him.'],
          miscInfo: [''],
        },
        {
          day: 29,
          dayTimeInfo: ['Hang out with Kenji.', '(2) (Magician Rank 9)'],
          eveningInfo: ['Talk to Fuuka and read with her.'],
          miscInfo: ['Any option.'],
        },
        {
          day: 30,
          dayTimeInfo: ['Hang out with Hidetoshi in the Student Council Room.', '(1) (Emperor Rank 9)'],
          eveningInfo: ['Club Escapade - Get a Fortune Reading.', 'Head to Tartarus.'],
          miscInfo: [
            'Question Answer: Beta-amylase.',
            'Reach Floor 172',
            'Open the chest at the deepest point of the Monad Passage on Floor 171F',
            'Have at least 100,000 Yen after selling materials tomorrow.',
            'Rescue the missing person on Floor 146 for social link',
            'Rescue the other 2 Missing Persons',
          ],
        },
        {
          day: 31,
          dayTimeInfo: [
            'Sell all of your materials. (If You are holding less than 100,000 Yen, reload)',
            'Collect your reward at the Police Station',
            'Hang out with Fuuka.',
            '(1, 1) (Priestess Rank 8)',
          ],
          eveningInfo: ['Hang out with the Monk. (Tower Rank 10)'],
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
