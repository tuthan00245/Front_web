import React, { useEffect, useState } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation, Thumbs } from 'swiper';
import { ICategory } from '../../../types/category.type';
import ImageCustom from '../../../components/ImageCustom/ImageCustom';
import './HomeSlider.scss';

// import { getBanner } from '../../../api/bannerController';


type Props = {};

const HomeSlider = (props: Props) =>{
    const [banner,setbanner] = useState<[]>();
    useEffect(() => {
        const gethome = async () =>{
            // const resBanner:any = wait getBanner();
        } ;
    })
  return (
    <div className='home__slider'>
        <Swiper
            modules={[Autoplay, Thumbs, Navigation]}
            className="slides"
            spaceBetween={12}
            speed={1000}
            tag="div"
            autoplay={{
                delay: 5000,
                disableOnInteraction: false,
            }}
        >
            {banner?.slice(0, 3).map((item: ICategory, i) => (
                <SwiperSlide key={i} className="slide">
                    <div className="slide__image-card">
                        <ImageCustom src={item.thumbnail} />
                    </div>
                </SwiperSlide>
            ))}
        </Swiper>
    </div>
  )
}

export default HomeSlider