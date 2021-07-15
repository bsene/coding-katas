Class {
	#name : #Fizzbuzz,
	#superclass : #Object,
	#category : #Fizzbuzz
}

{ #category : #api }
Fizzbuzz >> number: anInteger [

	| isDivisibleBy3 isDivisibleBy5 |
	
	isDivisibleBy3 := anInteger % 3 = 0.
	isDivisibleBy5 := anInteger % 5 = 0.

	(isDivisibleBy3 and: [ isDivisibleBy5 ]) ifTrue: [ ^ 'FizzBuzz' ].
	isDivisibleBy3 ifTrue: [ ^ 'Fizz' ].
	isDivisibleBy5 ifTrue: [ ^ 'Buzz' ].


	^ anInteger asString
]
