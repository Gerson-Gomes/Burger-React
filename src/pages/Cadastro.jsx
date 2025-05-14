import React from "react";
import Header from "../molecule/Header.jsx";
import CadastroMainContent from "../molecule/CadastroMainContent.jsx";
import Footer from "../molecule/Footer.jsx";
import {useAuth} from "../AuthContext.jsx";
import HeaderLogged from "../molecule/HeaderLogged.jsx";

function Cadastro() {
    const {isLogged} = useAuth();
    return (

        <>
            {isLogged ? <HeaderLogged/> : <Header/>}
            <CadastroMainContent/>
            <Footer/>
        </>
    )
}

export default Cadastro