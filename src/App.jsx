import {useState} from 'react'
import './App.css'
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import Home from "./pages/Home.jsx";
import Cadastro from "./pages/Cadastro.jsx";


function App() {

    return (
        <Router>
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="cadastro" element={<Cadastro/>}/>
            </Routes>
        </Router>
    )
}

export default App
