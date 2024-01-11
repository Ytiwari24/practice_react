import '../src/App.css';
import React from 'react';
import Navbar from './components/Navbar/index';
import ProfileCard from './components/ProfileCard';
import Carousels from './components/Carousels';
function MyButton() {
  return (
    <button>
      Click ME
    </button>
  );
}

export default function MyApp() {
  return (
    <div className='App'>
     

      <Navbar />
      <Carousels />
      <h1>
        Services
      </h1>
      <ProfileCard />
      <h1>
        Our Teams
      </h1>
      <ProfileCard />
      {/* <h1>Hello Pravind Welcome to React </h1>
      <MyButton /> */}
    </div>
  );
}
