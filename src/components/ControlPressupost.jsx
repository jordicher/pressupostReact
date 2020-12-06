import React, { Fragment } from 'react'
import PropTypes from "prop-types"

import {revisarPressupuest} from "../helpers"

const ControlPressupost = ({pressupost, restant}) => {

    return (
        <Fragment>
            <div className="alert alert-primary">
                Pressupost: {pressupost} €

            </div>

            <div className={revisarPressupuest(pressupost, restant)}>
                Restant: {restant} €

            </div>
        </Fragment>
    )

}

ControlPressupost.propTypes = {
    pressupost: PropTypes.number.isRequired,
    restant: PropTypes.number.isRequired
}

export default ControlPressupost