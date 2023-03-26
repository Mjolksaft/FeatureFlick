import React, { useState } from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';
import './utilities/auto-key-lists';
import { BrowserRouter } from 'react-router-dom';

function Root() {
  const [filteredMovies, setFilteredMovies] = useState(null);

  return (
    <React.StrictMode>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </React.StrictMode>
  );
}

ReactDOM.createRoot(document.getElementById('root')).render(
  <Root />
);
