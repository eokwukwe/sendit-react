import React from "react"
import { shallow } from "enzyme"
import SignedOutLink from "../../src/components/Auth/SignedOutLink/SignedOutLink"

describe("<SignedOutLink />", () => {
  it("should render the component without crashing", () => {
    shallow(<SignedOutLink />)
  })

  it("should render a <div />", () => {
    const wrapper = shallow(<SignedOutLink />)
    expect(wrapper.find("div").length).toEqual(1)
  })
})
