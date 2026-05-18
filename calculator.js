// ===== DATA DARI SOAL =====
const FC = 900000;
const VC = 150000;
const P  = 300000;
const Q  = 10;

// ===== PERHITUNGAN =====
const TR = P * Q;
const TC = FC + (VC * Q);
const laba = TR - TC;
const BEP = FC / (P - VC);

// ===== OUTPUT =====
console.log("Total Revenue (TR): Rp" + TR.toLocaleString());
console.log("Total Cost (TC): Rp" + TC.toLocaleString());
console.log("Laba: Rp" + laba.toLocaleString());
console.log("BEP (unit): " + BEP);
