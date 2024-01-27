"use client";
import { Carousel } from "@mantine/carousel";
import { Image, Card, Text, Group, Button, rem, Center } from "@mantine/core";
import React from "react";
import banner1 from "../../assets/images/banner1.jpg";
// import banner2 from "../../assets/images/banner2.avif";
import banner3 from "../../assets/images/banner3.webp";
import banner4 from "../../assets/images/banner4.jpeg";
import banner5 from "../../assets/images/banner5.jpeg";
import banner6 from "../../assets/images/banner6.jpg";
// import banner7 from "../../assets/images/banner7.avif";

const images = [banner1, banner3, banner4, banner5, banner6];

export const LandingSlider = () => {
  const slides = images.map((image, index) => (
    <Carousel.Slide key={index}>
      <Center h={{ base: 400, md: 300, xl: 400 }}>
        <Image src={image.src} />
      </Center>
    </Carousel.Slide>
  ));
  return (
    <Carousel withIndicators loop>
      {slides}
      {/* <Carousel.Slide >
        <Image src={banner1} />
      </Carousel.Slide> */}
    </Carousel>
  );
};
