const asNumbersInList = (lst) => lst.map((item) => parseFloat(item, 10));
const calculateTotalFromNumbers = (lst) =>
  lst.reduce((sum, item) => sum + item, 0);
export default class StringCalculator {
  add(n) {
    if (!n) return "0";

    const numbers = asNumbersInList(n.split("[,\n]"));
    const sum = calculateTotalFromNumbers(numbers);
    return sum.toString().substring(0, 3);
  }
}
