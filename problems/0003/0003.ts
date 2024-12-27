import { AbstractSolution, RunSolution } from "../../utils/solution";
@RunSolution
export class Solution3 extends AbstractSolution {
  getProblemName(): string {
    return "Largest prime factor";
  }
  solve() {
    return 3;
  }
}
