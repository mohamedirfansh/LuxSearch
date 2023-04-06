import Head from 'next/head';
import React from 'react';
import Header from '../components/header/Header';
import Response from '../dummy_response/Response';
import Response2 from '../dummy_response/Response2';

import { useRouter } from 'next/router';
import SearchResults from '../components/search-container/SearchResults';
import Footer from '../components/Footer';
import configs from '../configs';

function Search({ results, related }) {
  const router = useRouter();
  return (
    <div>
      <Head>
        <title>{`${router.query.q || 'LuxSearch'} - Search Results`}</title>
        <link rel="icon" href="/favicon.ico?v=2" />
      </Head>
      <Header q={router.query.q} />
      <SearchResults results={results} related={related} />
      <Footer />
    </div>
  );
}

export default Search;

export async function getServerSideProps(context) {
  const useDummyData = configs.useDummyData;
  const apiURL = process.env.API_URL;
  const q = context.query.q;
  const startIndex = context.query.start || '0';

  if (q === undefined || q === null || q.length < 1) {
    return {
      redirect: {
        permanent: false,
        destination: '/',
      },
    };
  }

  const resData = useDummyData
    ? Response
    : await fetch(`${apiURL}/search?q=${q}&start=${startIndex}`).then(
        (response) => response.json()
      );

  return {
    props: {
      results: resData,
      // related: secData,
    },
  };
}
