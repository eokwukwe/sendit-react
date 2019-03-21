import React from "react"
import { shallow } from "enzyme"
import SignedInMenu from "../SignedInMenu"

describe("<SignedInMenu />", () => {
  it("should render the component without crashing", () => {
    shallow(<SignedInMenu link={"login"} />)
  })

  it("should render a <div />", () => {
    const wrapper = shallow(<SignedInMenu link={"login"} />)
    expect(wrapper.find("div").length).toEqual(1)
  })
})
