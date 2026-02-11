export default function Button({ text, type, onClick }: any) {
  return (
    <>
      <button className="button-ppl" onClick={onClick}>
        {text}
      </button>
    </>
  );
}
