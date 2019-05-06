"use strict";

// Put your code here! :)

function constant(val) {
  return () => val;
}

function add(num1, num2) {
  return num1 + num2;
}

function add2(func1, func2) {
  return add(func1(), func2())
}

// Iterative
// function addn(funcArr) {
//   while (funcArr.length > 2) {
//     let [ fn0, fn1, ...rest] = funcArr;
//     funcArr = [
//       function () {
//         return add2(fn0, fn1);
//       },
//       ...rest
//     ];
//   }
//
//   return add2(funcArr[0], funcArr[1]);
// }

// Recursive
// function addn([fn0, fn1, ...rest]) {
//   if (rest.length === 0) {
//     return add2(fn0, fn1);
//   }
//
//   return addn([
//     function f() {
//       return add2(fn0, fn1);
//     },
//     ...rest
//   ])
// }

// Reduce
function addn(funcArr) {
  return funcArr.reduce((composedFn, fn) => {
    return function f() {
      return add2(composedFn, fn)
    }
  })();
}

var vals = [7,4,8,0,10,7,3,2,5,9,12,6,4,1,7,8];

function uniq(list) {
  return list
    .reduce(
      (result, v) => {
        if (!result.includes(v)) {
          // result = [...result, v];
          return result.concat(v);
        }

        return result;
      },
      []
    )
    .filter(
      (v) => v % 2 === 0
    )
    .map(constant)
}

// console.log('%c add(twenty(), thirty()):', 'color: #bada55', addn([constant(5), constant(9), constant(12)]));
console.log('%c uniq(vals):', 'color: #bada55', addn(uniq(vals)));