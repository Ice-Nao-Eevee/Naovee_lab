function CardGame(props) {
  return (
    <div style={{
      border: '1px solid #444',
      borderRadius: '8px',
      padding: '15px',
      margin: '10px auto',
      maxWidth: '300px',
      backgroundColor: '#222',
      color: '#fff',
      textAlign: 'left'
    }}>
      <h3>🎮 {props.judul}</h3>
      <p>Genre: {props.genre}</p>
    </div>
  );
}

export default CardGame;