import { render, screen } from "@testing-library/react"
import { ErrorBoundary } from "../../src/components/ErrorBoundary"

function ProblemChild() {
  throw new Error("Crash!")
}

describe("ErrorBoundary", () => {
  test("renders fallback UI on error", () => {
    render(
      <ErrorBoundary>
        <ProblemChild />
      </ErrorBoundary>
    )

    expect(screen.getByText("Something went wrong")).toBeInTheDocument()
    expect(screen.getByText("Crash!")).toBeInTheDocument()
  })

  test("renders children when no error", () => {
    render(
      <ErrorBoundary>
        <div>Safe Content</div>
      </ErrorBoundary>
    )

    expect(screen.getByText("Safe Content")).toBeInTheDocument()
  })
})