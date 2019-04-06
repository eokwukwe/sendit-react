import React, { Component, Fragment } from "react"
import { connect } from "react-redux"
import { PropTypes } from "prop-types"
import "./AdminDashboard.scss"

import Spinner from "../../components/common/Spinner/Spinner"
import SignedInMenu from "../../components/Auth/SignedInMenu/SignedInMenu"
import Footer from "../../components/common/Footer/Footer"
import { getAllOrders } from "../../actions/ordersActions"
import InfoTable from "./InfoTable"

/**
 * @description Renders the Admin Dashboard Page
 * @return {JSX} - returns the page JSX
 */
export class AdminDashboard extends Component {
  componentDidMount = () => {
    this.props.getAllOrders()
  };

  /**
   * @returns {JSX} - Admin dashboard
   */
  render() {
    const { orders } = this.props
    return (
      <Fragment>
        <SignedInMenu />
        <div className="container main main_admin">
          <div className="user-info">
            <h6 className="user-name">
              Welcome <span id="user-name">Admin</span>
            </h6>
            <h6 className="user-name">
              Total orders{" "}
              <span id="user-name">{orders.orders.totalOrders}</span>
            </h6>
          </div>
          {orders.orders.length === 0 ? (
            <Spinner />
          ) : (
            <InfoTable orders={orders.orders.orders} />
          )}
        </div>
        <Footer />
      </Fragment>
    )
  }
}

AdminDashboard.propTypes = {
  orders: PropTypes.object.isRequired
}

export const mapStateToProps = state => ({
  orders: state.orders
})

export default connect(
  mapStateToProps,
  { getAllOrders }
)(AdminDashboard)
