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
  state = { show: false, loading: true };

  componentDidMount = () => {
    this.setState({ loading: false })
    this.props.getAllOrders()
  };

  /**
   * @returns {JSX} - Admin dashboard
   */
  render() {
    const { orders } = this.props
    let fetchedOrders
    if (orders.orders.length === 0 || this.state.loading) {
      fetchedOrders = <Spinner />
    } else {
      fetchedOrders = (
        <InfoTable
          orders={orders.orders.orders}
        />
      )
    }

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
          {fetchedOrders}
        </div>
        <Footer />
      </Fragment>
    )
  }
}

AdminDashboard.propTypes = {
  auth: PropTypes.object.isRequired,
  orders: PropTypes.object.isRequired
}

export const mapStateToProps = state => ({
  auth: state.auth,
  orders: state.orders
})

export default connect(
  mapStateToProps,
  { getAllOrders }
)(AdminDashboard)
