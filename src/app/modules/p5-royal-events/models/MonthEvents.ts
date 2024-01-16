import { MonthEvent } from './Event';

export interface MonthEvents {
  name: string;
  events: Array<MonthEvent>;
  miscMonthInfo: string;
  exitStats: Array<string>;
}
