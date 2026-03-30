type Props = {
  error: Error
}

export function ErrorFallback({ error }: Props) {
  return (
    <div role="alert" className="p-4 bg-red-100 text-red-800 rounded">
      <p className="font-bold">Something went wrong</p>
      <p>{error.message}</p>
    </div>
  )
}