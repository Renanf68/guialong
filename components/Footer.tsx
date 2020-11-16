import { Flex, Text } from '@chakra-ui/react'
import Link from 'next/link'
import Container from './Container'

const Footer: React.FC = () => {
  return (
    <Flex 
        as="footer"
        w="100%"
        direction="row"
        justifyContent="center"
        alignItems="center"
        p="18px"
        bg="#0d2593"
        color="white"
        fontWeight="700"
        fontSize="12px"
      >
        <Container 
          flexDir="row"
          justifyContent="space-between"
          alignItems="center"
        >
          <Text>
            © {new Date().getFullYear()} | Guia Longevidade. All rights reserved.
          </Text>
          <Link href="/">
            <a>Termos de uso</a>
          </Link>
        </Container>
      </Flex>
  );
}

export default Footer;