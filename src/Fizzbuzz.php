<?php


namespace App;


class Fizzbuzz
{
    public function suite(int $maximum): string
    {
        $result = array_map(function (int $number) {
            return $this->number($number);
        }, range(1, $maximum));
        return join("", $result);
    }

    public function number(int $num): string
    {
        if ($this->isFizz($num) && $this->isBuzz($num)) return "FizzBuzz";

        if ($this->isFizz($num)) return "Fizz";

        if ($this->isBuzz($num)) return "Buzz";

        return $num;
    }

    private function isFizz(int $num): bool
    {
        return $this->isDivisibleBy($num, 3) || $this->containsDigit($num, 3);
    }

    private function isDivisibleBy(int $num, int $divisor): bool
    {
        return $num % $divisor === 0;
    }

    private function containsDigit(int $num, int $digit): bool
    {
        return strpos((string)$num, (string)$digit) !== false;
    }

    private function isBuzz(int $num): bool
    {
        return $this->isDivisibleBy($num, 5) || $this->containsDigit($num, 5);
    }

}
