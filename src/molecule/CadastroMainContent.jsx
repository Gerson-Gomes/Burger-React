import React from "react";


function CadastroMainContent() {
    return (
        <form action="" className="cadastro">
            <div className="cadastroContainer">
                <div className="login">
                    <h1 id="loginRequest">Faça Login</h1>
                    <div className="loginInput">
                        <input type="email" placeholder="Digite seu email"/>
                        <input type="password" placeholder="Digite sua senha"/>
                    </div>
                    <div className="buttonContainer">
                        <button id="loginButton" className="btn btn-success">Entrar</button>
                    </div>
                </div>
                <div className="register">
                    <h1 id="registerRequest">Insira seus dados para cadastro</h1>
                    <div action="" className="registerData">

                        <div className="fullName">
                            <input type="text" placeholder="Nome"/>
                            <input type="text" placeholder="Sobrenome"/>
                        </div>
                        <div className="address">
                            <div className="cepContainer">
                                <input name="cep" type="text" placeholder="Insira o Cep" id="cep"
                                       onBlur="pesquisacep(this.value);"/>
                            </div>
                            <div className="cepResult">
                                <input type="text" id="city" readOnly/>
                                <input type="text" id="neighborhood" readOnly/>
                                <input type="text" id="uf" readOnly/>
                                <input type="text" id="street" readOnly/>
                            </div>
                        </div>
                    </div>

                </div>

                <div className="buttonContainer">
                    <button id="registerButton" className="btn btn-success">Cadastrar</button>
                </div>
            </div>
        </form>
    )
}

export default CadastroMainContent;