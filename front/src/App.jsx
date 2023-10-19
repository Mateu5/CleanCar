import React from "react"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Login from './pages/login/Login'
import Signup from "./pages/cadastro/Signup"



//Para navegar entre as páginas de uma aplicação React.JS precisaremos 
//criar rotas, onde cada rota vai representar uma tela.
function App() {

  return (
   <BrowserRouter>
      <Routes>
          <Route path='/' element={<Login />}></Route>
          <Route path='/Login' element={<Login />}></Route>
          <Route path='/signup' element={<Signup />}></Route>
      </Routes>
   </BrowserRouter>
  )
}

export default App
