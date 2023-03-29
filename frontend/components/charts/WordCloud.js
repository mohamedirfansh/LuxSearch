import React from 'react';
import { TagCloud } from 'react-tagcloud';

const data = [
  { value: 'JavaScript', count: 38 },
  { value: 'React', count: 30 },
  { value: 'Nodejs', count: 28 },
  { value: 'Express.js', count: 25 },
  { value: 'HTML5', count: 33 },
  { value: 'MongoDB', count: 18 },
  { value: 'CSS3', count: 20 },
  { value: 'asd', count: 20 },
  { value: 'qweqwe', count: 20 },
  { value: 'eewrf', count: 25 },
  { value: 'cwqwd', count: 19 },
  { value: 'werwer', count: 10 },
  { value: 'asdasdw', count: 7 },
  { value: 'htr', count: 17 },
  { value: 'kka', count: 25 },
  { value: 'popo', count: 13 },
  { value: 'llpl', count: 19 },
  { value: 'zzzzzz', count: 23 },
  { value: 'wer', count: 12 },
  { value: 'xoxo', count: 20 },
  { value: 'lqwlljw', count: 3 },

];

function WordCloud() {
  return <TagCloud minSize={12} maxSize={35} tags={data} />;
}

export default WordCloud;
