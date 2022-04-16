import { Route, Routes } from 'react-router-dom';
import './App.css';

import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Links from './components/Links/Links';
import Review from './components/Review/Review';
import NotFound from './components/NotFound/NotFound';
import Home from './components/Home/Home';
import DashBoard from './components/DashBoard/DashBoard';
import Blogs from './components/Blogs/Blogs';
import AboutUs from './components/AboutUs/AboutUs';


function App() {
  return (
    <div className="App">
      <Navbar></Navbar>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/header" element={<Header></Header>}></Route>
        
        <Route path="/links" element={<Links></Links>}></Route>
        <Route path="/reviews" element={<Review></Review>}></Route>
        <Route path="/dashboard" element={<DashBoard></DashBoard>}></Route>
        <Route path="/blogs" element={<Blogs></Blogs>}></Route>
        <Route path="/about" element={<AboutUs></AboutUs>}></Route>
        <Route path="*" element={<NotFound></NotFound>}></Route>

      </Routes>
    </div>
  );
}

export default App;
