import { AbstractSolution, RunSolution } from "../../utils/solution";
@RunSolution
export class Solution1 extends AbstractSolution {
  getProblemName(): string {
    return "Multiples of 3 or 5";
  }
  solve() {
    return this.doSolve(19564);
  }
  private getSumOfDivisors(num: number, limit: number): number {
    const up = Math.floor(limit / num);
    const sum1toN = ((up + 1) * up) / 2;
    return sum1toN * num;
  }

  private doSolve(limit: number) {
    let totalSum = 0;
    totalSum += this.getSumOfDivisors(3, limit);
    totalSum += this.getSumOfDivisors(5, limit);
    totalSum -= this.getSumOfDivisors(15, limit);
    return totalSum;
  }
}
