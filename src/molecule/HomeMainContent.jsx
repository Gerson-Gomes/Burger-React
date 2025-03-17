import React from "react";
import FrontPhoto from "../assets/FrontPhoto.jpg";
import '../stylesheet/style.css'
import '../stylesheet/HomeMainContent.css'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination';
import 'swiper/css/autoplay';
import {Swiper, SwiperSlide} from "swiper/react";
import Restaurante1 from '../assets/Restaurante.jpg'
import Restaurante2 from '../assets/Restaurante2.jpg'
import Restaurante3 from '../assets/Restaurante 3.jpg'


import {Autoplay} from "swiper/modules";

function HomeMainContent() {

    return (
        <>
            <Swiper
                modules={[Autoplay]}
                autoplay={true}
                spaceBetween={30}
                effect={'slide'}
                className="mySwiper">

                <SwiperSlide><img id='slide1' className='slideGeneral' src={Restaurante1}/></SwiperSlide>
                <SwiperSlide><img src={Restaurante2}/></SwiperSlide>
                <SwiperSlide><img id={'slide3'} src={Restaurante3}/></SwiperSlide>
            </Swiper>
            <div className="frontContent">
                <h1>BEM VINDO A BURGUER BOM</h1>
                <img src={FrontPhoto} id='frontPhoto' alt="FrontPhoto"/>
                <p>Estamos felizes em atende-los</p>
            </div>
            <div className="border" id="border1"></div>
            <div className="border" id="border2"></div>
            <div className="buttonContainer">
                <a className="menuButton">Cardapio</a>
            </div>

        </>)
}

export default HomeMainContent;