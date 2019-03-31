import React from "react"
import { Tabs, Tab } from "react-bootstrap"
import "./UserInfo.scss"

import DeliveredOrders from "../DeliveredOrders/DeliveredOrders"
import InTransitOrders from "../InTransitOrders/InTransitOrders"
import PendingOrders from "../PendingOrders/PendingOrders"
import CancelledOrders from "../CancelledOrders/CancelledOrders"

const UserInfo = ({ auth, userOrders }) => {
  const deliverdedOrders = userOrders.userOrders.filter(
    orders => orders.status === "delivered"
  )
  const pendingOrders = userOrders.userOrders.filter(
    orders => orders.status === "pending"
  )
  const intransitOrders = userOrders.userOrders.filter(
    orders => orders.status === "intransit"
  )
  const cancelleddOrders = userOrders.userOrders.filter(
    orders => orders.status === "cancelled"
  )
  return (
    <React.Fragment>
      <div className="user-info">
        <h6 className="user-name">
          Welcome <span id="user-name">{auth.user.firstname}</span>
        </h6>
        <h6 className="user-name">
          Total orders <span id="user-name">{userOrders.total}</span>
        </h6>
      </div>
      <Tabs
        // defaultActiveKey="delivered"
        transition={false}
        id="user-info-dashboard"
        className="user-info-tabs"
      >
        <Tab
          eventKey="delivered"
          title={`Delivered (${deliverdedOrders.length})`}
        >
          <DeliveredOrders orders={deliverdedOrders} />
        </Tab>
        <Tab eventKey="pending" title={`Pending (${pendingOrders.length})`}>
          <PendingOrders orders={pendingOrders} />
        </Tab>
        <Tab
          eventKey="intransit"
          title={`In-Transit (${intransitOrders.length})`}
        >
          <InTransitOrders orders={intransitOrders} />
        </Tab>
        <Tab
          eventKey="cancelled"
          title={`Cancelled (${cancelleddOrders.length})`}
        >
          <CancelledOrders orders={cancelleddOrders} />
        </Tab>
      </Tabs>
    </React.Fragment>
  )
}

export default UserInfo
