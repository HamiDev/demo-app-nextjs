import { Select } from "@mantine/core";
import React from "react";

export default function SelectCity() {
  return (
    <Select
      label="City"
      placeholder="Select city"
      data={["Muscat", "Salalah", "Seeb", "Sohar", "Nizwa"]}
      searchable
      clearable
      nothingFoundMessage="Not Found"
    />
  );
}
