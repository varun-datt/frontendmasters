"use strict";

// function output(txt) {
// 	console.log(txt);
// }

// function isLongEnough(str) {
// 	return !isShortEnough(str);
// }

// function printIf(shouldPrintIt) {
// 	return function(msg) {
// 		if (shouldPrintIt(msg)) {
// 			output(msg);
// 		}
// 	};
// }

// var output = console.log.bind(console);


var output = console.log;

var printIf = when(output);

function when(fn) {
	return function (predicate) {
		return function (...args) {
			if (predicate(...args)) {
				return fn(...args);
			}
		}
	}
}

function isShortEnough(str) {
	return str.length <= 5;
}

var isLongEnough = negate(isShortEnough);

function negate(f) {
	return function negated(...args) {
		return !f(...args);
	}
}

var msg1 = "Hello";
var msg2 = msg1 + " World";

printIf(isShortEnough)(msg1);		// Hello
printIf(isShortEnough)(msg2);
printIf(isLongEnough)(msg1);
printIf(isLongEnough)(msg2);		// Hello World
