import React from 'react';
import Head from 'next/head';
import Header from '../components/header/Header';
import Footer from '../components/Footer';
import { useRouter } from 'next/router';
import configs from '../configs';
import StatResults from '../components/search-container/StatsResults';

function Stats({
  wordcloud,
  likes,
  upvotes,
  postsmonth,
  split,
  twitterusers,
  redditusers,
  subreddit
}) {
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
        subreddit={subreddit}
      />
      <Footer />
    </div>
  );
}

export default Stats;

export async function getServerSideProps(context) {
  const apiURL = process.env.API_URL;
  const q = context.query.q;

  if (q === undefined || q === null || q.length < 1) {
    return {
      redirect: {
        permanent: false,
        destination: '/',
      },
    };
  }

  const wordCounts = await fetch(`${apiURL}/stats/wordcloud?q=${q}`).then(
    (response) => response.json()
  );

  const avgLikes = await fetch(`${apiURL}/stats/likes?q=${q}`).then(
    (response) => response.json()
  );

  const avgUpvotes = await fetch(`${apiURL}/stats/upvotes?q=${q}`).then(
    (response) => response.json()
  );

  const postMonth = await fetch(`${apiURL}/stats/postsmonth?q=${q}`).then(
    (response) => response.json()
  );

  const split = await fetch(`${apiURL}/stats/split?q=${q}`).then((response) =>
    response.json()
  );

  const twitterUsers = await fetch(`${apiURL}/stats/twitterusers?q=${q}`).then(
    (response) => response.json()
  );

  const redditUsers = await fetch(`${apiURL}/stats/redditusers?q=${q}`).then(
    (response) => response.json()
  );

  const subreddit = await fetch(`${apiURL}/stats/subreddit?q=${q}`).then(
    (response) => response.json()
  );

  return {
    props: {
      wordcloud: wordCounts,
      likes: avgLikes,
      upvotes: avgUpvotes,
      postsmonth: postMonth,
      split: split,
      twitterusers: twitterUsers,
      redditusers: redditUsers,
      subreddit: subreddit
    },
  };
}
