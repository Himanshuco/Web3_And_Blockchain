import * as ed from '@noble/ed25519';

function toHex(bytes) {
  return Array.from(bytes).map(b => b.toString(16).padStart(2, '0')).join('');
}

const main = async () => {
  // Step 1: Create keys
  const privateKey = ed.utils.randomPrivateKey();
  const publicKey = await ed.getPublicKeyAsync(privateKey);

  // Step 2: Define a message
  const message = "I want to send 0.00123 SOL to kapil!";
  const messageBytes = new TextEncoder().encode(message);

  // Step 3: Sign
  const signature = await ed.signAsync(messageBytes, privateKey);

  // Step 4: Verify
  const isValid = await ed.verifyAsync(signature, messageBytes, publicKey);

  console.log("Private Key:", toHex(privateKey));
  console.log("Public Key :", toHex(publicKey));
  console.log("Signature  :", toHex(signature));
  console.log("Signature Valid:", isValid);
};

main();
