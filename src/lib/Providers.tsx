
'use client'

import { CacheProvider } from '@chakra-ui/next-js'
import { ChakraProvider } from '@chakra-ui/react'
import GlobalContextProvider from '@/context/store'

export default function Providers({
  children
}: {
  children: React.ReactNode
}) {
  return (
    <CacheProvider>
      <ChakraProvider>
        <GlobalContextProvider>
          {children}
        </GlobalContextProvider>
      </ChakraProvider>
    </CacheProvider>
  )
}