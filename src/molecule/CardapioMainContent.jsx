import "../stylesheet/CardapioMainContent.css"
import {React, useEffect, useRef, useState} from "react";
import api from "../services/api.js";
import {createPortal} from "react-dom";
import ProductInfoModal from "./ProductInfoModal.jsx";

function CardapioMainContent() {
    const targetCarne = useRef(null);
    const targetFrango = useRef(null);
    const targetPeixe = useRef(null);
    const targetVegan = useRef(null);
    const targetSobremesa = useRef(null);

    const [product, setProduct] = useState([]);
    const [targetProduct, setTargetProduct] = useState(null);
    const [showModal, setShowModal] = useState(false);

    const categoriesSideBar = [
        {key: "Carne", refName: targetCarne},
        {key: "Frango", refName: targetFrango},
        {key: "Peixe", refName: targetPeixe},
        {key: "Vegan", refName: targetVegan},
        {key: "Sobremesa", refName: targetSobremesa},
    ];

    useEffect(() => {
        api
            .get('/products')
            .then((res) => setProduct(res.data))
            .catch((err) => console.error('Erro ao carregar', err));
    }, []);

    const renderItems = (category) => {

        const items = product.filter((p) => p.productCategory === category);

        if (items.length === 0) {
            return (
                <li className="item-placeholder">
                    <p>Vazio</p>
                </li>
            )
        } else {
            return items.map((prod) => (
                <li className="item-placeholder" key={prod.productId}>
                    <div className="item">
                        <img src={prod.productImageURL} alt={prod.productName}/>
                        <p>{prod.productName}</p>
                        <p>
                            {prod.productPrice.toLocaleString("pt-BR", {
                                style: "currency",
                                currency: "BRL",
                            })}
                        </p>
                    </div>
                    <div className="shopping-button-container">
                        <button className="btn btn-success">Compra</button>
                        <button className="btn btn-info" onClick={() => {
                            setShowModal(true);
                            setTargetProduct(prod)
                        }}>Info
                        </button>

                    </div>

                </li>
            ));
        }
    };

    return (
        <>
            <div className="cardapioMainContent">
                <div className={'sideBar-container'}>
                    <section className={'menuLateral'}>
                        <div className={'sideBar-nav'}>
                            {categoriesSideBar.map(({key, refName}) => (
                                <a key={key} onClick={() => window.scrollTo({top: refName.current.offsetTop,behavior:"smooth"})}>
                                    {key}
                                </a>
                            ))}
                        </div>
                    </section>
                </div>

                <section className="cardapio">
                    <div className={'cardapio-container'}>
                        <h1 ref={targetCarne} className="sectionTitle">Carnes</h1>
                        <hr className="sectionLine"/>
                        <ul className={'item-container'}>
                            {renderItems('Carne')}
                        </ul>
                    </div>

                    <div className={'cardapio-container'}>
                        <h1 ref={targetFrango} className="sectionTitle">Frangos</h1>
                        <hr className="sectionLine"/>
                        <ul className="item-container">
                            {renderItems('Frango')}
                        </ul>
                    </div>

                    <div className={'cardapio-container'}>
                        <h1 ref={targetPeixe} className="sectionTitle">Peixes</h1>
                        <hr className="sectionLine"/>
                        <ul className="item-container">
                            {renderItems('Peixe')}
                        </ul>
                    </div>


                    <div className={'cardapio-container'}>
                        <h1 ref={targetVegan} className="sectionTitle">Vegetariano</h1>
                        <hr className="sectionLine"/>
                        <ul className="item-container">
                            {renderItems('Vegan')}
                        </ul>
                    </div>

                    <div className={'cardapio-container'}>
                        <h1 ref={targetSobremesa} className="sectionTitle">Sobremesas e Outros</h1>
                        <hr className="sectionLine"/>
                        <ul className="item-container">
                            {renderItems('Misc')}
                        </ul>
                    </div>

                </section>
                {showModal && createPortal(
                    <ProductInfoModal onClose={() => setShowModal(false)} product={targetProduct}/>, document.body
                )}
            </div>
        </>
    )
}

export default CardapioMainContent;


