import { Route, Routes } from 'react-router-dom';
import './App.css';

import AboutUs from './components/AboutUs/AboutUs';
import Blogs from './components/Blogs/Blogs';
import DashBoard from './components/DashBoard/DashBoard';
import Error from './components/Error/Error';
//import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';

import Review from './components/Review/Review';
import Home from './components/Home/Home';




function App() {
  return (
    <div className="App">
      <Header></Header>
      <Routes>
      <Route path='/' element={<Home></Home>}></Route>
      <Route path='/about' element={<AboutUs></AboutUs>}></Route>
      <Route path='/dashboard' element={<DashBoard></DashBoard>}/> 
      <Route path='/review' element={<Review></Review>}/>
      <Route path='/blogs' element={<Blogs></Blogs>}/>
      <Route path='*' element={<Error></Error>}></Route>
      </Routes>
    </div>
  );
}

export default App;
