import React from "react"
import { shallow } from "enzyme"
import { CancelOrder } from "../CancelOrder"

const state = {
  show: false
}

const props = {
  cancelOrder: jest.fn(),
  order: {
    id: 33,
    status: "cancelled" || "delivered"
  }
}

const mockFn = jest.fn()

describe("CancelOrder component", () => {
  const wrapper = shallow(<CancelOrder {...props} />)

  it("should render the component without crashing", () => {
    expect(wrapper.instance()).toBeDefined()
    expect(wrapper.instance()).toBeInstanceOf(CancelOrder)
    expect(wrapper.state()).toEqual(state)

    wrapper.instance().handleShow(mockFn)
    wrapper.instance().handleHide(mockFn)
    wrapper.instance().handleClick(mockFn)

    wrapper.setProps({
      cancelOrder: jest.fn(),
      order: {
        id: 33,
        status: "delivered"
      }
    })
  })
})
