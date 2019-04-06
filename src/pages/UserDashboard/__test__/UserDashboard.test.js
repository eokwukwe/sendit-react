import React from "react"
import { shallow } from "enzyme"
import { UserDashboard, mapStateToProps } from "../UserDashboard"

const props = {
  auth: {
    isAuthenticated: false,
    user: {
      userId: 22
    }
  },
  orders: {
    orders: [],
    userOrders: [],
    order: {},
    loading: false
  },
  getUserOrders: jest.fn()
}

describe("<UserDashboard component />", () => {
  const wrapper = shallow(<UserDashboard {...props} />)
  it("should render the component without crashing", () => {
    expect(wrapper.exists()).toBe(true)
  })

  it("should invoke componentDidMount method", () => {
    const componentDidUpdateSpy = jest.spyOn(
      wrapper.instance(),
      "componentDidMount"
    )
    wrapper.instance().componentDidMount()
    expect(componentDidUpdateSpy).toHaveBeenCalled()
  })

  it("should check mapStateToProps", () => {
    expect(mapStateToProps(props).orders.orders).toHaveLength(0)
  })
})
