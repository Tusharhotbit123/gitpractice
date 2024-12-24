//pollyfills
// A polyfill is a piece of code (usually JavaScript on the Web) used to provide modern functionality on older browsers that do not natively support it.

//prototype
// A prototype is a model that displays the appearance and behavior of an application or product early in the development lifecycle.

//closures
// A closure is the combination of a function bundled together (enclosed) with references to its surrounding state (the lexical environment). In other words, a closure gives a function access to its outer scope. In JavaScript, closures are created every time a function is created, at function creation time.

// function init() {
//     var name = "Mozilla"; // name is a local variable created by init
//     function displayName() {
//       // displayName() is the inner function, that forms a closure
//       console.log(name); // use variable declared in the parent function
//     }
//     displayName();
//   }
//   init();

//CURRYING

// function curriedFunction(param1){
//     return function(param2){
//         return function(param3){
//             return param1+param2+param3;
//         }
//     }
// }

//generators

// A generator function is a special type of function that can pause its execution at any point and resume later. They are defined using the function* syntax and use the yield keyword to pause execution and return a value.
// function* generatorFunction() {
//     yield 'Hello';
//     yield 'World';
//     return 'Done';
// }

// const generator = generatorFunction();

// console.log(generator.next());
// console.log(generator.next()); 
// console.log(generator.next());
// console.log(generator.next());

// function* generatorFunction() {
//     yield 'Hello';
//     yield 'World';
//     return 'Done';
// }

// const generator = generatorFunction();

// console.log(generator.next());
// console.log(generator.next()); 
// console.log(generator.next());
// console.log(generator.next());

//event loop js
// In JavaScript, an event loop is a mechanism that allows the execution of code to be scheduled in a non-blocking way. That means the code can continue to run and handle new events as they occur without being stopped or blocked by long-running operations.

// It works by continuously checking a pending event queue and executing each event turn by turn. It allows JavaScript code to handle multiple events concurrently without waiting for one event to complete before handling the next.

// The poll phase is an important aspect of how the event loop operates. During this poll phase, it retrieves new I/O events and executes them. This is essential for ensuring that all operations are handled in the correct sequence.
  