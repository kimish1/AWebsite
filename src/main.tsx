//import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App'
import { BrowserRouter, Route, Routes } from "react-router";
import First from "./pages/FirstPage";
import Second from "./pages/SecondPage";
import Third from "./pages/ThirdPage";

createRoot(document.getElementById('root')!).render(
    <BrowserRouter>
        <Routes>
            <Route path ="/" element={<App />} />
            <Route path ="/page-1" element={<First />} />
            <Route path ="/page-2" element={<Second />} />
            <Route path ="/page-log-in" element={<Third />} />
        </Routes>
    </BrowserRouter>,
)

/*createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)*/
