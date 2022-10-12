import React from 'react';
import { useLoaderData } from 'react-router-dom';
import { BarChart, Bar, XAxis, YAxis, Tooltip } from 'recharts';

const Statistics = () => {
    const loaderData = useLoaderData();
    const quizs = loaderData.data;

    return (
        <div className='container'>
            <h2 className='text-teal mb-4'>Quiz Statistics</h2>
            <BarChart width={350} height={450} data={quizs}>
            <Bar dataKey="total" fill="#0f766e" />
            <XAxis dataKey="name" />
            <YAxis datakey="total" />
            <Tooltip />
            </BarChart>
        </div>
    );
};

export default Statistics;