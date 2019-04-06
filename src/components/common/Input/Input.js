import React from "react"
import classnames from "classnames"
import PropTypes from "prop-types"

const Input = ({
  name,
  placeholder,
  value,
  error,
  icon,
  type,
  onChange,
  step,
  min,
  autoFocus
}) => (
  <div className="input-group mb-3">
    <div className="input-group-prepend">
      <span className="input-group-text">
        <i className={icon} />
      </span>
    </div>
    <input
      type={type}
      className={classnames("form-control form-control-sm", {
        "is-invalid": error
      })}
      placeholder={placeholder}
      name={name}
      value={value}
      onChange={onChange}
      required
      step={step}
      min={min}
      autoFocus={autoFocus}
    />
    {error && <div className="invalid-feedback">{error}</div>}
  </div>
)

Input.propTypes = {
  name: PropTypes.string.isRequired,
  placeholder: PropTypes.string,
  value: PropTypes.string.isRequired,
  icon: PropTypes.string,
  type: PropTypes.string.isRequired,
  error: PropTypes.string,
  onChange: PropTypes.func.isRequired,
  step: PropTypes.string,
  min: PropTypes.string,
  autoFocus: PropTypes.bool
}

Input.defaultProps = {
  type: "text",
  error: "",
  autoFocus: false
}

export default Input
