import React from 'react';
import Head from 'next/head';
import Header from '../components/header/Header';
import Footer from '../components/Footer';
import { useRouter } from 'next/router';
import configs from '../configs';
import StatResults from '../components/search-container/StatsResults';

function Stats({ wordcloud, likes, upvotes, postsmonth, split, twitterusers, redditusers }) {
  const router = useRouter();

  return (
    <div>
      <Head>
        <title>{`${router.query.q || 'LuxSearch'} - Search Statistics`}</title>
        <link rel="icon" href="/favicon.ico?v=2" />
      </Head>
      <Header q={router.query.q} />
      <StatResults
        wordcloud={wordcloud.wordcloud}
        likes={likes.aggregations.avg_likes.value}
        upvotes={upvotes.aggregations.avg_upvotes.value}
        postsmonth={postsmonth}
        split={split}
        twitterusers={twitterusers}
        redditusers={redditusers}
      />
      <Footer />
    </div>
  );
}

export default Stats;

export async function getServerSideProps(context) {
  const q = context.query.q;

  if (q === undefined || q === null || q.length < 1) {
    return {
      redirect: {
        permanent: false,
        destination: '/',
      },
    };
  }

  const wordCounts = await fetch(
    `http://127.0.0.1:5000/api/stats/wordcloud?q=${q}`
  ).then((response) => response.json());

  const avgLikes = await fetch(
    `http://127.0.0.1:5000/api/stats/likes?q=${q}`
  ).then((response) => response.json());

  const avgUpvotes = await fetch(
    `http://127.0.0.1:5000/api/stats/upvotes?q=${q}`
  ).then((response) => response.json());

  const postMonth = await fetch(
    `http://127.0.0.1:5000/api/stats/postsmonth?q=${q}`
  ).then((response) => response.json());

  const split = await fetch(
    `http://127.0.0.1:5000/api/stats/split?q=${q}`
  ).then((response) => response.json());

  const twitterUsers = await fetch(
    `http://127.0.0.1:5000/api/stats/twitterusers?q=${q}`
  ).then((response) => response.json());

  const redditUsers = await fetch(
    `http://127.0.0.1:5000/api/stats/redditusers?q=${q}`
  ).then((response) => response.json());

  return {
    props: {
      wordcloud: wordCounts,
      likes: avgLikes,
      upvotes: avgUpvotes,
      postsmonth: postMonth,
      split: split,
      twitterusers: twitterUsers,
      redditusers: redditUsers
    },
  };
}
