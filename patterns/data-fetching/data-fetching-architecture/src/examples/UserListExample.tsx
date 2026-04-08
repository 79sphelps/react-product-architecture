import { useQuery } from "../hooks/useQuery";
import { QueryBoundary } from "../components/QueryBoundary";
import { DataViewer } from "../components/DataViewer";
import { RefetchButton } from "../components/RefetchButton";
import { InvalidateButton } from "../components/InvalidateButton";

// const fetchUsers = async () => {
//   await new Promise((r) => setTimeout(r, 500));
//   return [{ name: "John" }, { name: "Jane" }];
// };

type CalendarEvent = {
  _id: string;
  title: string;
  description: string;
  start: string;
  dueDate: string;
  createdAt: string;
  updatedAt: string;
  status: boolean;
}

const fetchUsers = async () => {
  const res = await fetch(
    "<REPLACE WITH ENDPOINT URL>"
  )

  if (!res.ok) {
    throw new Error("Failed to fetch calendar events")
  }

  // const data = await res.json()
  const data: CalendarEvent[] = await res.json()

  // Normalize to existing UI shape (minimal change strategy)
  return data.map((event: any) => ({
    name: event.title ?? "Untitled Event",
  }))
}

export function UserListExample() {
  const query = useQuery("users", fetchUsers);

  return (
    <div className="p-6 space-y-4">
      <div className="flex gap-2">
        <RefetchButton onClick={query.refetch} />
        <InvalidateButton queryKey="users" />
      </div>

      <QueryBoundary state={query}>
        <DataViewer data={query.data ?? []} />
      </QueryBoundary>
    </div>
  );
}
