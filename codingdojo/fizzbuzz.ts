const numberContainsDigit = (n: number, d: number): boolean =>
  n.toString().includes(d.toString());
const isFizz = (n: number): boolean => n % 3 === 0 || numberContainsDigit(n, 3);
const isBuzz = (n: number): boolean => n % 5 === 0 || numberContainsDigit(n, 5);
const isFizzBuzz = (n: number): boolean => isFizz(n) && isBuzz(n);
function range(to: number): number[] {
  let items = [];
  for (let i = 1; i <= to; i++) {
    items.push(i);
  }
  return items;
}

export default class Fizzbuzz {
  number(n: number): string {
    if (isFizzBuzz(n)) return "FizzBuzz";
    if (isBuzz(n)) return "Buzz";
    if (isFizz(n)) return "Fizz";
    return n.toString();
  }

  suite(n: number): string {
    return range(n)
      .map((n) => this.number(n))
      .join("");
  }
}
