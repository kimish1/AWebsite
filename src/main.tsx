//import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App'
import { BrowserRouter, Route, Routes } from "react-router";
import Main from "./pages/Main";
import Books from "./pages/Books";
import Book from "./pages/Book";
import LogIn from "./pages/LogIn";
import Register from "./pages/Register";

createRoot(document.getElementById('root')!).render(
    <BrowserRouter>
        <Routes>
            <Route path ="/" element={<Main/>} />
            <Route path ="/page-books" element={<Books />} />
            <Route path ="/page-book" element={<Book />} />
            <Route path ="/page-log-in" element={<LogIn />} />
            <Route path ="/page-register" element={<Register />} />
        </Routes>
    </BrowserRouter>,
)

/*createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)*/
