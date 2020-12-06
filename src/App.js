import React, { useEffect, useState } from "react";
import Pregunta from "./components/Pregunta";
import Formulario from "./components/Formulario";
import Llista from "./components/Llista";
import ControlPressupost from "./components/ControlPressupost";

function App() {
  const [pressupost, guardarPressupost] = useState(0);
  const [restant, guardarRestant] = useState(0);
  const [mostrarPregunta, guardarMostrarPregunta] = useState(true);
  const [gastos, guardarGastos] = useState([]);
  
  const [gasto, guardarGasto] = useState({});
  const [crearGasto, guardarCrearGasto] = useState(false);

  //useEffect que actualitza el restant

  useEffect(() => {
    if (crearGasto) {

      //agregar el nou pressupost
      guardarGastos([...gastos, gasto]);

      // restar el pressupost actual
      const presupostRestant = restant - gasto.quantitat;
      guardarRestant(presupostRestant);
    }
    
    guardarCrearGasto(false);
  }, [gasto, crearGasto, gastos, restant]);




  return (
    <div className="container">
      <header>
        <h1>Pressupost</h1>
        <div className="contenido-principal contenido">
          {mostrarPregunta ? (
            <Pregunta
              guardarPressupost={guardarPressupost}
              guardarRestant={guardarRestant}
              guardarMostrarPregunta={guardarMostrarPregunta}
            />
          ) : (
            <div className="row">
              <div className="one-half column">
                <Formulario guardarGasto={guardarGasto}
                guardarCrearGasto={guardarCrearGasto} />
              </div>
              <div className="one-half column">
                <Llista gastos={gastos} />

                <ControlPressupost pressupost={pressupost} restant={restant} />
              </div>
            </div>
          )}
        </div>
      </header>
    </div>
  );
}

export default App;
