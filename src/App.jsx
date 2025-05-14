import './App.css'
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import Home from "./pages/Home.jsx";
import Cardapio from "./pages/Cardapio.jsx"
import Cadastro from "./pages/Cadastro.jsx";
import Who from "./pages/who.jsx";
import Login from "./pages/Login.jsx";
import {AuthProvider} from "./AuthContext.jsx";


function App() {

    return (
        <AuthProvider>
            <Router>
                <Routes>
                    <Route path="/" element={<Home/>}/>
                    <Route path="/cardapio" element={<Cardapio/>}/>
                    <Route path="/quem-somos" element={<Who/>}/>
                    <Route path="/login" element={<Login/>}/>
                    <Route path="/cadastro" element={<Cadastro/>}/>
                </Routes>
            </Router>
        </AuthProvider>
    )
}

export default App
