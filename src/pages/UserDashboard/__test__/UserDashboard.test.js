import React from "react"
import { shallow } from "enzyme"
import { UserDashboard, mapStateToProps } from "../UserDashboard"
import UserInfo from "../../../components/UserInfo/UserInfo"

const mockFn = jest.fn()
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
    loading: true
  },
  getUserOrders: jest.fn()
}

const initialState = {
  auth: {
    isAuthenticated: false,
    user: {}
  }
}

describe("<UserDashboard component />", () => {
  it("should render the component without crashing", () => {
    const wrapper = shallow(<UserDashboard {...props} />)
    expect(wrapper.exists()).toBe(true)
    wrapper.instance().componentDidMount(mockFn)
    expect(mapStateToProps(initialState).auth.user).toEqual({})
    wrapper.setProps({
      orders: {
        orders: [],
        userOrders: [],
        order: {},
        loading: false
      }
    })

    const fetchedOrders = <UserInfo {...props.userOrders} {...props.auth} />
    expect(wrapper.find(fetchedOrders)).toBeDefined()
  })
})
