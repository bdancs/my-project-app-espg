import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

//BLOCO DE NOTAS
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from './routes/Home.jsx'
import Produtos from './routes/Produtos.jsx'
import EditarProdutos from './routes/EditarProdutos.jsx'
import Erro404 from './routes/Erro404.jsx'
//BLOCO DE NOTAS

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
