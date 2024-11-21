import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';

/*
Very Important:-
1. In the latest react-router-dom v6.24.1 you have to use <Routes></Routes> instead of <Switch>
2. If you want to show navbar at the top, create <route path="/" element={<Navbar />} ... </Route>
    Between ... you can route your other components, like Home, About etc.
3. When use <Link> tag instead of <a> tag, you have to use <Outlet /> method at the very end of the file and also import it, It comes from react-router-dom package.
    Use-case - Mainly in Navbar, Footer like areas where we have mention other end-points.
*/

function App() {
  return (
    <div className='App'>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Navbar />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
