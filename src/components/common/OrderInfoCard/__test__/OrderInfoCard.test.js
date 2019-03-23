import React from "react"
import { shallow } from "enzyme"
import OrderInfoCard from "../OrderInfoCard"

const props = {
  order: {
    description: "Andela developer",
    id: 33
  }
}

describe("OrderInfoCard component", () => {
  it("should render component without crashing", () => {
    shallow(<OrderInfoCard {...props} />)
  })
})
