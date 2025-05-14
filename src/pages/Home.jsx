import React from "react";
import Header from "../molecule/Header.jsx";
import HomeMainContent from "../molecule/HomeMainContent.jsx";
import Footer from "../molecule/Footer.jsx";
import {useEffect} from "react";
import {useAuth} from "../AuthContext.jsx";
import HeaderLogged from "../molecule/HeaderLogged.jsx";

function Home() {
    useEffect(() => {
        document.body.style.backgroundImage = 'radial-gradient(var(--laranja), var(--marrom))'

        return () => {
            document.body.style.backgroundImage = '';
        }
    })
    const {isLogged} = useAuth();
    console.log(isLogged);
    return (
        <>
            {isLogged ? <HeaderLogged/> : <Header/>}
            <HomeMainContent/>
            <Footer/>
        </>
    )
}

export default Home