import React, { useState, useEffect } from 'react';
import Navbar from '../compenent/navbar';
import Draf from '../darf';
import AudioPlayer from '../compenent/audio';

const Main = () => {
 
  return (
   <div>
      <Navbar/>
      <div>
         <Draf/>
      </div>
   </div>
  );
};

export default Main;
