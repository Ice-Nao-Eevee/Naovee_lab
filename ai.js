const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

console.log("AI aktif. Ketik 'exit' untuk keluar.");

rl.on("line", (input) => {
  if (input.toLowerCase() === "exit") {
    console.log("AI: Sampai jumpa 🌙");
    rl.close();
  } else {
    console.log("AI:", jawab(input));
  }
});

function jawab(pesan) {
  if (pesan.includes("sedih")) return "Aku di sini menemanimu.";
  if (pesan.includes("senang")) return "Aku ikut senang 😊";
  return "Ceritakan lebih banyak.";
}
