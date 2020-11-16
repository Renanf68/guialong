import { Button, Heading } from "@chakra-ui/react";
import Container from "./Container";
import Section from "./Section";


const Call: React.FC = () => {
  return (
    <Section pt="90px" pb="120px" bg="white">
      <Container flexDir="column" justifyContent="center" alignItems="center">
        <Heading as="h2" fontSize="1.6rem" mb="24px">
          Todos os nossos serviços são gratuitos para você!
        </Heading>
        <Button 
          bg="green.400"
          color="white"
          fontSize="1.4rem"
          p="2rem 3rem"
          _hover={{bg: "green.300"}}  
        >
          Falar com especialistas
        </Button>
      </Container>
    </Section>
  );
}

export default Call;