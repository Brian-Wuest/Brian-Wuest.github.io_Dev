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
          day: 12,
          dayTimeInfo: ['Forced palace infiltration'],
          eveningInfo: ['Unavailable'],
          miscInfo: ['Class answer: Villains (Knowledge +1)'],
        },
        {
          day: 13,
          dayTimeInfo: ['Story scripted events'],
          eveningInfo: ['Story scripted events'],
          miscInfo: [''],
        },
        {
          day: 14,
          dayTimeInfo: ['Story scripted events'],
          eveningInfo: ['Story scripted events'],
          miscInfo: [''],
        },
        {
          day: 15,
          dayTimeInfo: ['Forced palace infiltration'],
          eveningInfo: ['Unavailable'],
          miscInfo: ['Make sure you have 1,500 yen and buy plant nutrients'],
        },
        {
          day: 16,
          dayTimeInfo: ['Story scripted events'],
          eveningInfo: ['Story scripted events'],
          miscInfo: [''],
        },
        {
          day: 17,
          dayTimeInfo: ['Unavailable'],
          eveningInfo: ['Scripted tools crafting tutorial (Proficiency +2)'],
          miscInfo: [''],
        },
        {
          day: 18,
          dayTimeInfo: ['Get [Pirate Legend] from library.', 'Buy Plant Nutrients. Buy materials for crafting lockpicks.', 'Talk to doctor at clinic.'],
          eveningInfo: ['Complete crossword on the first floor table (Knowledge +1).', 'Clean your room (find Yongen Wanderer and Social Thought)'],
          miscInfo: [''],
        },
        {
          day: 19,
          dayTimeInfo: ['Chariot 2', '3, 2, 1', '0, 0', '1, 1', '1, 1, 1'],
          eveningInfo: ['Use plant nutrients on the plant in your room (Kindness +2).', 'Craft lockpicks (Proficiency +2)'],
          miscInfo: ["Class answer: They're the same (knowledge +1)"],
        },
        {
          day: 20,
          dayTimeInfo: ['Buy many healing items from the clinic', "Secure infiltration route at Kamoshida's palace"],
          eveningInfo: ['Study at Leblanc (Knowledge +3)'],
          miscInfo: ['Read [Pirate Legend] on the train'],
        },
        {
          day: 21,
          dayTimeInfo: ['Study at the library (Knowledge +3)'],
          eveningInfo: ['Talk to Sojiro (Hierophant 1)', '3, 2, 2'],
          miscInfo: [''],
        },
        {
          day: 22,
          dayTimeInfo: ['Apply at and work at the convenience store at underground walkway (Charm +2, trophy)'],
          eveningInfo: ['Hierophant 2', '2, 0, 0', '0, 2, 0', '2, 0', '2, 0, 0'],
          miscInfo: ['Yongen-Jaya at night is unlocked'],
        },
        {
          day: 23,
          dayTimeInfo: ['Study at the library (Guts +1, Knowledge +1)'],
          eveningInfo: ['Make coffee (Charm +1)'],
          miscInfo: ['Class answer: All of them (Knowledge +1)'],
        },
        {
          day: 24,
          dayTimeInfo: ['Get Aojiru from underground walkway drink stand (Charm Rank 2)', 'Apply for and work at Flower shop (Kindness + 2)'],
          eveningInfo: ['Go to the bathhouse in Yongen (Charm + 3)'],
          miscInfo: ['Home shopping (Optional, Share of Spring set recommended)'],
        },
        {
          day: 25,
          dayTimeInfo: [
            'Library: Get [Alluring Dancer]',
            'Buy DVD Player from Yongen secondhand shop',
            'Buy membership at DVD rental store in Shibuya',
            'Borrow [X Folders] DVD',
            'Work at Flowershop (Kindess rank 2)',
          ],
          eveningInfo: ['Hierophant 3', '2, 0, 0', '0, 2, 0', '2, 0, 2'],
          miscInfo: ['Finish [Pirate Legend] on the train (Guts +3)', 'Class answer: You unquestionably support it, You have a duty to correct it (Charm +1)'],
        },
        {
          day: 26,
          dayTimeInfo: ['Study at the library (Guts rank 2, Knowledge +1)'],
          eveningInfo: ['Watch [X Folders] (Guts +2)'],
          miscInfo: [''],
        },
        {
          day: 27,
          dayTimeInfo: ['Send calling card.'],
          eveningInfo: ['Solve crossword (Knowledge +1).', 'Craft infiltration tools (Proficiency +2)'],
          miscInfo: ['Class answer: Four color theorem (Knowledge +1)'],
        },
        {
          day: 28,
          dayTimeInfo: ["Clear Kamoshida's palace."],
          eveningInfo: ['Watch [X Folders] (Guts +2)'],
          miscInfo: [''],
        },
        {
          day: 29,
          dayTimeInfo: ['Turn in [X Folders] and rent [Wraith]', 'Chariot 3', '2, 0, 0', '3, 2, 0', '2, 0, 0'],
          eveningInfo: ['Study (Knowledge + 2)'],
          miscInfo: [''],
        },
        {
          day: 30,
          dayTimeInfo: ['Watch the movie at Shibuya theatre (Guts +3).'],
          eveningInfo: [
            'Buy materials for infiltration tools if needed.',
            'Craft infiltration tools— reload until you get the bonus point (Proficiency rank 2)',
          ],
          miscInfo: ['Read Alluring Dancer on the train', 'Class answer: Wonder, Child, A prodigy (Knowledge +1)'],
        },
      ] as Array<MonthEvent>,
    } as MonthEvents);
  }

  loadMayData() {
    // May
    this.months.push({
      name: 'May',
      miscMonthInfo: '',
      exitStats: [
        '',
      ],
      events: [
        {
          day: 1,
          dayTimeInfo: [
            'Check TV for home shopping (Optional, Muscle set recommended)',
            'Get Aojiru (Proficiency +1)',
            'Death 2, requires Guts rank 2! (Guts +1)',
            '2, 0, 0',
            '2, 0, 0',
            '2, 0, 2',
          ],
          eveningInfo: ['Yongen Bathhouse (Charm +3)'],
          miscInfo: [''],
        },
        {
          day: 2,
          dayTimeInfo: ['Story segment'],
          eveningInfo: ['Solve crossword (Knowledge +1). Study (Knowledge rank 2)'],
          miscInfo: [''],
        },
        {
          day: 3,
          dayTimeInfo: ['Story segment'],
          eveningInfo: ['Watch Wraith (Kindness +2)'],
          miscInfo: [''],
        },
        {
          day: 4,
          dayTimeInfo: ['Story segment'],
          eveningInfo: ['Craft infiltration tools (Proficiency +2)'],
          miscInfo: ["Have at least 4 lockpicks for the locked chests in Madarame's palace"],
        },
        {
          day: 5,
          dayTimeInfo: ['Story segment'],
          eveningInfo: ['Feed plant (Kindness +2)', 'Save your game and watch Wrait (Kindness +2)'],
          miscInfo: [''],
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
          miscInfo: ['Class Event: (Knowledge +1), make sure to re-load to try to dodge the chaulk to get Charm +2'],
        },
        {
          day: 7,
          dayTimeInfo: ['Mementos tutorial.'],
          eveningInfo: ['Study at Leblanc (Knowledge +2)'],
          miscInfo: ['Class answer: Fatal woman (Knowledge +1)'],
        },
        {
          day: 8,
          dayTimeInfo: ['Home shopping (Optional, Plant Nutrient set recommended)', 'Story segment'],
          eveningInfo: ['Get Aojiru (Guts +1)', 'Work at beef bowl, SUN Prereq (Proficiency +3 for all correct orders)'],
          miscInfo: [''],
        },
        {
          day: 9,
          dayTimeInfo: ['Death 3 (Guts +1):', '0, 0', '0, 0', '2, 0, 2', '2, 0, 0'],
          eveningInfo: ["Accept Panther's invitation for a study hangout (Knowledge +3)"],
          miscInfo: ['Receive Mementos mission from Mishima'],
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
          miscInfo: ['Class answer: The Heian period (Knowledge +1)'],
        },
        {
          day: 11,
          dayTimeInfo: ['Minamoto no Yoshitsune', 'Minamoto no Yoritomo, Yoritomo won, the weak'],
          eveningInfo: ['Unavailable'],
          miscInfo: ['Finals week begings!'],
        },
        {
          day: 12,
          dayTimeInfo: ['Cognition', 'Both'],
          eveningInfo: ['Unavailable'],
          miscInfo: [''],
        },
        {
          day: 13,
          dayTimeInfo: ["The Devil's Dictionary", 'Femma Fatale'],
          eveningInfo: ['Unavailable'],
          miscInfo: [''],
        },
        {
          day: 14,
          dayTimeInfo: ['Last day of midterms'],
          eveningInfo: ['Watch Bubbly Hills (Charm +2)'],
          miscInfo: [''],
        },
        {
          day: 15,
          dayTimeInfo: ['Story segment'],
          eveningInfo: ['Home shopping (optional, no recommendations)', 'Study at Leblanc (Knowledge +2)'],
          miscInfo: [''],
        },
        {
          day: 16,
          dayTimeInfo: ['Madarame Palace introduction'],
          eveningInfo: ['Unavailable'],
          miscInfo: ['Class answer: The Placebo effect (Knowledge +1)'],
        },
        {
          day: 17,
          dayTimeInfo: ['Story segment'],
          eveningInfo: ['Save game. Craft infiltration tools, reload until you make extra (Proficiency rank 3)'],
          miscInfo: [''],
        },
        {
          day: 18,
          dayTimeInfo: ['Death 4 (Guts +1):', '0, 2', '3, 2, 2', '2, 0, 0'],
          eveningInfo: ['Solve crossword (Knowledge +1)', 'Talk to Yoshida at Central Square (SUN Prereq)'],
          miscInfo: [''],
        },
        {
          day: 19,
          dayTimeInfo: ['Study at the diner, order the sandwich set (Guts +1, Knowledge +2)'],
          eveningInfo: ['Answer TV quiz, “Make noise to cause neurosis” (Knowledge +1)', 'Bathhouse (Charm +2, Guts +1)'],
          miscInfo: ['Class answer: Hokusai Katsushika (Knowledge +1)'],
        },
        {
          day: 20,
          dayTimeInfo: ['Buy medicine and equipment as you see fit.', 'Madarame Palace infiltration route part 1 (until the roadblock at the central garden)'],
          eveningInfo: ['Study (Knowledge +2)'],
          miscInfo: ['Test results (Charm +2)', 'Make sure to get the Treasure Demon today, weak to nuclear attacks'],
        },
        {
          day: 21,
          dayTimeInfo: ['Madarame Palace part 2'],
          eveningInfo: ['Feed plant (Kindness +2)', ' Watch Bubbly Hills (Charm +2)'],
          miscInfo: ['Train reading: Alluring Dancer (Charm +3)', 'Class answer: 1:1.414 (Knowledge +1)'],
        },
        {
          day: 22,
          dayTimeInfo: ['Home shopping (optional, no recommendations)', 'Aojiru (Kindness +1)', 'Chariot 4:', '0, 2, 0', '3, 2, 3'],
          eveningInfo: ['Bathhouse (Charm +3)'],
          miscInfo: [''],
        },
        {
          day: 23,
          dayTimeInfo: ["Secure infiltration route at Madarame's Palace"],
          eveningInfo: ['Save. Craft infiltration tools, reload until you get the bonus (Proficiency +3)'],
          miscInfo: ['Together, senses, senses coming together (Knowledge +1)'],
        },
        {
          day: 24,
          dayTimeInfo: ['Buy equipment and medicine as needed', 'Return Alluring Dancer, take Gallant Rogue', 'Send Calling Card!'],
          eveningInfo: ['Study (Knowledge +2)'],
          miscInfo: ['Train reading: Buchiko'],
        },
        {
          day: 25,
          dayTimeInfo: ['Madarame Palace cleared'],
          eveningInfo: ['Study (Knowledge rank 3)'],
          miscInfo: [''],
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
          miscInfo: ['Class answer: Arther Conan Doyle (Knowledge +1)'],
        },
        {
          day: 27,
          dayTimeInfo: ['Death 5 (Guts +1)', '0, 0', '0, 0', '3, 2, 0', '2, 0, 0'],
          eveningInfo: ['Story segment'],
          miscInfo: [''],
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
          miscInfo: [''],
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
          miscInfo: [''],
        },
        {
          day: 30,
          dayTimeInfo: ['Story segment'],
          eveningInfo: ['Study at diner, order steak (Knowledge +1, Kindness +1)'],
          miscInfo: [''],
        },
        {
          day: 31,
          dayTimeInfo: ['Buy equipment and medicine as you see fit', 'Enter Mementos (Note: Walk out with at least 80K yen)'],
          eveningInfo: ['Solve crossword (Knowledge +1)', 'Study (Knowledge +2)'],
          miscInfo: ['Class answer: John Silver (Knowledge +1)'],
        },
      ] as Array<MonthEvent>,
    } as MonthEvents);
  }

  loadJuneData() {
    // June
    this.months.push({
      name: 'June',
      miscMonthInfo: '',
      exitStats: [
        '',
      ],
      events: [
        {
          day: 1,
          dayTimeInfo: ['Chariot Rank 6', '2, 2, 3', '3, 3', '3, 3, 0', '0, 0', '0, 0', '0, 0, 2'],
          eveningInfo: ['Drop into the bookstore to pick up any new books.', 'Moon 3'],
          miscInfo: ["Note that you don't need a moon persona to get moon confidant ranks"],
        },
        {
          day: 2,
          dayTimeInfo: ['Death 6 (Guts +1)', '0, 0, 0', '0, 0', '0, 3, 2', '2, 0, 2'],
          eveningInfo: [
            'TV quiz “Do not pay the salary to the keeper” (Knowledge +1)',
            'Big Bang Burger challenge (Knowledge +2, Guts +2, Proficiency +2, Charm +2)',
          ],
          miscInfo: ['Talk to boys outside of the school to confirm mementos target name'],
        },
        {
          day: 3,
          dayTimeInfo: ['Consultant 3', '2, 0, 2', '2, 2, 0', '0, 0, 0', '2, 0, 2', '2, 2', '2, 0, 0'],
          eveningInfo: ['Temperance 2', '2, 0, 0', '0, 2, 0', '0, 0', '0, 0, 0', '2, 2, 2'],
          miscInfo: ['Train reading: Gallant Rogue', 'Class reading: Gallant Rogue (Guts +3)'],
        },
        {
          day: 4,
          dayTimeInfo: ['Big Bang Burger Challenge (Guts +3)'],
          eveningInfo: ['Temperance 3', '2, 2, 0', '0, 0, 0', '0, 3, 0', '0, 0, 0', '2, 0, 0'],
          miscInfo: ['Class answer: The halo effect (Knowledge +1)'],
        },
        {
          day: 5,
          dayTimeInfo: [
            'Talk to the info clerk in Kichijoji about every topic (Knowledge +1)',
            'Optional: buy the leather pen wallet from the stationery store',
            'Sell your equipment at the vintage shop to pop a trophy',
          ],
          eveningInfo: ['Aojiru (Charm +1)', 'Save your game. Sun 2 (Charm rank 3)'],
          miscInfo: ['Kichijoji Unlocked!', 'Mementos mission acquired'],
        },
        {
          day: 6,
          dayTimeInfo: ['Consultant 4', '0, 0', '3, 0, 2', '2, 0, 3', '0, 0', '2, 2', '3, 0, 0', '2, 2, 0'],
          eveningInfo: ['Feed plant (Kindness +2)', 'Take the twins to Big Bang Burger'],
          miscInfo: ['Reload until you dodge the chalk (66% chance of success, Charm +2)', 'Mementos mission acquired.'],
        },
        {
          day: 7,
          dayTimeInfo: ['Study at the diner, order salad set (Guts +1, Knowledge +2)'],
          eveningInfo: ['Solve crossword (Knowledge +1)', 'Take the twins to the movies'],
          miscInfo: ['Class answer: The number of legs (Knowledge +1)'],
        },
        {
          day: 8,
          dayTimeInfo: ['Respond to Yoshizawa’s text. Faith 2 (persona not required as of yet)', '1, 0, 1', '1, 0, 0', '0, 0', '0, 0, 0', '0, 0, 0', '1, 0, 0'],
          eveningInfo: ['Hang out with Hierophant (no rank up. If you bought the pen wallet last time, gift it to him now.)'],
          miscInfo: ['Class answer: Controlling public thought (knowledge +1)'],
        },
        {
          day: 9,
          dayTimeInfo: ['Story segment (Suidobashi unlocked)'],
          eveningInfo: ['Moon 4'],
          miscInfo: [''],
        },
        {
          day: 10,
          dayTimeInfo: ['Story segment'],
          eveningInfo: ['Call Temperance (no rank up)'],
          miscInfo: [''],
        },
        {
          day: 11,
          dayTimeInfo: ['All-day story segment (Mission afterparty)'],
          eveningInfo: ['All-day story segment (Mission afterparty)'],
          miscInfo: [''],
        },
        {
          day: 12,
          dayTimeInfo: [
            'Aojiru (Proficiency +1)',
            'Buy foreign protein from the Shibuya Underground sports shop',
            'Lovers 5',
            '0, 2',
            '0, 2',
            '2, 0',
            '0, 0',
            '0, 0',
          ],
          eveningInfo: [
            'Travel to Kichijoji. Talk to the two men in the leftmost alleyway to acquire target name. Talk to the masked man in the same alley and trade him the foreign protein for a whip',
            'SUN 3',
          ],
          miscInfo: ['Mementos mission acquired'],
        },
        {
          day: 13,
          dayTimeInfo: ['Story segment'],
          eveningInfo: [
            ' Justice 2 (you will find him standing in front of the Darts & Billiards bar in Kichijoji)',
            '2, 0',
            '0, 0',
            '2, 2',
            '0, 0',
            '2, 2, 3',
            '0, 0, 2',
          ],
          miscInfo: ['Class answer: Green (Knowledge +1)'],
        },
        {
          day: 14,
          dayTimeInfo: ['Story segment'],
          eveningInfo: ['Big Bang Burger challenge (Guts +3)'],
          miscInfo: [''],
        },
        {
          day: 15,
          dayTimeInfo: ['Story segment'],
          eveningInfo: ['Temperance 4', '0, 0', '2, 0, 0', '2, 0, 3', '0, 0, 0'],
          miscInfo: ['Train reading: Buchiko (Kindness +3)', 'Class answer: Coins (Knowledge rank 4)'],
        },
        {
          day: 16,
          dayTimeInfo: ['Story segment'],
          eveningInfo: ['Crossword (Knowledge +1)', 'Hierophant 4 (Kindness +2)', '3, 0, 0', '0, 3, 0', '2, 0, 0'],
          miscInfo: [''],
        },
        {
          day: 17,
          dayTimeInfo: ['Story segment'],
          eveningInfo: ['Temperance 5', '2, 0, 2', '2, 0, 2', '0, 0, 0', '0, 0', '0, 0, 0', '0, 0, 2'],
          miscInfo: [''],
        },
        {
          day: 18,
          dayTimeInfo: [
            'Turn in Gallant Rogue, take out Zorro, the Outlaw',
            'Make sure you have a Lovers persona. Go to Shibuya Underground Walkway, talk to Fox (Emperor 1)',
          ],
          eveningInfo: ['Shinjuku event.', 'Study at Leblanc (Knowledge +2)'],
          miscInfo: ['Mementos mission acquired'],
        },
        {
          day: 19,
          dayTimeInfo: ['Story segment'],
          eveningInfo: ['Save game. Make infiltration tools, reload until bonus (Proficiency +3)'],
          miscInfo: ['Home shopping: no recommendations'],
        },
        {
          day: 20,
          dayTimeInfo: ['Forced Palace infiltration'],
          eveningInfo: ['Save game. Study at Leblanc (Knowledge +2)'],
          miscInfo: ['Class answer: Smartphone (Charm +1, Lovers +2)'],
        },
        {
          day: 21,
          dayTimeInfo: ['Turn in Bubbly Hills, get Running Dead', 'Consultant 5', '3, 0, 0', '0, 0, 0', '0, 2, 3', '2, 2, 0', '0, 2, 0', '2, 0, 2'],
          eveningInfo: ['Travel to Shinjuku. Buy all the books from the bookstore and some Mega Fertilizer from the flower shop', 'Take the twins to the gym'],
          miscInfo: ['Reload until you dodge the chalk (Charm +2)'],
        },
        {
          day: 22,
          dayTimeInfo: ['Lovers hangout at Harajuku', '3, 2, 3'],
          eveningInfo: [
            'Put Skull’s invitation on hold',
            'Feed your plant (Kindness rank 3)',
            'Solve crossword (Knowledge +1)',
            'Accept Skull’s invitation: Chariot 7 (Tsukishima unlocked)',
            '0, 3',
            '3, 2',
            '2, 0, 0',
          ],
          miscInfo: [''],
        },
        {
          day: 23,
          dayTimeInfo: ['Emperor 2', '2, 2, 0', '3, 3, 0', '2, 0, 0'],
          eveningInfo: ['TV Quiz “Order a meal despite being penniless” (Knowledge +1)', 'Devil 1'],
          miscInfo: ['Train reading: Cinema Treasures', 'Class answer: A pope (Knowledge +1)'],
        },
        {
          day: 24,
          dayTimeInfo: ['Buy Yakisoba Bread from Shujin Academy’s store (first floor)', 'Lovers 6', '3, 0, 2', '0, 0, 0', '0, 0', '3, 2, 3', '2, 2, 0'],
          eveningInfo: ['Temperance 6', '0, 2, 0', '3, 2, 3', '0, 0', '0, 0, 2'],
          miscInfo: [''],
        },
        {
          day: 25,
          dayTimeInfo: ['Death 7 (Guts +1)', '2, 2, 2', '0, 0, 0', '2, 2, 0', '0, 3, 2'],
          eveningInfo: ['Call Kawakami. Temperance event (no rank up)'],
          miscInfo: ['Class reading: Zorro the Outlaw'],
        },
        {
          day: 26,
          dayTimeInfo: [
            'Aojiru (Guts +1)',
            'Buy equipment and medicine as needed',
            'Buy Sp Adhesive 3 from Takemi',
            "Secure infiltration route in Kaneshiro's Palace",
          ],
          eveningInfo: ['Watch Running Dead (Guts +3)'],
          miscInfo: [
            'Home shopping: Black Power set recommended',
            'Make sure to leave palace with at least 150k Yen',
            'After securing route, go to velvet room to learn about Fusion Alarms',
            'Catch up on Strength confidant',
            'Lock Pins:',
            'RICH: 0102',
            'REAP: 0931',
            'HUGE: 2319',
            'GOLD: 1841'
          ],
        },
        {
          day: 27,
          dayTimeInfo: ['Send calling card'],
          eveningInfo: ['Finish Running Dead (Guts rank 4)'],
          miscInfo: ['Class answer: Dogs (Knowledge +1)'],
        },
        {
          day: 28,
          dayTimeInfo: ['Clear Kaneshiro’s Palace'],
          eveningInfo: ['Save your game. Make infiltration tools, reload until bonus (Proficiency +3)'],
          miscInfo: [''],
        },
        {
          day: 29,
          dayTimeInfo: [
            'Turn in Running Dead, get Not-so-hot Betsy',
            'Sell all your treasure to Iwai, and your dirty equipment to the vintage shop',
            'Bring the Yakisoba Bread to Sakai',
            'Faith 3',
            '3, 0, 0',
            '2, 2, 0',
            '3, 2, 0',
            '0, 2, 0',
            '0, 0',
            '0, 0',
            '0, 0, 0',
            '3, 3, 3',
            '0, 0',
          ],
          eveningInfo: ['Temperance 7', '2, 0, 3', '0, 0, 3', '0, 0, 0'],
          miscInfo: ['Class answer: Gold (Knowledge +1)'],
        },
        {
          day: 30,
          dayTimeInfo: ['Emperor 3', '0, 0, 2', '0, 0, 0', '2, 3, 0', '2, 2', '2, 0, 0'],
          eveningInfo: ['Solve crossword (Knowledge +1)', 'Travel to Shinjuku and talk to the fortune teller (Fortune confidant prerequisite)'],
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
      exitStats: [
        '',
      ],
      events: [
        {
          day: 1,
          dayTimeInfo: ['Return Zorro, take out Speed Reading. Talk to Queen (Priestess 1)'],
          eveningInfo: ['Temperance 8', '0, 0, 3', '2, 3, 0', '0, 0, 0', '0, 0', '3, 3, 3', '3, 3', '2, 2, 2'],
          miscInfo: ['Train reading: Zorro the Outlaw (Kindness +3)', "Class answer: Barbarian's head (Knowledge +1)"],
        },
        {
          day: 2,
          dayTimeInfo: ['Return Speed Reading. Take out The Illusory Popess', 'Priestess 2', '2, 0, 0', '2, 3, 0', '0, 0', '2, 0, 0'],
          eveningInfo: ['Talk to the fortune teller in Shinjuku and cough up 100,000 yen (Fortune confidant prerequisite)', "Accept Skull's invitation"],
          miscInfo: ['Class reading: Speed Reading', 'Temperance event: receive Mementos mission'],
        },
        {
          day: 3,
          dayTimeInfo: ['Fishing date with Skull (Ichigaya unlocked)', '3, 0', '0, 0', '3, 3 (either gives Temperance +3)'],
          eveningInfo: ['Aojiru (Kindness +1)', 'Travel to Kanda and speak to the girl playing Shogi (Star 1, Knowledge +1, requires Charm rank 3)'],
          miscInfo: ['Home shopping: Incense set recommended', 'Note: On Sundays, the priest will sell exclusive items. Purchase them if you wish'],
        },
        {
          day: 4,
          dayTimeInfo: [
            'Make sure you have personae of every arcana related to your teammates',
            'Play billiards with the team or darts with a teammate of your choice',
          ],
          eveningInfo: ['Talk to the Shinjuku fortune teller and receive Mementos mission (Fortune confidant prerequisite)'],
          miscInfo: ['Train reading: Playing the Game', 'Class answer: Julius and Augustus (Knowledge +1)'],
        },
        {
          day: 5,
          dayTimeInfo: ['Priestess 3', '2, 0, 0', '2, 3, 0', '2, 0, 0'],
          eveningInfo: ['Ask Iwai about the paper bag (Hanged Man 1, requires Guts rank 3)'],
          miscInfo: [''],
        },
        {
          day: 6,
          dayTimeInfo: ['Buy medicine and equipment as necessary. Infiltrate Mementos'],
          eveningInfo: ['Watch Not-so-hot Betsy (Charm +3)'],
          miscInfo: ['Class reading: Tidying the Heart (Proficiency rank 4)'],
        },
        {
          day: 7,
          dayTimeInfo: [
            'Sell your Mementos spoils',
            'Faith 4',
            '0, 2, 0',
            '3, 0, 2',
            '0, 0',
            '2, 2, 0',
            '0, 0',
            '2, 0',
            '0, 0, 0',
            '2, 0',
            '0, 2, 0',
            '2, 2, 0',
          ],
          eveningInfo: ['Solve crossword (Knowledge +1)', 'Visit fortune teller (Fortune 1)'],
          miscInfo: ["Class answer: the Milky Way, Traditional food, Soumen's noodles (Charm +1, Lovers +2)"],
        },
        {
          day: 8,
          dayTimeInfo: ['Return Popess, take out The Great Thief', 'Lovers7', '0, 2', '0, 0', '0, 0', '0, 2, 0', '2, 0, 0'],
          eveningInfo: [
            'Buy more Mega Fertilizer from Shinjuku',
            'Get Kindness reading from Chihaya',
            'Feed your plant (Kindness +3)',
            'Temperance 9',
            '3, 0, 0',
            '3, 3',
            '2 (end of conversation), 2',
            '2 (end of conversation), 0',
            '0, 0 (Romantic)',
            '(only available to platonic route) 0, 2, 0',
          ],
          miscInfo: ['Train reading: Illusory Popess (Kindness +3)'],
        },
        {
          day: 9,
          dayTimeInfo: ['Story segment'],
          eveningInfo: ['Hanged 2', '0, 0', '0, 0', '0, 2, 2'],
          miscInfo: ['Class answer: a triangle(Knowledge +1)'],
        },
        {
          day: 10,
          dayTimeInfo: ['Story segment'],
          eveningInfo: ['Watch Not-so-hot Betsy (Charm +3)'],
          miscInfo: [''],
        },
        {
          day: 11,
          dayTimeInfo: ['Story segment'],
          eveningInfo: ['Buy Soothing Soba from the convenience store', 'Star 2 (Knowledge +1)', '2, 0, 0', '0, 0', '0, 0, 2'],
          miscInfo: [
            'Trader Sakai: You can buy what he wants from the convenience store',
            'Class answer: Memories that last a long time, infinite, forever (Knowledge +1)',
            'Chalk assault (Don’t worry about succeeding this one, potential Charm +2).',
          ],
        },
        {
          day: 12,
          dayTimeInfo: ['Chariot 8', '0, 0', '3, 3', '3, 2', '2, 3', '0, 2, 0'],
          eveningInfo: [
            'Solve crossword (Knowledge +1)',
            'Travel to Kichijoji, hand the Soothing Soba over to Sakai',
            'Justice 3',
            '0, 0',
            '3, 2, 0',
            '0, 0',
            '0, 0',
            '0, 0, 0',
            '0, 2, 0',
          ],
          miscInfo: ['Class answer: Thievery (Knowledge +1)'],
        },
        {
          day: 13,
          dayTimeInfo: ['64 degrees', "Zhuge Liange, Barbarian's heads, to offer them instead of heads"],
          eveningInfo: [''],
          miscInfo: [''],
        },
        {
          day: 14,
          dayTimeInfo: ['Red King Crab (Paralithodes)', 'It caused confusion in the economy'],
          eveningInfo: [''],
          miscInfo: [''],
        },
        {
          day: 15,
          dayTimeInfo: ['Raining cats and dogs', 'Demon guts'],
          eveningInfo: [''],
          miscInfo: [''],
        },
        {
          day: 16,
          dayTimeInfo: ['Last day of finals'],
          eveningInfo: [''],
          miscInfo: [''],
        },
        {
          day: 17,
          dayTimeInfo: ['Story segment'],
          eveningInfo: [
            'Aojiru (Knowledge +1)',
            'Turn in Betsy, take out ICU',
            'Get Charm reading from Chihaya',
            'Respond to Panther’s invitation to the movies (Charm rank +3)',
            '2, 3',
          ],
          miscInfo: [''],
        },
        {
          day: 18,
          dayTimeInfo: ['Story segment'],
          eveningInfo: ['Watch ICU (Kindness +3)'],
          miscInfo: [''],
        },
        {
          day: 19,
          dayTimeInfo: ['Priestess 4', '2, 0, 0', '0, 0', '0, 0, 0', '3, 2, 0', '0, 2, 3'],
          eveningInfo: ['Talk to Sojiro for reward', 'Solve crossword (Knowledge +1)', 'Fortune 2', '0, 0, 0', '0, 0, 0', '0, 2', '2, 0, 0'],
          miscInfo: ['Exam results (Charm Rank 4)'],
        },
        {
          day: 20,
          dayTimeInfo: ['Story segment'],
          eveningInfo: ['Watch ICU (Kindness +3)'],
          miscInfo: [''],
        },
        {
          day: 21,
          dayTimeInfo: ['Story segment'],
          eveningInfo: ['Read Wise Men’s Words (Knowledge +3)'],
          miscInfo: [''],
        },
        {
          day: 22,
          dayTimeInfo: ['Story segment'],
          eveningInfo: ['Read Medjed Menace* (Knowledge +3)'],
          miscInfo: [''],
        },
        {
          day: 23,
          dayTimeInfo: ['Story segment'],
          eveningInfo: ['Read Great Thief (Knowledge +3)'],
          miscInfo: [''],
        },
        {
          day: 24,
          dayTimeInfo: ['All day story segment'],
          eveningInfo: [''],
          miscInfo: [''],
        },
        {
          day: 25,
          dayTimeInfo: ['Forced palace infiltration'],
          eveningInfo: ['Clean Leblanc by investigating the bathroom (Kindness + 1, trophy)'],
          miscInfo: [''],
        },
        {
          day: 26,
          dayTimeInfo: ['Priestess 5', '0, 2, 3', '3, 0, 2', '0, 0, 2'],
          eveningInfo: [
            'Get Kindness reading from Chihaya',
            'Feed your plant (Kindness +3)',
            'Make sure you have an Emperor, and a Chariot persona. Fortune 3',
          ],
          miscInfo: [
            'Trader Sakai: Go to the airsoft shop and save your game',
            'Spam the vending machine (reloading when you’ve used too much money) until you have an MRE Ration',
          ],
        },
        {
          day: 27,
          dayTimeInfo: ['Spend time with Fox (Charm +3)', '2, 2, 3'],
          eveningInfo: ['Continue your date with Fox, go to the bathhouse with him (Charm +3)', '2, 2'],
          miscInfo: [''],
        },
        {
          day: 28,
          dayTimeInfo: ['Spend time with Skull (Guts +3)', '3, 3, 2'],
          eveningInfo: [
            'Turn Skull down. Get Guts reading from Chihaya',
            'Make sure you have a Justice persona. Accept Queen’s invitation to the movies (Guts +3)',
            '3, 2',
            'Accept Akechi’s invitation',
          ],
          miscInfo: [''],
        },
        {
          day: 29,
          dayTimeInfo: ['Aquarium date with Akechi', '3, 2, 0', '0, 0', 'Devil 3, 0, Devil 2', '2, 2, 0'],
          eveningInfo: ['Temperance Max'],
          miscInfo: [''],
        },
        {
          day: 30,
          dayTimeInfo: [
            'Get Guts reading from Chihaya',
            'Travel to Kichijoji and sit on the blue couch on the street, ignoring every one of Mona’s prompts to get up (Guts +2)',
            'Lovers 8',
            '0, 3, 2',
            '3, 3, 3',
            '0, 0',
            '3, 3',
            '2, 0, 2',
          ],
          eveningInfo: [
            'Travel to Kichijoji and interact with the donut shop across the street from Stoneon and Penguin Sniper',
            'Answer: 10 (Guts +2)',
            'Star 3',
            '2, 0, 0',
            '0, 2, 0',
            '2, 0, 0',
          ],
          miscInfo: [''],
        },
        {
          day: 31,
          dayTimeInfo: [
            'Aojiru (Charm +1)',
            'Buy medicine and equipment as necessary (another SP Adhesive 3 if you can afford it)',
            'Get a money reading from Chihaya',
            'Secure infiltration route at the palace',
          ],
          eveningInfo: ['Call Kawakami. Make sure you have an Emperor persona', 'Hanged 3', '0, 0', '3, 0, 2', '0, 0, 3', '0, 0'],
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
      exitStats: [
        '',
      ],
      events: [
        {
          day: 1,
          dayTimeInfo: ['Spend time with Fox (Charm +3)', '3, 2, 3'],
          eveningInfo: ['Go to the bathhouse with Fox (Charm +3)'],
          miscInfo: [''],
        },
        {
          day: 2,
          dayTimeInfo: ['Get money reading from Chihaya', 'Buy medicine and equipment as needed', 'Send calling card, and clear the palace'],
          eveningInfo: ['Call Kawakami', 'Justice 4 (Unlock Jazz Club)', '0, 0', '2, 0, 3', '3, 2, 0', '2, 0', '0, 0, 0', '3, 3, 2', '0, 2, 0'],
          miscInfo: [''],
        },
        {
          day: 3,
          dayTimeInfo: ['Chariot 9', '3, 2', '2, 2, 3', '3, 3', '2, 0, 0', '2, 0, 2'],
          eveningInfo: ['Solve crossword (Knowledge +1)', 'Make sure you have an Emperor persona', 'Take the Twins to church'],
          miscInfo: ['Acquire Mementos mission'],
        },
        {
          day: 4,
          dayTimeInfo: ['Spend time with Fox (Charm +3)', '3, 2, 2'],
          eveningInfo: ['Turn Fox down. TV Quiz “Use someone else’s car but return it” (Knowledge Max)', 'Devil 2 (Charm + 1)', '0, 0, 2', '0, 0', '0, 2, 0'],
          miscInfo: ['Acquire Mementos mission'],
        },
        {
          day: 5,
          dayTimeInfo: ['Chariot Max'],
          eveningInfo: [
            'Get Kindness reading from Chihaya',
            'Make sure you have Lovers/Death persona',
            'Accept Fox’s invitation to the movies (Kindness rank 4)',
            "Accept Panther's invitation",
          ],
          miscInfo: ['Acquire Mementos mission'],
        },
        {
          day: 6,
          dayTimeInfo: ['Outing with Panther (unlock Meiji temple)', '0, 0, 0', '0, 0, 0', '0, 0, 3/Death 3'],
          eveningInfo: ['Star 4 (unlock Jinbocho)', '2, 0, 2', '0, 2, 0', '2, 0, 2'],
          miscInfo: [''],
        },
        {
          day: 7,
          dayTimeInfo: [
            'Aojiru (Proficiency +1)',
            'Get Charm reading from Chihaya',
            'Turn in ICU, take out Dr. Mouse*',
            'Buy Master Swordsman at Jinbocho',
            'Work the convenience store part-time job (Charm Max on success)',
          ],
          eveningInfo: ['Take the twins to the aquarium'],
          miscInfo: ['Trader Sakai: You can find what he wants from the Priest at Kanda (today only)', 'Home Shopping: either recommended'],
        },
        {
          day: 8,
          dayTimeInfo: [
            'Lovers 9',
            '0, 0, 0',
            '0, 0',
            '3, 3',
            '0, 0(and end convo)',
            '0, 0 (either results in romantic relationship)',
            '(only available to romance route) 2, 3, 0',
          ],
          eveningInfo: ['Star 5', '0, 2, 0', '0, 2, 0', '0, 2, 0'],
          miscInfo: [''],
        },
        {
          day: 9,
          dayTimeInfo: ['Priestess 6 (requires Max Charm)', '2, 0, 3', '0, 0, 0', '0, 0, 0', '2, 0, 0'],
          eveningInfo: ['Justice 5', '0, 0, 0', '2, 0', '3, 2, 0', '0, 0, 0', '2, 2, 2'],
          miscInfo: [''],
        },
        {
          day: 10,
          dayTimeInfo: ['Faith 5', '2, 0, 0', '0, 0', '2, 3, 0', '0, 0, 0', '3, 3, 2', '3, 2', '0, 0', '3, 2, 3'],
          eveningInfo: ['Moon 5'],
          miscInfo: [''],
        },
        {
          day: 11,
          dayTimeInfo: ['Priestess 7', '0, 0', '0, 0, 0', '0, 0', '3, 2, 3', '3, 3', '2, 2', '2, 0, 2', '2, 0, 2'],
          eveningInfo: [
            'Make sure you have a Hierophant persona',
            'Get Kindness reading from Chihaya',
            'Feed you plant (Kindness +3)',
            'Spend time with Fortune (no rank up)',
          ],
          miscInfo: [''],
        },
        {
          day: 12,
          dayTimeInfo: ['Emperor 4', '0, 2, 2', '3, 2, 0', '2, 0, 0'],
          eveningInfo: ['Devil 3 (Charm +1)', '0, 0, 2', '0, 0', '0, 0', '0, 0, 2'],
          miscInfo: [''],
        },
        {
          day: 13,
          dayTimeInfo: ['Priestess 8', '2, 2, 0', '3, 2, 2'],
          eveningInfo: ['Star 6 (Knowledge +1)', '0, 2, 0', '2, 0, 2', '0, 2, 0'],
          miscInfo: [''],
        },
        {
          day: 14,
          dayTimeInfo: ['Aojiru (Guts +3)', 'Spend time with Lovers at Inokashira park (no rank up)', '3, 3, 3'],
          eveningInfo: [
            'Have Priestess/Star persona',
            'Hanged 4 (Proficiency +1)',
            '0, 0, 0',
            '0, 0, 0',
            '0, 0',
            '0, 2, 3',
            '2, 0, 0',
            "Accept Queen's invitation",
          ],
          miscInfo: ['Home shopping: Assorted Drinks recommended.'],
        },
        {
          day: 15,
          dayTimeInfo: ['Jinbocho outing with Queen', '3, 0', '0, 0', '3, 3 (either gives Star +3)'],
          eveningInfo: ['Take someone to the Jazz club (Trophy)'],
          miscInfo: [''],
        },
        {
          day: 16,
          dayTimeInfo: ['Emperor 5', '0, 2, 3', '3, 3, 2', '0, 0, 2'],
          eveningInfo: ['Star 7 (Knowledge +1)', '2, 0, 3', '2, 3, 0'],
          miscInfo: [''],
        },
        {
          day: 17,
          dayTimeInfo: ['Lovers Max (Odaiba unlocked)'],
          eveningInfo: ['Star 7.5 (receive Mementos mission)', '0, 0', '2, 0, 0', '0, 0', '0, 0'],
          miscInfo: [''],
        },
        {
          day: 18,
          dayTimeInfo: ['Work at the flower shop (Kindness +3, Mementos target acquired)'],
          eveningInfo: ['Devil 4', '0, 0', '2, 2', '0, 0, 0', '2, 2, 0'],
          miscInfo: [''],
        },
        {
          day: 19,
          dayTimeInfo: ['Death 7.5 (acquire Mementos mission)', '0, 0', '0, 0, 2', '0, 0', '0, 0', '0, 0'],
          eveningInfo: ['Spend time with Devil (no rank up)'],
          miscInfo: [''],
        },
        {
          day: 20,
          dayTimeInfo: [
            'Priestess 9',
            '3, 3, 3',
            '2, 2',
            '0, 2, 0',
            '3, 3, 2',
            '3(and end convo), 0',
            '3(romantic route), 0',
            '(Platonic route) 2, 0, 0',
            '(Romantic route) 2, 0, 2',
          ],
          eveningInfo: ['Hang out with Hanged at Inokashira', '3, 3, 3'],
          miscInfo: [''],
        },
        {
          day: 21,
          dayTimeInfo: ['Story segment'],
          eveningInfo: ['Watch Doctor Mouse (Kindness +3)'],
          miscInfo: [''],
        },
        {
          day: 22,
          dayTimeInfo: ['Story segment'],
          eveningInfo: ['Buy a lottery ticket', 'Hang out with Hierophant (no rank up)'],
          miscInfo: ['Trader Sakai: can be bought from the bakery at the Ginza Line Gate'],
        },
        {
          day: 23,
          dayTimeInfo: ['Story segment'],
          eveningInfo: ['Fortune 4', '0, 0', '2, 0, 3', '0, 0', '0, 0', '0, 0', '0, 2, 0'],
          miscInfo: [''],
        },
        {
          day: 24,
          dayTimeInfo: ['Story segment'],
          eveningInfo: ['Take the twins to Asakusa'],
          miscInfo: [''],
        },
        {
          day: 25,
          dayTimeInfo: ['Story segment'],
          eveningInfo: ['Hierophant 5', '2, 0, 3', '2, 3, 0', '2, 0, 0', '0, 2, 0'],
          miscInfo: [''],
        },
        {
          day: 26,
          dayTimeInfo: ['Story segment'],
          eveningInfo: ['Work at Crossroads (Kindness +2)'],
          miscInfo: [''],
        },
        {
          day: 27,
          dayTimeInfo: ['Story segment'],
          eveningInfo: ['Hanged 5', '0, 0', '0, 3, 0', '2, 0, 3', '2, 0, 0'],
          miscInfo: [''],
        },
        {
          day: 28,
          dayTimeInfo: ['Story segment'],
          eveningInfo: [
            'Get Kindness reading from Chihaya',
            'Aojiru (Kindness +2)',
            'Feed plant (Kindness +3)',
            'Work at Crossroads, Talk to Scary-Looking Man (Guts +1, Kindness +2, Mementos target acquired)',
          ],
          miscInfo: [''],
        },
        {
          day: 29,
          dayTimeInfo: ['Story segment', 'Mementos target acquired'],
          eveningInfo: ['Hierophant 6', '0, 0, 2', '2, 0, 3', '2, 0', '0, 0, 2'],
          miscInfo: [''],
        },
        {
          day: 30,
          dayTimeInfo: ['Story segment'],
          eveningInfo: ['Go pick up the results of your lottery ticket', 'Fortune 5', '3, 0, 2', '0, 0', '0, 0, 0'],
          miscInfo: [''],
        },
        {
          day: 31,
          dayTimeInfo: ['Story segment'],
          eveningInfo: ['Watch Dr. Mouse (Kindness Max)'],
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
      exitStats: [
        '',
      ],
      events: [
        {
          day: 1,
          dayTimeInfo: ['Story'],
          eveningInfo: ['Hierophant 7', '2, 0, 0', '0, 0, 0', '0, 0, 0', '0, 0, 2'],
          miscInfo: [''],
        },
        {
          day: 2,
          dayTimeInfo: ['Hermit 2', '0, 2', '3, 2, 0', '0, 0', '2, 0, 0'],
          eveningInfo: ['Devil 5', '0, 0, 0', '0, 0', '0, 0', '2, 3, 0', '2, 0, 0'],
          miscInfo: [''],
        },
        {
          day: 3,
          dayTimeInfo: ['Story'],
          eveningInfo: ['Get Hanged affinity reading from Chihaya', 'Hanged 6', '0, 0', '0, 0', '2, 3, 3', '2, 0, 3', '2, 2, 0'],
          miscInfo: ['Class answer: Prosperity'],
        },
        {
          day: 4,
          dayTimeInfo: [
            ' Aojiru (Knowledge +2)',
            'Play crane game; get JackFrost doll',
            'Shibuya arcade; talk to people for Mementos target',
            'Hermit 3',
            '0, 0, 3',
            '3, 2, 0',
            '0, 0, 2',
          ],
          eveningInfo: ['Get Hanged affinity reading from Chihaya.', 'Fortune 6', '0, 0, 0', '0, 0', '0, 0', '0, 0, 3', '0, 2, 0'],
          miscInfo: ['Trader Sakai: can be bought at Rocinante discount shop'],
        },
        {
          day: 5,
          dayTimeInfo: ['Hermit 4', '2, 3, 0', '0, 0', '2, 2, 3', '2, 0, 2'],
          eveningInfo: ['Hierophant 8 (Acquire mission)', '2, 3, 0', '0, 2, 0'],
          miscInfo: [''],
        },
        {
          day: 6,
          dayTimeInfo: ['Have Star Persona', 'Have every book from Shibuya Bookstore', 'Work the convienencce store job'],
          eveningInfo: [''],
          miscInfo: ['Class answer: Chronostasis'],
        },
        {
          day: 7,
          dayTimeInfo: ['All day story segment.'],
          eveningInfo: [''],
          miscInfo: [''],
        },
        {
          day: 8,
          dayTimeInfo: ['All day story segment.'],
          eveningInfo: [''],
          miscInfo: [''],
        },
        {
          day: 9,
          dayTimeInfo: ['All day story segment.'],
          eveningInfo: [''],
          miscInfo: [''],
        },
        {
          day: 10,
          dayTimeInfo: ['Beach Date with Star', '2, 3, 0', '3, 2, 2', '2, 3, 0', '3, 3', '0, 0'],
          eveningInfo: [''],
          miscInfo: [''],
        },
        {
          day: 11,
          dayTimeInfo: ['All day story segment.'],
          eveningInfo: [''],
          miscInfo: [''],
        },
        {
          day: 12,
          dayTimeInfo: ['All day story segment.'],
          eveningInfo: [''],
          miscInfo: [''],
        },
        {
          day: 13,
          dayTimeInfo: ['All day story segment.'],
          eveningInfo: [''],
          miscInfo: [''],
        },
        {
          day: 14,
          dayTimeInfo: ['All day story segment.'],
          eveningInfo: [''],
          miscInfo: ['Class answer: Money loans for collateral'],
        },
        {
          day: 15,
          dayTimeInfo: ['Forced Palace Entry'],
          eveningInfo: [''],
          miscInfo: [''],
        },
        {
          day: 16,
          dayTimeInfo: ['All day story segment.'],
          eveningInfo: [''],
          miscInfo: [''],
        },
        {
          day: 17,
          dayTimeInfo: ['All day story segment.'],
          eveningInfo: [''],
          miscInfo: ['Class Answer: Cats eating human tongues'],
        },
        {
          day: 18,
          dayTimeInfo: ['Story segment.'],
          eveningInfo: ['Read Ghost Encounters (Guts +3)'],
          miscInfo: [''],
        },
        {
          day: 19,
          dayTimeInfo: [
            'Go to velvet room to unlock fusions',
            'Buy equipment',
            'infiltrate Okumura palace up until Sugimura boss fight',
            'Do not secure the route tonight or teammate confidants will be unavailable until cleared',
          ],
          eveningInfo: ['Call Kawakami', 'Devil 6', '0, 0', '2, 0', '0, 2, 0', '2, 2, 0', '0, 0, 2'],
          miscInfo: ['Trader Sakai: can be bought at the Rocinante discount shop'],
        },
        {
          day: 20,
          dayTimeInfo: ['Priestess Max'],
          eveningInfo: ['Get Fortune affinity reading from Chihaya', 'Fortune 7', '0, 2, 3', '2, 2, 0'],
          miscInfo: [''],
        },
        {
          day: 21,
          dayTimeInfo: ['Consultant 6', '0, 2, 2', '3, 2, 0', '0, 0', '0, 0, 2', '0, 0', '0, 0, 0', '2, 2, 0'],
          eveningInfo: [
            'Make sure you have Star, Emperor, and Fortune persona',
            'Justice 6',
            '2, 0, 3',
            '0, 2',
            '3, 3, 2',
            '3, 0, 2',
            '2, 2',
            '3, 0, 2',
            '0, 0, 2',
            'Accept Hifumi’s invitation',
          ],
          miscInfo: ['Class answer: Central Europe'],
        },
        {
          day: 22,
          dayTimeInfo: ['Akihabara outing with Hifumi', '3, 0, 2', '0, 3, 3', '0, 2, 3', '0, 0, 3'],
          eveningInfo: ['Sun 4'],
          miscInfo: [''],
        },
        {
          day: 23,
          dayTimeInfo: ['Consultant 7', 'All options give +3'],
          eveningInfo: ['Devil 7', '0, 0', '2, 3, 3', '2, 3', '2, 0, 0'],
          miscInfo: ['Class reading: Master Swordsman'],
        },
        {
          day: 24,
          dayTimeInfo: ['Consultant 8', '2, 3, 0', '3, 2, 2', '3, 0, 2', '2, 0, 3', '3, 3', '3, 3, 0', '0, 0, 0', '2, 0, 0'],
          eveningInfo: [''],
          miscInfo: ['Train reading: Master Swordsman (Guts +3)', 'Class answer: 20 white, 12 black'],
        },
        {
          day: 25,
          dayTimeInfo: ['Spend time with Hermit (Guts Max)'],
          eveningInfo: ['Aojiru (Charm +1)', 'Hanged 7.5', '2, 3, 0', '2, 2, 0', '0, 0'],
          miscInfo: ['Home shopping: Phantom Thief set recommended'],
        },
        {
          day: 26,
          dayTimeInfo: ['Emperor 6', '2, 0, 0', '0, 0', '0, 0', '3, 2, 3', '2, 0, 0'],
          eveningInfo: ['Devil 7.5', '0, 2, 0', '0, 0'],
          miscInfo: [''],
        },
        {
          day: 27,
          dayTimeInfo: ['Consultant 9'],
          eveningInfo: ['Fortune 7.5', 'Any answer'],
          miscInfo: [''],
        },
        {
          day: 28,
          dayTimeInfo: ['Get Woman in the Dark from the library', 'Gear Up!', 'Clear all current Mementos targets and reach end of area.'],
          eveningInfo: ['Call Kawakami', 'Star 8', '2, 0, 3', '0, 0', '2, 0, 0'],
          miscInfo: ['Train reading: Night Skies', 'Class answer: Phantom, Vibration, Syndrome'],
        },
        {
          day: 29,
          dayTimeInfo: ['Talk to Ooracle to clear Hierophants Mementos mission'],
          eveningInfo: ['Fortune 8', '2, 3', '3, 3, 3', '0, 3', '0, 2, 0'],
          miscInfo: ['Class answer: Imperial Household Agency'],
        },
        {
          day: 30,
          dayTimeInfo: ['Akihabara arcade and talk to King', 'Then Oracle back at Yongen', 'Then King again to get Tower 1'],
          eveningInfo: ['Devil 8', '0, 0', '0, 0', '0, 0', '3, 3, 3', '2, 2, 0'],
          miscInfo: ['Class reading: Woman in the Dark (Proficiency +3)'],
        },
      ] as Array<MonthEvent>,
    } as MonthEvents);
  }

  loadOctoberData() {
    // October
    this.months.push({
      name: 'October',
      miscMonthInfo: '',
      exitStats: [
        '',
      ],
      events: [
        {
          day: 1,
          dayTimeInfo: ['Tower 2', '2, 3, 0', '0, 2, 0', '0, 2', '3, 0, 3', '2, 0, 2'],
          eveningInfo: ['Hanged 8 (Proficiency +3)', '0, 2, 0', '2, 3, 3', '2, 0, 0'],
          miscInfo: ['Buy Truthseeker’s Tools from the Akihabara tool shop'],
        },
        {
          day: 2,
          dayTimeInfo: [
            'Home shopping: Pumpkin Ghost set recommended',
            'Trader Sakai: Bought at Rocinante Discount Store',
            'Emperor 7',
            '0, 0',
            '0, 2, 0',
            '3, 0',
            '2, 2, 0',
          ],
          eveningInfo: ['Get Hanged affinity reading from Chihaya', 'Hanged 9', '2, 0, 2', '0, 0', '0, 0', '0, 0', '3, 3', '3, 2, 3', '2, 2, 0'],
          miscInfo: [''],
        },
        {
          day: 3,
          dayTimeInfo: ['All day story segment'],
          eveningInfo: [''],
          miscInfo: ['Class answer: Stars (Knowledge +1)'],
        },
        {
          day: 4,
          dayTimeInfo: ['Buy medicine/gear', 'Get Money + Alarm Readings from Chihaya', 'Secure Infiltration Route'],
          eveningInfo: ['Call Kawakami', 'Hanged Max (Proficiency Max)'],
          miscInfo: [''],
        },
        {
          day: 5,
          dayTimeInfo: ['Get Death affinity reading from Chihaya', 'Death 8', '0, 0', '2, 3, 3', '3, 2, 3', '2, 0, 2'],
          eveningInfo: ['Go to the Maid Cafe and order whatever'],
          miscInfo: ['Class reading: The ABC’s of Crafting'],
        },
        {
          day: 6,
          dayTimeInfo: ['Re-check your equipment and medicine. Send calling card'],
          eveningInfo: ['Make infiltration tools'],
          miscInfo: ['Train reading: W/E', 'Class answer: Joseph-Ignace Guillotine (Knowledge +1)'],
        },
        {
          day: 7,
          dayTimeInfo: ['Clear palace'],
          eveningInfo: ['Call Kawakami', 'Devil 9', '0, 0', '0, 2', '3, 3, 0', 'Any', '0(romance), 0(friend)'],
          miscInfo: [''],
        },
        {
          day: 8,
          dayTimeInfo: ['Tower 3', '0, 0, 0', '0, 0, 0', '0, 0, 0', '2, 0, 0', '2, 0, 0'],
          eveningInfo: ['Take Star to Inokashira park (no rank up)', '3, 3, 3', 'Accept Oracle’s invitation.'],
          miscInfo: [''],
        },
        {
          day: 9,
          dayTimeInfo: ['Hermit event (Nakano unlocked)'],
          eveningInfo: ['Sun 5'],
          miscInfo: [''],
        },
        {
          day: 10,
          dayTimeInfo: ['Tower 4', '0, 0, 2', '0, 2, 0'],
          eveningInfo: ['Buy protein, games, dvd, etc', 'Sun 6'],
          miscInfo: [''],
        },
        {
          day: 11,
          dayTimeInfo: ['All day story segment'],
          eveningInfo: [''],
          miscInfo: ['Class answer: Bouba (Knowledge +1)'],
        },
        {
          day: 12,
          dayTimeInfo: ['Story '],
          eveningInfo: ['Free night'],
          miscInfo: [''],
        },
        {
          day: 13,
          dayTimeInfo: ['Story '],
          eveningInfo: ['Free night'],
          miscInfo: [''],
        },
        {
          day: 14,
          dayTimeInfo: ['Get Mementos mission', 'Emperor 8', '0, 0, 2', '2, 0, 3'],
          eveningInfo: ['', ''],
          miscInfo: [''],
        },
        {
          day: 15,
          dayTimeInfo: ['Tower 5', '3, 0, 3', '0, 2, 0', '2, 3', '2, 0, 2'],
          eveningInfo: ['Star 9', '2, 0, 0', '0, 0, 3', '0 (end convo), 0', '0 (romance), 0 (platonic)', '(platonic) 2, 2, 2', '(romantic) 2, 2, 2'],
          miscInfo: [''],
        },
        {
          day: 16,
          dayTimeInfo: [
            'Trader Sakai: Go to Akihabara and try to get thte Gear Girimehkala from the capsule machine',
            'Hermit 5',
            '0, 0',
            '3, 0, 2',
            '2, 0, 3',
            '2, 0, 0',
          ],
          eveningInfo: ['Sun 7'],
          miscInfo: [''],
        },
        {
          day: 17,
          dayTimeInfo: ['32 surfaces', 'It used to be one color, Black and white picture'],
          eveningInfo: [''],
          miscInfo: [''],
        },
        {
          day: 18,
          dayTimeInfo: ['Charles-Henri Sanson', "It's a hereditary profession"],
          eveningInfo: [''],
          miscInfo: [''],
        },
        {
          day: 19,
          dayTimeInfo: ['Slave labour', '3 bees in all of Europe'],
          eveningInfo: [''],
          miscInfo: [''],
        },
        {
          day: 20,
          dayTimeInfo: ['Story '],
          eveningInfo: ['Free'],
          miscInfo: [''],
        },
        {
          day: 21,
          dayTimeInfo: ['Story '],
          eveningInfo: ['Free'],
          miscInfo: [''],
        },
        {
          day: 22,
          dayTimeInfo: ['Story '],
          eveningInfo: ['Take Star to Jinbocho (no rank up)', '3, 3, 3'],
          miscInfo: ['Class answer: 15'],
        },
        {
          day: 23,
          dayTimeInfo: ['Story '],
          eveningInfo: ['Sun 8'],
          miscInfo: [''],
        },
        {
          day: 24,
          dayTimeInfo: ['Story '],
          eveningInfo: ['Talk to Sojiro for an exam reward. Star Max'],
          miscInfo: ['Class answer: Memory bias'],
        },
        {
          day: 25,
          dayTimeInfo: ['Story '],
          eveningInfo: ['Free. Save your game'],
          miscInfo: [''],
        },
        {
          day: 26,
          dayTimeInfo: ['Story '],
          eveningInfo: ['Story '],
          miscInfo: [''],
        },
        {
          day: 27,
          dayTimeInfo: ['Story '],
          eveningInfo: ['Free'],
          miscInfo: [''],
        },
        {
          day: 28,
          dayTimeInfo: ['All day Story '],
          eveningInfo: [''],
          miscInfo: [''],
        },
        {
          day: 29,
          dayTimeInfo: ['Forced palace infiltration'],
          eveningInfo: ['Free'],
          miscInfo: [''],
        },
        {
          day: 30,
          dayTimeInfo: ['Trader Sakai: bought from vending machine across from Maid Cafe', 'Tower 6', '0, 0, 0', '0, 0', '2, 3', '0, 3, 0', '2, 0, 0'],
          eveningInfo: ['Sun 9'],
          miscInfo: [''],
        },
        {
          day: 31,
          dayTimeInfo: ['Speak to Noir. Empress 1'],
          eveningInfo: ['Devil Max'],
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
      exitStats: [
        '',
      ],
      events: [
        {
          day: 1,
          dayTimeInfo: ['Empress 2', '2, 3, 3', '0, 0, 2', '3, 2, 2', '2, 2, 3'],
          eveningInfo: ['Hierophant 9', '3, 2', '0, 3, 3', '2, 2, 2'],
          miscInfo: [''],
        },
        {
          day: 2,
          dayTimeInfo: ['Team meeting', 'Hermit 6', '2, 3, 0', '2, 0, 0', '0, 0', '2, 0, 0'],
          eveningInfo: ['Justice 7', '2, 3', '0, 0', '0, 0', '2, 3', '0, 0', '0, 0 (Not this one; ever!), 0', '0, 0, 2'],
          miscInfo: ['Train reading: free', 'Class answer: A share of stolen goods'],
        },
        {
          day: 3,
          dayTimeInfo: ['Tower 7', 'Any option'],
          eveningInfo: ['Hierophant Max'],
          miscInfo: [''],
        },
        {
          day: 4,
          dayTimeInfo: ['Tower 8', '0, 2, 2', '2, 0, 3', '0, 0', '3, 3'],
          eveningInfo: ['Prepare for single combat. Justice 8', '0, 0', '0, 0, 0', '0, 0', '0, 0, 0', '0, 0', '3, 2, 0', '2, 3', '0, 0 (Not this one...ever)'],
          miscInfo: ['Class answer: A sword'],
        },
        {
          day: 5,
          dayTimeInfo: ['Empress 3', '2, 3, 3', '2, 0, 0', '2, 3, 2', '2, 0, 0'],
          eveningInfo: ['Moon 6'],
          miscInfo: ['Train reading: free', 'Free period'],
        },
        {
          day: 6,
          dayTimeInfo: ['Home shopping: no recommendations', 'Hermit 7', '2, 2, 0', '3, 3, 2'],
          eveningInfo: ['Sun Max'],
          miscInfo: [''],
        },
        {
          day: 7,
          dayTimeInfo: ['Gear UP!', 'Get fortune and alarm readings', 'Infiltrate Mementos'],
          eveningInfo: ['Call Kawakami', 'Take the Twins to the maid cafe.'],
          miscInfo: [''],
        },
        {
          day: 8,
          dayTimeInfo: [
            'Death 9',
            '2, 2, 3',
            '0, 0',
            '0, 0 (proceed to phone call)',
            '2, 0 (proceed to phone call)',
            '3 (romance), 0',
            '(Platonic only) 0, 0, 2',
            '(Romantic only) 0, 2, 0',
          ],
          eveningInfo: ['Fortune 9', '0, 0', '0, 3, 2', '0, 0 (romance)', '(Platonic only) 2, 0, 0', '(Romantic only) 2, 0, 0'],
          miscInfo: ['Class answer: Any age'],
        },
        {
          day: 9,
          dayTimeInfo: ['Empress 4', '2, 0, 3', '3, 2, 3', '3, 3, 3', '0, 0, 2', '0, 0, 2', '0, 0, 2'],
          eveningInfo: ['Moon 6'],
          miscInfo: [''],
        },
        {
          day: 10,
          dayTimeInfo: ['Tower 9', '3, 0, 2', '2, 3, 3', '2, 0, 0', '2, 2, 2'],
          eveningInfo: ['Fortune Max'],
          miscInfo: ['Train reading: free', 'Class answer: Crow eyes are hard to see'],
        },
        {
          day: 11,
          dayTimeInfo: ['Emperor 9', '3, 3, 2', '3, 2, 0'],
          eveningInfo: ['Take the Twins to Destinyland'],
          miscInfo: ['Free class'],
        },
        {
          day: 12,
          dayTimeInfo: ['Hermit 8', '3, 3, 2', '3, 2, 0', '0, 0', '2, 0, 2'],
          eveningInfo: ['Moon 7'],
          miscInfo: ['Class answer: Because the voice is synthetic'],
        },
        {
          day: 13,
          dayTimeInfo: [
            'Trader Sakai: Bought from the supermarket in Yongen-Jaya',
            'Home Shopping: Incense set recommended',
            'Gear UP! Get fortune and alarm readings',
            'Secure infiltration route (part 1)',
          ],
          eveningInfo: ['Call Kawakami', 'Free night'],
          miscInfo: [''],
        },
        {
          day: 14,
          dayTimeInfo: ['Secure infiltration route (part 2)'],
          eveningInfo: ['Call Kawakami', 'Get Death affinity reading'],
          miscInfo: ['Class answer: Because of high altitude'],
        },
        {
          day: 15,
          dayTimeInfo: ['Tower Max'],
          eveningInfo: ['Get Death affinity reading', 'Moon 8'],
          miscInfo: ['Train reading', 'Class answer: His head was put on display'],
        },
        {
          day: 16,
          dayTimeInfo: ['Free class', 'Acquire Mementos mission', 'Death Max'],
          eveningInfo: ['Free'],
          miscInfo: [''],
        },
        {
          day: 17,
          dayTimeInfo: [
            'Call a team meeting',
            'Hermit 9',
            '3, 2, 0',
            '0, 3, 2',
            '2, 2, 0',
            '0 (proceed to phone call), 0 (romance)',
            'Any',
            '(Platonic only) 2, 2, 2',
            '(Romantic only) 0, 0, 2',
          ],
          eveningInfo: ['Free'],
          miscInfo: ['Train reading: Free', 'Class answer: Cocheloid'],
        },
        {
          day: 18,
          dayTimeInfo: ['Consultant Max', 'Story; calling card sent'],
          eveningInfo: ['Free'],
          miscInfo: [''],
        },
        {
          day: 19,
          dayTimeInfo: ['Palace Clear'],
          eveningInfo: ['Story'],
          miscInfo: [''],
        },
        {
          day: 20,
          dayTimeInfo: ['All day Story, DO NOT COOPERATE'],
          eveningInfo: [''],
          miscInfo: [''],
        },
        {
          day: 21,
          dayTimeInfo: ['All Day story (Really long)'],
          eveningInfo: [''],
          miscInfo: [''],
        },
        {
          day: 22,
          dayTimeInfo: ['Confined'],
          eveningInfo: ['Confined'],
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
          dayTimeInfo: ['Forced palace infiltration'],
          eveningInfo: ['Free'],
          miscInfo: [''],
        },
        {
          day: 25,
          dayTimeInfo: ['Acquire Mementos mission', 'Empress 5', '0, 3, 2', '0, 0, 3', '2, 0, 3', '0, 0, 3'],
          eveningInfo: ['Take the Twins to Leblanc'],
          miscInfo: [''],
        },
        {
          day: 26,
          dayTimeInfo: ['Empress 6', '3, 2, 3', '2, 0, 0', '0, 3, 3', '0, 0', '0, 3', '2, 2, 0'],
          eveningInfo: ['Free'],
          miscInfo: [''],
        },
        {
          day: 27,
          dayTimeInfo: ['Home Shopping: W/E', 'Trader Sakai: Brought from Truck vendor in Yongen-Jaya', 'Emperor Max'],
          eveningInfo: ['Free'],
          miscInfo: [''],
        },
        {
          day: 28,
          dayTimeInfo: ['Empress 7', '0, 0, 0', '2, 0, 3', '3, 3, 3', '3, 3', '0, 2, 0'],
          eveningInfo: ['Free'],
          miscInfo: [''],
        },
        {
          day: 29,
          dayTimeInfo: ['Empress 8', '3, 0, 0', '3, 3, 3', '3, 3, 2', '0, 2, 2'],
          eveningInfo: ['Free'],
          miscInfo: [''],
        },
        {
          day: 30,
          dayTimeInfo: ['Hermit Max'],
          eveningInfo: ['Free '],
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
          dayTimeInfo: ['Empress 9', '0, 0, 0', '3, 2, 3', '3, 3, 0', '0, 0 (romance)', '(Platonic only) 0, 2, 0', '(Romantic only) 0, 2, 2'],
          eveningInfo: ['Free'],
          miscInfo: [''],
        },
        {
          day: 2,
          dayTimeInfo: ['Empress Max'],
          eveningInfo: ['Take the Twins to the underground mall'],
          miscInfo: [''],
        },
        {
          day: 3,
          dayTimeInfo: ['Gear Up', 'Get fortune and alarm readings', 'Secure infiltration route (Justice max)'],
          eveningInfo: ['Call Kawakami', 'Free night'],
          miscInfo: [''],
        },
        {
          day: 4,
          dayTimeInfo: ['Send calling card', 'Clear palace'],
          eveningInfo: ['Call Kawakami', 'Free Night'],
          miscInfo: [''],
        },
        {
          day: 5,
          dayTimeInfo: ['Acquire Mementos mission', 'Free'],
          eveningInfo: ['Moon 9'],
          miscInfo: [''],
        },
        {
          day: 6,
          dayTimeInfo: ['Free'],
          eveningInfo: ['Free'],
          miscInfo: [''],
        },
        {
          day: 7,
          dayTimeInfo: ['Free'],
          eveningInfo: ['Free'],
          miscInfo: [''],
        },
        {
          day: 8,
          dayTimeInfo: ['Free'],
          eveningInfo: ['Moon Max'],
          miscInfo: [''],
        },
        {
          day: 9,
          dayTimeInfo: ['Gear UP!', 'Get fortune and alarm readings', 'Infiltrate Mementos'],
          eveningInfo: ['Call Kawakami', 'Free'],
          miscInfo: [''],
        },
        {
          day: 10,
          dayTimeInfo: ['Free'],
          eveningInfo: ['Free'],
          miscInfo: [''],
        },
        {
          day: 11,
          dayTimeInfo: ['Home shopping: no recommendation', 'Trader Sakai: Supermarket in Shibuya underground mall'],
          eveningInfo: ['Free'],
          miscInfo: [''],
        },
        {
          day: 12,
          dayTimeInfo: ['Free'],
          eveningInfo: ['Free'],
          miscInfo: [''],
        },
        {
          day: 13,
          dayTimeInfo: ['Free'],
          eveningInfo: ['Free'],
          miscInfo: [''],
        },
        {
          day: 14,
          dayTimeInfo: ['Free'],
          eveningInfo: ['Free'],
          miscInfo: [''],
        },
        {
          day: 15,
          dayTimeInfo: ['Free'],
          eveningInfo: ['Free'],
          miscInfo: [''],
        },
        {
          day: 16,
          dayTimeInfo: ['Free'],
          eveningInfo: ['Free'],
          miscInfo: [''],
        },
        {
          day: 17,
          dayTimeInfo: ['Free'],
          eveningInfo: ['Free'],
          miscInfo: [''],
        },
        {
          day: 18,
          dayTimeInfo: ['Story'],
          eveningInfo: ['Free'],
          miscInfo: [''],
        },
        {
          day: 19,
          dayTimeInfo: ['Story'],
          eveningInfo: ['Free'],
          miscInfo: [''],
        },
        {
          day: 20,
          dayTimeInfo: ['D', 'Over one billion yen, having his head displayed, a performance'],
          eveningInfo: [''],
          miscInfo: [''],
        },
        {
          day: 21,
          dayTimeInfo: ['Hearts', 'Attend'],
          eveningInfo: [''],
          miscInfo: [''],
        },
        {
          day: 22,
          dayTimeInfo: ['Japan', 'Dreadnought'],
          eveningInfo: ['Talk to Sojiro for reward', 'Gear UP!'],
          miscInfo: [''],
        },
        {
          day: 23,
          dayTimeInfo: ['Story'],
          eveningInfo: ['Free'],
          miscInfo: [''],
        },
        {
          day: 24,
          dayTimeInfo: ['Original endgame run/final batal'],
          eveningInfo: [''],
          miscInfo: [''],
        },
        {
          day: 25,
          dayTimeInfo: ['End game story segments go until December 31st'],
          eveningInfo: ["Beginning of Roya's additional storyline"],
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
          dayTimeInfo: ['All Day Story'],
          eveningInfo: [''],
          miscInfo: [''],
        },
        {
          day: 2,
          dayTimeInfo: ['Force Palance infiltration'],
          eveningInfo: ['Unavailable'],
          miscInfo: [''],
        },
        {
          day: 3,
          dayTimeInfo: ['Check on teammates'],
          eveningInfo: [''],
          miscInfo: [''],
        },
        {
          day: 4,
          dayTimeInfo: ['Check on teammates'],
          eveningInfo: [''],
          miscInfo: [''],
        },
        {
          day: 5,
          dayTimeInfo: ['Check on teammates'],
          eveningInfo: [''],
          miscInfo: [''],
        },
        {
          day: 6,
          dayTimeInfo: ['Check on teammates'],
          eveningInfo: [''],
          miscInfo: [''],
        },
        {
          day: 7,
          dayTimeInfo: ['Check on teammates'],
          eveningInfo: [''],
          miscInfo: [''],
        },
        {
          day: 8,
          dayTimeInfo: ['Check on teammates'],
          eveningInfo: [''],
          miscInfo: [''],
        },
        {
          day: 9,
          dayTimeInfo: ['Force Palace infiltration'],
          eveningInfo: ['Unavailable'],
          miscInfo: [''],
        },
        {
          day: 10,
          dayTimeInfo: ['All day story', 'Magician Personal Evolution!'],
          eveningInfo: [''],
          miscInfo: [''],
        },
        {
          day: 11,
          dayTimeInfo: ['All Day Story'],
          eveningInfo: [''],
          miscInfo: ['Class answer: How numerous they are, the Eight Million Gods'],
        },
        {
          day: 12,
          dayTimeInfo: ['Gear Up!', 'Infiltrate Palace'],
          eveningInfo: ['Story'],
          miscInfo: [''],
        },
        {
          day: 13,
          dayTimeInfo: [
            'Trader Sakai: Bought from the chinese food shop in Kichijoji.',
            'Talk to Panther (Lovers persona evolution)',
            'Acquire Mementos mission',
          ],
          eveningInfo: ['Spend time with the Velvet Room attendant'],
          miscInfo: [''],
        },
        {
          day: 14,
          dayTimeInfo: ['Talk to Skull (Chariot persona evolution)', 'Acquire Mementos mission'],
          eveningInfo: ['Free'],
          miscInfo: ['Class answer: Iwate'],
        },
        {
          day: 15,
          dayTimeInfo: ['Home shopping: no recommendation', 'Talk to Oracle (Hermit persona evolution)'],
          eveningInfo: ['Go To Jazz Club'],
          miscInfo: [''],
        },
        {
          day: 16,
          dayTimeInfo: ['Talk to Fox (Emperor persona evolution)'],
          eveningInfo: ['Free'],
          miscInfo: [''],
        },
        {
          day: 17,
          dayTimeInfo: ['Talk to Queen (High Priestess persona evolution)'],
          eveningInfo: ['Free'],
          miscInfo: [''],
        },
        {
          day: 18,
          dayTimeInfo: ['Talk to Noir (Empress persona evolution)'],
          eveningInfo: ['Free'],
          miscInfo: ['Class answer: Impressive'],
        },
        {
          day: 19,
          dayTimeInfo: ['Faith 6', 'Any', '(phone call) 0, 3, 3'],
          eveningInfo: [''],
          miscInfo: [''],
        },
        {
          day: 20,
          dayTimeInfo: ['Free'],
          eveningInfo: ['Jazz Club (+1 to all stats)'],
          miscInfo: ['Class answer: a snake'],
        },
        {
          day: 21,
          dayTimeInfo: ['Faith 7', '0, 0, 0', '0, 0', '3, 0, 0', '3, 0, 0', '0, 0', '3, 2, 3', '0, 0, 3'],
          eveningInfo: ['Free'],
          miscInfo: [''],
        },
        {
          day: 22,
          dayTimeInfo: [
            'Home shopping: Sweet Party Satisfaction',
            'Trader Sakai: bought from Big Bang Burger',
            'Faith 8',
            '3, 0, 0',
            '0, 0',
            '2, 3, 2',
            '0, 0',
            '0, 0',
            '3, 3, 3',
            '0, 0',
            '0, 0',
            '2, 3',
            '0, 3, 2',
          ],
          eveningInfo: ['Jazz Club (Bring Physical Heavy Hitter)'],
          miscInfo: [''],
        },
        {
          day: 23,
          dayTimeInfo: [
            'Faith 9',
            '0, 0',
            '2, 2',
            '2, 2',
            '3, 0, 0',
            '3, 3, 3',
            '0, 0, 2',
            '0, 0',
            '0 (Platonic), 0 (Romance)',
            'Platonic only:',
            '2, 0, 2',
            '2, 0, 2',
            'Romantic only:',
            '2, 2',
            '3, 3, 3',
            '2, 0, 0',
          ],
          eveningInfo: ['Free'],
          miscInfo: [''],
        },
        {
          day: 24,
          dayTimeInfo: ['Gear UP!', 'Get fortune and alarm readings', 'Infiltrate Mementos'],
          eveningInfo: ['Free'],
          miscInfo: ['Class answer: Kind-hearted, negative, resentful'],
        },
        {
          day: 25,
          dayTimeInfo: ['Faith Max'],
          eveningInfo: ['Free'],
          miscInfo: [''],
        },
        {
          day: 26,
          dayTimeInfo: ['Secure infiltration route'],
          eveningInfo: ['Free'],
          miscInfo: [''],
        },
        {
          day: 27,
          dayTimeInfo: ['Acquire Mementos mission: listen in on various conversations in Akihabara to confirm target'],
          eveningInfo: ['Free'],
          miscInfo: ['Class answer: to friends of friends of friends'],
        },
        {
          day: 28,
          dayTimeInfo: [
            'Acquire Mementos mission: listen in on the students talking by the entrance to Kichijoji, then speak to the two students standing at the northern end of the rightmost alleyway to confirm target',
          ],
          eveningInfo: ['Free'],
          miscInfo: [''],
        },
        {
          day: 29,
          dayTimeInfo: ['Home shopping: Transcendence set recommended', 'Gear UP!', 'Get fortune and alarm readings', 'Infiltrate Mementos'],
          eveningInfo: ['Free'],
          miscInfo: [''],
        },
        {
          day: 30,
          dayTimeInfo: ['Free'],
          eveningInfo: ['Free'],
          miscInfo: [''],
        },
        {
          day: 31,
          dayTimeInfo: ['Free'],
          eveningInfo: ['Free'],
          miscInfo: [''],
        },
      ] as Array<MonthEvent>,
    } as MonthEvents);
  }
}
