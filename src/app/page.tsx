import { Header } from '@/components/atoms/Header'
import { Text } from '@/components/atoms/Text'
import React from 'react'
import "./globals.css"

const Home = () => {
  return (
    <div>
      <Header variant="hero" align="right" colorToken="NEUTRAL_8">
        Welcome to My App
      </Header>
      <Header variant="h1" align="left" colorToken="NEUTRAL_8">
        Welcome to My App
      </Header>
      <Header variant="h2" align="center" colorToken="NEUTRAL_8">
        Welcome to My App
      </Header>
      <Header variant="h3" align="center" colorToken="NEUTRAL_8">
        Welcome to My App
      </Header>
      <Header variant="h4" align="center" colorToken="NEUTRAL_8">
        Welcome to My App
      </Header>
      <Text variant='body-1'>hiiiiiii</Text>
      <Text variant='body-bold-1'>hiiiiiii</Text>
      <Text variant='body-2'>hiiiiiii</Text>
      <Text variant='body-bold-2'>hiiiiiii</Text>
      <Text variant='caption-1'>hiiiiiii</Text>
      <Text variant='caption-bold-1'>hiiiiiii</Text>
      <Text variant='caption-2'>hiiiiiii</Text>
      <Text variant='caption-bold-2'>hiiiiiii</Text>
      <Text variant='hairline-1'>hiiiiiii</Text>
      <Text variant='hairline-2'>hiiiiiii</Text>
      <Text variant='button-1'>hiiiiiii</Text>
      <Text variant='button-2'>hiiiiiii</Text>
    </div>
  )
}

export default Home