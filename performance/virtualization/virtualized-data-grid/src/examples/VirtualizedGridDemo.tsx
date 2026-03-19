/**
 * Responsibility:
 * Demonstrates virtualization behavior.
 */

import { useState } from "react"
import { VirtualizedGrid } from "../components/VirtualizedGrid"

function generateData(count: number) {
  return Array.from({ length: count }, (_, i) => ({
    id: i,
    name: `Row ${i}`
  }))
}

export function VirtualizedGridDemo() {

  const [count, setCount] = useState(1000)

  const data = generateData(count)

  return (

    <div className="p-4 space-y-4">

      <h1 className="text-xl">Virtualized Grid</h1>

      <div className="space-x-2">
        <button onClick={() => setCount(100)}>
          100 rows
        </button>
        <button onClick={() => setCount(1000)}>
          1000 rows
        </button>
        <button onClick={() => setCount(10000)}>
          10k rows
        </button>
      </div>

      <VirtualizedGrid data={data} />

    </div>
  )
}