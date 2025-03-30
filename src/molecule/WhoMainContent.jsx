import {React} from "react";
import WhoPicture from "../assets/Quem_Somos.jpg"
import "../stylesheet/WhoMainContent.css"

function WhoMainContent() {
    return (
        <>
            <section className="who-main">
                <div className={"image-container"}>
                    <img src={WhoPicture}/>
                </div>
                <div className={"who-main-content"}>
                    <p>Aqui no Bom Burguer, nossa missão é mais do que servir hambúrgueres deliciosos - é criar momentos inesquecíveis para você e sua família. Valorizamos cada detalhe, desde a seleção dos melhores ingredientes até o preparo cuidadoso de cada refeição, tudo para garantir qualidade superior e sabor autêntico. E o melhor de tudo: oferecemos tudo isso a preços acessíveis, porque acreditamos que boas experiências não precisam ser caras. Seja para uma refeição rápida ou um encontro especial, estamos prontos para fazer parte das suas melhores memórias!</p>
                </div>
            </section>

        </>
    )
}

export default WhoMainContent;