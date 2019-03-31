import React from "react"
import { shallow } from "enzyme"
import OrderMap from "../OrderMap"

const props = {
  lat: 123.433,
  lng: 223.333
}

describe("OrderMap component", () => {
  it("should render component without crashing", () => {
    shallow(<OrderMap {...props} />)
  })
})
