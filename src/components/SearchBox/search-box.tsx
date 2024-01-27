import { Button, Container, Flex } from "@mantine/core";
import React from "react";
import classes from "./searchbox.module.css";
import SelectCity from "./select-city";
import SelectRegion from "./select-city";
import SelectCarBrand from "./select-car-brand";
import SelectDate from "../SelectDate/select-date";

export default function SearchBox() {
  return (
    <Container className={classes.searchcontainer}>
      <Flex
        direction={{ base: "column", sm: "row" }}
        justify={{ base: "center", sm: "space-between" }}
        align={{ base: "stretch", sm: "flex-end" }}
        gap={{ base: "sm", sm: "lg" }}
      >
        <SelectCity />
        <SelectRegion />
        <SelectCarBrand />
        <SelectDate label="From Date" />
        <SelectDate label="To Date" />
      </Flex>
      <Flex mt="lg">
        <Button fullWidth>Search Cars</Button>
      </Flex>
    </Container>
  );
}
