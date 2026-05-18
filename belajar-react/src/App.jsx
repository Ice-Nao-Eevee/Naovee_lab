import { useState } from 'react';
import CardGame from './CardGame';

function App() {
  const [listGame, setListGame] = useState([
    { id: 1, judul: "Mindustry", genre: "Tower Defense / Strategy" },
    { id: 2, judul: "Geometry Dash", genre: "Rhythm / Platformer" }
  ]);

  // State baru untuk menampung apa yang sedang diketik user di kolom input
  const [inputJudul, setInputJudul] = useState("");
  const [inputGenre, setInputGenre] = useState("");

  const tambahGameDariInput = (e) => {
    e.preventDefault(); // Mencegah halaman web reload saat submit form

    // Validasi sederhana: jika input kosong, jangan ditambah
    if (!inputJudul || !inputGenre) return;

    const gameBaru = {
      id: listGame.length + 1,
      judul: inputJudul, // Mengambil nilai dari state inputJudul
      genre: inputGenre   // Mengambil nilai dari state inputGenre
    };

    setListGame([...listGame, gameBaru]);

    // Kosongkan kembali kolom input setelah tombol ditekan
    setInputJudul("");
    setInputGenre("");
  };

  return (
    <div style={{ textAlign: 'center', marginTop: '50px', fontFamily: 'sans-serif' }}>
      <h1>Custom Game List</h1>
      <p>Ketik dan tambahkan game favoritmu sendiri!</p>
      
      {/* Form Input */}
      <form onSubmit={tambahGameDariInput} style={{ marginBottom: '30px' }}>
        <input 
          type="text" 
          placeholder="Masukkan Judul Game..." 
          value={inputJudul}
          onChange={(e) => setInputJudul(e.target.value)} // Mengupdate state setiap kali ada ketikan
          style={{ padding: '8px', marginRight: '10px', borderRadius: '4px', border: '1px solid #ccc' }}
        />
        <input 
          type="text" 
          placeholder="Masukkan Genre..." 
          value={inputGenre}
          onChange={(e) => setInputGenre(e.target.value)} // Mengupdate state setiap kali ada ketikan
          style={{ padding: '8px', marginRight: '10px', borderRadius: '4px', border: '1px solid #ccc' }}
        />
        <button type="submit" style={{ padding: '8px 15px', backgroundColor: '#008CBA', color: 'white', border: 'none', borderRadius: '4px', cursor: 'pointer' }}>
          Tambah Game
        </button>
      </form>

      {/* List Card Game */}
      <div>
        {listGame.map((game) => (
          <CardGame key={game.id} judul={game.judul} genre={game.genre} />
        ))}
      </div>
    </div>
  );
}

export default App;