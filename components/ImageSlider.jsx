import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Navigation, Pagination, Autoplay } from "swiper";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import Image from "next/image";
import Box from "@mui/material/Box";
SwiperCore.use([Navigation, Pagination, Autoplay]);

const ImageSlider = (props) => {
  const images = props.images;
  return (
    <Swiper
      className="banner"
      spaceBetween={10}
      slidesPerView={1}
      navigation
      pagination={{ clickable: true }}
      autoplay={{ delay: 2000 }} // 추가
    >
      {images.map((step, index) => (
        <SwiperSlide key={step.label}>
          <Box
            sx={{
              display: "flex",
              flexWrap: "wrap",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Image
              src={step.imgPath}
              alt={`${step.label}`}
              width={800}
              height={600}
            />
          </Box>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default ImageSlider;
