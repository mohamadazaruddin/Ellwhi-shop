"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import { Box, Text } from "@chakra-ui/react";
import { SliderDataType } from "../services/types";

export default function Slider(props: { SliderData: SliderDataType }) {
  return (
    <Box h="500px">
      <Swiper
        modules={[Navigation, Pagination, Scrollbar, A11y]}
        spaceBetween={50}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
        // scrollbar={{ draggable: true }}
        // onSwiper={(swiper) => console.log(swiper)}
        onSlideChange={() => console.log("slide change")}
      >
        {props.SliderData.map((item, i) => (
          <SwiperSlide key={i}>
            <Box
              bgImage={item.image}
              bgSize="cover"
              bgPosition="center"
              bgRepeat="no-repeat"
              h="full"
              pos="relative"
            >
              <Box bgColor="#00000075" h="full" w="full">
                <Box
                  pos="absolute"
                  top="50%"
                  textAlign="center"
                  left="50%"
                  transform="translate(-50%,-50%)"
                  w="full"
                  maxW="80%"
                >
                  <Text fontSize="6xl" color="#fff" fontWeight="bold">
                    {item.title}{" "}
                  </Text>
                  <Text color="#fff">{item.description}</Text>
                </Box>
              </Box>
            </Box>
          </SwiperSlide>
        ))}
      </Swiper>
    </Box>
  );
}
