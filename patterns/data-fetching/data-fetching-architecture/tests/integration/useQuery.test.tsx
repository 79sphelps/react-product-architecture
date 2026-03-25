import { render, screen, fireEvent } from "@testing-library/react";
import { UserListExample } from "../../src/examples/UserListExample";

test("invalidates and refetches via UI", async () => {
  render(<UserListExample />);

  await screen.findByText("John");

  fireEvent.click(screen.getByText("Invalidate"));

  expect(await screen.findByText("John")).toBeInTheDocument();
});

test("renders data", async () => {
  render(<UserListExample />);

  expect(await screen.findByText("John")).toBeInTheDocument();
});

// test("dependent query waits", async () => {
//   render(<UserListExample />);

//   expect(screen.queryByText("Posts")).not.toBeInTheDocument();

//   expect(await screen.findByText("User")).toBeInTheDocument();
//   expect(await screen.findByText("Posts")).toBeInTheDocument();
// });
