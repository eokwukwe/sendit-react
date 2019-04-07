import React from "react"
import { shallow } from "enzyme"

import { AdminDashboard, mapStateToProps } from "../AdminDashboard"

const setup = () => {
  const props = {
    orders: {
      orders: [
        {
          receiver_name: "Andela developer",
          receiver_phone: "12345669",
          pickup: "12 lawal street",
          location: "12 lawal street",
          destination: "12 lawal street",
          price: 222,
          weight: 2.3,
          distance: 212,
          created_on: "Mar 30 2019 23:43:02 GMT+0100",
          status: "pending"
        }
      ],
      totalOrders: 1
    },
    getAllOrders: jest.fn()
  }

  const state = {
    loading: true
  }

  return {
    wrapper: shallow(<AdminDashboard {...props} />),
    state,
    props
  }
}

describe("AdminDashboard component", () => {
  const { wrapper, props } = setup()

  it("should render component without crashing", () => {
    expect(wrapper.instance()).toBeDefined()
  })

  it("should check mapStateToProps", () => {
    expect(mapStateToProps(props).orders.orders.length).toEqual(1)
  })

  it("should display <Spinner /> with orders are not loaded", () => {
    wrapper.setProps({
      orders: {
        orders: []
      },
      totalOrders: 0
    })
    expect(wrapper.find("Spinner")).toBeDefined()
  })
})
