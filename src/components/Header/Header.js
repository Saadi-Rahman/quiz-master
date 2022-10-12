import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import './Header.css';
import navLogo from '../../images/logo-100.png';

const Header = () => {
    return (
        <div>
            <nav className="navbar navbar-expand-lg shadow mb-5 bg-body">
                <div className="container quiz-navbar">
                    <Link><img src={navLogo} alt="" width="34" class=" me-1"/></Link>
                    <Link className="quiz-navbar-brand navbar-brand fs-4 fw-bold" to="/">QuizMaster</Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="quiz-navbar-items navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <NavLink className={({isActive}) => isActive ? "nav-link text-teal border-bottom border-2 border-success" : "nav-link"} to="/home">Home</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className={({isActive}) => isActive ? "nav-link text-teal border-bottom border-2 border-success" : "nav-link"} to="topics">Topics</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className={({isActive}) => isActive ? "nav-link text-teal border-bottom border-2 border-success" : "nav-link"} to="statistics">Statistics</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className={({isActive}) => isActive ? "nav-link text-teal border-bottom border-2 border-success" : "nav-link"} to="blog">Blog</NavLink>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    );
};

export default Header;