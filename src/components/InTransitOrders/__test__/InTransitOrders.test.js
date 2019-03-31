import React from "react"
import { shallow } from "enzyme"
import InTransitOrders from "../InTransitOrders"

const props = {
  orders: [
    {
      id: 33,
      status: "cancelled" || "delivered"
    }
  ]
}

describe("InTransitOrders component", () => {
  it("should render component without crashing", () => {
    shallow(<InTransitOrders {...props} />)
  })
})
