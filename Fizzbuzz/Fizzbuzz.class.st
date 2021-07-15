Class {
	#name : #Fizzbuzz,
	#superclass : #Object,
	#category : #Fizzbuzz
}

{ #category : #api }
Fizzbuzz >> number: anInteger [

	(anInteger % 3 = 0 and: [ anInteger % 5 = 0 ]) ifTrue: [ ^ 'FizzBuzz' ].
	anInteger % 3 = 0 ifTrue: [ ^ 'Fizz' ].
	anInteger % 5 = 0 ifTrue: [ ^ 'Buzz' ].


	^ anInteger asString
]
