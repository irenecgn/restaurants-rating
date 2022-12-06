import Head from 'next/head';
import Main from '../components/Main/Main';
import Header from '../components/Header/Header';
import Container from '../components/Container/Container';

export default function Home() {
  return (
    <Container>
      <Head>
        <title>Restaurants Raiting</title>
      </Head>
      <Header />
      <Main />
    </Container>
  );
}
