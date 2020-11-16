import Image from 'next/image'
import { Flex, Heading, Text, InputGroup, Box, Input, InputRightAddon } from "@chakra-ui/react"
import { SearchIcon } from '@chakra-ui/icons'

import Section from './Section'

const Hero: React.FC = () => {
  return (
    <Section h="100vh">
      <Flex
        w="100%"
        h="100%"
        direction="column"
        justifyContent="center"
        alignItems="center"
      >
        <Heading 
          as="h1" 
          textAlign="center" 
          color="white" 
          mb="12px" 
          fontSize="3rem"
          lineHeight="4rem"
          maxW="800px"
          >
          Encontre a nova moradia do seu familiar idoso
        </Heading>
        <Text textAlign="center" color="white" fontWeight="700" mb="24px">
          Busque por casas de repouso, residenciais para idosos e clínicas geriátricas na sua região
        </Text>
        <InputGroup maxW="360px">
          <Input 
            type="text"
            borderLeftRadius="4" 
            placeholder="Cidade" 
            bg="white"
            borderColor="gray.200"
            />
          <InputRightAddon
            borderColor="gray.200"
            bg="green.400"
            _hover={{bg: "green.300"}} 
            cursor="pointer"
            children={<SearchIcon color="white" />} />
        </InputGroup>
      </Flex>
      <Box 
        w="100%"
        height="100%"
        position="absolute"
        top="0"
        left="0"
        zIndex="-100"
      >
        <Image 
          src="/hero-bg.jpg" 
          width={1000} 
          height={451} 
          layout="responsive"
        />
      </Box>
    </Section>
  );
}

export default Hero;