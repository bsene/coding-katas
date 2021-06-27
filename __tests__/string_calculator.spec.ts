import StringCalculator from "../codingdojo/string_calculator";

describe("String Calculator tests suite", () => {
  let sut: StringCalculator;
  beforeEach(() => {
    sut = new StringCalculator();
  });
  describe("when no numbers in string", () => {
    it("should return '0' with empty string", () => {
      expect(sut.add("")).toBe("0");
    });
  });
  describe("when one number in string", () => {
    it("should return '1' with 1", () => {
      expect(sut.add("1")).toBe("1");
    });
    it("should return '2' with 2", () => {
      expect(sut.add("2")).toBe("2");
    });
    it("should return '3' with 3", () => {
      expect(sut.add("3")).toBe("3");
    });
  });
  describe("When two numbers in string", () => {
    it("should return '0' wit 0,0", () => {
      expect(sut.add("0,0")).toBe("0");
    });
    it("should return '1' wit 0,1", () => {
      expect(sut.add("0,1")).toBe("1");
    });
    it("should return '1' wit 1,0", () => {
      expect(sut.add("1,0")).toBe("1");
    });
  });
  describe("When two floating numbers in string", () => {
    it("should return '0' with 0.0,0.0", () => {
      expect(sut.add("0.0,0.0")).toBe("0");
    });
    it("should return '1.2' with 0.1,1.1", () => {
      expect(sut.add("0.1,1.1")).toBe("1.2");
    });
    it("should return '1' with 1,0", () => {
      expect(sut.add("1,0")).toBe("1");
    });
  });
  describe("when add three numbers with also newline separators", () => {
    it("should return '6' with 1\\n2,3", () => {
      expect(sut.add("1\n2,3")).toBe("6");
    });
  });
});
