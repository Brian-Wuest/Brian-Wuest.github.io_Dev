import { AttributeModifier } from './attributeModifier';

export class Race {
  constructor(public name: string, public modifiers: Array<AttributeModifier>) {}
}
