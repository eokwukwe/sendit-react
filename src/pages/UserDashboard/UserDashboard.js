import React, { Component } from "react"
import { connect } from "react-redux"
import { PropTypes } from "prop-types"

import Spinner from "../../components/common/Spinner/Spinner"
import SignedInMenu from "../../components/Auth/SignedInMenu/SignedInMenu"
import UserInfo from "../../components/UserInfo/UserInfo"
import { getUserOrders, getAllOrders } from "../../actions/ordersActions"

/**
 * @description Renders the Homepage
 * @return {JSX} - returns the page JSX
 */
export class UserDashboard extends Component {
  /**
   * @description - Fetch user orders
   * @returns {void}
   */
  componentDidMount() {
    this.props.getUserOrders(this.props.auth.user.userId)
  }

  /**
   * @returns {JSX} - Sign up Template
   */
  render() {
    const { orders, auth } = this.props
    let fetchedOrders
    if (orders.userOrders.length === 0 || orders.loading) {
      fetchedOrders = <Spinner />
    } else {
      fetchedOrders = <UserInfo userOrders={orders.userOrders} auth={auth} />
    }

    return (
      <React.Fragment>
        <SignedInMenu />
        <div className="container main" style={{ paddingTop: "60px" }}>
          {fetchedOrders}
        </div>
      </React.Fragment>
    )
  }
}

UserDashboard.propTypes = {
  auth: PropTypes.object.isRequired,
  orders: PropTypes.object.isRequired
}

export const mapStateToProps = state => ({
  auth: state.auth,
  orders: state.orders
})

export default connect(
  mapStateToProps,
  { getUserOrders, getAllOrders }
)(UserDashboard)
