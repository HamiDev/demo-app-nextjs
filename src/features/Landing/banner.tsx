import { Container } from '@mantine/core'
import React from 'react'
import { LandingSlider } from './slider';
import classes from './banner.module.css';

export const Banner = () => {
  return (
    <Container w="100%" p="0" fluid className={classes.bannerbg}>
        <LandingSlider />
    </Container>
  )
}
