import React from 'react';
import Head from 'next/head';
import Header from '../components/header/Header';
import Footer from '../components/Footer';
import { useRouter } from 'next/router';
import TwitterResults from '../components/search-container/TwitterResults';
import ResponseTwitter from '../dummy_response/ResponseTwitter';
import configs from '../configs';

function Twitter({ results }) {
  const router = useRouter();

  console.log(results);
  return (
    <div>
      <Head>
        <title>{`${router.query.q || 'LuxSearch'} - Twitter Results`}</title>
        <link rel="icon" href="/favicon.ico?v=2" />
      </Head>
      <Header q={router.query.q} />
      <TwitterResults results={results} />
      <Footer />
    </div>
  );
}

export default Twitter;

export async function getServerSideProps(context) {
  const useDummyData = configs.useDummyData;
  const q = context.query.q;

  if (q === undefined || q === null || q.length < 1) {
    return {
      redirect: {
        permanent: false,
        destination: '/',
      },
    };
  }

  const resData = useDummyData
    ? ResponseTwitter
    : await fetch(`http://127.0.0.1:5000/api/twitter?q=${q}`).then((response) =>
        response.json()
      );

  return {
    props: {
      results: resData,
    },
  };
}
