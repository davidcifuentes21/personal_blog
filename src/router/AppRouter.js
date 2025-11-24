import React from 'react';
import { Route, Routes } from 'react-router-dom';
import About from '../pages/About/About';
import Home from '../pages/Home/Home';
import NavBar from '../components/NavBar';
import Blog from '../pages/Blog/Blog';

export const AppRouter = () => {
    return (
        <>
            <NavBar />
            <Routes>
                <Route path="/" element={<Home />}/>
                <Route path="/about" element={<About />} />
                <Route path="/Blog" element={<Blog />} />
            </Routes>
        </>
    );
}


export default AppRouter;