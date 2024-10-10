import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import { Navigation, Pagination, Mousewheel, Keyboard } from 'swiper/modules';
import Image from 'next/image';

const width = window.innerWidth;
const height = window.innerHeight;

const HomeSlider = () => {
    const [dimensions, setDimensions] = useState({ width: 0, height: 0 });
    const [banners, setBanners] = useState([
        {
            imgUrl:'https://cdn.pixabay.com/photo/2016/01/22/08/17/banner-1155437_1280.png'
        },
        {
            imgUrl:'https://cdn.pixabay.com/photo/2015/09/21/14/46/banner-949931_960_720.jpg'
        }
    ])

  return (
    <Swiper
        cssMode={true}
        navigation={true}
        pagination={true}
        mousewheel={true}
        keyboard={true}
        modules={[Navigation, Pagination, Mousewheel, Keyboard]}
        className="mySwiper"
    >
        {
            banners.map((banner, index) => {
                return (
                    <SwiperSlide key={index}>
                        <Image src={banner.imgUrl} alt="" width={width} height={height / 2}
                            style={{
                                objectFit:"cover"
                            }} />
                    </SwiperSlide>
                )
            })
        }
    </Swiper>
  )
}

export default HomeSlider


