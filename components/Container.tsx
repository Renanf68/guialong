import { Flex, FlexboxProps } from "@chakra-ui/react"

const Container: React.FC<FlexboxProps> = (props) => {
  return (
    <Flex w="90%" maxW="1024px" h="100%" margin="0 auto" as="div" {...props}>
      {props.children}
    </Flex>
  )
}

export default Container