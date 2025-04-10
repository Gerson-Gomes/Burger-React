import React from "react";
import procuraCep from "../services/cep.js"
import '../stylesheet/CadastroMainContent.css'

function CadastroMainContent() {
    return (
        <form action="" className="cadastro">
            <div className="cadastroContainer">
                <div className="register">
                    <h1 id="registerRequest">Insira seus dados para cadastro</h1>
                    <div action="" className="registerData">

                        <div className="fullName">
                            <input type="text" placeholder="Nome"/>
                            <input type="text" placeholder="Sobrenome"/>
                        </div>
                        <div className='contact'>
                            <input type={'email'} placeholder="Email"/>
                            <input type={'phone'} placeholder={'Telefone'}/>
                        </div>
                        <div className={'password-container'}>
                            <input type="password" placeholder="Senha"/>
                            <input type='password' placeholder={'Confirmar Senha'}/>
                        </div>
                        <div className="address">
                            <div className="cepContainer">
                                <input name="cep" type="text" placeholder="Insira o Cep" id="cep"
                                       onBlur={(e)=>procuraCep.searchCep(e.target.value)}/>
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