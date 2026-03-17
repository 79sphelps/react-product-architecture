import { CommandPaletteProvider } from "../context/CommandPaletteContext"
import { CommandPalette } from "../components/CommandPalette"
import { exampleCommands } from "../data/exampleCommands"
import { useKeyboardShortcut } from "../hooks/useKeyboardShortcut"
import { useCommandPalette } from "../hooks/useCommandPalette"

function Inner() {
  const { setOpen, open } = useCommandPalette()

  // Press "k"
  useKeyboardShortcut("k", () => setOpen(true))

  // Press Cmd/Ctrl + K
  useKeyboardShortcut("k", () => setOpen(true), {
    requireMeta: true
  })

  return (
    <>
      {/* Debug button so we know it works */}
      <button
        className="p-2 border m-4"
        onClick={() => setOpen(true)}
      >
        Open Command Palette
      </button>

      <CommandPalette commands={exampleCommands} />
    </>
  )
}

export function CommandPaletteDemo() {
  return (
    <CommandPaletteProvider>
      <Inner />
    </CommandPaletteProvider>
  )
}