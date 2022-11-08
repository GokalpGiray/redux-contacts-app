import React from 'react'
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { deleteContact } from '../../contactSlice';

function Item({ item }) {
  const dispatch = useDispatch();

  const handleDelete = (id) => {
    if (window.confirm("Are you sure?")) {
      dispatch(deleteContact(id))
    };
  };

  return (
    <li>
      <span>{item.name}</span>
      <span>{item.phoneNumber}</span>
      <div className='edit'>
        <span className='editBtn'>
          <Link to={`/edit/${item.id}`}>
            Edit
          </Link>
        </span>
        <span className='deleteBtn' onClick={() => handleDelete(item.id)} >X</span>
      </div>
    </li>
  )
}

export default Item