import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye } from '@fortawesome/free-solid-svg-icons'
import React, { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import QuizOption from '../QuizOption/QuizOption';

const Quiz = ({quiz, index}) => {
    const { options, question, correctAnswer } = quiz;
    const [score, setScore] = useState(0);

    const rightAns = (quiz) => {
        toast.success(quiz, {autoClose: 1500});
    }

    const handleClick = (option) => {
        if (correctAnswer === option) {
            toast.success('success: right answer', {autoClose: 500});
            setScore(score + 1);
        }
        else {
            toast.error('incorrect: wrong answer', {autoClose: 500})
        }
    }

    return (
        <div className='bg-white shadow rounded p-4 mb-4'>
            <div className='d-flex justify-content-between'>
                <h5 className="text-teal fs-5 fw-bold mb-3">Quiz {index + 1}: {question.replace( /(<([^>]+)>)/ig, '')}</h5>
                <div className='text-teal' style={{cursor: "pointer"}} onClick={() => rightAns(correctAnswer)}>
                    <FontAwesomeIcon icon={faEye}></FontAwesomeIcon>
                    <ToastContainer />
                </div>
            </div>
            {
                options.map((option, id) => <QuizOption
                key={id}
                option={option}
                quiz={quiz}
                handleClick={handleClick}
                ></QuizOption>)
            }
        </div>
    );
};

export default Quiz;