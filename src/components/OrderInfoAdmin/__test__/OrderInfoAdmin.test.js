import React from "react"
import { shallow } from "enzyme"

import { OrderInfoAdmin } from "../OrderInfoAdmin"

const setup = () => {
  const state = {
    show: false
  }

  const props = {
    order: {}
  }

  return {
    wrapper: shallow(<OrderInfoAdmin {...props} />),
    props,
    state
  }
}

describe("OrderInfoAdmin component", () => {
  const { wrapper } = setup()

  it("should render component without crashing", () => {
    expect(wrapper.instance()).toBeDefined()
  })

  it("should invoke handleShow method", () => {
    const handleShowSpy = jest.spyOn(wrapper.instance(), "handleShow")
    wrapper.instance().handleShow()
    expect(handleShowSpy).toHaveBeenCalled()
  })

  it("should invoke handleHide method", () => {
    const handleHideSpy = jest.spyOn(wrapper.instance(), "handleHide")
    wrapper.instance().handleHide()
    expect(handleHideSpy).toHaveBeenCalled()
  })
})
