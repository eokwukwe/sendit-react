import React from "react"
import { shallow } from "enzyme"
import SignedOutMenu from "../../src/components/Auth/SignedOutMenu/SignedOutMenu"

describe("<SignedOutMenu />", () => {
  it("should render the component without crashing", () => {
    shallow(<SignedOutMenu />)
  })

  it("should render a <div />", () => {
    const wrapper = shallow(<SignedOutMenu />)
    expect(wrapper.find("div").length).toEqual(1)
  })
})
