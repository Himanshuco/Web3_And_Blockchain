function asciiToUint8Array(str) {
  return new TextEncoder().encode(str);
}

let input = "Hello";
let result = asciiToUint8Array(input);
console.log(result); // Uint8Array(5) [104, 101, 108, 108, 111]
