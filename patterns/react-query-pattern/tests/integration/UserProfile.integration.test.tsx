import { render, screen, waitFor } from "@testing-library/react"
import { QueryClient, QueryClientProvider } from "@tanstack/react-query"
import { UserProfile } from "../../src/components/UserProfile"

function renderWithClient(ui: React.ReactNode) {
  const queryClient = new QueryClient()

  return render(
    <QueryClientProvider client={queryClient}>
      {ui}
    </QueryClientProvider>
  )
}

test("renders user email", async () => {
  renderWithClient(<UserProfile />)

  const email = await screen.findByText(/john@test.com/i)

  expect(email).toBeInTheDocument()
})