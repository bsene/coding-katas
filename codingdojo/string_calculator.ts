const asNumbersInList = (lst: Array<string>) =>
  lst.map((item) => parseFloat(item));
const calculateTotalFromNumbers = (lst: Array<number>) =>
  lst.reduce((sum, item) => sum + item, 0);
export default class StringCalculator {
  add(n: string): string {
    if (!n) return "0";

    const splittedNumbers: Array<string> = n.split(/[,\n]/);
    const numbers = asNumbersInList(splittedNumbers);
    const sum = calculateTotalFromNumbers(numbers);
    return sum.toString().substring(0, 3);
  }
}
