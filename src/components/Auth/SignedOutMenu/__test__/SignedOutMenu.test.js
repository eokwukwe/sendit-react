import React from "react"
import { shallow } from "enzyme"
import SignedOutMenu from "../SignedOutMenu"

describe("<SignedOutMenu />", () => {
  it("should render the component without crashing", () => {
    shallow(<SignedOutMenu link={"sign up"} />)
  })

  it("should render a <div />", () => {
    const wrapper = shallow(<SignedOutMenu link={"sign up"} />)
    expect(wrapper.find("div").length).toEqual(1)
  })
})
