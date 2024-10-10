import React from 'react'
import 'swiper/css';
import 'swiper/css/pagination';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';
import { MovieCardType } from '@/types/types';
import MovieCard from './MovieCard';

const MovieCarousel = () => {

    const Movies:MovieCardType[] = [
        {
            title: "Spiderman",
            imageUrl: "https://images-cdn.ubuy.co.id/63523bdd49b9ec149854c783-poster-stop-online-spider-man-movie.jpg",
            _id: "1",
            rating: 8.5,
            type: "Action/Super Hero"
        },
        {
            title: "Civil War",
            imageUrl: "https://i.ebayimg.com/00/s/MTYwMFgxMDY2/z/Ck0AAOSwcdZiX2MM/$_57.JPG?set_id=880000500F",
            _id: "2",
            rating: 7.5,
            type: "Action/Super Hero"
        },
        {
            title: "Infinity War",
            imageUrl: "https://i.pinimg.com/736x/f0/3c/97/f03c97e29e1d8c0bbe6decc9d3d51848.jpg",
            _id: "3",
            rating: 8,
            type: "Action/Super Hero"
        },
        {
            title: "Avengers Endgame",
            imageUrl: "https://i.pinimg.com/736x/0d/50/3f/0d503f82ac0827e2bb244d1a186f1a8b.jpg",
            _id: "4",
            rating: 8.5,
            type: "Action/Super Hero"
        },
        {
            title: "Spiderman 2",
            imageUrl: "https://m.media-amazon.com/images/I/71tuU9YOSgL._AC_SL1000_.jpg",
            _id: "5",
            rating: 7.5,
            type: "Action/Super Hero"
        },
        {
            title: "Advengers Age of Ultron",
            imageUrl: "https://i.pinimg.com/originals/07/00/2e/07002e6adb3c1f2f8d9f66d858d0ecab.jpg",
            _id: "6",
            rating: 6.5,
            type: "Action/Super Hero"
        }
    ];

  return (
    <div className='sliderout'>
      <Swiper 
            slidesPerView={1}
            spaceBetween={1}
            pagination={{
                clickable: true
            }}
            breakpoints={{
                '@0.00': {
                    slidesPerView: 1,
                    spaceBetween: 2
                },
                '@0.75': {
                    slidesPerView: 2,
                    spaceBetween: 2
                },
                '@1.00': {
                    slidesPerView: 3,
                    spaceBetween: 2
                },
                '@1.50': {
                    slidesPerView: 6,
                    spaceBetween: 2
                },
            }}
            modules={[Pagination]}
            className='mySwiper'
        >
            {
                Movies.map((Movie, index) => {
                    return (
                        <SwiperSlide key = {index}>
                            <MovieCard {...Movie}/>
                        </SwiperSlide>
                    )
                })
            }
        </Swiper>
    </div>
  )
}

export default MovieCarousel
