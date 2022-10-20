import React from 'react';
import { Link } from 'react-router-dom';
import './Topic.css';

const Topic = ({topic}) => {
    const {id, logo, name, total} = topic;
    return (
        <div className="col">
            <div className="card h-100 shadow">
                <img src={logo} className="card-img-top bg-img" alt="" />
                <div className="card-body">
                    <h5 className="card-title text-teal">Topics: {name}</h5>
                    <p className="card-text">This quiz contains some questions and there is no time limit. It's just a nice way to see how much you know about this topic.</p>
                </div>
                <div className="d-flex justify-content-between align-items-center p-3 pt-0">
                    <small className="text-teal">Total Quiz: {total}</small>
                    <Link to={`/topic/${id}`} className="btn btn-quiz px-4 px-lg-2 px-xl-3 py-lg-1">Start Quiz</Link>
                </div>
            </div>
        </div>
    );
};

export default Topic;