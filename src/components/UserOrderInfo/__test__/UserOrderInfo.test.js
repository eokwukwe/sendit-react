import React from "react"
import { shallow } from "enzyme"
import UserOrderInfo from "../UserOrderInfo"

const props = {
  order: {}
}

describe("UserOrderInfo component", () => {
  it("should render component without crashing", () => {
    shallow(<UserOrderInfo {...props} />)
  })
})
