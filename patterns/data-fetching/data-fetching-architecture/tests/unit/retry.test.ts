import { retry } from "../../src/utils/retry";
import { queryClient } from "../../src/core/QueryClient";

test("retries until success", async () => {
  let count = 0;

  const fn = async () => {
    count++;
    if (count < 2) throw new Error("fail");
    return "ok";
  };

  const result = await retry(fn);

  expect(result).toBe("ok");
});

test("invalidateQueries marks data stale", async () => {
  const fn = vi.fn(async () => "data");

  await queryClient.fetchQuery("test", fn);
  queryClient.invalidateQueries("test");

  await queryClient.fetchQuery("test", fn);

  expect(fn).toHaveBeenCalledTimes(2);
});

// test("does not refetch if data is fresh", async () => {
//   const fn = vi.fn(async () => "data")

//   await queryClient.fetchQuery("test", fn, { staleTime: 5000 })
//   await queryClient.fetchQuery("test", fn, { staleTime: 5000 })

//   expect(fn).toHaveBeenCalledTimes(1)
// })
