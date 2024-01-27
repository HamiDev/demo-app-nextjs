import { ReactNode, useState } from "react";
import { DateInput, DateValue } from "@mantine/dates";
import React from "react";

interface Props {
  label?: ReactNode;
  value?: DateValue | Date;
  minDate?: Date;
  onChange?: (value: DateValue) => void;
}

export default function SelectDate({ label, value, minDate, onChange }: Props) {
  return (
    <DateInput
      value={value}
      onChange={onChange}
      label={label}
      placeholder="Select Date"
      minDate={minDate}
      width="100%"
    />
  );
}
