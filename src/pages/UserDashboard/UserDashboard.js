import React, { Component } from "react"
import { connect } from "react-redux"
import { PropTypes } from "prop-types"
import { Link } from "react-router-dom"
import "./UserDashboard.scss"

import Spinner from "../../components/common/Spinner/Spinner"
import SignedInMenu from "../../components/Auth/SignedInMenu/SignedInMenu"
import UserInfo from "../../components/UserInfo/UserInfo"
import { getUserOrders, getAllOrders } from "../../actions/ordersActions"
import Footer from "../../components/common/Footer/Footer"

/**
 * @description Renders the User Dashboard Page
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
   * @returns {JSX} - Template
   */
  render() {
    const { orders, auth } = this.props

    return (
      <React.Fragment>
        <SignedInMenu />
        <div className="container main main__user">
          {orders.userOrders.length === 0 || orders.loading ? (
            <Spinner />
          ) : (
            <UserInfo userOrders={orders.userOrders} auth={auth} />
          )}
          <Link to="/create-order" className="btn-create-order">
            <i className="fas fa-plus-circle" />
          </Link>
        </div>
        <Footer />
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
