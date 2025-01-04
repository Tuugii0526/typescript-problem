import { Primes } from "../../utils/primes";
import { AbstractSolution, RunSolution } from "../../utils/solution";
@RunSolution
export class Solution3 extends AbstractSolution {
  getProblemName(): string {
    return "Largest prime factor";
  }
  protected solve() {
    return this.doSolve(600851475143);
  }
  protected doSolve(num: number): number | string {
    let maxDividor: string | number = "There is no prime factor";
    if (num == 1) {
      return maxDividor;
    }
    if (num == 2) {
      return 2;
    }
    if (num == 3) {
      return 3;
    }
    const limit = Math.sqrt(num);
    for (let i = 5; i <= limit; i += 2) {
      if (num % i == 0 && Primes.isPrime(i)) {
        maxDividor = i;
      }
    }
    return maxDividor;
  }
}
