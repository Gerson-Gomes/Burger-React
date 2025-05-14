import React, {useState} from "react";
import "../stylesheet/LoginMainContent.css"
import {useNavigate} from "react-router-dom";
function Login() {
    const navigate = useNavigate();
    const [formData, setFormData] = useState({email:"", password:""});
    const [errorMessage, setErrorMessage] = useState("");

    const handleChange = (e) => {
        const {name, value} = e.target;
        setFormData({...formData, [name]: value});
    }

    // const handleLogin = async (e) => {
    //     e.preventDefault();
    //     if (!formData.email || !formData.password) {
    //         setErrorMessage("Campo vazio")
    //         return;
    //     }
    //
    //
    // }

    return (
        <form onSubmit={handleLogin}>
            <div className="login">
                <h1 id="loginRequest">Faça Login</h1>
                <div className="loginInput">
                    <input type="email" placeholder="Digite seu email" value={formData.email} onChange={handleChange} />
                    <input type="password" placeholder="Digite sua senha" value={formData.password} onChange={handleChange} />
                </div>
                <div className="loginButtonContainer">
                    <button id="loginButton" className="btn btn-success" type={"submit"}>Entrar</button>
                    <a>Esqueceu senha</a>
                    <a>Não possui uma conta? <span onClick={()=>navigate("/cadastro")}>Cadastre-se</span></a>
                </div>
            </div>
        </form>
    )
}

export default Login;