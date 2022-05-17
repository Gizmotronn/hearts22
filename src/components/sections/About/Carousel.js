import React from "react";
import styled from "styled-components";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-cards";
import { Navigation, Pagination, Autoplay, EffectCards } from "swiper";
import "swiper/css/pagination";
import "swiper/css/navigation";

import img1 from "../../../assets/Nfts/bighead.svg"
import img2 from "../../../assets/Nfts/bighead-1.svg"
import img3 from "../../../assets/Nfts/bighead-2.svg"
import img4 from "../../../assets/Nfts/bighead-3.svg"
import img5 from "../../../assets/Nfts/bighead-4.svg"
import img6 from "../../../assets/Nfts/bighead-5.svg"
import img7 from "../../../assets/Nfts/bighead-6.svg"
import img8 from "../../../assets/Nfts/bighead-7.svg"
import img9 from "../../../assets/Nfts/bighead-8.svg"
import img10 from "../../../assets/Nfts/bighead-9.svg"

import image1 from "../../../assets/Fans/1.jpeg";
import image2 from "../../../assets/Fans/2.jpeg";

import Arrow from "../../../assets/Arrow.svg";

const Container = styled.div`
width: 15vw;
height: 17vh;

.swiper{
    width: 100%;
    height: 100%;
}

.swiper-slide{
    background-color: ${props => props.theme.carouselColor};
    border-radius: 20px;

    display: flex;
    justify-content: center;
    align-items: center;
}
`

const Carousel = () => {
    return (
        <Container>
            <Swiper
                autoplay={{
                    delay: 2000,
                    disableOnInteraction:false,
                }}
                pagination={{
                    type:'fraction',
                }}
                navigation={true}
                effect={"cards"}
                grabCursor={true}
                scrollbar={{draggable:true}}
                modules={[EffectCards, Pagination, Autoplay, Navigation]}
                className="mySwiper"
            >
                <SwiperSlide> <img src={image1} /> </SwiperSlide>
                <SwiperSlide> <img src={image2} /> </SwiperSlide>
                <SwiperSlide> <img src={img3} /> </SwiperSlide>
                <SwiperSlide> <img src={img4} /> </SwiperSlide>
                <SwiperSlide> <img src={img5} /> </SwiperSlide>
                <SwiperSlide> <img src={img6} /> </SwiperSlide>
                <SwiperSlide> <img src={img7} /> </SwiperSlide>
                <SwiperSlide> <img src={img8} /> </SwiperSlide>
                <SwiperSlide> <img src={img9} /> </SwiperSlide>
                <SwiperSlide> <img src={img10} /> </SwiperSlide>
            </Swiper>
        </Container>
    )
}

export default Carousel;