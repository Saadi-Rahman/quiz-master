import React from 'react';
import { Link } from 'react-router-dom';
import './Quiz.css';

const Quiz = ({quiz}) => {
    const {logo, name, total} = quiz;
    return (
            
                <div className="col">
                    <div className="card h-100 shadow">
                        <img src={logo} className="card-img-top bg-light" alt="" />
                        <div className="card-body">
                            <h5 className="card-title">Topics: {name}</h5>
                            <p className="card-text">This quiz contains some questions and there is no time limit. It's just a nice way to see how much you know about this topic.</p>
                        </div>
                        <div className="card-footer d-flex justify-content-between align-items-center">
                            <small className="text-muted">Total Quiz: {total}</small>
                            <Link href="#" className="btn rounded-pill btn-quiz px-4">Start Quiz</Link>
                        </div>
                    </div>
                </div>
    );
};

export default Quiz;