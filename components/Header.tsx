import Image from 'next/image'
import Link from 'next/link'
import { Flex, Box, Text } from "@chakra-ui/react";
import Container from "./Container";


const Header: React.FC = () => {
  return (
    <Flex
      h="60px"
      direction="row"
      justifyContent="center"
      alignItems="center"
      bg="white"
    >
      <Container>
        <Flex
          w="100%"
          direction="row"
          justifyContent="space-between"
          alignItems="center"
        >
          <Box w="140px" mt="3px">
            <Link href="/">
              <a>
                <Image src="/logo.webp" width={928} height={296} />
              </a>
            </Link>
          </Box>
          <Flex
            direction="row"
            justifyContent="center"
            alignItems="center"
          >
            <Text fontWeight="700" color="gray.600">
              <Link href="/">
                <a>Início</a>
              </Link>
            </Text>
            <Text fontWeight="700" color="gray.600" ml="24px">
              <Link href="/">
                <a>Blog</a>
              </Link>
            </Text>
          </Flex>
          </Flex>
      </Container>
    </Flex>
  );
}

export default Header;