import React from "react"
import { shallow } from "enzyme"
import SignedInMenu from "../../src/components/Auth/SignedInMenu/SignedInMenu"

describe("<SignedInMenu />", () => {
  it("should render the component without crashing", () => {
    shallow(<SignedInMenu />)
  })

  it("should render a <div />", () => {
    const wrapper = shallow(<SignedInMenu />)
    expect(wrapper.find("div").length).toEqual(1)
  })
})
