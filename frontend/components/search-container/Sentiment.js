import React from 'react';

function Sentiment({ value }) {
  let color;
  if (value <= 0.25) {
    color = 'bg-red-500 dark:bg-red-600';
  } else if (0.25 < value && value < 0.75) {
    color = 'bg-amber-400 dark:bg-amber-500';
  } else {
    color = 'bg-green-400 dark:bg-green-600';
  }

  let sentiment;
  if (value < 0.2) {
    sentiment = 'Very Negative 😡';
  } else if (0.2 <= value && value < 0.4) {
    sentiment = 'Negative 😠';
  } else if (0.4 <= value && value < 0.6) {
    sentiment = 'Neutral 😐';
  } else if (0.6 <= value && value < 0.8) {
    sentiment = 'Positive 😊';
  } else {
    sentiment = 'Very Positive 🤩';
  }

  return (
    <div className="col-span-12 lg:col-span-5 p-4 text-center">
      <h2 className="text-lg mb-5">Public sentiment:</h2>
      <div className="w-full bg-neutral-200 dark:bg-neutral-600 rounded-full h-4">
        <div
          className={`${color} p-0.5 text-center text-xs font-medium leading-none text-primary-100 rounded-full h-4`}
          style={{ width: `${value * 100}%` }}
        >
          {`${value * 100}%`}
        </div>
      </div>
      <h3 className="text-md mt-5 font-bold">{sentiment}</h3>
    </div>
  );
}

export default Sentiment;
