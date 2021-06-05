import { expect } from "chai";
import { create_fizzbuzz } from "../codingdojo/fizzbuzz";

describe("Fizzbuzz tests suite", () => {
  let fizzbuzz;
  beforeEach(() => {
    fizzbuzz = create_fizzbuzz();
  });
  describe("is normal number", () => {
    it("should return 1 with 1", () => {
      expect(fizzbuzz.number(1)).to.equal("1");
    });
    it("should return 2 with 2", () => {
      expect(fizzbuzz.number(2)).to.equal("2");
    });
    it("should return 4 with 4", () => {
      expect(fizzbuzz.number(4)).to.equal("4");
    });
    it("should return 17 with 17", () => {
      expect(fizzbuzz.number(17)).to.equal("17");
    });
  });
  describe("is Fizz", () => {
    describe("when is divible by 3", () => {
      it("should return Fizz with 3", () => {
        expect(fizzbuzz.number(3)).to.equal("Fizz");
      });
      it("should return Fizz with 9", () => {
        expect(fizzbuzz.number(9)).to.equal("Fizz");
      });
      it("should return Fizz with 12", () => {
        expect(fizzbuzz.number(12)).to.equal("Fizz");
      });
    });

    describe("when contains 3 in it", () => {
      it("should return Fizz with 43", () => {
        expect(fizzbuzz.number(43)).to.equal("Fizz");
      });
      it("should return Fizz with 34", () => {
        expect(fizzbuzz.number(34)).to.equal("Fizz");
      });
      it("should return Fizz with 13", () => {
        expect(fizzbuzz.number(13)).to.equal("Fizz");
      });
    });
  });
  describe("is Buzz", () => {
    describe("when is divisible by 5", () => {
      it("should return Buzz with 5", () => {
        expect(fizzbuzz.number(5)).to.equal("Buzz");
      });
      it("should return Buzz with 10", () => {
        expect(fizzbuzz.number(10)).to.equal("Buzz");
      });
      it("should return Buzz with 20", () => {
        expect(fizzbuzz.number(20)).to.equal("Buzz");
      });
    });
    describe("when contains 5 in it", () => {
      it("should return Buzz with 52", () => {
        expect(fizzbuzz.number(52)).to.equal("Buzz");
      });
      it("should return Buzz with 56", () => {
        expect(fizzbuzz.number(56)).to.equal("Buzz");
      });
      it("should return Buzz with 58", () => {
        expect(fizzbuzz.number(58)).to.equal("Buzz");
      });
    });
  });
  describe("FizzBuzz numbers", () => {
    it("should return FizzBuzz with 15", () => {
      expect(fizzbuzz.number(15)).to.equal("FizzBuzz");
    });
    it("should return FizzBuzz with 30", () => {
      expect(fizzbuzz.number(30)).to.equal("FizzBuzz");
    });
    it("should return FizzBuzz with 45", () => {
      expect(fizzbuzz.number(45)).to.equal("FizzBuzz");
    });
  });
});
