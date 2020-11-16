import { useState, useEffect } from 'react'
import { GetStaticPaths, GetStaticProps } from "next"
import { useRouter } from "next/router"
import Error from "next/error"
import { Icon } from "@chakra-ui/react"
import { MdTune } from "react-icons/md"

import Layout from '../../../components/Layout'
import { Flex, Box, Button, Text } from "@chakra-ui/react"
import Container from "../../../components/Container"
import Section from "../../../components/Section"

import { ApiUrl, fetcher } from '../../../services/FirebaseApi'
import HomeCard from "../../../components/HomeCard"

export const getStaticPaths: GetStaticPaths = async () => {
  return {
    paths: [],
    fallback: true,
  };
};

export const getStaticProps: GetStaticProps = async ({params}) => {
  //const result = await fetcher(`${ApiUrl}/${params.uf}/${params.city}`)
  const result = await fetcher(ApiUrl)
  const fields = result.documents.map( home => home.fields)
  const homes = fields.map(home => {
    let image = null
    if(Object.keys(home.images.arrayValue).length > 0) {
      image = home.images.arrayValue.values[0].stringValue
    }
    return {
      city: home.city.stringValue,
      slug: home.slug.stringValue,
      name: home.name.stringValue,
      description: home.description.stringValue,
      id: home.id.stringValue,
      uf: home.uf.stringValue,
      image
    }
  })
  return {
    props: {
      homes
    },
    revalidate: 1,
  };
};

export default function HomeList({ homes }) {
  const [filter, setFilter] =useState(false)
  const [homeList, setHomeList] =useState([])
  useEffect(() => {
    setHomeList(homes);
  }, []);
  const { isFallback } = useRouter();
  	if (!isFallback && !homes) {
		return <Error statusCode={404} title="Place not found!" />;
	}
  if (isFallback) {
    return(
      <Layout>
        <Section h="85vh"> 
          <Container flexDir="column">
            <Text textAlign="center">Carregando...</Text>
          </Container>
        </Section>
      </Layout>
    );
  }
  function handleFilter() {
    if(!filter) {
      setHomeList(preState => {
        const newState = preState.filter(home => home.image !== null)
        return newState
      })
    } else {
      setHomeList(homes)
    }
    setFilter(!filter)
  }
  console.log(homeList)
  return (
    <Layout>
      <Section h="85vh"> 
      <Container flexDir="column">
        <Flex 
          w="100%" 
          flexDir="row" 
          justifyContent="center" 
          alignItems="center"
          p="1rem 0"
          borderBottom="1px solid rgba(0,0,0,.1)"
        >
          <Icon as={MdTune} />
          <Button 
            bg="none"
            p="0 2rem"
            _hover={{bg: "none", color: "blue.600"}}
            outline="none"
            _focus={{outline: "none"}}
            _active={{bg: "none"}}
            onClick={handleFilter}
            color={filter ? "blue.600" : "#333"}
          >
            Com fotos
          </Button>
        </Flex>
        <Box p="4rem 0">
          {
            homeList?.length > 0 ? (
              homeList.map((home, index) => (
                <HomeCard 
                  key={index}
                  image={home.image}
                  name={home.name}
                  description={home.description}
                  city={home.city}
                  uf={home.uf}
                  slug={home.slug}
                  home_id={home.id}
                />
              ))
            ) : (
              <Text textAlign="center">
                Não foram encontradas moradias para esta localidade.
              </Text>
            )
          }
        </Box>
      </Container>
      </Section>
    </Layout>
  );/*
  return (
    <Layout>
      <Section h="85vh"> 
        <Container flexDir="column">
          <Text>Teste</Text>
        </Container>
      </Section>
    </Layout>
  )*/
}