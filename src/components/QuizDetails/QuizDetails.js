import React from 'react';
import { useLoaderData } from 'react-router-dom';

const QuizDetails = () => {
    const quizData = useLoaderData();
    console.log(quizData);

    const { name, questions } = quizData;

    return (
        <div className='container'>
            <h3>Total Quizzes on this topic: {quizData.data.questions.length}</h3>
            <h3>Quiz of {quizData.data.name}</h3>
            
        </div>
    );
};

export default QuizDetails;