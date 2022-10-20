import React from 'react';

const QuizOption = ({option, handleClick}) => {

    return (
        <div>
            <div className="form-check">
                <input onClick={()=> handleClick(option)} style={{cursor: "pointer"}} className="form-check-input" type="checkbox" name="selectedItem" value=""  />
                <label className="form-check-label">{option}</label>
            </div>
        </div>
    );
};

export default QuizOption;