import { useEffect, useState } from "react"

export function URLStatePanel() {
  const [url, setUrl] = useState(window.location.search)

  useEffect(() => {
    const interval = setInterval(() => {
      setUrl(window.location.search)
    }, 300)

    return () => clearInterval(interval)
  }, [])

  return (
    <div className="p-4 border rounded bg-white shadow">
      <h2 className="text-sm font-semibold mb-2">
        URL State
      </h2>

      <pre className="text-xs bg-gray-100 p-2 rounded">
        {url || "No query params"}
      </pre>
    </div>
  )
}