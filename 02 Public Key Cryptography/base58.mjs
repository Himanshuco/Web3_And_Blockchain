import bs58 from 'bs58';

// Convert Uint8Array to Base58 string
function uint8ArrayToBase58(uint8Array) {
    return bs58.encode(Uint8Array.from(uint8Array));
}

// Convert Base58 string to Uint8Array
function base58ToUint8Array(base58String) {
    return bs58.decode(base58String);
}

// Input: "Hello"
const byteArray = new Uint8Array([72, 101, 108, 108, 111]);

// Encode to Base58
const base58String = uint8ArrayToBase58(byteArray);
console.log("Base58 Encoded:", base58String);  // Output: Cn8eVZg

// Decode back to Uint8Array
const decodedBytes = base58ToUint8Array(base58String);
console.log("Decoded Uint8Array:", decodedBytes);  // Output: [72, 101, 108, 108, 111]
