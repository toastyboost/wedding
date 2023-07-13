import { Container } from '@/ui/atoms'
import { Footer, Header } from '@/ui/organisms'
import * as React from 'react'
import { createTheme } from 'styled-breakpoints'
import styled, { ThemeProvider } from 'styled-components'

type GenereicProps = {
  children: React.ReactNode
}

const theme = createTheme({
  base: '0px',
  phone: '576px',
  smartphone: '768px',
  tablet: '992px',
  laptop: '1200px',
  desktop: '1400px',
})

export const GenericLayout = ({ children }: GenereicProps) => (
  <ThemeProvider theme={theme}>
    <Header />
    <Main>
      <Container>{children}</Container>
    </Main>
    <Footer />
  </ThemeProvider>
)

const Main = styled.main`
  min-height: calc(100vh - var(--menu-height));
`
