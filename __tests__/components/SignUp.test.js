import React from "react"
import { shallow } from "enzyme"
import { SignUp } from "../../src/pages/Auth/SignUp"

describe("<SignedOutLink />", () => {
  it("should render the component without crashing", () => {
    shallow(<SignUp />)
  })

  it("should prevent default event when form is submitted", () => {
    const wrapper = shallow(<SignUp />)
    let prevented = false
    wrapper.find("form").simulate("submit", {
      preventDefault: () => {
        prevented = true
      }
    })
    expect(prevented).toBe(true)
  })
})
