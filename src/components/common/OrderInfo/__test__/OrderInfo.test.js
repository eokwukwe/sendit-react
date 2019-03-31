import React from "react"
import { shallow } from "enzyme"
import OrderInfo from "../OrderInfo"

const props = {
  order: {
    receiver_name: "Andela developer",
    receiver_phone: "12345669",
    pickup: "12 lawal street",
    location: "12 lawal street",
    destination: "12 lawal street",
    price: 222,
    weight: 2.3,
    distance: 212,
    created_on: "Mar 30 2019 23:43:02 GMT+0100",
    status: "pending"
  }
}

describe("OrderInfo component", () => {
  it("should render component without crashing", () => {
    shallow(<OrderInfo {...props} />)
  })
})
