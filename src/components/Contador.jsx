import React, { useState } from 'react'

const Contador = () => {
    const [contador, setContador] = useState(0)

    function incrementar(){
        setContador(contador+1)
    }

    function decrementar(){
        setContador(contador-1)
    }
  return (
    <>
        <h1>Contador</h1>
        <p>{contador}</p>
        {/* Cómo se le pasaban parámetros a las funciones? Era con el arrow funtion directamente no? */}
        <button onClick={incrementar}>+</button>
        <button onClick={decrementar}>-</button>
    </>
  )
}

export default Contador