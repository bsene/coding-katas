Class {
	#name : #FizzbuzzTest,
	#superclass : #TestCase,
	#instVars : [
		'sut'
	],
	#category : #'Fizzbuzz-Tests'
}

{ #category : #running }
FizzbuzzTest >> setUp [
	super setUp.
	
	sut := Fizzbuzz new
]

{ #category : #tests }
FizzbuzzTest >> testShouldReturn1When1 [

	self assert: (sut number:1) equals: '1'
]

{ #category : #tests }
FizzbuzzTest >> testShouldReturn2When2 [

	self assert: (sut number:2) equals: '2'
]

{ #category : #tests }
FizzbuzzTest >> testShouldReturn4When4 [

	self assert: (sut number:4) equals: '4'
]

{ #category : #tests }
FizzbuzzTest >> testShouldReturn7When7 [

	self assert: (sut number: 7) equals: '7'
]

{ #category : #tests }
FizzbuzzTest >> testShouldReturnBuzzWhen10 [

	self assert: (sut number: 10) equals: 'Buzz'
]

{ #category : #tests }
FizzbuzzTest >> testShouldReturnBuzzWhen20 [

	self assert: (sut number: 20) equals: 'Buzz'
]

{ #category : #tests }
FizzbuzzTest >> testShouldReturnBuzzWhen5 [

	self assert: (sut number: 5) equals: 'Buzz'
]

{ #category : #tests }
FizzbuzzTest >> testShouldReturnFizzBuzzWhen15 [

	self assert: (sut number: 15) equals: 'FizzBuzz'
]

{ #category : #tests }
FizzbuzzTest >> testShouldReturnFizzBuzzWhen30 [

	self assert: (sut number: 30) equals: 'FizzBuzz'
]

{ #category : #tests }
FizzbuzzTest >> testShouldReturnFizzBuzzWhen45 [

	self assert: (sut number: 45) equals: 'FizzBuzz'
]

{ #category : #tests }
FizzbuzzTest >> testShouldReturnFizzWhen3 [

	self assert: (sut number: 3) equals: 'Fizz'
]

{ #category : #tests }
FizzbuzzTest >> testShouldReturnFizzWhen6 [

	self assert: (sut number: 6) equals: 'Fizz'
]

{ #category : #tests }
FizzbuzzTest >> testShouldReturnFizzWhen9 [

	self assert: (sut number: 9) equals: 'Fizz'
]
