import React from 'react';
import Head from 'next/head';
import Header from '../components/header/Header';
import Footer from '../components/Footer';
import { useRouter } from 'next/router';
import configs from '../configs';
import StatResults from '../components/search-container/StatsResults';

function Stats({ results }) {
  const router = useRouter();

  return (
    <div>
      <Head>
        <title>{`${router.query.q || 'LuxSearch'} - Search Statistics`}</title>
        <link rel="icon" href="/favicon.ico?v=2" />
      </Head>
      <Header q={router.query.q} />
      <StatResults />
      <Footer />
    </div>
  );
}

export default Stats;

// export async function getServerSideProps(context) {
//   const useDummyStats = configs.useDummyStats;
//   const q = context.query.q;
//   const startIndex = context.query.start || '0';

//   if (q === undefined || q === null || q.length < 1) {
//     return {
//       redirect: {
//         permanent: false,
//         destination: '/',
//       },
//     };
//   }

//   const resStats = useDummyStats
//     ? ResponseTwitter
//     : await fetch(
//         `http://127.0.0.1:5000/api/stats?q=${q}&start=${startIndex}`
//       ).then((response) => response.json());

//   return {
//     props: {
//       results: resStats,
//     },
//   };
// }
