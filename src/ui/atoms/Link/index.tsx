import { Link as GatsbyLink } from 'gatsby-plugin-react-intl'
import * as React from 'react'
import styled from 'styled-components'

type LinkProps = {
  children?: React.ReactNode
  className?: string
  activeClassName?: string
  to?: string
  target?: string
  onClick?: (e: React.MouseEvent<HTMLAnchorElement>) => void
}

export const Link = ({
  children,
  className,
  activeClassName = 'active',
  to = '',
  target,
  onClick,
}: LinkProps) => {
  const isInternal = to && /^\/(?!\/)/.test(to)

  if (isInternal) {
    return (
      <RouterLink
        className={className}
        to={to}
        activeClassName={activeClassName}
        onClick={onClick}
      >
        {children}
      </RouterLink>
    )
  }
  return (
    <ExternalLink
      className={className}
      href={to}
      target={target}
      onClick={onClick}
    >
      {children}
    </ExternalLink>
  )
}

const RouterLink = styled(GatsbyLink)`
  color: var(--link-color);

  &:hover {
    color: var(--link-color--hover);
  }

  &[aria-current='page'] {
    color: var(--link-color--active);
  }
`

const ExternalLink = styled.a`
  color: var(--link-color);

  &:hover {
    color: var(--link-color--hover);
  }
`
