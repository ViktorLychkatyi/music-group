import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Gallery from './pages/Gallery.jsx';
import Home from './pages/Home.jsx';
import Album from './pages/Album.jsx';


function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/Album" element={<Album />} />
                <Route path="/Gallery" element={<Gallery />} />
            </Routes>
        </Router>
    );
}

export default App;
