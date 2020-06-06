import { MonthEvent } from './event';

export interface MonthEvents {
  name: string;
  events: Array<MonthEvent>;
  miscMonthInfo: string;
}
