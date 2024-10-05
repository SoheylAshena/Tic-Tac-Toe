export default function Square({ value, onSquareClick }) {
  return (
    <button
      className="h-20 w-20 border-[1px] border-white md:h-40 md:w-40 md:text-7xl"
      onClick={onSquareClick}
    >
      {value}
    </button>
  );
}
