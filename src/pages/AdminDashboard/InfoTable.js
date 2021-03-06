import React from "react"
import { Link } from "react-router-dom"
import OrderInfoAdmin from "../../components/OrderInfoAdmin/OrderInfoAdmin"
import "./AdminDashboard.scss"

const InfoTable = ({ orders }) => (
  <table className="table table-striped">
    <thead className="thead-admin">
      <tr>
        <th scope="col">ID</th>
        <th scope="col">Decription</th>
        <th scope="col">UserId</th>
        <th scope="col">Receiver</th>
        <th scope="col">Actions</th>
      </tr>
    </thead>
    <tbody>
      {orders.map(order => (
        <tr key={order.id}>
          <th scope="row">{order.id}</th>
          <td>
            {order.description}{" "}
            <span className="badge badge-info">{order.status}</span>
          </td>
          <td>{order.userid}</td>
          <td>{order.receiver_name}</td>
          <td>
            <span className="admin-icons">
              <OrderInfoAdmin order={order} />
            </span>
            {!(order.status === "delivered" || order.status === "cancelled") ? (
              <Link to={`/update-status/${order.id}`}>
                <span className="admin-icons">
                  <button className="btn btn-sm btn-success">
                    <i className="fas fa-edit" />
                  </button>
                </span>
              </Link>
            ) : (
              <span className="admin-icons">
                <button disabled className="btn btn-sm btn-success">
                  <i className="fas fa-edit" />
                </button>
              </span>
            )}
            {!(order.status === "delivered" || order.status === "cancelled") ? (
              <Link to={`/update-location/${order.id}`}>
                <span className="admin-icons">
                  <button className="btn btn-sm btn-secondary">
                    <i className="fas fa-map-marker-alt" />{" "}
                  </button>
                </span>
              </Link>
            ) : (
              <span className="admin-icons">
                <button disabled className="btn btn-sm btn-secondary">
                  <i className="fas fa-map-marker-alt" />{" "}
                </button>
              </span>
            )}
          </td>
        </tr>
      ))}
    </tbody>
  </table>
)

export default InfoTable
