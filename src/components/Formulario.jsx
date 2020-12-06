import React, { useState } from 'react'
import Error from './Error'
import shortid from 'shortid' 
import PropTypes from "prop-types"

const Formulario = ({guardarGasto, guardarCrearGasto}) => {

    const [nom, guardarNom] = useState("");
    const [quantitat, guardarQuantitat] = useState(0);
    const [error, guardarError] = useState(false);

    const agregarDespessa = e => {
        e.preventDefault();

        //validar
        if (quantitat < 1 || isNaN(quantitat) || nom.trim() === "") {
            guardarError(true);
            return;
        }
        //construir
        const gasto = {
            nombre : nom,
            quantitat : quantitat,
            id: shortid.generate()
        }

        //passar la despessa a app
        guardarGasto(gasto);
        guardarCrearGasto(true);

        //resetear
        guardarNom("");
        guardarQuantitat(0);

    }

    return (
        <form
            onSubmit={agregarDespessa}>
            <h2>Possi aqui les despesses</h2>
            {error ? <Error msm = "Els dos camps son obligatoris o pressupost incorrecte" /> : null}
            <div className="campo">
                <label>Nom de la despessa</label>
                <input
                    type="text"
                    className="u-full-width"
                    placeholder="Ex. transport"
                    value={nom}
                    onChange={(e) => guardarNom(e.target.value)} />
            </div>

            <div className="campo">
                <label>Quantitat de la despessa</label>
                <input
                    type="number"
                    className="u-full-width"
                    placeholder="Ex. 300"
                    value={quantitat}
                    onChange={(e) => guardarQuantitat(parseInt(e.target.value, 10))} />
            </div>

            <input
                type="submit"
                className="button-primary u-full-width"
                value="Afegir"
            />
        </form>
    )

}

Formulario.propTypes = {
    guardarGasto: PropTypes.func.isRequired,
    guardarCrearGasto: PropTypes.func.isRequired
}

export default Formulario;