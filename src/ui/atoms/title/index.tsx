import { Translate } from '@/ui/atoms'
import * as React from 'react'
import styled from 'styled-components'

const levels = {
  1: 'h1',
  2: 'h2',
  3: 'h3',
}

type TitleProps = {
  className?: string
  level?: 1 | 2 | 3
  translateId?: string
  children?: React.ReactNode
}

export const Title = ({ className, level = 1, translateId }: TitleProps) => {
  return (
    <TitleWrap className={className} as={levels[level] as any} level={level}>
      <Translate id={translateId} />
    </TitleWrap>
  )
}

const map = (props: any) => ({
  'data-level': props.level,
})

const TitleWrap = styled.div.attrs(map)`
  color: #000;

  /* h1 */

  &[data-level='1'] {
    font-size: 5.2rem;
  }

  /* h2 */

  &[data-level='2'] {
    font-size: 3.6rem;
  }

  /* h3 */

  &[data-level='3'] {
    font-size: 1.8rem;
  }
`
