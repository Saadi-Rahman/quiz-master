import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

const Header = () => {
    return (
        <div>
            <nav className="navbar navbar-expand-lg bg-white my-5">
                <div className="container-fluid eduinside-navbar">
                    <Link className="quiz-navbar-brand navbar-brand fs-1 fw-bold" to="/">QuizMaster</Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="quiz-navbar-items navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <Link className="nav-link" to="/">Home</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="topics">Topics</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="statistics">Statistics</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="blog">Blog</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    );
};

export default Header;