import { expect } from "chai";
import { isLeap } from "../codingdojo/leapyear";

describe("LeapYears tests suite", () => {
  describe("when year is divisible by 400", () => {
    it("should return true with 2000", () => {
      expect(isLeap(2000)).to.be.true;
    });
    it("should return true with 1600", () => {
      expect(isLeap(1600)).to.be.true;
    });
  });

  describe("when year is divisible by 100 but NOT by 400", () => {
    it("should return false with 1700", () => {
      expect(isLeap(1700)).to.be.false;
    });
    it("should return false with 1800", () => {
      expect(isLeap(1800)).to.be.false;
    });
    it("should return false with 1900", () => {
      expect(isLeap(1900)).to.be.false;
    });
  });
  describe("when year is divisible by 4 but NOT by 100", () => {
    it("should return true with 2008", () => {
      expect(isLeap(2008)).to.be.true;
    });
    it("should return true with 2012", () => {
      expect(isLeap(2012)).to.be.true;
    });
    it("should return true with 2016", () => {
      expect(isLeap(2016)).to.be.true;
    });
  });
  describe("when year is NOT divisible by 4", () => {
    it("should return false with 2017", () => {
      expect(isLeap(2017)).to.be.false;
    });
    it("should return false with 2018", () => {
      expect(isLeap(2018)).to.be.false;
    });
    it("should return false with 2019", () => {
      expect(isLeap(2019)).to.be.false;
    });
  });
});
