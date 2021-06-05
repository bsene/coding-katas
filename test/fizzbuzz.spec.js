import { expect } from "chai";
import { create_fizzbuzz } from "../codingdojo/fizzbuzz";

const fizzbuzz = create_fizzbuzz();
describe("Fizzbuzz tests suite", () => {
  describe("Normal numbers", () => {
    it("should return 1 when 1", () => {
      expect(fizzbuzz.number(1)).to.equal("1");
    });
    it("should return 2 when 2", () => {
      expect(fizzbuzz.number(2)).to.equal("2");
    });
    it("should return 4 when 4", () => {
      expect(fizzbuzz.number(4)).to.equal("4");
    });
    it("should return 17 when 17", () => {
      expect(fizzbuzz.number(17)).to.equal("17");
    });
  });
  describe("Fizz numbers", () => {
    it("should return Fizz when 3", () => {
      expect(fizzbuzz.number(3)).to.equal("Fizz");
    });
    it("should return Fizz when 9", () => {
      expect(fizzbuzz.number(9)).to.equal("Fizz");
    });
    it("should return Fizz when 12", () => {
      expect(fizzbuzz.number(12)).to.equal("Fizz");
    });
  });
  describe("Buzz numbers", () => {
    it("should return Buzz when 5", () => {
      expect(fizzbuzz.number(5)).to.equal("Buzz");
    });
    it("should return Buzz when 10", () => {
      expect(fizzbuzz.number(10)).to.equal("Buzz");
    });
    it("should return Buzz when 20", () => {
      expect(fizzbuzz.number(20)).to.equal("Buzz");
    });
  });
  describe("FizzBuzz numbers", () => {
    it("should return FizzBuzz when 15", () => {
      expect(fizzbuzz.number(15)).to.equal("FizzBuzz");
    });
    it("should return FizzBuzz when 30", () => {
      expect(fizzbuzz.number(30)).to.equal("FizzBuzz");
    });
    it("should return FizzBuzz when 45", () => {
      expect(fizzbuzz.number(45)).to.equal("FizzBuzz");
    });
  });
});
