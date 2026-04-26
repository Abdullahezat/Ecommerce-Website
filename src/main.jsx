import React, { StrictMode } from 'react'
import './index.css'
import App from './App.jsx'
import ReactDOM from 'react-dom/client'
import { HashRouter } from 'react-router-dom'
import CartProvider from './compontsheader/context/CartContext.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <HashRouter>
    <CartProvider>
        <App />      
    </CartProvider>

    </HashRouter>
  </React.StrictMode>,
)
