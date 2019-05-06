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

## Immutability
- Don't mutate values
- `const` nuances (object and array); reference vs value immutability
- lint can help
- Make a copy `{ ...object }`, but won't get functions
- Performance Object.freeze, copies garbage collection
- read-only, structured mutation
- Immutability diff only changes
- immutable.js (facebook), mori

## Recursion
- Vs iterative
- recursion limit of browsers?
- base condition to end the recursion
- break down problems to "single" level/piece problem
- tail call optimization (TCO) (family of optimizations), functions that are in the tail position (the function does not need to be in the stack)
- Proper tail calls (PTC), run in O(1) storage
  - "use strict;"
  - single function call, ternary is fine, return keyword
- Continuation passing style (CPS) deferring the function call, growing the usage of heap
- Trampoline (while loop, calls 1 function, returns (a function or value) & pops and then calls the next)
  
## Lists / Data structures
- `functor`, a value which has values that an operation can be `map` (transformation)
- `map` transforms all the items in collection using function
- `filter` includes items from a collection if the predicate returns true (filterIn)
- `reduce` combines items from a collection into a single value

### Fusion
- Composition, `flow` (compose, pipe)
  
### Transducing
- incompatible arity and return types (map, filter, reduce)
- Transform into reducers and compose them
- Transducer is a higher order reducer, which returns a reducer
`reduce(transducer)`
- the reducer passed to transducer decides the final value

### Monad FP Data structure
- 1 single discrete value along with a set of behaviors
- turns the value into functor
- Category theory
- Types: Just, Nothing, Maybe, Either, IO, etc
- `val` is closed over by Just
```javascript
function Just(val) {
  return { map, chain, ap };
  
  // Produces another monad
  function map(fn) {
    return Just( fn( val ));
  }
  
  // aka: bind, flatMap
  function chain(fn) {
    return fn(val);
  }
  
  function ap(anotherMonad) {
    return anotherMonad.map(val);
  }
}
```

## Async
- Observable
- Reactive programming (Event driven programming), Rx (reactive extensions)

## FP libraries
- Lodash/FP
- Ramda.js
- getify/fpo

# Recap
- Functions (no side-effects, point-free)
- Closure (local "stack")
- Composition (build a new function from multiple functions)
- Immutability (give a copy/diff)
- Lists/ Data structures operators (map, reduce)