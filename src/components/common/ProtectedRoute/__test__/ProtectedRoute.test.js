import React from "react"
import { shallow } from "enzyme"
// import { Route, Redirect } from "react-router-dom"

import ProtectedRoute from "../ProtectedRoute"

const props = {
  component: "Component",
  auth: {
    isAuthenticated: true
  },
  rest: {}
}

describe("ProtectedRoute component", () => {
  it("should render component without crashing", () => {
    shallow(
      <ProtectedRoute {...props}>
        {/* <Route {...props.rest} /> */}
      </ProtectedRoute>
    )
  })
})
