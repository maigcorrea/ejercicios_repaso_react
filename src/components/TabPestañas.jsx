import React from 'react'
import { Link } from 'react-router-dom'

const TabPestañas = () => {
  return (
    <>
        <section>
          <nav>
            <Link to="/pestana1">Pestaña1</Link>
            <Link to="/pestana2">Pestaña2</Link>
            <Link to="/pestana3">Pestaña3</Link>
            <Link to="/pestana4">Pestaña4</Link>
          </nav>
        </section>
    </>
  )
}

export default TabPestañas