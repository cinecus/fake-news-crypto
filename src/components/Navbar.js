import React, { useState, useRef, useEffect } from 'react'
import { FaFacebook, FaBars, FaInstagram, FaTwitter, FaDiscord, FaSearch } from 'react-icons/fa'
import { Link } from 'react-router-dom';
const Navbar = () => {
    const [showLinks, setShowLinks] = useState(false);
    const linksContainerRef = useRef(null);
    const linksRef = useRef(null);
    const toggleLinks = () => {
        setShowLinks(!showLinks);
    };
    useEffect(() => {
        const linksHeight = linksRef.current.getBoundingClientRect().height;
        if (showLinks) {
            linksContainerRef.current.style.height = `${linksHeight}px`;
        } else {
            linksContainerRef.current.style.height = '0px';
        }
    }, [showLinks])
    return (
        <nav>
            <div className='nav-center'>
                <div className='nav-header'>
                    <Link to="/">Web Title</Link>
                    <button className='nav-toggle'>
                        <FaBars />
                    </button>
                </div>
                <div className='links-container' ref={linksContainerRef}>
                    <ul className='links' ref={linksRef}>
                        <li><Link to="/news">ข่าวคริปโต</Link></li>
                        <li><Link to="/content">บทความ</Link></li>
                        <li><Link to="/about">ติดต่อเรา</Link></li>
                    </ul>
                </div>
                <div class="wrap">
                    <div class="search">
                        <input type="text" class="searchTerm" placeholder="What are you looking for?" />
                        <button type="submit" class="searchButton">
                            <FaSearch />
                        </button>
                    </div>
                </div>
                <ul className='social-icons'>
                    <li><a href="https://www.facebook.com"><FaFacebook size={36} /></a></li>
                    <li><a href="https://www.google.com" ><FaInstagram size={36} /></a></li>
                    <li><a><FaTwitter size={36} /></a></li>
                    <li><a><FaDiscord size={36} /></a></li>
                </ul>
            </div>
        </nav>
    )
}

export default Navbar
