import React from 'react'
import { useDispatch } from 'react-redux';
import { deleteContact } from '../../contactSlice';

function Item({ item }) {
  const dispatch = useDispatch();

  const handleDelete = (id) => {
    if(window.confirm("Are you sure?")) {
      dispatch(deleteContact(id))
    };
  };

  return (
    <li>
      <span>{item.name}</span>
      <span>{item.phoneNumber}</span>
      <span className='deleteBtn' onClick={() => handleDelete(item.id)} >X</span>
    </li>
  )
}

export default Item