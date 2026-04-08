import { useEffect, useState } from "react"
import { store } from "../state"

type Log = {
  id: number
  message: string
}

let id = 0

export function EventLog() {
  const [logs, setLogs] = useState<Log[]>([])

  useEffect(() => {
    return store.subscribe((state) => {
      id++

      setLogs((prev) => [
        {
          id,
          message: `[STORE] Updated → ${JSON.stringify(state)}`,
        },
        ...prev.slice(0, 9),
      ])
    })
  }, [])

  return (
    <div className="p-4 border rounded bg-white shadow">
      <h2 className="text-sm font-semibold mb-2">
        Event Log
      </h2>

      <div className="text-xs space-y-1 max-h-40 overflow-auto">
        {logs.map((log) => (
          <div key={log.id}>{log.message}</div>
        ))}
      </div>
    </div>
  )
}