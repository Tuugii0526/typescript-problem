import { AbstractSolution, RunSolution } from "../../utils/solution";

@RunSolution
class Solution4 extends AbstractSolution {
  getProblemName(): string {
    return "Largest Palindrome Product";
  }
  protected solve() {
    return this.doSolve(4);
  }
  private doSolve(digit: number): number {
    const upperLimit = 10 ** digit;
    const lowerLimit = 10 ** (digit - 1);
    let max = -Infinity;
    for (let i = lowerLimit; i < upperLimit; i++) {
      for (let j = lowerLimit; j < upperLimit; j++) {
        const product = i * j;
        if (this.isPalindrome(product)) {
          if (product > max) {
            max = product;
          }
        }
      }
      {
      }
    }
    return max;
  }
  private isPalindrome(num: number): boolean {
    const stringNum = String(num);
    const limit = Math.floor(stringNum.length / 2);
    const length = stringNum.length - 1;
    for (let i = 0; i < limit; i++) {
      if (stringNum[i] !== stringNum[length - i]) {
        return false;
      }
    }
    return true;
  }
}
