import React from "react";
import '../stylesheet/Header.css'
import {useNavigate} from "react-router-dom";

import Logo from "../assets/5800_8_01.jpg"

function Header() {
    const navigate = useNavigate();
    return (
        <header>
            <nav>
                <div className="navLeft">

                    <div className="logoBackground">
                        <img src={Logo} alt="Logo do Burguer Bom" className="logo"/>
                    </div>
                    <ul className='navMenu'>
                        <li><a onClick={() => navigate("/")}>Home</a></li>
                        <li><a onClick={()=>navigate("/cardapio")}>Cardapio</a></li>
                        <li><a onClick={()=>navigate("/quem-somos")}>Quem Somos</a></li>

                    </ul>
                </div>
                <div className="cart">
                    <a><i className="fa-solid fa-cart-arrow-down"></i></a>
                    <a onClick={()=>navigate("/login")} id="login">Login/Cadastro</a>
                </div>
            </nav>
        </header>
    )

}

export default Header