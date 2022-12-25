import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/autoplay";
import { Pagination, Navigation, Autoplay } from "swiper";
import ReviewData from "./ReviewData";
import TestimonialCard from "./TestimonialCard";
const TestimonialSlider = () => {
  return (
<>
<Swiper
        slidesPerView={1}
        spaceBetween={30}
        modules={[Pagination, Navigation, Autoplay]}
        autoplay={{ delay: 2000 }}
        loop={true}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        className="mySwiper"
      >
{
    ReviewData.map(({image,name,review},i)=>{
return  <SwiperSlide key={i}>

<TestimonialCard  avatar={image} name={name} review={review} />
</SwiperSlide>
    })
}

    </Swiper>
</>
  )
}

export default TestimonialSlider