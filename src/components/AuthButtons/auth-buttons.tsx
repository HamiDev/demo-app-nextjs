import { Button, Group } from "@mantine/core";
import React from "react";
import Link from "next/link";
import { useMediaQuery } from "@mantine/hooks";

export const AuthButtons = () => {
  // const smallScreen = useMediaQuery('(max-width: 991px');
  return (
    <Group grow>
      <Button component={Link} href="./login" variant="default">
        Login
      </Button>
      <Button component={Link} href="./signup" bg="blue.4">
        Sign up
      </Button>
    </Group>
  );
};
