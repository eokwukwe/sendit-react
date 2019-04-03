import React from "react"
import { shallow } from "enzyme"
// import { Route, Redirect } from "react-router-dom"

import ProtectedRoute, { mapStateToProps } from "../ProtectedRoute"


const mockComponent = () => <div>This is a man</div>
const props = {
  component: mockComponent,
  auth: {
    isAuthenticated: true
  },
  rest: {}
}

describe("ProtectedRoute component", () => {
  it("should render component without crashing", () => {
    shallow(<ProtectedRoute {...props} />)
  })

  it("should check mapStateToProps", () => {
    expect(mapStateToProps(props).auth.isAuthenticated).toEqual(true)
  })
})
