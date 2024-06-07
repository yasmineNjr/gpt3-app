import { Navbar , Brand, Cta } from './components';
import { Blog, Features, Footer, Header, Possibility, WhatGPT } from './containers';
import './App.css';

function App() {
  return (
    <div className='App'>
      <div className='gradient__bg'>
        <Navbar/>
        <Header/>
      </div>
      <Brand/>
      <WhatGPT/>
      <Features/>
      <Possibility/>
      <Cta/>
      <Blog/>
      <Footer/>
    </div>
  );
}

export default App;
