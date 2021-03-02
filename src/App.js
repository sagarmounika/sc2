import React, { useState } from 'react';
import SwipeableTextMobileStepper from './Components/Carousel'
import Video from './Components/Video'
import './App.css';

function App() {
  return(
   <div className='App'>
    <SwipeableTextMobileStepper/>
    <Video/>
  </div>);
}

export default App;
