import React from "react"
import { shallow } from "enzyme"
import DeliveredOrders from "../DeliveredOrders"

const props = {
  orders: [
    {
      id: 33,
      status: "cancelled" || "delivered"
    }
  ]
}

describe("DeliveredOrders component", () => {
  it("should render component without crashing", () => {
    shallow(<DeliveredOrders {...props} />)
  })
})
