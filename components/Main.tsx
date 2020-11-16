import { Flex } from "@chakra-ui/react"

const Main: React.FC = ({ children }) => {
  return (
    <Flex 
      w="100%" 
      justify="center" 
      align="flex-start" 
      as="main">
      {children}
    </Flex>
  )
}

export default Main