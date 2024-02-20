import React from 'react';
import {Main,WhatGPT3,Features,Blog,Possibility,Footer} from './containers'
import {Brand,CTA,Navbar} from './components';
import './App.css';

const App = () => {
  return (
    <div className='App'>
    <div className='gradient__bg'>
      <Navbar/>
      <Main/>
    </div>
<Brand/>
<WhatGPT3/>
<Features/>
<Possibility/>
<CTA/>
<Blog/>
<Footer/>
    </div>
  )
}

export default App