function foo(a, b) {
  if (b === 0) {
    return a;
  } else {
    return foo(b, a % b);
  }
}

console.log(foo(10, 2)); // Output: 2
console.log(foo(10, 0)); // Output: 10