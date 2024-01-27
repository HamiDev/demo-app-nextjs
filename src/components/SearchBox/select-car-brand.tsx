import { Select } from "@mantine/core";
import React from "react";

export default function SelectCarBrand() {
  return (
    <Select
      label="Car Brand"
      placeholder="Select brand"
      data={["Doge", "Ford", "Benz", "BMW", "Toyota", "Audi", "Porche"]}
      searchable
      clearable
      nothingFoundMessage="Not Found"
    />
  );
}
