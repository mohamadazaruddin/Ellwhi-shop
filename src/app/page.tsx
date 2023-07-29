"use client";
import Image from "next/image";
import styles from "./page.module.css";
import Header from "./components/Header";
import { Box, useDisclosure } from "@chakra-ui/react";
import Slider from "./components/Slider";
import { SliderDataType } from "./services/types";

export default function Home() {
  const SliderData: SliderDataType = [
    {
      id: 1,
      title: "VALENTIN PAUL ESSENTIAL COLLECTION",
      description:
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Illo laborum accusantium quod",
      image:
        "https://k4j3j2s7.rocketcdn.me/clotya/wp-content/uploads/2022/05/slider-11.jpg",
    },
    {
      id: 1,
      title: "VALENTIN PAUL ESSENTIAL COLLECTION",
      description:
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Illo laborum accusantium quod",
      image:
        "https://k4j3j2s7.rocketcdn.me/clotya/wp-content/uploads/2022/05/slider-11.jpg",
    },
    {
      id: 1,
      title: "VALENTIN PAUL ESSENTIAL COLLECTION",
      description:
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Illo laborum accusantium quod",
      image:
        "https://k4j3j2s7.rocketcdn.me/clotya/wp-content/uploads/2022/05/slider-11.jpg",
    },
    {
      id: 1,
      title: "VALENTIN PAUL ESSENTIAL COLLECTION",
      description:
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Illo laborum accusantium quod",
      image:
        "https://k4j3j2s7.rocketcdn.me/clotya/wp-content/uploads/2022/05/slider-11.jpg",
    },
    {
      id: 1,
      title: "VALENTIN PAUL ESSENTIAL COLLECTION",
      description:
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Illo laborum accusantium quod",
      image:
        "https://k4j3j2s7.rocketcdn.me/clotya/wp-content/uploads/2022/05/slider-11.jpg",
    },
    {
      id: 1,
      title: "VALENTIN PAUL ESSENTIAL COLLECTION",
      description:
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Illo laborum accusantium quod",
      image:
        "https://k4j3j2s7.rocketcdn.me/clotya/wp-content/uploads/2022/05/slider-11.jpg",
    },
    {
      id: 1,
      title: "VALENTIN PAUL ESSENTIAL COLLECTION",
      description:
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Illo laborum accusantium quod",
      image:
        "https://k4j3j2s7.rocketcdn.me/clotya/wp-content/uploads/2022/05/slider-11.jpg",
    },
  ];
  return (
    <Box bgColor="primary.100">
      <Header />
      <Slider SliderData={SliderData} />
    </Box>
  );
}
