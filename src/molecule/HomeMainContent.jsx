import React from "react";
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
import Logo from '../assets/5800_8_01.jpg'
import {Autoplay} from "swiper/modules";
import {useNavigate} from "react-router-dom";


function HomeMainContent() {
    const navigate = useNavigate();
    return (
        <>
        <div className="main-content">
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
                <h1>BEM VINDO A <span style={{color: "white"}}>BURGUER BOM</span></h1>
                <div className='frontPhotoContainer'>
                    <img src={Logo} id='frontPhoto' alt="FrontPhoto"/>
                </div>
                <p>Estamos felizes em atende-los</p>
            </div>
            
            <div className="buttonContainer">
                <a onClick={() => navigate("/cardapio")} className="menuButton">Cardapio</a>
            </div>
        </div>


        </>)
}

export default HomeMainContent;