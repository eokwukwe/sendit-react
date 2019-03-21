import React from "react"
import { shallow } from "enzyme"
import HomePage from "../HomePage"

describe("<Home page />", () => {
  describe("render()", () => {
    it("should render the component without crashing", () => {
      shallow(<HomePage />)
    })

    it("should render a <div />", () => {
      const wrapper = shallow(<HomePage />)
      expect(wrapper.find("div").length).toEqual(2)
    })
  })
})
