import { ChakraProvider,} from '@chakra-ui/react'
import { Heading, Button, Input, FormLabel, FormControl, Box, } from '@chakra-ui/react'
import './App.css'
import * as React from 'react'
function App() {
  

  return (
    <div >
      <ChakraProvider>
       
      
        <Box w="400px">
          <Heading mt="50%" fontSize="50" textAlign="center">
            LOGIN
          </Heading>
        <FormControl mt={6}>    
            <Input placeholder='Digite seu E-mail' />
        </FormControl>

        <FormControl mt={6}>
            <Input type="pas" placeholder='Digite sua Senha' />
          </FormControl> 
                  
          <Button mt={6} w="100%" colorScheme='teal' variant='solid'> LOGAR</Button>         
        </Box>
       
      </ChakraProvider>
    
    </div>
  )
}

export default App
