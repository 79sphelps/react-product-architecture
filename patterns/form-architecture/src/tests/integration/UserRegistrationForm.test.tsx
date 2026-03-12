/**
 * Integration Test
 *
 * Tests the entire form flow.
 */

import { render, screen, fireEvent } from "@testing-library/react"
import { UserRegistrationForm } from "../../examples/UserRegistrationForm";

test("shows validation error on invalid email", async () => {

  render(<UserRegistrationForm />)

  fireEvent.change(
    screen.getByLabelText("Email"),
    { target: { value: "invalid-email" } }
  )

  fireEvent.submit(
    screen.getByRole("button", { name: /submit/i })
  )

  expect(
    await screen.findByText(/invalid email/i)
  ).toBeInTheDocument()

})