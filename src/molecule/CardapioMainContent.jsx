/*
import "../stylesheet/CardapioMainContent.css"
import BomCheaddar from '../assets/BomCheaddar.jpg'
import BigBom from '../assets/bigBom.jpg'
import BomFish from '../assets/BomFish.jpg'
import SaladaBom from '../assets/SaladaBom.jpg'
import MilkShake from '../assets/milkshake.jpg'
import {React, useEffect, useRef, useState} from "react";
import api from "../services/api.js";

function CardapioMainContent() {
    const targetCarnes = useRef(null);
    const targetFrangos = useRef(null);
    const targetPeixes = useRef(null);
    const targetVegans = useRef(null);
    const targetSobremesas = useRef(null);

    const [product, setProduct] = useState([]);

    useEffect(() => {
        api.get('/products').then(res => setProduct(res.data)).catch(err => console.error('Erro ao carregar', err));
    }, []);

    return (
        <>
            <div className="cardapioMainContent">
                <div className={'sideBar-container'}>
                    <section className={'menuLateral'}>
                        <div className={'sideBar-nav'}>
                            <a onClick={() => {
                                window.scrollTo({top: targetCarnes.current.offsetTop, behavior: "smooth"})
                            }}>Carnes</a>
                            <a onClick={() => {
                                window.scrollTo({top: targetFrangos.current.offsetTop, behavior: "smooth"})
                            }}>Frangos</a>
                            <a onClick={() => {
                                window.scrollTo({top: targetPeixes.current.offsetTop, behavior: "smooth"})
                            }}>Peixes</a>
                            <a onClick={() => {
                                window.scrollTo({top: targetVegans.current.offsetTop, behavior: "smooth"})
                            }}>Veganos</a>
                            <a onClick={() => {
                                window.scrollTo({top: targetSobremesas.current.offsetTop, behavior: "smooth"})
                            }}>Sobremesas</a>
                        </div>
                    </section>
                </div>

                <section className="cardapio">
                    <div className={'cardapio-container'}>
                        <h1 ref={targetCarnes} className="sectionTitle">Carnes</h1>
                        <hr className="sectionLine"/>
                        <ul className={'item-container'}>
                            <li className='item-placeholder'>
                                <div className='item'>
                                    <img src={BomCheaddar}/>
                                    <p>BomCheaddar</p>
                                    <p>25R$</p>
                                </div>
                                <div className={'shopping-button-container'}>
                                    <button className={"btn btn-success"}>Compra</button>
                                    <button className={"btn btn-info"}>info</button>
                                </div>
                            </li>
                            <li className={'item-placeholder'}></li>
                            <li className={'item-placeholder'}></li>
                            <li className={'item-placeholder'}></li>


                        </ul>

                    </div>
                    <div className={'cardapio-container'}>
                        <h1 ref={targetFrangos} className="sectionTitle">Frangos</h1>
                        <hr className="sectionLine"/>
                        <div className={'item-container'}>
                            <div className='item-placeholder'>
                                <div className='item'>
                                    <img src={BigBom}/>
                                    <p>BigBom</p>
                                    <p>25R$</p>
                                </div>
                                <div className={'shopping-button-container'}>
                                    <button className={"btn btn-success"}>Compra</button>
                                    <button className={"btn btn-info"}>info</button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className={'cardapio-container'}>
                        <h1 ref={targetPeixes} className="sectionTitle">Peixes</h1>
                        <hr className="sectionLine"/>
                        <div className={'item-container'}>
                            <div className='item-placeholder'>
                                <div className='item'>
                                    <img src={BomFish}/>
                                    <p>BomFish</p>
                                    <p>25R$</p>
                                </div>
                                <div className={'shopping-button-container'}>
                                    <button className={"btn btn-success"}>Compra</button>
                                    <button className={"btn btn-info"}>info</button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className={'cardapio-container'}>
                        <h1 ref={targetVegans} className="sectionTitle">Veganos</h1>
                        <hr className="sectionLine"/>
                        <div className={'item-container'}>
                            <div className='item-placeholder'>
                                <div className='item'>
                                    <img src={SaladaBom}/>
                                    <p>Salada</p>
                                    <p>25R$</p>
                                </div>
                                <div className={'shopping-button-container'}>
                                    <button className={"btn btn-success"}>Compra</button>
                                    <button className={"btn btn-info"}>info</button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className={'cardapio-container'}>
                        <h1 ref={targetSobremesas} className="sectionTitle">Sobremesas</h1>
                        <hr className="sectionLine"/>
                        <div className={'item-container'}>
                            <div className='item-placeholder'>
                                <div className='item'>
                                    <img src={MilkShake}/>
                                    <p>MilkShake</p>
                                    <p>25R$</p>
                                </div>
                                <div className={'shopping-button-container'}>
                                    <button className={"btn btn-success"}>Compra</button>
                                    <button className={"btn btn-info"}>info</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </>
    )
}

export default CardapioMainContent;
*/
import "../stylesheet/CardapioMainContent.css";
import { React, useEffect, useRef, useState } from "react";
import api from "../services/api.js";

function CardapioMainContent() {
    const [products, setProducts] = useState([]);
    const refs = useRef({});

    useEffect(() => {
        api
            .get('/products')
            .then(res => setProducts(res.data))
            .catch(err => console.error('Erro ao carregar produtos', err));
    }, []);

    // Extrai categorias únicas
    const categories = Array.from(
        new Set(products.map((p) => p.productCategory))
    );

    // Garante que exista um ref para cada categoria
    categories.forEach((cat) => {
        if (!refs.current[cat]) {
            refs.current[cat] = useRef(null);
        }
    });

    return (
        <div className="cardapioMainContent">
            <div className="sideBar-container">
                <section className="menuLateral">
                    <div className="sideBar-nav">
                        {categories.map((cat) => (
                            <a
                                key={cat}
                                onClick={() => {
                                    window.scrollTo({
                                        top: refs.current[cat].current.offsetTop,
                                        behavior: "smooth",
                                    });
                                }}
                            >
                                {cat}
                            </a>
                        ))}
                    </div>
                </section>
            </div>

            <section className="cardapio">
                {categories.map((cat) => (
                    <div key={cat} className="cardapio-container">
                        <h1 ref={refs.current[cat]} className="sectionTitle">
                            {cat}
                        </h1>
                        <hr className="sectionLine" />
                        <ul className="item-container">
                            {products
                                .filter((p) => p.productCategory === cat)
                                .map((p) => (
                                    <li key={p.id} className="item-placeholder">
                                        <div className="item">
                                            <img src={p.imageUrl} alt={p.name} />
                                            <p>{p.name}</p>
                                            <p>{p.price.toFixed(2)} R$</p>
                                        </div>
                                        <div className="shopping-button-container">
                                            <button className="btn btn-success">Compra</button>
                                            <button className="btn btn-info">Info</button>
                                        </div>
                                    </li>
                                ))}
                        </ul>
                    </div>
                ))}
            </section>
        </div>
    );
}

export default CardapioMainContent;
