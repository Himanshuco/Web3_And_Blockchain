let data = new TextEncoder().encode("Kapil");
let hash = await crypto.subtle.digest("SHA-256", data);
let byteArray = new Uint8Array(hash);

console.log(data);
console.log(hash);
console.log(byteArray);