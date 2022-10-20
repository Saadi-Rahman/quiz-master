import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Topic from '../Topic/Topic';

const Topics = () => {
    const loaderData = useLoaderData();
    const topics = loaderData.data;

    return (
        <div className='container'>
            <h2 className='fw-bold text-teal pb-4'>Select your topic to test your knowledge on QuizMaster!!</h2>
            <div className="row row-cols-1 row-cols-md-2 row-cols-lg-4 mx-2 mx-md-0 mx-xl-5 g-4">
                {
                    topics.map(topic => <Topic
                    key={topic.id}
                    topic={topic}
                    ></Topic>)
                }
            </div>
        </div>
    );
};

export default Topics;