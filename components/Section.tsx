import { Flex, FlexboxProps, BoxProps } from '@chakra-ui/react'

const Section: React.FC<BoxProps> = (props) => {
  return (
    <Flex 
      w="100%" 
      position="relative" 
      justify="flex-start" 
      align="flex-start"
      {...props} 
      as="section">
        {props.children}
    </Flex>
  );
}

export default Section;