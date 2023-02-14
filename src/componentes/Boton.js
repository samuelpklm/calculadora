import React from "react";
import '../hojas-de-estilos/Boton.css'

function Boton(props){

  const esOperator = (valor) => {
    return isNaN(valor) && (valor !== '.') && (valor !== '=');
  };

    return(
        <div className={`boton-contenedor ${esOperator(props.children) ? 'operator' : ''}`.trimEnd()}
          onClick={ () => props.manejarClic(props.children)}>
          {props.children}
        </div>
    );
}

export default Boton;