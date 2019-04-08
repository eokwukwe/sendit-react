import React from "react"
import { shallow } from "enzyme"

import { ChangeLocation, mapStateToProps } from "../ChangeLocation"

const setup = () => {
  const state = { address: "", scriptLoaded: false, loading: false }
  const props = {
    errors: {},
    order: {
      id: 3333
    },
    changeOrderLocation: jest.fn(),
    match: {
      params: {
        id: 33
      }
    }
  }

  return {
    wrapper: shallow(<ChangeLocation {...props} />),
    state,
    props
  }
}

const submitEvent = {
  preventDefault: jest.fn()
}

describe("ChangeLocation component", () => {
  const { wrapper, props } = setup()

  it("should render component without crashing", () => {
    expect(wrapper.instance()).toBeDefined()
  })

  it("should invoke handleScriptLoad method", () => {
    const handleScriptLoadSpy = jest.spyOn(
      wrapper.instance(),
      "handleScriptLoad"
    )
    wrapper.instance().handleScriptLoad()
    expect(handleScriptLoadSpy).toHaveBeenCalled()
  })

  it("should invoke handleChange method", () => {
    const handleChangeSpy = jest.spyOn(wrapper.instance(), "handleChange")
    wrapper.instance().handleChange("address")
    expect(handleChangeSpy).toHaveBeenCalled()
  })

  it("should invoke handleSelect method", () => {
    const handleSelectSpy = jest.spyOn(wrapper.instance(), "handleSelect")
    wrapper.instance().handleSelect("address")
    expect(handleSelectSpy).toHaveBeenCalled()
  })

  it("should invoke handleSubmit method", () => {
    const handleSubmitSpy = jest.spyOn(wrapper.instance(), "handleSubmit")
    wrapper.instance().handleSubmit(submitEvent)
    expect(handleSubmitSpy).toHaveBeenCalled()
  })

  it("should check mapStateToProps", () => {
    expect(mapStateToProps(props).errors).toEqual({})
  })
})
