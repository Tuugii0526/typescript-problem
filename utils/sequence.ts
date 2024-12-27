//Base Class which will let us abstract the logic of generating and maintaining sequence here

export type AbstractSequenceType = string | number | bigint;
export abstract class AbstractSequence<ItemType extends AbstractSequenceType> {
  //   protected readonly items: ItemType[] = [];
  readonly items: ItemType[] = [];
  constructor() {
    this.items = this.getInitialSequenceItems();
  }
  protected abstract getInitialSequenceItems(): ItemType[];
  public findLength() {
    return this.items.length;
  }
}
