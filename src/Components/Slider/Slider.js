import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/autoplay";
import { Pagination, Navigation, Autoplay } from "swiper";
import ProjectCard from "../ProjectsCard/ProjectCard";
import CardData from "./CardData";
import './Slider.css'
const Slider = () => {
  return (
    <div>
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
        {CardData.map((ele,i) => {
          return (
            <SwiperSlide key={i}>
              <ProjectCard  img={ele.image} title={ele.heading} description={ele.des} icon1={ele.icon1} icon2={ele.icon2} icon3={ele.icon3} icon4={ele.icon4} link={ele.previewLink} />
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
};

export default Slider;
