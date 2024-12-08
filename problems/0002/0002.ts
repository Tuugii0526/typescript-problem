import { AbstractSolution, RunSolution } from "../../utils/solution";
@RunSolution
export class Solution2 extends AbstractSolution {
  getProblemName(): string {
    return "Even fibonacci numbers";
  }
  solve() {
    return this.doSolverTeacher(4_000_000);
  }
  private doSolverOne(notExceed: number) {
    let one: number = 0;
    let two: number = 1;
    let sum: number = 0;
    while (two <= notExceed) {
      [one, two] = [two, one + two];
      if (two % 2 == 0) {
        sum += two;
      }
    }
    return sum;
  }
  private doSolverTwo(n: number) {
    const triangle = [0, 0, 1];
    let lastNumber = triangle[2];
    let orientar = 1;
    let sum = 0;
    while (lastNumber < n) {
      if (lastNumber % 2 == 0) {
        sum += lastNumber;
      }
      if (orientar) {
        triangle[0] = triangle[1] + triangle[2];
        triangle[1] = triangle[2];
        lastNumber = triangle[0];
        orientar = 0;
      } else {
        triangle[2] = triangle[0] + triangle[1];
        triangle[1] = triangle[0];
        lastNumber = triangle[2];
        orientar = 1;
      }
    }
    return sum;
  }

  private doSolverTeacher(limit: number): number {
    let sum: number = 2;
    let prevA: number = 1;
    let prevB: number = 2;

    //keep iterating over fibonacci values until we reach the limit
    let curr = this.getNextFibonacci(prevA, prevB);
    while (curr <= limit) {
      //only add to sum if the current is even
      if (curr % 2 === 0) {
        sum += curr;
      }
      //update values and prepare for the next loop iteration
      prevA = prevB;
      prevB = curr;
      curr = this.getNextFibonacci(prevA, prevB);
    }

    return sum;
  }

  /**
   * We don't really need a separate method for this
   * It's just included for clarity for presenting the solution
   * @param prevA
   * @param prevB
   * @returns
   */
  private getNextFibonacci(prevA: number, prevB: number): number {
    return prevA + prevB;
  }
}
