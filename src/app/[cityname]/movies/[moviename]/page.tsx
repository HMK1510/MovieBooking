"use client"
import { release } from 'os'
import React from 'react'
import { BsShare } from 'react-icons/bs'
import { BsFillStarFill } from 'react-icons/bs'
import './MoviePage.css'
import MovieCarousel from '@/components/MovieCarousel/MovieCarousel'
import 'swiper/css';
import 'swiper/css/pagination';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';
import CelebCard from '@/components/CelebCard/CelebCard'
import { usePathname } from 'next/navigation'
import Link from 'next/link'

const MoviePage = () => {
const pathname = usePathname()

const movie = {
    wideposter: "https://static.posters.cz/image/hp/69167.jpg",
    portraitposter: "https://images-cdn.ubuy.co.id/63523bdd49b9ec149854c783-poster-stop-online-spider-man-movie.jpg",
    title: "Spiderman",
    rating: 8.5,
    halls: [
        "2D",
        "3D"
    ],
    languages: [
        "English"
    ],
    duration: "2h 1m",
    type: "Action/Super Hero",
    releasedat: "May 3, 2002",
    cast: [
        {
            _id: "1",
            name: "Tobey Maguire",
            role: "Actor",
            imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c2/Tobey_Maguire_2014.jpg/210px-Tobey_Maguire_2014.jpg"
        },
        {
            _id: "1",
            name: "Tobey Maguire",
            role: "Actor",
            imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c2/Tobey_Maguire_2014.jpg/210px-Tobey_Maguire_2014.jpg"
        },
        {
            _id: "1",
            name: "Tobey Maguire",
            role: "Actor",
            imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c2/Tobey_Maguire_2014.jpg/210px-Tobey_Maguire_2014.jpg"
        },
        {
            _id: "1",
            name: "Tobey Maguire",
            role: "Actor",
            imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c2/Tobey_Maguire_2014.jpg/210px-Tobey_Maguire_2014.jpg"
        },
        {
            _id: "1",
            name: "Tobey Maguire",
            role: "Actor",
            imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c2/Tobey_Maguire_2014.jpg/210px-Tobey_Maguire_2014.jpg"
        },
        {
            _id: "1",
            name: "Tobey Maguire",
            role: "Actor",
            imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c2/Tobey_Maguire_2014.jpg/210px-Tobey_Maguire_2014.jpg"
        },
        {
            _id: "1",
            name: "Tobey Maguire",
            role: "Actor",
            imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c2/Tobey_Maguire_2014.jpg/210px-Tobey_Maguire_2014.jpg"
        },
        {
            _id: "1",
            name: "Tobey Maguire",
            role: "Actor",
            imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c2/Tobey_Maguire_2014.jpg/210px-Tobey_Maguire_2014.jpg"
        }
    ],
    crew: [
        {
            _id: "1",
            name: "Sam Raimi",
            role: "Director",
            imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/83/Sam_Raimi_by_Gage_Skidmore_2.jpg/250px-Sam_Raimi_by_Gage_Skidmore_2.jpg"
        },
        {
            _id: "1",
            name: "Sam Raimi",
            role: "Director",
            imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/83/Sam_Raimi_by_Gage_Skidmore_2.jpg/250px-Sam_Raimi_by_Gage_Skidmore_2.jpg"
        },
        {
            _id: "1",
            name: "Sam Raimi",
            role: "Director",
            imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/83/Sam_Raimi_by_Gage_Skidmore_2.jpg/250px-Sam_Raimi_by_Gage_Skidmore_2.jpg"
        }
    ],
    about: "Spiderman là một bộ phim siêu anh hùng năm 2002 của Mỹ, là phim đầu tiên trong loạt phim Người Nhện dựa trên các nhân vật hư cấu Người Nhện của Marvel Comics. Phim được đạo diễn bởi Sam Raimi và kịch bản viết bởi David Koepp. Nhân vật chính Người Nhện là Peter Parker do Tobey Maguire thủ vai, Peter Parker là một học sinh trung học đã chuyển thành người chống lại tội phạm sau khi phát triển các khả năng như nhện, cùng với Willem Dafoe trong vai Norman Osborn (Green Goblin), Kirsten Dunst trong vai người yêu của Peter Mary-Jane Watson, và James Franco trong vai người bạn tốt nhất của ông Harry Osborn."
}
  return (
    <div className='moviepage'>
      <div className='c1' style={{
            backgroundImage: `url(${movie.wideposter})`
        }}>
        <div className='c11'>
            <div className='left'>
                <div className='movie_poster' style={{
                    backgroundImage: `url(${movie.portraitposter})`
                }}>
                    <p>In cinemas</p>
                </div>
                <div className='movie_details'>
                    <p className='title'>
                        {movie.title}
                    </p>
                    <p className='rating'>
                        <BsFillStarFill className='star' />&nbsp;&nbsp;
                        {movie.rating}/10
                    </p>
                    <div className='halls_languages'>
                        <p className='halls'>
                            {
                                movie.halls.map((hall, index) => {
                                    return (
                                        <span key={index}>{hall} </span>
                                    )
                                })
                            }
                        </p>
                        <p className='languages'>
                            {
                                movie.languages.map((language, index) => {
                                    return (
                                        <span key={index}>{language} </span>
                                    )
                                })
                            }
                        </p>
                    </div>
                    <p className='duration_type_releasedat'>
                        <span className='duration'>
                            {movie.duration}
                        </span>
                        <span>•</span>
                        <span className='type'>
                            {movie.type}
                        </span>
                        <span>•</span>
                        <span className='releasedat'>
                            {movie.releasedat}
                        </span>
                    </p>
                    <Link href={`${pathname}/buytickets`} className='linkstylenone'>
                        <button className='bookbtn'>Book Tickets</button>
                    </Link>
                </div>
            </div>
            <div className='right'>
                <button className='sharebtn'><BsShare className='shareicon'/>Share</button>
            </div>
        </div>
      </div>
      <div className='c2'>
        <h1>About the movie</h1>
        <p>{movie.about}</p>
        <div className='line'></div>
        <h1>Cast</h1>
        <div className='circlecardslider'>
            <Swiper 
                slidesPerView={1}
                spaceBetween={1}
                pagination={{
                    clickable: true,
                }}
                breakpoints={{
                    '@0.00': {
                        slidesPerView: 1,
                        spaceBetween: 2,
                    },
                    '@0.75': {
                        slidesPerView: 2,
                        spaceBetween: 2,
                    },
                    '@1.00': {
                        slidesPerView: 3,
                        spaceBetween: 2,
                    },
                    '@1.50': {
                        slidesPerView: 6,
                        spaceBetween: 2,
                    },
                }}
                modules={[Pagination]}
                className='mySwiper'
            >
                {
                    movie.cast.map((cast, index) => {
                        return(
                            <SwiperSlide key = {index}>
                                <CelebCard {...cast} />
                            </SwiperSlide>
                        )
                    })
                }
            </Swiper>
        </div>
        <div className='line'></div>
        <h1>Crew</h1>
        <div className='circlecardslider'>
        <Swiper 
                slidesPerView={1}
                spaceBetween={1}
                pagination={{
                    clickable: true,
                }}
                breakpoints={{
                    '@0.00': {
                        slidesPerView: 1,
                        spaceBetween: 2,
                    },
                    '@0.75': {
                        slidesPerView: 2,
                        spaceBetween: 2,
                    },
                    '@1.00': {
                        slidesPerView: 3,
                        spaceBetween: 2,
                    },
                    '@1.50': {
                        slidesPerView: 6,
                        spaceBetween: 2,
                    },
                }}
                modules={[Pagination]}
                className='mySwiper'
            >
                {
                    movie.crew.map((crew, index) => {
                        return(
                            <SwiperSlide key = {index}>
                                <CelebCard {...crew} />
                            </SwiperSlide>
                        )
                    })
                }
            </Swiper>
        </div>
        <div className='line'></div>
        <h1>Your might also like</h1>
        <MovieCarousel/>
      </div>
    </div>
  )
}

export default MoviePage
