import React from 'react'
import PropTypes from "prop-types"

const Error = ({msm}) => (
<p className="alert alert-danger error">{msm}</p>);

Error.propTypes = {
    msm: PropTypes.string.isRequired
}

export default Error;