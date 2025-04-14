import React, { useState, useEffect, useRef, MouseEvent } from 'react';
import { Link } from 'react-router-dom';
import { IoMdArrowDropdown } from 'react-icons/io';
import { HiOutlineMenuAlt3 } from 'react-icons/hi';
import { IoClose } from 'react-icons/io5';
import './navbar.css';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const dropdownRef = useRef<HTMLLIElement | null>(null);

  // Handle scrolling
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 60) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // Close dropdown when clicking outside (for mobile)
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent | any) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsServicesOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  // Toggle mobile menu
  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
    if (isServicesOpen) setIsServicesOpen(false);
  };

  // Toggle services dropdown only on mobile
  const toggleServicesDropdown = (e: React.MouseEvent) => {
    if (window.innerWidth <= 768) {
      e.preventDefault();
      setIsServicesOpen(!isServicesOpen);
    }
  };

  return (
    <nav className={`navbar ${isScrolled ? 'scrolled' : ''}`}>
      <div className="container navbar-container">
        <Link to="/" className="navbar-logo">
          <h1>MASS <span>Solutions</span></h1>
        </Link>
        
        <div className="navbar-toggle" onClick={toggleMobileMenu}>
          {isMobileMenuOpen ? (
            <IoClose size={24} />
          ) : (
            <HiOutlineMenuAlt3 size={24} />
          )}
        </div>
        
        <ul className={`navbar-menu ${isMobileMenuOpen ? 'open' : ''}`}>
          <li className="navbar-item">
            <Link to="/" className="navbar-link" onClick={() => setIsMobileMenuOpen(false)}>Home</Link>
          </li>
          
          <li className={`navbar-item dropdown ${isServicesOpen ? 'active' : ''}`} ref={dropdownRef}>
            <div className="navbar-link dropdown-toggle" onClick={toggleServicesDropdown}>
              Services <IoMdArrowDropdown className="dropdown-arrow" />
            </div>
            
            <ul className="dropdown-menu">
              <li className="dropdown-item">
                <Link to="/services" onClick={() => setIsMobileMenuOpen(false)}>All Services</Link>
              </li>
              <li className="dropdown-item">
                <Link to="/services/hud-vash" onClick={() => setIsMobileMenuOpen(false)}>HUD-VASH</Link>
              </li>
              <li className="dropdown-item">
                <Link to="/services/program-management" onClick={() => setIsMobileMenuOpen(false)}>Program & Project Management</Link>
              </li>
              <li className="dropdown-item">
                <Link to="/services/vocational-services" onClick={() => setIsMobileMenuOpen(false)}>Vocational Services</Link>
              </li>
            </ul>
          </li>
          
          <li className="navbar-item">
            <Link to="/about" className="navbar-link" onClick={() => setIsMobileMenuOpen(false)}>About Us</Link>
          </li>
          
          <li className="navbar-item">
            <Link to="/contact" className="navbar-link" onClick={() => setIsMobileMenuOpen(false)}>Contact</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
