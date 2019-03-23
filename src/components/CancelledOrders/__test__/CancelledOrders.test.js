import React from "react"
import { shallow } from "enzyme"
import CancelledOrders from "../CancelledOrders"

const props = {
  orders: [
    {
      id: 33,
      status: "cancelled" || "delivered"
    }
  ]
}

describe("Cancelled Orders component", () => {
  it("should render component without crashing", () => {
    shallow(<CancelledOrders {...props} />)
  })
})
