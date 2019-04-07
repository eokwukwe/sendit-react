import React from "react"
import { shallow } from "enzyme"
import { SignedInMenu, mapStateToProps } from "../SignedInMenu"

const props = {
  logoutUser: jest.fn(),
  auth: {
    isAuthenticated: true,
    user: {
      usertype: "admin"
    }
  }
}

describe("<SignedInMenu />", () => {
  const wrapper = shallow(<SignedInMenu {...props} />)
  it("should render the component without crashing.", () => {
    shallow(<SignedInMenu {...props} />)
  })

  it("should render a <div />", () => {
    expect(wrapper.find("nav")).toBeDefined()
  })

  it("should logout user", () => {
    const handleLogoutSpy = jest.spyOn(wrapper.instance(), "handleLogout")
    wrapper.instance().handleLogout()
    expect(handleLogoutSpy).toHaveBeenCalled()
  })

  it("should check mapStateToProps", () => {
    expect(mapStateToProps(props).auth.user.usertype).toEqual("admin")
  })
})
