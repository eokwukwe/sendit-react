import React from "react"
import { shallow } from "enzyme"
import { Login } from "../../src/pages/Auth/Login/Login"

describe("<SignedOutLink />", () => {
  it("should render the component without crashing", () => {
    shallow(<Login />)
  })

  it("should prevent default event when form is submitted", () => {
    const wrapper = shallow(<Login />)
    let prevented = false
    wrapper.find("form").simulate("submit", {
      preventDefault: () => {
        prevented = true
      }
    })
    expect(prevented).toBe(true)
  })
})
