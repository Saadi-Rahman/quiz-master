import React, { createContext } from 'react';
import { useLoaderData } from 'react-router-dom';
import Quiz from '../Quiz/Quiz';

export const ResultContext = createContext([]);

const Quizzes = () => {
    const loaderData = useLoaderData();
    const quizzesData = loaderData.data;

    const { name, questions, } = quizzesData;
    const quizzes = quizzesData.questions;

    return (
        <ResultContext.Provider value={[quizzes]}>
        <div className='container'>
            <h3 className="text-teal fs-3 fw-bold mb-4">Quiz of {name}</h3>
            <div className="row">
                <div className="col-lg-9">
                    {
                        quizzes.map((quiz, index) => <Quiz
                        key={quiz.id}
                        quiz={quiz}
                        index={index}
                        ></Quiz>)
                    }
                </div>

                <div className="col-lg-3 position-relative">
                    <div className='bg-white shadow rounded p-4 position-sticky top-0'>
                        <h4 className="text-teal fs-4 fw-bold mb-3">Result</h4>
                        <h6>Total Quiz: {questions.length}</h6>
                        <h6>Correct: </h6>
                        <h6>Incorrect: </h6>
                        <h6>Score: </h6>
                        <button className="btn btn-sm btn-quiz mt-3">Try Again</button>
                    </div>
                </div>
            </div>
        </div>
        </ResultContext.Provider>
    );
};

export default Quizzes;