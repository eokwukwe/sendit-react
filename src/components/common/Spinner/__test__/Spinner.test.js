import React from "react"
import { shallow } from "enzyme"
import Spinner from "../Spinner"

describe("Spinner component", () => {
  it("should render component without crashing", () => {
    shallow(<Spinner />)
  })
})
