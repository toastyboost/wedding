import { Translate } from '@/ui/atoms'
import * as React from 'react'
import { up } from 'styled-breakpoints'
import styled from 'styled-components'

type TextProps = {
  className?: string
  translateId?: string
  children?: React.ReactNode
}

export const Text = ({ className, translateId, children }: TextProps) => {
  return (
    <TextContainer className={className} as="p">
      {translateId && <Translate id={translateId} />}
      {children}
    </TextContainer>
  )
}

const TextContainer = styled.p`
  color: var(--text-color);
  line-height: var(--text-line-height);
  max-width: var(--text-width);

  ${up('phone')} {
    font-size: 1.4rem;
  }

  ${up('tablet')} {
    font-size: var(--text-size);
  }
`
