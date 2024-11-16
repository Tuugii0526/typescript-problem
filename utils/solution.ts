export abstract class AbstractSolution {
  abstract getProblemName(): string;
  async run(): Promise<void> {
    const startDate = new Date();

    console.log(`Running solution for ${this.getProblemName()}`);
    const result = await this.solve();
    const endDate = new Date();
    console.log("SOLUTION: ", result);
    console.log(`Solution took ${+endDate - +startDate}ms`);
  }
  abstract solve(): any;//why protected is used here
}