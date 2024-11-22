import React from 'react';

const NewsItem = () => {
  return (
    <div>
      <div class='card' style={{ width: '18rem' }}>
        <img src='...' class='card-img-top' alt='...' />
        <div class='card-body'>
          <h5 class='card-title'>Card title</h5>
          <p class='card-text'>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </p>
          <a href='#' target='_blank' class='btn btn-primary'>
            Read More
          </a>
        </div>
      </div>
    </div>
  );
};

export default NewsItem;
