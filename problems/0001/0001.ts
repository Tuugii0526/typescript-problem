abstract class Animal {
  abstract getName(): string;
  protected abstract getNameAge(): void;
}
class Dog extends Animal {
  getName(): string {
    return "khonchin";
  }
   getNameAge(): void {
      console.log(`age:20, name:${this.getName()}`)
  }
}
const dog = new Dog();
dog.getNameAge();
