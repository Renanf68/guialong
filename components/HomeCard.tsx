import { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Flex, Box, Heading, Text, Icon, Button} from '@chakra-ui/react'
import { MdPlace } from 'react-icons/md'

interface cardProps {
  image: string
  name: string
  description: string
  city: string
  uf: string
  slug: string
  home_id: string
}

const HomeCard: React.FC<cardProps> = ({
  image,
  name,
  description,
  city,
  uf,
  slug,
  home_id
}) => {
  return (
    <Flex 
      w="100%" 
      flexDirection={["column", "row"]}
      justifyContent="space-between"
      p="0.5rem" 
      boxShadow="2px 2px 2px rgba(0,0,0,.1)" 
      borderRadius="4px" 
      mb="2rem">
      <Box w="100%" maxW="300px">
        <Image 
          src={`/${image ? image : "placeholder.svg"}?alt=media`} 
          width={300} height={150} 
          loading="eager"  
        />
      </Box>
      <Box w="100%" ml="2rem">
        <Heading as="h3" fontSize="1.2rem">{name}</Heading>
        <Text mb="1rem">{description}</Text>
        <Flex flexDir="row" alignItems="center" mb="1rem">
          <Icon as={MdPlace} />
          <Text ml="0.5rem">
            {`${city.charAt(0).toUpperCase() + city.substring(1)} - ${uf.toUpperCase()}`}
          </Text>
        </Flex>
      </Box>
      <Flex w="100%" maxW="8rem" ml="2rem" alignItems="center">
        <Link href={`/moradia/${city}-${uf}/${slug + "&" + home_id}`}>
          <Button 
            bg="white" 
            border="1px" 
            borderColor="green.400" 
            color="green.400"
            _hover={{bg: "green.400", color: "white"}}
            >
            Detalhes
          </Button>
        </Link>
      </Flex>
    </Flex>
  );
}

export default HomeCard;