import { Container } from '@mantine/core'
import React from 'react'
import { LandingSlider } from './slider';
import classes from './banner.module.css';
import SearchBox from '@/components/SearchBox/search-box';

export const Banner = () => {
  return (
    <Container w="100%" p="0" fluid className={classes.bannerbg}>
        <LandingSlider />
        <Container pb="4rem">
          <SearchBox />
        </Container>
    </Container>
  )
}
