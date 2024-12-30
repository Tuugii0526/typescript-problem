export abstract class AbstractSolution {
  abstract getProblemName(): string;
  async run(): Promise<void> {
    console.log(`Running solution for ${this.getProblemName()}`);
    const startDate = new Date();
    const result = await this.solve();
    const endDate = new Date();
    console.log("SOLUTION: ", result);
    console.log(`Solution took ${+endDate - +startDate}ms`);
  }
  protected abstract solve(): any; //why protected is used here
}
export function RunSolution(constructor: new () => any) {
  new constructor().run();
}
