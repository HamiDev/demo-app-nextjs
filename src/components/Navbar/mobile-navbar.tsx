"use client";
import { Box, Burger, Button, Drawer } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import React from "react";
import { Logo } from "../Logo/logo";
import { AuthButtons } from "../AuthButtons/auth-buttons";
import { ThemeSwitcher } from "../ThemeSwitch/theme-switcher";

export const MobileNavbar = () => {
  const [opened, { open, close }] = useDisclosure(false);

  return (
    <>
      <Drawer opened={opened} onClose={close} title={<Logo />}>
        <AuthButtons />
        <Box hiddenFrom="sm" pos="fixed" bottom={0} w="90%" py="md">
            <ThemeSwitcher />
        </Box>
      </Drawer>
      <Burger opened={opened} onClick={open} aria-label="Toggle Navbar" />
    </>
  );
};