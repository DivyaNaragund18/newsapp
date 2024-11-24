import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
import News from './components/News';
import LoadingBar from 'react-top-loading-bar';
import { useState } from 'react';

/*
Very Important:-
1. In the latest react-router-dom v6.24.1 you have to use <Routes></Routes> instead of <Switch>
2. If you want to show navbar at the top, create <route path="/" element={<Navbar />} ... </Route>
    Between ... you can route your other components, like Home, About etc.
3. When use <Link> tag instead of <a> tag, you have to use <Outlet /> method at the very end of the file and also import it, It comes from react-router-dom package.
    Use-case - Mainly in Navbar, Footer like areas where we have mention other end-points.
*/

const NEWS_API_KEY = process.env.REACT_APP_NEWS_API;

function App() {
  let country = 'us';
  let pageSize = 8;
  const [progress, setProgress] = useState(0);

  const progressLoader = (progress) => {
    setProgress(progress);
  };

  return (
    <div className='App'>
      <BrowserRouter>
        <LoadingBar color='#f11946' progress={progress} />
        <Routes>
          <Route path='/' element={<Navbar />}>
            <Route
              index
              element={
                <News
                  apikey={NEWS_API_KEY}
                  category='general'
                  key='general'
                  country={country}
                  pageSize={pageSize}
                  progressLoader={progressLoader}
                />
              }
            />
            <Route
              path='business'
              element={
                <News
                  apikey={NEWS_API_KEY}
                  category='business'
                  key='business'
                  country={country}
                  pageSize={pageSize}
                  progressLoader={progressLoader}
                />
              }
            />
            <Route
              path='entertainment'
              element={
                <News
                  apikey={NEWS_API_KEY}
                  category='entertainment'
                  key='entertainment'
                  country={country}
                  pageSize={pageSize}
                  progressLoader={progressLoader}
                />
              }
            />
            <Route
              path='general'
              element={
                <News
                  apikey={NEWS_API_KEY}
                  category='general'
                  key='general'
                  country={country}
                  pageSize={pageSize}
                  progressLoader={progressLoader}
                />
              }
            />
            <Route
              path='health'
              element={
                <News
                  apikey={NEWS_API_KEY}
                  category='health'
                  key='health'
                  country={country}
                  pageSize={pageSize}
                  progressLoader={progressLoader}
                />
              }
            />
            <Route
              path='science'
              element={
                <News
                  apikey={NEWS_API_KEY}
                  category='science'
                  key='science'
                  country={country}
                  pageSize={pageSize}
                  progressLoader={progressLoader}
                />
              }
            />
            <Route
              path='sports'
              element={
                <News
                  apikey={NEWS_API_KEY}
                  category='sports'
                  key='sports'
                  country={country}
                  pageSize={pageSize}
                  progressLoader={progressLoader}
                />
              }
            />
            <Route
              path='technology'
              element={
                <News
                  apikey={NEWS_API_KEY}
                  category='technology'
                  key='technology'
                  country={country}
                  pageSize={pageSize}
                  progressLoader={progressLoader}
                />
              }
            />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
