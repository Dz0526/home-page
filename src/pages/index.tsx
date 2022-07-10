import { Box, Container } from '@chakra-ui/react';
import { Navbar } from 'components/Navbar';
import type { NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';

const Home: NextPage = () => {
  return (
    <Box as='main' pb={8}>
      <Head>
        <meta name='description' content="Daiki's Homepage" />
        <title>Daiki Ito - Homepage</title>
      </Head>
      <Container>
        <Navbar />
      </Container>
    </Box>
  );
};

export default Home;
