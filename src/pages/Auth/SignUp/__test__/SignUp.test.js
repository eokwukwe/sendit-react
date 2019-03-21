import React from "react"
import { shallow } from "enzyme"
import { SignUp } from "../SignUp"

const state = {
  userData: {
    firstName: "",
    lastName: "",
    userEmail: "",
    password: ""
  },
  errors: {}
}


const props = {
  registerUser: jest.fn(),
  auth: {},
  errors: {}
}

const prevProps = { error: {} }

describe("Sign up Component <SignUp />", () => {
  const wrapper = shallow(<SignUp {...props} />)

  it("should render the component without crashing", () => {
    const instance = wrapper.instance()
    expect(instance).toBeDefined()
    expect(instance).toBeInstanceOf(SignUp)
    expect(wrapper.state()).toEqual(state)
    expect(wrapper.find("Input").length).toEqual(4)
    wrapper.instance().componentDidUpdate(prevProps)
  })

  it("should prevent default event when form is submitted", () => {
    let prevented = false
    wrapper.find("form").simulate("submit", {
      preventDefault: () => {
        prevented = true
      }
    })
    expect(prevented).toBe(true)
  })

  it("should change state if first name field is changed", () => {
    const input = wrapper.find("Input")
    input
      .at(0)
      .simulate("change", {
        target: { name: "firstName", value: "okwukwe" }
      })
    expect(wrapper.state().userData.firstName).toEqual("okwukwe")
  })
})