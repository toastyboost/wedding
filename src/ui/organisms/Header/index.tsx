import { Logo } from '@/ui/atoms'
import { Menu } from '@/ui/molecules'
import * as React from 'react'
import styled from 'styled-components'

const headerItems = [
  {
    slug: '#footer',
    caption: 'Anchor',
  },
  {
    slug: '404',
    caption: '404 page',
  },
]

export const Header = () => {
  return (
    <HeaderContainer>
      <HeaderWrapper>
        <Logo />
        <Menu items={headerItems} />
      </HeaderWrapper>
    </HeaderContainer>
  )
}

const HeaderContainer = styled.header`
  background-color: rgba(0, 0, 0, 0.05);
  padding: 12px;
`

const HeaderWrapper = styled.div`
  display: flex;
  align-items: center;
`
