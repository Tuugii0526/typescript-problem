import { PrimeCounter } from "../../utils/prime-counter";
import { AbstractSolution } from "../../utils/solution";

class Solution5 extends AbstractSolution {
  constructor() {
    super();
    this.dictionary = new PrimeCounter();
  }
  getProblemName(): string {
    return "Smallest multiple";
  }
  protected solve() {
    return this.doSolve(3);
  }
  private doSolve(limit: number): number {
    this.dictionary.doCounter();
    return 2;
  }
}
