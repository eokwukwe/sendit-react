import React from "react"
import { shallow } from "enzyme"
import UserInfo from "../UserInfo"

const props = {
  auth: {
    user: {
      firstname: "andela"
    }
  },
  userOrders: {
    total: 2,
    userOrders: [
      {
        status: "delivered"
      }
    ]
  }
}

describe("UserInfo component", () => {
  it("should render component without crashing", () => {
    shallow(<UserInfo {...props} />)
  })
})
