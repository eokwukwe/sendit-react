import React from "react"
import OrderInfoCard from "../common/OrderInfoCard/OrderInfoCard"

export default ({ orders }) => orders.map(order => <OrderInfoCard key={order.id} order={order} />)
