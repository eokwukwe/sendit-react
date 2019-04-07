import React from "react"
import { shallow } from "enzyme"

import InfoTable from "../InfoTable"

describe("InfoTable component", () => {
  const props = {
    orders: [
      {
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
    ]
  }

  it("should render component without crashing", () => {
    shallow(<InfoTable {...props} />)
  })
})
