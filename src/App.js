import '../src/App.css';
import React from 'react';
import Navbar from './components/navbar';

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
      <h1>Hello Pravind Welcome to React </h1>
      <MyButton />
    </div>
  );
}
