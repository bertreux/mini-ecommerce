import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import App from './App'
import Accueil from "./composants/front/Accueil"
import Panier from "./composants/front/Panier"
import BonCode from "./composants/front/BonCode"
import 'bootstrap/dist/css/bootstrap.min.css'
import { PanierContextProvider } from './contexts/panierContext'

ReactDOM.createRoot(document.getElementById('root')).render(
  <PanierContextProvider>
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<App />}>
        <Route index element={<Accueil/>}/>
        <Route path="panier" element={<Panier/>}/>
        <Route path="bon-code" element={<BonCode/>}/>

      </Route>
    </Routes>
    </BrowserRouter>
  </PanierContextProvider>,
)
