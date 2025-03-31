import './App.css';
import About from './comp/About';
import Body from './comp/Body';
import { BrowserRouter, Routes, Route } from  'react-router-dom';
import Team from './comp/Team';
import Login from './comp/Login';
import ProtectedRoute from './comp/ProtectedRoute';
import { useState } from 'react';
import Accordion from './comp/Accordion';
import Comments from './comp/comments/Comments';
import ImageSlider from './comp/image-slider/ImageSlider';
import Pagination from './comp/pagination/Pagination';

function App() {

  // Write Authentication Logic
  // Make login API call, check the token is valid or not
  // const isAuthenticated = false;

  const [ lang, setLang ] = useState('en')

  return (
    <div className="App">
      <header className='text-2xl font-bold py-5 px-5 bg-black text-white text-center flex items-center justify-between'>
        Hello World
        <nav className='p-2 m-2 w-150 text-lg'>
          <a href='/' className='mx-4'>Home</a>
          <a href='/about' className='mx-4'>About</a>
          <a href='/team' className='mx-4'>Team</a>
          <a href='/accordion' className='mx-4'>Accordion</a>
          <a href='/comments' className='mx-4'>Comments</a>
          <a href='/image-slider' className='mx-4'>Image Slider</a>
          <a href='/pagination' className='mx-4'>Pagination</a>
          <a href='/login'>Login</a>
        </nav>
        <select className='text-black'  value={lang} onChange={(e)=> setLang(e.target.value)}>
          <option value="en">English</option>
          <option value="hi">Hindi</option>
          <option value="sp">Spanish</option>
          <option value="ru">Russion</option>
        </select>
      </header>

      <BrowserRouter>
        <Routes>
          <Route  path='/' element={<Body/>} />
          {/* <Route path='/about' element={ isAuthenticated ? <About/> : <Login/> } /> */}

          <Route element={<ProtectedRoute/>}>
            <Route path='/about' element={<About lang={lang} />}/>
          </Route>
          
          <Route path='/team' element={<Team/>} />
          <Route path='/accordion' element={<Accordion/>} />
          <Route path='/comments' element={<Comments/>} />
          <Route path='/image-slider' element={<ImageSlider/>} />
          <Route path='/pagination' element={<Pagination/>} />
          <Route path='/login' element={<Login/>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
