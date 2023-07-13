import { Text } from '@/ui/atoms'
import { Seo } from '@/ui/organisms'
import { GenericLayout } from '@/ui/templates'
import * as React from 'react'

export default () => {
  return (
    <GenericLayout>
      <Seo />
      <Text translateId="content" />
    </GenericLayout>
  )
}
