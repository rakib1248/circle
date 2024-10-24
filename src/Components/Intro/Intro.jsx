import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "./Intro.scss";

// import required modules
import { Autoplay, Pagination, Navigation } from "swiper/modules";

const Intro = () => {
  return (
    <>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        navigation={false}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide>
          <div className="slider">
            <img
              className="slider--image"
              src="../../../img/intro1.png"
              alt=""
            />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="slider">
            <img
              className="slider--image"
              src="../../../img/intro5.jpg"
              alt=""
            />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="slider">
            <img
              className="slider--image"
              src="../../../img/intro6.jpg"
              alt=""
            />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="slider">
            <img
              className="slider--image"
              src="../../../img/intro2.jpg"
              alt=""
            />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="slider">
            <img
              className="slider--image"
              src="../../../img/intro3.png"
              alt=""
            />
          </div>
        </SwiperSlide>
      </Swiper>
    </>
  );
};

export default Intro;
