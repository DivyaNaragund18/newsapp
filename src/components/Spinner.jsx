import React from 'react';
import spinnerLoader from './spinnerLoader.gif';

const Spinner = () => {
  return (
    <div className='text-center'>
      <img
        src={spinnerLoader}
        alt='Loading...'
        className='my-3'
        style={{ height: '2rem', width: '2rem' }}
      />
    </div>
  );
};

export default Spinner;
