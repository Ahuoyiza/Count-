import React  from 'react';
import { ChakraProvider } from "@chakra-ui/react";
import theme  from './theme';
import Hero from './components/Hero';
const App = () => {
  return (
    <ChakraProvider theme={theme}>
      <Hero />
      
    </ChakraProvider>
  )
}

export default App

