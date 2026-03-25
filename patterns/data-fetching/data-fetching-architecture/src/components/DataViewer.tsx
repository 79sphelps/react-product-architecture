export function DataViewer({ data }: { data: any[] }) {
  return (
    <ul className="p-4 space-y-2">
      {data.map((item, i) => (
        <li key={i} className="border rounded-xl shadow-xl p-2">
          {item.name}
        </li>
      ))}
    </ul>
  );
}
