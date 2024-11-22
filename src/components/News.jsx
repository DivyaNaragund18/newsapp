import React from 'react';
import NewsItem from './NewsItem';

const News = (props) => {
  // Destructing the props
  const { myprops } = props;
  return (
    <>
      <h3 className='text-center my-4'>NewsApp - Top General Headlines</h3>
      <div className='container'></div>
    </>
  );
};

export default News;
