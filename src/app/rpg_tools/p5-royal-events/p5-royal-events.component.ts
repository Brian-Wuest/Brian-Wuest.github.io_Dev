import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { MonthEvent } from './models/event';
import { MonthEvents } from './models/MonthEvents';

@Component({
  selector: 'app-p5-royal-events',
  templateUrl: './p5-royal-events.component.html',
  styleUrls: ['./p5-royal-events.component.scss'],
  encapsulation: ViewEncapsulation.None,
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
          eveningInfo: [
            'Complete crossword on the first floor table (Knowledge +1). Answer: Semesters',
            'Clean your room (find Yongen Wanderer and Social Thought)',
          ],
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
          eveningInfo: ['Solve crossword (Knowledge +1). Answer: Blossom', 'Craft infiltration tools (Proficiency +2)'],
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
          miscInfo: [''],
        },
        {
          day: 2,
          dayTimeInfo: ['Story segment'],
          eveningInfo: ['Solve crossword (Knowledge +1) Answer: Golden. Study (Knowledge rank 2)'],
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
          eveningInfo: ['Get Aojiru (Guts +1)', 'Work at beef bowl, SUN Prereq'],
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
          eveningInfo: ['Solve crossword (Knowledge +1) Answer: Malaise', "Accept Skull's invitation to study (Knowledge +3)"],
          miscInfo: ['Class answer: The Heian period (Knowledge +1)'],
        },
        {
          day: 11,
          dayTimeInfo: ['Minamoto no Yoshitsune', 'Minamoto no Toritomo, Yoritomo wonn, the weak'],
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
          dayTimeInfo: ['Home shopping (optional, no recommendations)', 'Story segment'],
          eveningInfo: ['Study at Leblanc (Knowledge +2)'],
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
          eveningInfo: ['Solve crossword (Knowledge +1) Answer: Gallery', 'Talk to Yoshida at Central Square (SUN Prereq)'],
          miscInfo: [''],
        },
        {
          day: 19,
          dayTimeInfo: ['Study at the diner, order the sandwich set (Guts +1, Knowledge +2)'],
          eveningInfo: ['Answer TV quiz, “Make noise to cause neurosis” (Knowledge +1)', 'Bathhouse (Charm +2, Guts +1)'],
          miscInfo: ['Class answer: Katsushika Hokusai* (Knowledge +1)'],
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
          eveningInfo: ['TV Quiz show “Queen of evidence” (Knowledge +1)', 'Solve crossword (Knowledge +1) Answer: Pollenosis', 'Talk to Yoshida (Sun 1)'],
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
          dayTimeInfo: ['Buy equipment and medicine as you see fit', 'Enter Mementos (Note: Walk out with at least 80K yen'],
          eveningInfo: ['Solve crossword (Knowledge +1) Answer: Japanese', 'Study (Knowledge +2)'],
          miscInfo: ['Class answer: John Silver (Knowledge +1)'],
        },
      ] as Array<MonthEvent>,
    } as MonthEvents);
  }

  loadJuneData() {
    // June
    this.months.push({
      name: 'June',
      miscMonthInfo: 'Stay on track for Chariot and Temperance confidants at minimum. Get a head-start on Strength(Twins) confidant ranks too!',
      exitStats: [
        'Knowledge: 4, Guts: 4, Proficiency: 3, Kindness: 3, Charm: 3',
        'Emperor: 3, Hierophant: 4, Lovers: 5, Chariot: 7, Justice: 2, Death: 7, Temperence: 7, Devil: 1, Moon: 4, Sun: 3, Faith: 3, Consultant: 5',
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
          eveningInfo: ['Solve crossword (Knowledge +1) Answer: Master', 'Take the twins to the movies'],
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
          eveningInfo: ['Crossword (Knowledge +1) Answer: Conference', 'Hierophant 4 (Kindness +2)', '3, 0, 0', '0, 3, 0', '2, 0, 0'],
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
            'Solve crossword (Knowledge +1) Answer: Wardrobe',
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
          eveningInfo: [
            'Solve crossword (Knowledge +1) Answer: Currency',
            'Travel to Shinjuku and talk to the fortune teller (Fortune confidant prerequisite)',
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
      exitStats: [
        'Knowledge 4, Guts 4, Proficiency 4, Kindness 3, Charm 4',
        'Priestess 5, Emperor 3, Hierophant 4, Lovers 8, Chariot 8, Justice 3, Fortune 3, Hanged 3, Death 7, Temperance MAX, Devil 1, Star 3, Moon 4, Sun 3, Faith 4, Consultant 5',
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
          eveningInfo: ['Solve crossword (Knowledge +1) Answer: Front', 'Visit fortune teller (Fortune 1)'],
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
            'Solve crossword (Knowledge +1) Answer: Narcotics',
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
            'Respond to Panther’s invitation to the movies (Charm rank 4)',
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
          eveningInfo: ['Talk to Sojiro for reward', 'Solve crossword (Knowledge +1) Answer: Vacation', 'Fortune 2', '0, 0, 0', '0, 0, 0', '0, 2', '2, 0, 0'],
          miscInfo: ['Exam results (Charm +3)'],
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
          eveningInfo: ['Read On Modern Thought* (Knowledge +3)'],
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
          eveningInfo: ['Continue your date with Fox, go to the bathhouse with him (Charm +2)', '2, 2'],
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
            'Pick any answer (Guts +2)',
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
            'Get a luck reading from Chihaya',
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
      miscMonthInfo: 'Periodic reminder: if you haven’t been keeping up with fusing personae for the Strength confidant, catch up after you clear the palace',
      exitStats: [
        'Knowledge Max, Guts 4, Proficiency 4, Kindness Max, Charm Max',
        'Priestess 9, Emperor 5, Hierophant 6, Lovers Max, Chariot Max, Justice 4, Fortune 5, Hanged 5, Death 7.5, Temperance Max, Devil 4, Star 7.5, Moon 5, Sun 3, Faith 5, Consultant 5',
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
          dayTimeInfo: ['Get luck reading from Chihaya', 'Buy medicine and equipment as needed', 'Send calling card, and clear the palace'],
          eveningInfo: ['Call Kawakami', 'Justice 4 (Unlock Jazz Club)', '0, 0', '2, 0, 3', '3, 2, 0', '2, 0', '0, 0, 0', '3, 3, 2', '0, 2, 0'],
          miscInfo: [''],
        },
        {
          day: 3,
          dayTimeInfo: ['Chariot 9', '3, 2', '2, 2, 3', '3, 3', '2, 0, 0', '2, 0, 2'],
          eveningInfo: ['Solve crossword (Knowledge +1) Answer: Finals', 'Make sure you have an Emperor persona', 'Take the Twins to church'],
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
      exitStats: [],
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
      exitStats: [],
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
      exitStats: [],
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
      exitStats: [],
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
      exitStats: [],
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

  loadFebruaryData() {
    // February
    this.months.push({
      name: 'February',
      miscMonthInfo: '',
      exitStats: [],
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
