import { nanoid } from '@reduxjs/toolkit';
import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { addContact } from '../../contactSlice';

function Form() {
    const [name, setName] = useState('');
    const [number, setNumber] = useState('');

    const dispatch = useDispatch();

    const handleSubmit = (e) => {
        e.preventDefault();

        if (!name || name === " " || !number || number === " ") return false;

        dispatch(addContact({ id: nanoid(), name, phoneNumber: number }));

        setName('');
        setNumber('');
    };

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input placeholder='Name' value={name} onChange={(e) => setName(e.target.value)} />
                <input placeholder='Phone Number' value={number} onChange={(e) => setNumber(e.target.value)} />
                <div className="btn">
                    <button type='submit' >Add</button>
                </div>
            </form>
        </div>
    )
}

export default Form