
'use client'

import { CacheProvider } from '@chakra-ui/next-js'
import { ChakraProvider } from '@chakra-ui/react'
import GlobalContextProvider from '@/context/store'
import { ClerkProvider } from '@clerk/nextjs'

export default function Providers({
  children
}: {
  children: React.ReactNode
}) {
  return (
    <ClerkProvider>
      <CacheProvider>
        <ChakraProvider>
          <GlobalContextProvider>
            {children}
          </GlobalContextProvider>
        </ChakraProvider>
      </CacheProvider>
    </ClerkProvider>
  )
}