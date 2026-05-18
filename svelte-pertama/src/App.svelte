<script>
  import { gameState } from './gameStore.js';
  import { onDestroy } from 'svelte';

  function clickDev() {
    $gameState.linesOfCode += $gameState.codePerClick;
  }

  function buyUpgrade() {
    if ($gameState.linesOfCode >= $gameState.upgradeCost) {
      $gameState.linesOfCode -= $gameState.upgradeCost;
      $gameState.autoClickers += 1;
      $gameState.upgradeCost = Math.floor($gameState.upgradeCost * 1.5);
    }
  }

  const interval = setInterval(() => {
    if ($gameState.autoClickers > 0) {
      $gameState.linesOfCode += $gameState.autoClickers;
    }
  }, 1000);

  onDestroy(() => {
    clearInterval(interval);
  });

  function resetGame() {
    if (confirm("Apakah kamu yakin ingin mereset semua progres?")) {
      gameState.set({
        playerName: 'Programmer Pemula',
        linesOfCode: 0,
        codePerClick: 1,
        autoClickers: 0,
        upgradeCost: 10
      });
    }
  }

  // --- LOGIKA BARU: REAKTIF VARIABEL (Reactive Declarations) ---
  // Tanda '$:' di Svelte bertindak seperti 'computed property'.
  // Variabel 'playerRank' ini akan otomatis berubah sendiri setiap kali '$gameState.linesOfCode' berubah.
  $: playerRank = $gameState.linesOfCode >= 500 ? 'Software Architect 🏛️' :
                  $gameState.linesOfCode >= 200 ? 'Senior Developer 💻' :
                  $gameState.linesOfCode >= 50  ? 'Junior Developer 🚀' : 
                                                  'Script Kiddie 🐣';
</script>

<!-- --- TAMPILAN (HTML) --- -->
<main>
  <div class="game-card">
    <!-- Bagian Profil Player -->
    <div class="profile-section">
      <!-- Magic Svelte: bind:value menghubungkan input teks langsung ke store -->
      <input 
        type="text" 
        bind:value={$gameState.playerName} 
        placeholder="Masukkan Nama Kamu"
        maxlength="20"
      />
      <span class="rank-badge">{playerRank}</span>
    </div>

    <h1>👨‍💻 Dashboard {$gameState.playerName}</h1>
    
    <div class="stats">
      <p class="counter">{$gameState.linesOfCode} <span>Baris Kode</span></p>
      <p>Produksi: {$gameState.autoClickers} baris/detik</p>
    </div>

    <button class="btn-main" on:click={clickDev}>
      ⌨️ Ketik Kode (+{$gameState.codePerClick})
    </button>

    <hr />

    <div class="shop">
      <h3>Toko Upgrade</h3>
      
      {#if $gameState.linesOfCode < $gameState.upgradeCost && $gameState.autoClickers === 0}
        <p class="hint">Kumpulkan {$gameState.upgradeCost} baris kode untuk membuka AI Assistant!</p>
      {/if}

      <button 
        class="btn-upgrade" 
        on:click={buyUpgrade} 
        disabled={$gameState.linesOfCode < $gameState.upgradeCost}
      >
        🤖 Beli AI Assistant (Harga: {$gameState.upgradeCost} Kode)
      </button>
      
      <p>Jumlah AI saat ini: <strong>{$gameState.autoClickers}</strong></p>
    </div>

    <button class="btn-reset" on:click={resetGame}>
      🔄 Reset Progres
    </button>
  </div>
</main>

<!-- --- GAYA (CSS) --- -->
<style>
  :global(body) {
    background-color: #1e1e2e;
    color: #cdd6f4;
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    margin: 0;
  }

  .game-card {
    background: #252538;
    padding: 2.5rem;
    border-radius: 16px;
    box-shadow: 0 8px 32px rgba(0, 0, 0, 0.4);
    text-align: center;
    max-width: 400px;
    width: 100%;
  }

  /* Style Baru untuk Profil */
  .profile-section {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 8px;
    margin-bottom: 1.5rem;
  }

  .profile-section input {
    background: #1e1e2e;
    border: 1px solid #45475a;
    color: #c4cde5;
    padding: 8px 12px;
    border-radius: 6px;
    text-align: center;
    font-size: 1rem;
    font-weight: bold;
    width: 80%;
  }

  .profile-section input:focus {
    outline: none;
    border-color: #89b4fa;
  }

  .rank-badge {
    background: #f5c2e7;
    color: #11111b;
    padding: 4px 10px;
    border-radius: 20px;
    font-size: 0.75rem;
    font-weight: bold;
  }

  h1 {
    color: #cba6f7;
    font-size: 1.5rem;
    margin-top: 0;
  }

  .counter {
    font-size: 2.5rem;
    font-weight: bold;
    color: #a6e3a1;
    margin: 10px 0;
  }

  .counter span {
    font-size: 1rem;
    color: #bac2de;
  }

  .btn-main {
    background-color: #89b4fa;
    color: #11111b;
    border: none;
    padding: 15px 30px;
    font-size: 1.2rem;
    font-weight: bold;
    border-radius: 8px;
    cursor: pointer;
    transition: transform 0.1s;
    width: 100%;
    margin-top: 15px;
  }

  .btn-main:active {
    transform: scale(0.98);
  }

  hr {
    border: 0;
    height: 1px;
    background: #45475a;
    margin: 25px 0;
  }

  .btn-upgrade {
    background-color: #f38ba8;
    color: #11111b;
    border: none;
    padding: 10px 20px;
    font-weight: bold;
    border-radius: 6px;
    cursor: pointer;
    width: 100%;
  }

  .btn-upgrade:disabled {
    background-color: #585b70;
    color: #7f849c;
    cursor: not-allowed;
  }

  .hint {
    font-size: 0.85rem;
    color: #f9e2af;
    font-style: italic;
  }

  .btn-reset {
    background: transparent;
    color: #f38ba8;
    border: 1px solid #f38ba8;
    padding: 5px 10px;
    font-size: 0.8rem;
    border-radius: 4px;
    cursor: pointer;
    margin-top: 20px;
    transition: all 0.2s;
  }

  .btn-reset:hover {
    background: #f38ba8;
    color: #11111b;
  }
</style>