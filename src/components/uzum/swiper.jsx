import { A11y, Navigation, Pagination, Scrollbar } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperLogo1 from '../../assets/images/slider-img-1.jpg';
import SwiperLogo2 from '../../assets/images/slider-img-2.jpg';
import SwiperLogo3 from '../../assets/images/slider-img-3.jpg';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

const Carousel = () => {
    return (
        <Swiper
            modules={[Navigation, Pagination, Scrollbar, A11y]}
            spaceBetween={50}
            slidesPerView={1}
            navigation
            pagination={{ clickable: true }}
            onSlideChange={() => console.log('slide change')}
            onSwiper={(swiper) => console.log(swiper)}
        >
            <SwiperSlide>
                <div>
                    <img src={SwiperLogo1} alt='' />
                </div>
            </SwiperSlide>
            <SwiperSlide><div>
                <img src={SwiperLogo2} alt='' />
            </div>
            </SwiperSlide>
            <SwiperSlide><div>
                <img src={SwiperLogo3} alt='' />
            </div>
            </SwiperSlide>
        </Swiper>
    );
};

export default Carousel