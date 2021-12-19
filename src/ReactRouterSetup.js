import React from 'react'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from './components/Navbar';
import Content from './pages/Content';
import ContentPage from './pages/ContentPage';
import Home from './pages/Home';
import News from './pages/News';
import About from './pages/About';
import NewsPage from './pages/NewsPage';
import Error from './pages/Error'
const ReactRouterSetup = () => {
    return <Router>
        <Navbar />
        <Routes>
            <Route exact path="/" element={<Home />} />
            <Route path="/news" element={<News />} />
            <Route path="/content" element={<Content />} />
            <Route path="/about" element={<About />} />
            <Route path="*" element={<Error />} />
            {/* 
            <Route path="/news/:id" children={<NewsPage />}></Route>
            <Route path="/content/:id" children={<ContentPage />}></Route>
            <Route path="*">
                <Error />
            </Route> */}
        </Routes>
    </Router >
}

export default ReactRouterSetup
