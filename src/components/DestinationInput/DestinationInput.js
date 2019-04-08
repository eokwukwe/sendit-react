/* eslint-disable require-jsdoc */
/* eslint-disable max-len */
/* eslint-disable react/jsx-key */
import React, { Component, Fragment } from "react"
import PlacesAutocomplete from "react-places-autocomplete"
import Script from "react-load-script"
import { connect } from "react-redux"
import { Button, Modal } from "react-bootstrap"
import { changeOrderDestination } from "../../actions/ordersActions"
import "./DestinationInput.scss"

export class DestinationInput extends Component {
  state = { address: "", scriptLoaded: false, show: false };

  handleScriptLoad = () => this.setState({ scriptLoaded: true });

  handleChange = address => this.setState({ address });

  handleSelect = (address) => {
    this.setState({ address })
  };

  handleShow = () => {
    this.setState({ show: true })
  };

  handleHide = () => {
    this.setState({ show: false })
  };

  handleSubmit = (e) => {
    const { address } = this.state
    e.preventDefault()
    this.props.changeOrderDestination(this.props.order.id, {
      destination: address
    })
    this.setState({ show: false, address: "" })
  };

  /**
   * @returns {JSX} - Input Template
   */
  render() {
    const { order } = this.props
    const disabled = !!(
      order.status === "cancelled" || order.status === "delivered"
    )
    const SuggestionsList = ({
      getInputProps,
      getSuggestionItemProps,
      suggestions,
      loading
    }) => (
      <div>
        <input
          required
          autoFocus
          {...getInputProps({
            placeholder: "Search Places ...",
            className: "form-control"
          })}
        />
        <div className="d-block">
          {loading && <div>Loading...</div>}
          {suggestions.map(suggestion => (
            <div className="my-1" {...getSuggestionItemProps(suggestion)}>
              <span>{suggestion.description}</span>
            </div>
          ))}
        </div>
      </div>
    )

    return (
      <Fragment>
        <Button
          disabled={disabled}
          size="sm"
          variant="success"
          onClick={this.handleShow}
        >
          Change Destination
        </Button>
        <Modal
          show={this.state.show}
          onHide={this.handleHide}
          aria-labelledby="change-destination"
          centered
        >
          <Script
            url="https://maps.googleapis.com/maps/api/js?key=AIzaSyCUzHg3TmmcuHVRnYyAx5reBG-fVIn4wYc&libraries=places"
            onLoad={this.handleScriptLoad}
          />
          <Modal.Header>
            <Modal.Title>Change Destination</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <form onSubmit={this.handleSubmit}>
              {this.state.scriptLoaded && (
                <div className="form-group">
                  <PlacesAutocomplete
                    value={this.state.address}
                    onChange={this.handleChange}
                    onSelect={this.handleSelect}
                  >
                    {SuggestionsList}
                  </PlacesAutocomplete>
                </div>
              )}
              <button type="submit" className="btn btn-block btn-destination">
                Submit
              </button>
            </form>
          </Modal.Body>
        </Modal>
      </Fragment>
    )
  }
}

export default connect(
  null,
  { changeOrderDestination }
)(DestinationInput)
