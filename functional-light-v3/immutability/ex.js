"use strict";

function lotteryNum() {
	return (Math.round(Math.random() * 100) % 58) + 1;
}

function recordNumber(num, arr) {
	let a = arr.splice();
	return [...a.sort((x,y) => x - y), num];
}

var luckyLotteryNumbers = [];
const NUM_COUNT = 6;

while (luckyLotteryNumbers.length < NUM_COUNT) {
	luckyLotteryNumbers = recordNumber(lotteryNum(), luckyLotteryNumbers);
}

console.log(luckyLotteryNumbers);
