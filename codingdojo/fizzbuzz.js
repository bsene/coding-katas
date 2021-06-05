const isFizz = (n) => n % 3 === 0;
const isBuzz = (n) => n % 5 === 0;

function create_fizzbuzz() {
  return {
    number(n) {
      if (isFizz(n) && isBuzz(n)) return "FizzBuzz";
      if (isBuzz(n)) return "Buzz";
      if (isFizz(n)) return "Fizz";
      return n.toString();
    },
  };
}

export { create_fizzbuzz };
