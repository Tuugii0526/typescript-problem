import { Primes } from "./primes";

export class PrimeCounter {
  dictionary: {
    [key: string | number]: number;
  };
  constructor() {
    this.dictionary = {};
  }
  doCounter(n: number) {
    if (Primes.isPrime(n)) {
      this.dictionary[n] = 1;
      return;
    }
    let expNumber = n;
    if (expNumber % 2 == 0) {
      this.dictionary[2] = 1;
      expNumber /= 2;
    }
    let i = 3;
    while (n > 1) {}
  }
}
