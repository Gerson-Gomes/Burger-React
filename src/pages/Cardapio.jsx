import Header from "../molecule/Header.jsx";
import Footer from "../molecule/Footer.jsx";
import CardapioMainContent from "../molecule/CardapioMainContent.jsx"
import HeaderLogged from "../molecule/HeaderLogged.jsx";
import React from "react";
import {useAuth} from "../AuthContext.jsx";


function Cardapio() {
    const {isLogged} = useAuth();
    return (
        <>
            {isLogged ? <HeaderLogged/> : <Header/>}
            <CardapioMainContent/>
            <Footer/>
        </>
    )
}

export default Cardapio