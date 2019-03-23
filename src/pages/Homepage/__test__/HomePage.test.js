import React from "react"
import { shallow } from "enzyme"
import { HomePage, mapStateToProps } from "../HomePage"

const mockFn = jest.fn()
const props = {
  auth: {
    isAuthenticated: false,
    user: {}
  },
  history: {
    push: jest.fn()
  }
}

const initialState = {
  auth: {
    isAuthenticated: false,
    user: {}
  }
}

describe("<Home page />", () => {
  it("should render the component without crashing", () => {
    const wrapper = shallow(<HomePage {...props} />)
    expect(wrapper.exists()).toBe(true)
    wrapper.instance().componentDidMount(mockFn)
    expect(mapStateToProps(initialState).auth.user).toEqual({})
    wrapper.setProps({
      auth: {
        isAuthenticated: true,
        user: {
          usertype: "user",
          userId: 22,
          firstname: "mannnn",
          lastname: "msindindsf"
        }
      }
    })
    wrapper.instance().componentDidMount(mockFn)
    wrapper.setProps({
      auth: {
        isAuthenticated: true,
        user: {
          usertype: "admin",
          userId: 22,
          firstname: "mannnn",
          lastname: "msindindsf"
        }
      }
    })
    wrapper.instance().componentDidMount(mockFn)
  })
})
