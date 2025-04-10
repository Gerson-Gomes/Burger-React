import {React} from "react";
import "../stylesheet/LoginMainContent.css"

function Login() {
    return (
        <form>
            <div className="login">
                <h1 id="loginRequest">Faça Login</h1>
                <div className="loginInput">
                    <input type="email" placeholder="Digite seu email"/>
                    <input type="password" placeholder="Digite sua senha"/>
                </div>
                <div className="loginButtonContainer">
                    <button id="loginButton" className="btn btn-success">Entrar</button>
                    <a>Esqueceu senha</a>
                    <a>Não possui uma conta? Cadastre-se</a>
                </div>
            </div>
        </form>
    )
}

export default Login;