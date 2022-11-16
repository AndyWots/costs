import React, { useState } from 'react';
import './costForm.css';

const CostForm = (props) => {

    const [inputName, setInputName] = useState('');
    const [inputAmount, setInputAmount] = useState('');
    const [inputDate, setInputDate] = useState('');

    const nameChangeHandler = (event) => {    
        //видео 40 про обновление состояний https://drive.google.com/drive/folders/1IonZDudVb7sIWQJ0e4AYjBJ5uVskfhIF
        setInputName(event.target.value);
    };

    const amountChangeHandler = (event) => {
        setInputAmount(event.target.value);
    };

    const dateChangeHandler = (event) => {
        setInputDate(event.target.value);
    };

    const submitHandler = (event) => {
        event.preventDefault();
    
        const costData = {
            description: inputName,
            amount: inputAmount,
            date: new Date(inputDate)
        };

        props.onSaveCostData(costData);  
        setInputName('');
        setInputAmount('');
        setInputDate('');
    };

    return <form onSubmit={submitHandler}>
        <div className='new-cost__controls'>
            <div className='new-cost__control'>
                <label>Название</label>
                <input type='text' value={inputName} onChange={nameChangeHandler} />
            </div>
            <div className='new-cost__control'>
                <label>Сумма</label>
                <input type='number' value={inputAmount} onChange={amountChangeHandler} min='0.01' step='0.01' />
            </div>
            <div className='new-cost__control'>
                <label>Дата</label>
                <input type='date' value={inputDate} onChange={dateChangeHandler} min='2019-01-01' step='0.2022-12-31'/>
            </div>
            <div className='new-cost__actions'>
                <button type='submit'>Добавить расход</button>
                <button type='button' onClick={props.onCancel}>Отмена</button>
            </div>
        </div>
    </form>

}

export default CostForm;