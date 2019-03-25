import React from "react"
import { shallow } from "enzyme"
import Footer from "../Footer"

describe("Render <Footer /> component", () => {
  it("should render the component without crashing", () => {
    shallow(<Footer />)
  })

  it("should render a <footer />", () => {
    const wrapper = shallow(<Footer />)
    expect(wrapper.find("footer").length).toEqual(1)
  })
})
