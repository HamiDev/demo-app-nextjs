import { Box, Button, Group, Text } from "@mantine/core";
import React from "react";
import classes from "./styles.module.css";
import Link from "next/link";
import { Logo } from "../Logo/logo";
import { ThemeSwitcher } from "../ThemeSwitch/theme-switcher";
import { MobileNavbar } from "./mobile-navbar";
import { AuthButtons } from "../AuthButtons/auth-buttons";

export const Navbar = () => {
  return (
    <Box pl="lg" pr="lg" className={classes.header}>
      <Group justify="space-between" h="100%">
        {/* <div>Car Rental</div> */}
        <Logo />
        <Box visibleFrom="md">
          <AuthButtons />
        </Box>
        <Box visibleFrom="sm">
          <ThemeSwitcher />
        </Box>
        <Box hiddenFrom="md">
          <MobileNavbar />
        </Box>
      </Group>
    </Box>
  );
};
