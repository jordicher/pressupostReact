import React from 'react'
import Gasto from "./Gasto"
import PropTypes from "prop-types"

const Llista = ({gastos}) =>{
    
    return(
        <div className="gastos-realizados">
            <h2>Llista</h2>
            {gastos.map(gasto => (
                <Gasto
                    key = {gasto.id}
                    gasto = {gasto}
                />
            ))}

        </div>
    )
}

Llista.propTypes = {
    gastos: PropTypes.array.isRequired
}
export default Llista;