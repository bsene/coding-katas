<?php


use App\Fizzbuzz;
use PHPUnit\Framework\TestCase;

class FizzbuzzTest extends TestCase
{
    public function testShouldReturn1When1()
    {
        // Arrange
        $sut = new Fizzbuzz;

        // Act
        $actual = $sut->number(1);

        // Assert
        $this->assertSame("1", $actual);
    }

    public function testShouldReturn2When2()
    {
        // Arrange
        $sut = new Fizzbuzz;

        // Act
        $actual = $sut->number(2);

        // Assert
        $this->assertSame("2", $actual);
    }

    public function testShouldReturn4When4()
    {
        // Arrange
        $sut = new Fizzbuzz;

        // Act
        $actual = $sut->number(4);

        // Assert
        $this->assertSame("4", $actual);
    }

    public function testShouldReturn7When7()
    {
        // Arrange
        $sut = new Fizzbuzz;

        // Act
        $actual = $sut->number(7);

        // Assert
        $this->assertSame("7", $actual);
    }

    public function testShouldReturnFizzWhen3()
    {
        // Arrange
        $sut = new Fizzbuzz;

        // Act
        $actual = $sut->number(3);

        // Assert
        $this->assertSame("Fizz", $actual);
    }

    public function testShouldReturnFizzWhen6()
    {
        // Arrange
        $sut = new Fizzbuzz;

        // Act
        $actual = $sut->number(6);

        // Assert
        $this->assertSame("Fizz", $actual);
    }

    public function testShouldReturnFizzWhen9()
    {
        // Arrange
        $sut = new Fizzbuzz;

        // Act
        $actual = $sut->number(9);

        // Assert
        $this->assertSame("Fizz", $actual);
    }

    public function testShouldReturnBuzzWhen5()
    {
        // Arrange
        $sut = new Fizzbuzz;

        // Act
        $actual = $sut->number(5);

        // Assert
        $this->assertSame("Buzz", $actual);
    }

    public function testShouldReturnBuzzWhen10()
    {
        // Arrange
        $sut = new Fizzbuzz;

        // Act
        $actual = $sut->number(10);

        // Assert
        $this->assertSame("Buzz", $actual);
    }

    public function testShouldReturnBuzzWhen20()
    {
        // Arrange
        $sut = new Fizzbuzz;

        // Act
        $actual = $sut->number(20);

        // Assert
        $this->assertSame("Buzz", $actual);
    }

    public function testShouldReturnFizzBuzzWhen15()
    {
        // Arrange
        $sut = new Fizzbuzz;

        // Act
        $actual = $sut->number(15);

        // Assert
        $this->assertSame("FizzBuzz", $actual);
    }

    public function testShouldReturnFizzBuzzWhen30()
    {
        // Arrange
        $sut = new Fizzbuzz;

        // Act
        $actual = $sut->number(30);

        // Assert
        $this->assertSame("FizzBuzz", $actual);
    }

    public function testShouldReturnFizzBuzzWhen45()
    {
        // Arrange
        $sut = new Fizzbuzz;

        // Act
        $actual = $sut->number(45);

        // Assert
        $this->assertSame("FizzBuzz", $actual);
    }

    public function testShouldReturn12FizzWhenGenerateSuiteFrom1To3()
    {
        // Arrange
        $sut = new Fizzbuzz;

        // Act
        $actual = $sut->suite(3);

        // Assert
        $this->assertSame("12Fizz", $actual);
    }

    public function testShouldReturn12Fizz4BuzzFizzWhenGenerateSuiteFrom1To6()
    {
        // Arrange
        $sut = new Fizzbuzz;

        // Act
        $actual = $sut->suite(6);

        // Assert
        $this->assertSame("12Fizz4BuzzFizz", $actual);
    }

    public function testShouldReturn12Fizz4BuzzFizz78FizzWhenGenerateSuiteFrom1To9()
    {
        // Arrange
        $sut = new Fizzbuzz;

        // Act
        $actual = $sut->suite(9);

        // Assert
        $this->assertSame("12Fizz4BuzzFizz78Fizz", $actual);
    }

    public function testShouldReturn12Fizz4BuzzFizz78FizzBuzz11FizzWhenGenerateSuiteFrom1To12()
    {
        // Arrange
        $sut = new Fizzbuzz;

        // Act
        $actual = $sut->suite(12);

        // Assert
        $this->assertSame("12Fizz4BuzzFizz78FizzBuzz11Fizz", $actual);
    }

    public function testShouldReturn12Fizz4BuzzFizz78FizzBuzz11FizzFizz14FizzBuzzWhenGenerateSuiteFrom1To15()
    {
        // Arrange
        $sut = new Fizzbuzz;

        // Act
        $actual = $sut->suite(15);

        // Assert
        $this->assertSame("12Fizz4BuzzFizz78FizzBuzz11FizzFizz14FizzBuzz", $actual);
    }

    public function testShouldReturnFizzWhen13()
    {
        // Arrange
        $sut = new Fizzbuzz;

        // Act
        $actual = $sut->number(13);

        // Assert
        $this->assertSame("Fizz", $actual);
    }

    public function testShouldReturnFizzWhen23()
    {
        // Arrange
        $sut = new Fizzbuzz;

        // Act
        $actual = $sut->number(23);

        // Assert
        $this->assertSame("Fizz", $actual);
    }

    public function testShouldReturnFizzWhen31()
    {
        // Arrange
        $sut = new Fizzbuzz;

        // Act
        $actual = $sut->number(31);

        // Assert
        $this->assertSame("Fizz", $actual);
    }

    public function testShouldReturnBuzzWhen52()
    {
        // Arrange
        $sut = new Fizzbuzz;

        // Act
        $actual = $sut->number(52);

        // Assert
        $this->assertSame("Buzz", $actual);
    }

    public function testShouldReturnBuzzWhen56()
    {
        // Arrange
        $sut = new Fizzbuzz;

        // Act
        $actual = $sut->number(56);

        // Assert
        $this->assertSame("Buzz", $actual);
    }

    public function testShouldReturnBuzzWhen58()
    {
        // Arrange
        $sut = new Fizzbuzz;

        // Act
        $actual = $sut->number(58);

        // Assert
        $this->assertSame("Buzz", $actual);
    }

}
