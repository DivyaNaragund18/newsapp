import React, { useEffect, useState } from 'react';
import NewsItem from './NewsItem';

const News = (props) => {
  let { apikey, category } = props;
  const URL = `https://newsapi.org/v2/top-headlines?country=us&category=${category}&apiKey=${apikey}`;
  const [article, setArticle] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const data = await fetch(URL);
      const responseData = await data.json();
      setArticle(responseData.articles);
    }
    fetchData();
  }, [URL]);

  const capitalizeFirstAlphabet = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
  };

  return (
    <>
      <h3 className='text-center my-4'>
        NewsApp - Top {capitalizeFirstAlphabet(category)} Headlines
      </h3>
      <div className='container'>
        <div className='row'>
          {article.map((element) => {
            return (
              <div className='col-md-4' key={element.url}>
                <NewsItem
                  title={element.title ? element.title.slice(0, 45) : ''}
                  description={
                    element.description ? element.description.slice(0, 90) : ''
                  }
                  url={element.url}
                  urlToImage={element.urlToImage}
                />
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default News;
