import React, {useState} from "react";
import procuraCep from "../services/cep.js"
import '../stylesheet/CadastroMainContent.css'
import api from "../services/api.js";
import {useNavigate} from "react-router-dom";
import {useAuth} from "../AuthContext.jsx";

function CadastroMainContent() {

    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        name: '',
        lastName: '',
        email: '',
        password: '',
        address: '',
        phone: '',
        cep: ''
    })

    const [passwordCheck, setPasswordCheck] = useState(false)
    const [isLogged, setIsLogged] = useAuth();
    const handleSubmit = async (e) => {
        e.preventDefault();
        if (passwordCheck) {
            try {
                const response = await api.post('/users', formData);
                console.log("response", response.data);
                navigate("/home");
                setIsLogged(true);

            } catch (error) {
                console.log(error);
                console.log(formData)
            }
        } else{
            alert("Erro ao cadastrar");
        }

    }

    return (


        <form action="" className="cadastro" onSubmit={handleSubmit}>
            <div className="cadastroContainer">
                <div className="register">
                    <h1 id="registerRequest">Insira seus dados para cadastro</h1>
                    <div  className="registerData">

                        <div className="fullName">
                            <input type="text" placeholder="Nome" value={formData.name}
                                   onChange={e => setFormData({...formData, name: e.target.value})}/>
                            <input type="text" placeholder="Sobrenome" value={formData.lastName}
                                   onChange={e => setFormData({...formData, lastName: e.target.value})}/>
                        </div>
                        <div className='contact'>
                            <input type={'email'} placeholder="Email" value={formData.email}
                                   onChange={e => setFormData({...formData, email: e.target.value})}/>
                            <input type={'phone'} placeholder={'Telefone'} value={formData.phone}
                                   onChange={e => setFormData({...formData, phone: e.target.value})}/>
                        </div>
                        <div className={'password-container'}>
                            <input type="password" placeholder="Senha" value={formData.password}
                                   onChange={e => setFormData({...formData, password: e.target.value})}/>
                            <input type='password' placeholder={'Confirmar Senha'} onChange={(e) => {
                                if (formData.password.trim().length > 0 && formData.password === e.target.value) {
                                    setPasswordCheck(true)
                                }
                            }}/>
                        </div>
                        <div className="address">
                            <div className="cepContainer">
                                <input  name="cep" type="text" placeholder="Insira o Cep" id="cep" value={formData.cep}
                                       onChange={(e) => {
                                           procuraCep.searchCep(e.target.value);
                                           setFormData({...formData, cep: e.target.value})
                                       }}/>
                            </div>
                            <div className="cepResult">
                                <input type="text"
                                       id="city"
                                       readOnly
                                       value={formData.address}
                                       onChange={(e) => setFormData({...formData, address: e.target.value})}
                                />
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