import React from "react"
import { shallow } from "enzyme"
import PendingOrders from "../PendingOrders"

const props = {
  orders: [
    {
      id: 33,
      status: "cancelled" || "delivered"
    }
  ]
}

describe("PendingOrders component", () => {
  it("should render component without crashing", () => {
    shallow(<PendingOrders {...props} />)
  })
})
