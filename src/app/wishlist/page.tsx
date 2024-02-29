import Container from '@/components/Container'
import Title from '@/components/TItle'
import Wishlist from '@/components/Wishlist'
import React from 'react'

const page = () => {
  return (
  <Container>
    <Title title='Your Wishlist' />
    <Wishlist />
  </Container>
  )
}

export default page