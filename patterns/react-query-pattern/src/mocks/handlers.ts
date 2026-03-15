import { http, HttpResponse } from "msw"

let user = {
  id: "1",
  name: "John Doe",
  email: "john@test.com"
}

export const handlers = [

  http.get("/api/user", () => {
    return HttpResponse.json(user)
  }),

  http.patch("/api/user", async ({ request }) => {

    const data = await request.json()

    user = { ...user, ...data }

    return HttpResponse.json(user)
  })

]