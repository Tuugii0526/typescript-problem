import { AbstractSequence } from "./sequence";

class Primes extends AbstractSequence<number> {
  private static instance: Primes = new Primes();
  private constructor() {
    super();
  }
  protected getInitialSequenceItems(): number[] {
    return [2, 3, 5, 7, 11];
  }
  static isPrime(num: number): boolean {
    if (num == 1) {
      return false;
    }
    if (num === 2 || num === 3) {
      return true;
    }
    if (num % 6 !== 1 && num % 6 !== 5) {
      return false;
    }
    return this.determineIsPrime(num);
  }
  private static determineIsPrime(num: number): boolean {
    const limit = Math.sqrt(num);
    for (let i = 5; i <= limit; i += 2) {
      if (num % i == 0) {
        return false;
      }
    }
    return true;
  }
}
