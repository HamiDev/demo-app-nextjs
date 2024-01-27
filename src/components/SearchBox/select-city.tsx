import { Select } from "@mantine/core";
import React from "react";

export default function SelectRegion() {
  return (
    <Select
      label="Region"
      placeholder="Select region"
      data={["Region 1", "Region2"]}
      searchable
      clearable
      nothingFoundMessage="Not Found"
    />
  );
}
