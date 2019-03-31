import React from "react"
import { shallow } from "enzyme"
import { DestinationInput } from "../DestinationInput"

const mockFn = jest.fn()
const state = { address: "", scriptLoaded: false, show: false }
const props = {
  changeOrderDestination: jest.fn(),
  order: {
    id: 22,
    status: "cancelled"
  }
}
const event = {
  preventDefault: jest.fn()
}

describe("DestinationInput component", () => {
  const wrapper = shallow(<DestinationInput {...state} {...props} />)

  it("should render the component without crashing", () => {
    expect(wrapper.instance()).toBeDefined()
    expect(wrapper.instance()).toBeInstanceOf(DestinationInput)
    expect(wrapper.state()).toEqual(state)

    wrapper.instance().handleShow(mockFn)
    wrapper.instance().handleHide(mockFn)
    wrapper.instance().handleChange(mockFn)
    wrapper.instance().handleScriptLoad(mockFn)
    wrapper.instance().handleChange(mockFn)
    wrapper.instance().handleSelect(mockFn)
    wrapper.instance().handleSubmit(event)
  })
})
