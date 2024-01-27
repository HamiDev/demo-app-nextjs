"use client";
import React from "react";
import { Banner } from "./banner";
// import SearchMap from "@/components/Map/search-map";
import { Container } from "@mantine/core";
import dynamic from "next/dynamic";

const SearchMap = dynamic(() => import("@/components/Map/search-map"), { ssr: false });

export const Landing = () => {
  return (
    <div>
      <Banner />
      <Container mt="-3rem" px="1rem" mb="2rem">
        <SearchMap />
      </Container>
    </div>
  );
};
