/**
 * Unit Test: InputField
 */

import { render, screen } from "@testing-library/react"
import { InputField } from "../../components/InputField";
import { FormProvider } from "react-hook-form"
import { useForm } from "react-hook-form"

function Wrapper() {
  const methods = useForm()

  return (
    <FormProvider {...methods}>
      <InputField
        name="email"
        label="Email"
      />
    </FormProvider>
  )
}

test("renders input field", () => {

  render(<Wrapper />)

  expect(
    screen.getByLabelText("Email")
  ).toBeInTheDocument()

})