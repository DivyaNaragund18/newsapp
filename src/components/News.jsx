import React, { useEffect, useState } from 'react';
import NewsItem from './NewsItem';
import InfiniteScroll from 'react-infinite-scroll-component';
import Spinner from './Spinner';

const News = (props) => {
  let { apikey, category, country, pageSize, progressLoader } = props;
  const [article, setArticle] = useState([]);
  const [page, setPage] = useState(1);
  const [totalResults, setTotalResults] = useState(0);
  const [loading, setLoading] = useState(true);

  const capitalizeFirstAlphabet = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
  };

  document.title = `${capitalizeFirstAlphabet(
    category
  )} - NewsApp (Get your daily dose of news for free!)`;

  useEffect(() => {
    async function fetchData() {
      progressLoader(0);
      const URL = `https://newsapi.org/v2/top-headlines?country=${country}&category=${category}&apiKey=${apikey}&page=${page}&pageSize=${pageSize}`;
      progressLoader(10);
      const data = await fetch(URL);
      progressLoader(40);
      const responseData = await data.json();
      progressLoader(70);
      setArticle(responseData.articles);
      progressLoader(100);
      setLoading(false);
      setTotalResults(responseData.totalResults);
    }
    fetchData();
  }, [URL]);

  const fetchMoreData = async () => {
    const newsAPIURL = `https://newsapi.org/v2/top-headlines?country=${country}&category=${category}&apiKey=${apikey}&page=${
      page + 1
    }&pageSize=${pageSize}`;
    const nextData = await fetch(newsAPIURL);
    const nextResponseData = await nextData.json();
    setArticle(article.concat(nextResponseData.articles));
    setPage(page + 1);
    setTotalResults(nextResponseData.totalResults);
  };

  return (
    <>
      <h3 className='text-center my-4'>
        NewsApp - Top {capitalizeFirstAlphabet(category)} Headlines
      </h3>
      {loading && <Spinner />}
      <InfiniteScroll
        dataLength={article.length}
        next={fetchMoreData}
        hasMore={article.length !== totalResults} // true or false
        loader={<Spinner />}
      >
        <div className='container'>
          <div className='row'>
            {article.map((element) => {
              console.log(element);
              return (
                <div className='col-md-4' key={element.url}>
                  <NewsItem
                    title={element.title ? element.title.slice(0, 45) : ''}
                    description={
                      element.description
                        ? element.description.slice(0, 90)
                        : ''
                    }
                    url={element.url}
                    urlToImage={element.urlToImage}
                  />
                </div>
              );
            })}
          </div>
        </div>
      </InfiniteScroll>
    </>
  );
};

export default News;
