import { Translate } from '@/ui/atoms'
import * as React from 'react'
import styled from 'styled-components'

type ButtonProps = {
  className?: string
  onClick?: React.MouseEventHandler<HTMLDivElement>
  children?: React.ReactNode
  translateId?: string
}

export const Button = ({
  className,
  children,
  onClick,
  translateId,
}: ButtonProps) => {
  return (
    <ButtonContainer className={className} onClick={onClick}>
      {translateId && <Translate id={translateId} />}
      {children}
    </ButtonContainer>
  )
}

const ButtonContainer = styled.div`
  font-family: var(--primary-font);
  background-color: var(--green);
  color: #fff;
  border-radius: 3px;
  padding: 12px 12px 9px 12px;
  font-size: 1.6rem;
  text-transform: uppercase;
  max-width: 210px;
  text-align: center;
  cursor: pointer;
`
