import React from "react"
import { shallow } from "enzyme"
import { Login } from "../Login"

const props = {
  loginUser: jest.fn(),
  auth: {},
  errors: {}
}
const state = {
  loginData: {
    userEmail: "",
    password: ""
  },
  errors: {}
}

const prevProps = { error: {} }

describe("<SignedOutLink />", () => {
  const wrapper = shallow(<Login {...props} />)
  it("should render the component without crashing", () => {
    shallow(<Login {...props} />)
    expect(wrapper.find("Input").length).toEqual(2)
    expect(wrapper.instance()).toBeInstanceOf(Login)
    expect(wrapper.state()).toEqual(state)
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
    input.at(0).simulate("change", {
      target: { name: "userEmail", value: "okwukwe@gmail.com" }
    })
    expect(wrapper.state().loginData.userEmail).toEqual("okwukwe@gmail.com")
  })
})