import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from './Home';
import MovieList from "./components/movieList/movieList";
import Movie from "./pages/movieDetails/movie";
import Nav from "./Nav";

function App() {
  return (
    <div className="app">
       <Router>
       <Nav />
        <Routes>
          <Route index element={<Home />}></Route>
          <Route path="movie/:id" element={<Movie />}></Route>
          <Route path="movies/:type" element={<MovieList />}></Route>
          <Route path="/*" element={<h1>Error Page</h1>}></Route>
        </Routes>
      </Router>
      
    </div>
  );
}

export default App;
