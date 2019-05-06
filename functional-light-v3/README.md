# Functional-Light JavaScript, v3

- https://github.com/getify/Functional-Light-JS
- Imperative vs Declarative
- Comments tell `why`
- Provable mathematically, less to read

## Course overview
- Functions
- Closure
- Composition
- Immutability (managing state)
- Recursion
- Lists / Data Structures
- Async
- FP libraries

## Functions
- Procedures (not functions)
- Functions need to `return`, need to call other functions
- Functions are semantic relationship between input and output
- Minimize side effects and make them obvious (separate out the side effects), affecting things outside the function
- Pure functions, isolate impurity and keep it at the edge of the shell rather than at the core of the code
- Function currying vs constants -> Smaller readability
- Reduce the surface area: Keep things related closer to each other
- Function purity shows level of confidence (not binary)
- Function call rather than definition
- Adapter function, get state store and then put it back, wrapper function and lastly make it obvious
- Arguments (input to func) vs parameters (function definition)
- unary and binary
- Higher order functions
- Point free functions (equational reasoning) `map(list, testFunc)` `negate(isOdd)`
- Reduce the `how`
- Pay attention to the function signature, number and order of args
- Referential transparency: for function calls 

## Composition
- Functional composition: Output of 1 function is input of another
- `flow` to compose functions, `flow([mod(2), eq(1)])`
- temp variable usually means functions can be composed
- abstraction means separating along with hiding
- compose multiple functions into new functions
- associative - grouping doesn't matter. composed functions can be curried

## Closure
- Func remembers the variables around it even when the function is executed elsewhere
- Technically not pure functions but can be pure when for same input returns same output
- Lazy vs eager: when the actual work happens
- `memoize` to keep it pure functional
- Function parameter order: General -> Specific

## Change the arity of functions
- Partial application: `partial` preset `any` number of arguments
- Currying: Does not preset, Gives a new function for `each` argument (unary) (strict(unary) vs loose currying)
- Partial vs curry for the arity of the function
`[1,2,3].map(add(1))`
