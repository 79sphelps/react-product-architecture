import { useQuery } from "../hooks/useQuery";
import { QueryBoundary } from "../components/QueryBoundary";
import { DataViewer } from "../components/DataViewer";
import { RefetchButton } from "../components/RefetchButton";
import { InvalidateButton } from "../components/InvalidateButton";

const fetchUsers = async () => {
  await new Promise((r) => setTimeout(r, 500));
  return [{ name: "John" }, { name: "Jane" }];
};

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
