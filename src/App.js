import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
import News from './components/News';

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
  return (
    <div className='App'>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Navbar />}>
            <Route
              index
              element={
                <News apikey={NEWS_API_KEY} category='general' key='general' />
              }
            />
            <Route
              path='business'
              element={
                <News
                  apikey={NEWS_API_KEY}
                  category='business'
                  key='business'
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
                />
              }
            />
            <Route
              path='general'
              element={
                <News apikey={NEWS_API_KEY} category='general' key='general' />
              }
            />
            <Route
              path='health'
              element={
                <News apikey={NEWS_API_KEY} category='health' key='health' />
              }
            />
            <Route
              path='science'
              element={
                <News apikey={NEWS_API_KEY} category='science' key='science' />
              }
            />
            <Route
              path='sports'
              element={
                <News apikey={NEWS_API_KEY} category='sports' key='sports' />
              }
            />
            <Route
              path='technology'
              element={
                <News
                  apikey={NEWS_API_KEY}
                  category='technology'
                  key='technology'
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
