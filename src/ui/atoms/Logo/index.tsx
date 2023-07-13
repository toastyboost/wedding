import { Link } from '@/ui/atoms'
import * as React from 'react'
import styled from 'styled-components'

type LogoProps = {
  className?: string
}

export const Logo = ({ className }: LogoProps) => {
  return (
    <LogoContainer className={className}>
      <Link to="/">Logo</Link>
    </LogoContainer>
  )
}

const LogoContainer = styled.div`
  width: 32px;
  height: 32px;

  &:hover {
    opacity: 0.75;
  }
`
