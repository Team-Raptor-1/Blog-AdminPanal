
import './App.css';
import AllBlogs from './components/AllBlogs';
import Header from './components/Header';
import SideBar from './components/SideBar';
import Reviews from './components/Reviews';
import Update from "./components/Update";
import Comments from './components/Comments';
import { Route, Routes } from 'react-router-dom';
import NavBar from './components1/Home/Header/index';
import Footer from './components1/Home/Footer/index';
// import Settings from './components/Settings';
// import CreateBlog from './components/CreateBlog';

function App() {
  return (
    <div className="App">
      <NavBar/>
      <Header />


      <div className="container">
        <SideBar />
        {/* <AllBlogs /> */}

        {/* <BrowserRouter> */}
        <Routes>
          <Route path='/allblogs' element={<AllBlogs />}></Route>
          <Route path='/update' element={<Update />}></Route>
          <Route path='/reviews' element={<Reviews />}></Route>
          <Route path='/comment' element={<Comments />}></Route>
        </Routes>

        {/* </BrowserRouter> */}
      </div>

      <Footer/>




      {/* <Update /> */}

      {/* <Reviews/> */}

      {/* <Settings/> */}
      {/* 
      <CreateBlog/> */}


    </div>
  );
}

export default App;
