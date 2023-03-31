import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import TopBanner from './movies';
import MovieList from './movieList';

function App() {
  return (
    <div className="App">
      <TopBanner title="Joel's Movie's" />
      <MovieList />
    </div>
  );
}

export default App;
