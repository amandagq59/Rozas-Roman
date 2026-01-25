export default function Button({ text, type, onClick }: any) {
  return (
    <button
      className="card-btn"
      style={type === 'primary' ? { fontSize: '1rem' } : { fontSize: '2rem' }}
      onClick={onClick}
    >
      {text}
    </button>
  );
}
