import Fizzbuzz from "../codingdojo/fizzbuzz";

describe("Fizzbuzz tests suite", () => {
  let fizzbuzz: Fizzbuzz;
  beforeEach(() => {
    fizzbuzz = new Fizzbuzz();
  });
  describe("is normal number", () => {
    it("should return 1 with 1", () => {
      expect(fizzbuzz.number(1)).toBe("1");
    });
    it("should return 2 with 2", () => {
      expect(fizzbuzz.number(2)).toBe("2");
    });
    it("should return 4 with 4", () => {
      expect(fizzbuzz.number(4)).toBe("4");
    });
    it("should return 17 with 17", () => {
      expect(fizzbuzz.number(17)).toBe("17");
    });
  });
  describe("is Fizz", () => {
    describe("when is divible by 3", () => {
      it("should return Fizz with 3", () => {
        expect(fizzbuzz.number(3)).toBe("Fizz");
      });
      it("should return Fizz with 9", () => {
        expect(fizzbuzz.number(9)).toBe("Fizz");
      });
      it("should return Fizz with 12", () => {
        expect(fizzbuzz.number(12)).toBe("Fizz");
      });
    });

    describe("when contains 3 in it", () => {
      it("should return Fizz with 43", () => {
        expect(fizzbuzz.number(43)).toBe("Fizz");
      });
      it("should return Fizz with 34", () => {
        expect(fizzbuzz.number(34)).toBe("Fizz");
      });
      it("should return Fizz with 13", () => {
        expect(fizzbuzz.number(13)).toBe("Fizz");
      });
    });
  });
  describe("is Buzz", () => {
    describe("when is divisible by 5", () => {
      it("should return Buzz with 5", () => {
        expect(fizzbuzz.number(5)).toBe("Buzz");
      });
      it("should return Buzz with 10", () => {
        expect(fizzbuzz.number(10)).toBe("Buzz");
      });
      it("should return Buzz with 20", () => {
        expect(fizzbuzz.number(20)).toBe("Buzz");
      });
    });
    describe("when contains 5 in it", () => {
      it("should return Buzz with 52", () => {
        expect(fizzbuzz.number(52)).toBe("Buzz");
      });
      it("should return Buzz with 56", () => {
        expect(fizzbuzz.number(56)).toBe("Buzz");
      });
      it("should return Buzz with 58", () => {
        expect(fizzbuzz.number(58)).toBe("Buzz");
      });
    });
  });
  describe("FizzBuzz numbers", () => {
    it("should return FizzBuzz with 15", () => {
      expect(fizzbuzz.number(15)).toBe("FizzBuzz");
    });
    it("should return FizzBuzz with 30", () => {
      expect(fizzbuzz.number(30)).toBe("FizzBuzz");
    });
    it("should return FizzBuzz with 45", () => {
      expect(fizzbuzz.number(45)).toBe("FizzBuzz");
    });
  });
  describe("generate suite", () => {
    it("should return 12Fizz from 1 to 3", () => {
      expect(fizzbuzz.suite(3)).toBe("12Fizz");
    });
    it("should return 12Fizz4BuzzFizz from 1 to 6", () => {
      expect(fizzbuzz.suite(6)).toBe("12Fizz4BuzzFizz");
    });
    it("should return 12Fizz4BuzzFizz78Fizz from 1 to 9", () => {
      expect(fizzbuzz.suite(9)).toBe("12Fizz4BuzzFizz78Fizz");
    });
    it("should return 12Fizz4BuzzFizz78FizzBuzz11Fizz from 1 to 12", () => {
      expect(fizzbuzz.suite(12)).toBe("12Fizz4BuzzFizz78FizzBuzz11Fizz");
    });
    it("should return 12Fizz4BuzzFizz78FizzBuzz11FizzFizz14FizzBuzz from 1 to 15", () => {
      expect(fizzbuzz.suite(15)).toBe(
        "12Fizz4BuzzFizz78FizzBuzz11FizzFizz14FizzBuzz"
      );
    });
  });
});
