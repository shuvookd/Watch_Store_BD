import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './components/Home/Home';
import Body from './components/Body/Body';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Link from './components/Link/Link';
import Review from './components/Review/Review';
import NotFound from './components/NotFound/NotFound';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home/>}></Route>
        <Route path="/body" element={<Body></Body>}></Route>
        <Route path="/header" element={<Header></Header>}></Route>
        <Route path="/navbar" element={<Navbar></Navbar>}></Route>
        <Route path="/link" element={<Link></Link>}></Route>
        <Route path="/review" element={<Review></Review>}></Route>
        <Route path="*" element={<NotFound></NotFound>}></Route>

      </Routes>
    </div>
  );
}

export default App;
