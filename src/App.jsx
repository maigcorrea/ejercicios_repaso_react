import { useState } from 'react'
import './App.css'
import Contador from './components/Contador'
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import Pestaña1 from './components/Pestaña1'
import Pestaña2 from './components/Pestaña2'
import Pestaña3 from './components/Pestaña3'
import Pestaña4 from './components/Pestaña4'
import TabPestañas from './components/TabPestañas'
import Error from './components/Error'
import Home from './pages/Home'


function App() {

  return (
    <>
      {/* <Contador></Contador> */}

      <BrowserRouter>
            <Routes>
                <Route path='/' element={<Home />}></Route>
                <Route path='/pestana1' element={<Pestaña1 />}></Route>
                <Route path='/pestana2' element={<Pestaña2 />}></Route>
                <Route path='/pestana3' element={<Pestaña3 />}></Route>
                <Route path='/pestana4' element={<Pestaña4 />}></Route>
                <Route path='*' element={<Error></Error>}></Route>
            </Routes>
        </BrowserRouter>

    </>
  )
}

export default App
