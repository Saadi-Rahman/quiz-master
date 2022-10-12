import React from 'react';
import { Link } from 'react-router-dom';
import banner from '../../images/quiz-banner-2000.png';
import logo from '../../images/logo-300.png';

const Home = () => {
    return (
        <div className='container'>
            <div className="row g-0">
                <div className="col-lg-6 p-5 d-flex flex-column justify-content-center">
                    <img src={logo} className="w-25 pb-2" alt="" />
                    <h2 className="text-teal fs-1 fw-bold mb-3">Test your brain with QuizMaster!</h2>
                    <p>Check out our online computer programming quizzes to enhance your knowledge, learn new things or prepare for an upcoming test. Made up of well-researched and interesting quiz questions, each and every quiz here can test your awareness and grasp of the subject.</p>

                    <div className="my-4">
                        <Link to="" className="btn btn-quiz px-4 py-2">Get Started</Link>
                    </div>
                </div>
                <div className="col-lg-6">
                    <div>
                        <img src={banner} className="image-fluid w-100 h-auto" alt="" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;