import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Quiz from '../Quiz/Quiz';

const Topics = () => {
    const loaderData = useLoaderData();
    const quizs = loaderData.data;

    return (
        <div className='container'>
            <h2 className='fw-bold text-teal pb-4'>Select your topic and test your knowledge on QuizMaster!!</h2>
            <div className="row row-cols-1 row-cols-md-2 row-cols-lg-4 g-4">
                {
                    quizs.map(quiz => <Quiz
                    key={quiz.id}
                    quiz={quiz}
                    ></Quiz>)
                }
            </div>
        </div>
    );
};

export default Topics;