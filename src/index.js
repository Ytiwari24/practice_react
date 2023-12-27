// import React from 'react';
// import ReactDOM from 'react-dom/client';


// function Car() {
//   return <h2>I am a Car!</h2>;
// }

// function Garage() {
//   return (
//     <>
//       <h1>Who lives in my Garage?</h1>
//       <Car />
//     </>
//   );
// }

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(<Garage />);


// index.js

import React from 'react';
import ReactDOM from 'react-dom';
import App from '../src/App';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
