export function ErrorState({ message }: { message: string }) {
  return (
    <div role="alert" aria-live="assertive" className="p-4 bg-red-100">
      {message}
    </div>
  );
}
