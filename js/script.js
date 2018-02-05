// scripts.js

var a = 3,
	h = 4,
	triangleArea;

a = prompt('Podaj a - długość jednego boku trójkąta');
alert('Długość a wynosi: ' + a);
h = prompt('Podaj h - długość wysokości opuszczonej na bok a');
alert('Długość h wynosi: ' + h);

triangleArea = a*h/2;

alert('Pole trójkąta wynosi: ' + triangleArea + ' :-)');
console.log('Triangle field with base a: ' + a + ' and height h: ' + h + ' is equal to: ' + triangleArea);