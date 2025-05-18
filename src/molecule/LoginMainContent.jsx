import React, {useState} from "react";
import "../stylesheet/LoginMainContent.css"
import {useNavigate} from "react-router-dom";
import api from "../services/api.js";
import {useAuth} from "../AuthContext.jsx";

function Login() {
    const navigate = useNavigate();
    const [formData, setFormData] = useState({email: "", password: ""});
    const [errorMessage, setErrorMessage] = useState("");
    const {isLogged, setIsLogged} = useAuth()

    const handleChange = (e) => {
        const {name, value} = e.target;
        setFormData({...formData, [name]: value});
    }

    const handleLogin = async (e) => {
        e.preventDefault();
        if (!formData.email || !formData.password) {
            setErrorMessage("Campo vazio")
            return;
        }
        try {
            const response = await api.post("/users/login", {
                email: formData.email,
                password: formData.password,
            });

            const user = response.data;
            localStorage.setItem('user', JSON.stringify(user));

            setIsLogged(true)
            navigate("/")
        } catch (err) {
            if (err.response && err.response.status === 401) {
                setErrorMessage(err.response.data.message);
            } else {
                setErrorMessage(err.response.data.message);
                console.log(errorMessage)
            }
        }
    }

    return (
        <form onSubmit={handleLogin}>
            <div className="login">
                <h1 id="loginRequest">Faça Login</h1>
                <div className="loginInput">
                    <input name={"email"} type="email" placeholder="Digite seu email" value={formData.email}
                           onChange={handleChange}/>
                    <input name={"password"} type="password" placeholder="Digite sua senha" value={formData.password}
                           onChange={handleChange}/>
                </div>
                <div className="loginButtonContainer">
                    <button id="loginButton" className="btn btn-success" type={"submit"}>Entrar</button>
                    <a>Esqueceu senha</a>
                    <a>Não possui uma conta? <span onClick={() => navigate("/cadastro")}>Cadastre-se</span></a>
                </div>
            </div>
        </form>
    )
}

export default Login;