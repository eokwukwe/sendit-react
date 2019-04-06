import React from "react"
import { shallow } from "enzyme"
import { SignedInMenu } from "../SignedInMenu"

const props = {
  logoutUser: jest.fn(),
  auth: {
    isAuthenticated: true,
    user: {
      usertype: "admin"
    }
  }
}

const mockFn = jest.fn()

describe("<SignedInMenu />", () => {
  const wrapper = shallow(<SignedInMenu {...props} />)
  it("should render the component without crashing", () => {
    shallow(<SignedInMenu {...props} />)
  })

  it("should render a <div />", () => {
    expect(wrapper.find("nav")).toBeDefined()
  })

  it("should logout user", () => {
    wrapper.instance().handleLogout(mockFn)
  })
})
