import React from 'react'
import { Movie } from '../../Data/MovieData'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay } from 'swiper/modules'
import { FaHeart } from 'react-icons/fa'
import FlexMovieItem from '../FlexMovieItem'

function Baner() {
    return (
        <div className='relative w-full'>
            <Swiper
                direction='vertical'
                spaceBetween={0}
                slidesPerView={1}
                loop={true}
                speed={1000}
                modules={[Autoplay]}
                autoplay={{ delay: 1000, disableOnInteraction: false }}
                className='w-full xl:h-96 bg-dry lg:h-64 h-48'
            >
                {
                    Movie.slice(0, 6).map((mov, ind) => (
                        <SwiperSlide key={ind}
                            className='relative rounded overflow-hidden'
                        >
                            <img src={`/image/movies/${mov.image}`} alt={mov.name}
                                className='w-full h-full object-cover'
                            />
                            <div className='absolute pl-0 xl:pl-52 sm:pl-32 top-0 bottom-0 right-0 linear-bg left-0 flex flex-col justify-center gap-4 lg:gap-8 md:gap-5'>
                                <h1
                                    className='text-xl font-bold xl:text-4xl sm:text-2xl'
                                >{mov.name} </h1>
                                <div className='flex gap-5 items-center text-dryGray'>
                                    <FlexMovieItem movie={mov} />
                                </div>
                                <div className='flex gap-5 items-center'>
                                    <div className='bg-subMain hover:text-main transition text-white  px-8 py-3 rounded font-medium text-xs sm:text-sm '>
                                        Watch
                                    </div>
                                    <button className='bg-white hover:text-subMain transition text-white px-4 py-3 rounded text-sm bg-opacity-30'>
                                        <FaHeart />
                                    </button>
                                </div>
                            </div>
                        </SwiperSlide>
                    ))
                }
            </Swiper>
        </div>
    )
}

export default Baner