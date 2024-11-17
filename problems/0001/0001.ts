import { AbstractSolution,RunSolution } from "../../utils/solution";
@RunSolution
export class Solution1 extends AbstractSolution{
  getProblemName(): string {
      return 'Multiples of 3 or 5'
  }
  solve() {
      return this.doSolve(1000)
  }
  private getSumOfDivisors(num:number,limit:number):number{
     let sum=0
     for(let i=num;i<limit;i+=num)
     {
      sum+=i
     }
     return sum
  }
  private doSolve(limit:number){
      let totalSum=0
      totalSum+=this.getSumOfDivisors(3,limit)
      totalSum+=this.getSumOfDivisors(5,limit)
      totalSum-=this.getSumOfDivisors(15,limit)
      return totalSum
  }
}