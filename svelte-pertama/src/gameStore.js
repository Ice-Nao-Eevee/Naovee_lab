import { writable } from 'svelte/store';

// 1. Cek apakah sudah ada data tersimpan di Local Storage browser
const savedData = localStorage.getItem('dev_tycoon_save');

// 2. Tentukan nilai default jika game baru pertama kali dimainkan
const defaultState = {
  playerName: 'Programmer Pemula', // <- Tambahkan ini
  linesOfCode: 0,
  codePerClick: 1,
  autoClickers: 0,
  upgradeCost: 10
};

// 3. Gabungkan data: pakai data simpanan jika ada, jika tidak pakai nilai default
const initialState = savedData ? JSON.parse(savedData) : defaultState;

// 4. Buat Writable Store dari Svelte
export const gameState = writable(initialState);

// 5. Otomatis simpan data ke Local Storage SETIAP kali ada perubahan data di game
gameState.subscribe((value) => {
  localStorage.setItem('dev_tycoon_save', JSON.stringify(value));
});