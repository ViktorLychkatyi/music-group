import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import GalleryPage from './pages/GalleryPage.jsx';
import HomePage from './pages/HomePage.jsx';
import AlbumPage from './pages/AlbumPage.jsx';


function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/AlbumPage" element={<AlbumPage />} />
                <Route path="/GalleryPage" element={<GalleryPage />} />
            </Routes>
        </Router>
    );
}

export default App;
