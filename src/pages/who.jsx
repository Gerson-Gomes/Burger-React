import {React} from "react";
import Header from "../molecule/Header.jsx";
import WhoMainContent from "../molecule/WhoMainContent.jsx";
import Footer from "../molecule/Footer.jsx";
import HeaderLogged from "../molecule/HeaderLogged.jsx";
import {useAuth} from "../AuthContext.jsx";

function Who() {
    const {isLogged} = useAuth();
    return (
        <>
            {isLogged ? <HeaderLogged/> : <Header/>}
            <WhoMainContent/>
            <Footer/>
        </>

    )
}

export default Who;