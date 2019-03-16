import React from "react"
import { shallow } from "enzyme"
import Input from "../../src/components/common/Input/Input"

const setup = (props) => {
  const defaultProps = {
    type: "text",
    placeholder: "FirstName",
    name: "name",
    value: "value",
    error: "First name is too short",
    onChange: () => {}
  }
  const wrapper = shallow(<Input {...defaultProps} {...props} />)
  return wrapper
}

describe("Input Component", () => {
  const wrapper = setup()
  it("should render 2 <div> elements", () => {
    expect(wrapper.find("div").length).toEqual(3)
  })

  it("should render 1 <input> element", () => {
    expect(wrapper.find("input").length).toEqual(1)
  })

  it("should allow us to set onChange props", () => {
    const onChange = jest.fn()
    const changedWrapper = setup({ onChange })
    const input = changedWrapper.find("input")
    input.simulate("change", { target: { value: "Test" } })
    expect(onChange).toHaveBeenCalledTimes(1)
  })
})
