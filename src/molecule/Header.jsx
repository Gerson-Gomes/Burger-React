import React from "react";
import '../stylesheet/Header.css'

import Logo from "../assets/5800_8_01.jpg"
function Header() {
    return (
        <header>
            <nav>
                <div className="navLeft">

                    <div className="logoBackground">
                        <img src={Logo} alt="Logo do Burguer Bom" className="logo"/>
                    </div>
                    <ul className='navMenu'>
                        <li><a href="index.html">Home</a></li>
                        <li><a href="cardapio.html">Cardapio</a></li>
                        <li><a href="who.html">Quem Somos</a></li>

                    </ul>
                </div>
                <div className="cart">
                    <a href="cart.html"><i className="fa-solid fa-cart-arrow-down"></i></a>
                    <a href="cadastro.html" id="login">Login/Cadastro</a>
                </div>
            </nav>
        </header>
    )

}

export default Header