//import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { BrowserRouter, Route, Routes } from "react-router";
import Main from "./pages/Main";
import Books from "./pages/Books";
import OneBook from "./pages/Book";
import LogIn from "./pages/LogIn";
// @ts-ignore
import Register from "./pages/Register";
import Cart from "./pages/Cart";

createRoot(document.getElementById('root')!).render(
    <BrowserRouter>
        <Routes>
            <Route path ="/" element={<Main/>} />
            <Route path ="/page-books" element={<Books />} />
            <Route path ="/page-book/:id" element={<OneBook />} />
            <Route path ="/page-log-in" element={<LogIn />} />
            <Route path ="/page-register" element={<Register />} />
            <Route path ="/page-cart" element={<Cart />} />
        </Routes>
    </BrowserRouter>,
)

/*createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)*/
