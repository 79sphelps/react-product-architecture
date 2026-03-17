import type { Command } from "../types/commandTypes"
// import { CommandItem } from "./CommandItem"

// export function CommandList({ commands }: { commands: Command[] }) {
//   return (
//     <div>
//       {commands.map(cmd => (
//         <CommandItem
//           key={cmd.id}
//           command={cmd}
//         />
//       ))}
//     </div>
//   )
// }

type Props = {
  commands: Command[];
  activeIndex: number;
}

export function CommandList({
  commands,
  activeIndex
}: Props) {

  return (
    <div>
      {commands.map((cmd, i) => (
        <div
          key={cmd.id}
          className={`p-2 ${
            i === activeIndex ? "bg-gray-200" : ""
          }`}
        >
          {cmd.label}
        </div>
      ))}
    </div>
  )
}