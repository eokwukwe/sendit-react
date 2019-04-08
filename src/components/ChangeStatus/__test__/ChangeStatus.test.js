import React from "react"
import { shallow } from "enzyme"
import { ChangeStatus } from "../ChangeStatus"

const setup = () => {
  const state = { status: "", disabled: false, loading: false }
  const props = {
    errors: {},
    order: {
      id: 3333
    },
    changeOrderStatus: jest.fn(),
    match: {
      params: {
        id: 33
      }
    }
  }

  return {
    wrapper: shallow(<ChangeStatus {...props} />),
    state,
    props
  }
}

const radioEvent = {
  target: { value: "pending" }
}

const submitEvent = {
  preventDefault: jest.fn()
}

describe("ChangeStatus component", () => {
  const { wrapper } = setup()

  it("should render component without crashing", () => {
    expect(wrapper.instance()).toBeDefined()
  })

  it("should invoke handleStatusSelect method", () => {
    const handleStatusSelectSpy = jest.spyOn(
      wrapper.instance(),
      "handleStatusSelect"
    )
    wrapper.instance().handleStatusSelect(radioEvent)
    expect(handleStatusSelectSpy).toHaveBeenCalled()
  })

  it("should invoke handleSubmit method", () => {
    const handleSubmitSpy = jest.spyOn(wrapper.instance(), "handleSubmit")
    wrapper.instance().handleSubmit(submitEvent)
    expect(handleSubmitSpy).toHaveBeenCalled()
  })

  it("should change submit button disabled to false", () => {
    wrapper.setState({ disabled: false })
    const button = wrapper.find("button")
    expect(button.disabled).toBeFalsy()
  })
})
