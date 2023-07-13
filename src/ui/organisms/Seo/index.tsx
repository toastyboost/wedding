import { useIntl } from 'gatsby-plugin-react-intl'
import * as React from 'react'
import { Helmet } from 'react-helmet'

export const Seo = () => {
  const intl = useIntl()

  const title = intl.formatMessage({ id: 'title' })
  const description = intl.formatMessage({ id: 'description' })

  return (
    <Helmet>
      <html lang={intl.locale} />
      <title>{title}</title>
      <meta name="description" content={description} />

      <meta httpEquiv="X-UA-Compatible" content="IE=edge" />

      <meta
        name="viewport"
        content="width=device-width, initial-scale=1, maximum-scale=1, minimal-ui, viewport-fit=cover"
      />

      <meta name="imagetoolbar" content="no" />
      <meta name="msthemecompatible" content="no" />
      <meta name="cleartype" content="on" />
      <meta name="HandheldFriendly" content="true" />
      <meta name="format-detection" content="telephone=no" />
      <meta name="format-detection" content="address=no" />

      <meta name="apple-mobile-web-app-capable" content="yes" />
      <meta
        name="apple-mobile-web-app-status-bar-style"
        content="black-translucent"
      />
    </Helmet>
  )
}
