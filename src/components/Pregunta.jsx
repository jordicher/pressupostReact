import React, { Fragment, useState } from 'react'

import Error from "./Error"
import PropTypes from "prop-types"

const Pregunta = ({guardarPressupost, guardarRestant, guardarMostrarPregunta}) => {

    //definir state
    const [quantitat, guardarQuant] = useState(0); //definim quantitat a 0
    const [error, guardarError] = useState(false);

    const definirPressupost = e => {
        console.log(parseInt(e.target.value));

        guardarQuant(parseInt(e.target.value),10)
    }

    //submit

    const agregarPressupost = e => {
        e.preventDefault();

        //Validar
        if(quantitat < 1 || isNaN(quantitat)){//mirem que sigui mes gran de 0
            guardarError(true);
            return; //per parar la funcio
        }

        //Si passa la validacio

        guardarError(false);
        guardarPressupost(quantitat);
        guardarRestant(quantitat);
        guardarMostrarPregunta(false);
    }

    return (
        <Fragment>
            <h2>El teu pressupost</h2>
            {error? <Error msm="Hi ha un error, revisi les dades"/> : null}

            <form 
                onSubmit={agregarPressupost}>
                <input
                    type="number"
                    className="u-full-width"
                    placeholder="El teu pressupost"
                    onChange={definirPressupost}
                />

                <input
                    type="submit"
                    className="button-primary u-full-width"
                    value="EL meu pressupost" />
            </form>
        </Fragment>
    )
}

Pregunta.propTypes = {
    guardarPressupost: PropTypes.func.isRequired,
    guardarRestant: PropTypes.func.isRequired,
    guardarMostrarPregunta: PropTypes.func.isRequired,

}

export default Pregunta;