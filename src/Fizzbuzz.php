<?php


namespace App;


class Fizzbuzz
{
    public function number(int $num): string
    {
        if ($this->isDivibleBy3($num) && $this->isDivisibleBy5($num)) return "FizzBuzz";

        if ($this->isDivibleBy3($num)) return "Fizz";
        if ($this->isDivisibleBy5($num)) return "Buzz";
        return $num;
    }

    private function isDivibleBy3(int $num): bool
    {
        return $num % 3 === 0;
    }

    private function isDivisibleBy5(int $num): bool
    {
        return $num % 5 === 0;
    }

    public function suite(int $maximum): string
    {
        $result = array_map(function (int $number) {
            return $this->number($number);
        }, range(1, $maximum));
        return join("", $result);
    }
}
