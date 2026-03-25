export function RefetchButton({ onClick }: { onClick: () => void }) {
  return (
    <button
      onClick={onClick}
      className="px-3 py-1 bg-blue-500 text-white rounded hover:bg-blue-700 active:bg-blue-700 active:scale-[95%]"
    >
      Refetch
    </button>
  );
}
