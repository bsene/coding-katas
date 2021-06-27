const numberContainsDigit = (n, d) => n.toString().includes(d.toString());
const isFizz = (n) => n % 3 === 0 || numberContainsDigit(n, 3);
const isBuzz = (n) => n % 5 === 0 || numberContainsDigit(n, 5);
const isFizzBuzz = (n) => isFizz(n) && isBuzz(n);
function range(to) {
  let items = [];
  for (let i = 1; i <= to; i++) {
    items.push(i);
  }
  return items;
}

function create_fizzbuzz() {
  return {
    ,
    suite(n) {
      return range(n)
        .map((n) => this.number(n))
        .join("");
    },
  };
}

export default class Fizzbuzz {
  number(n) {
    if (isFizzBuzz(n)) return "FizzBuzz";
    if (isBuzz(n)) return "Buzz";
    if (isFizz(n)) return "Fizz";
    return n.toString();
  }
}
