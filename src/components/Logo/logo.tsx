"use client";
import { Box, Group, Text, useMantineColorScheme } from "@mantine/core";
import React from "react";
import classes from "./styles.module.css";
import Link from "next/link";

export const Logo = () => {
  const { colorScheme, setColorScheme } = useMantineColorScheme();

  return (
    <Text fz="lg" fw="bold" component={Link} href="/" c={colorScheme === 'dark' ? 'blue.1' : 'blue.7'}>
      <Group gap={4}>
        <Box>Car Rental in&nbsp;&nbsp;</Box>
        <Box>O</Box>
        <Box>M</Box>
        <Box>A</Box>
        <Box>N</Box>
      </Group>
    </Text>
  );
};
