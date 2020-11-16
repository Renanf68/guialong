import { useState, useEffect } from 'react'

import { GetStaticPaths, GetStaticProps } from "next"
import { useRouter } from "next/router"
import Error from "next/error"

import { Button, Heading, Text } from "@chakra-ui/react"
import Layout from '../../../components/Layout'
import Section from '../../../components/Section'
import Container from '../../../components/Container'

import { ApiUrl, fetcher } from '../../../services/FirebaseApi'
import { getHomeMapaImgUrl } from '../../../utils/utils'

export const getStaticPaths: GetStaticPaths = async () => {
  return {
    paths: [],
    fallback: true,
  };
};

export const getStaticProps: GetStaticProps = async ({params}) => {
  const { slug } = params
  const home_id = slug.toString().split("&")[1]
  const result = await fetcher(`${ApiUrl}/${home_id}`)
  const lat = result.fields.lat.stringValue
  const long = result.fields.long.stringValue
  console.log(result.fields.images.arrayValue)
  let images = []
  if(Object.keys(result.fields.images.arrayValue).length > 0) {
    images = result.fields.images.arrayValue.values.map( image => image.stringValue)
  }
  const home = {
    id: result.fields.id.stringValue,
    name: result.fields.name.stringValue,
    description: result.fields.description.stringValue,
    city: result.fields.city.stringValue, 
    uf: result.fields.uf.stringValue,
    images,
    slug: result.fields.slug.stringValue,
    lat,
    long,
    imgMap: getHomeMapaImgUrl(lat, long)
  }
  return {
    props: {
      home
    },
    revalidate: 1,
  };
};

export default function Place({ home }) {
  const { isFallback, back } = useRouter();
  if (!isFallback && !home) {
		return <Error statusCode={404} title="Place not found!" />;
	}
  if (isFallback) {
    return (
      <Layout>
        <Section h="85vh"> 
          <Container flexDir="column">
            <Text textAlign="center">Carregando...</Text>
          </Container>
        </Section>
      </Layout>
    );
  }
  return (
    <Layout>
      <Section h="85vh" pt="6rem"> 
      <Container flexDir="column">
        <Heading as="h2" fontSize="1.2rem">{home.name}</Heading>
        <Text mb="2rem">{home.description}</Text>
        <Button w="6rem" onClick={() => back()}>
          Voltar
        </Button>
      </Container>
      </Section>
    </Layout>
  );
}