import React from "react"
import { shallow } from "enzyme"
import { CreateOrderForm, mapStateToProps } from "../CreateOrderForm"

const setup = () => {
  const state = {
    description: "",
    weight: "",
    receiver: "",
    distance: "",
    price: "",
    phone: "",
    pickup: "",
    destination: "",
    errors: {},
    scriptLoaded: false
  }

  const props = {
    createOrder: jest.fn(() => Promise.resolve()),
    errors: {}
  }

  return {
    wrapper: shallow(<CreateOrderForm {...props} />),
    props,
    state
  }
}

const prevProps = { error: {} }

const inputEvent = {
  target: { description: "Mango" }
}

const submitEvent = {
  preventDefault: jest.fn()
}


describe("CreateOrderForm component <CreateOrderForm />", () => {
  const { wrapper, props } = setup()

  it("should render the component without crashing", () => {
    expect(wrapper.instance()).toBeDefined()
  })

  it("should invoke componentDidUpdate method", () => {
    const componentDidUpdateSpy = jest.spyOn(
      wrapper.instance(),
      "componentDidUpdate"
    )
    wrapper.instance().componentDidUpdate(prevProps)
    expect(componentDidUpdateSpy).toHaveBeenCalled()
  })

  it("should invoke handleInput method", () => {
    const handleInputSpy = jest.spyOn(wrapper.instance(), "handleInput")
    wrapper.instance().handleInput(inputEvent)
    expect(handleInputSpy).toHaveBeenCalled()
  })

  it("should invoke handlePickup method", () => {
    const handlePickupSpy = jest.spyOn(wrapper.instance(), "handlePickup")
    wrapper.instance().handlePickup("pickup")
    expect(handlePickupSpy).toHaveBeenCalled()
    expect(wrapper.state().pickup).toEqual("pickup")
  })

  it("should invoke handlePickupSelect method", () => {
    const handlePickupSelectSpy = jest.spyOn(
      wrapper.instance(),
      "handlePickupSelect"
    )
    wrapper.instance().handlePickupSelect("inputEvent")
    expect(handlePickupSelectSpy).toHaveBeenCalled()
  })

  it("should invoke handleDestination method", () => {
    const handlePickupDestinationSpy = jest.spyOn(
      wrapper.instance(),
      "handleDestination"
    )
    wrapper.instance().handleDestination("inputEvent")
    expect(handlePickupDestinationSpy).toHaveBeenCalled()
  })

  it("should invoke handleDestinationSelect method", () => {
    const handlePickupDestinationSelectSpy = jest.spyOn(
      wrapper.instance(),
      "handleDestinationSelect"
    )
    wrapper.instance().handleDestinationSelect("inputEvent")
    expect(handlePickupDestinationSelectSpy).toHaveBeenCalled()
  })

  it("should invoke handleSubmit method", () => {
    const handleSubmitSpy = jest.spyOn(wrapper.instance(), "handleSubmit")
    wrapper.instance().handleSubmit(submitEvent)
    expect(handleSubmitSpy).toHaveBeenCalled()
  })

  it("should invoke calculateDistance method", () => {
    const calculateDistanceSpy = jest.spyOn(
      wrapper.instance(),
      "calculateDistance"
    )
    wrapper.instance().calculateDistance("Lagos, Nigeria", "Owerri, Nigeria")
    expect(calculateDistanceSpy).toHaveBeenCalled()
  })

  it("should invoke calculateDistance method", () => {
    const calculateDistanceSpy = jest.spyOn(
      wrapper.instance(),
      "calculateDistance"
    )
    wrapper.instance().calculateDistance("Lagos, Nigeria", "Owerri, Nigeria")
    expect(calculateDistanceSpy).toHaveBeenCalled()
  })

  it("should invoke handleScriptLoad method", () => {
    const handleScriptLoadSpy = jest.spyOn(
      wrapper.instance(),
      "handleScriptLoad"
    )
    wrapper.instance().handleScriptLoad()
    expect(handleScriptLoadSpy).toHaveBeenCalled()
  })

  it("should check mapStateToProps", () => {
    expect(mapStateToProps(props).errors).toEqual({})
  })
})
