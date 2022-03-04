import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper";

import './SlideHome.css'
export default function SlideHome() {
  return (
    <div className="container containerSlide">
      <Swiper
        spaceBetween={10}
        slidesPerView={2}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide className="imageSlide"><img src="https://cdn.cellphones.com.vn/media/resized//ltsoft/promotioncategory/rmn11-595-100-max.png" alt="" /></SwiperSlide>
        <SwiperSlide className="imageSlide"><img src="https://cdn.cellphones.com.vn/media/resized//ltsoft/promotioncategory/banner-cate-realme-0012.png" alt="" /></SwiperSlide>
        <SwiperSlide className="imageSlide"><img src="https://cdn.cellphones.com.vn/media/resized//ltsoft/promotioncategory/sliding_cate_8.3.png" alt="" /></SwiperSlide>
        <SwiperSlide className="imageSlide"><img src="https://cdn.cellphones.com.vn/media/resized//ltsoft/promotioncategory/realme-9-pro-cate-001.png" alt="" /></SwiperSlide>
      </Swiper>
    </div>
  )
    ;
}                                               