import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { contactSelectors, deleteAllContacts } from '../../contactSlice'
import Item from './Item';

function List() {
    const dispatch = useDispatch();

    const contacts = useSelector(contactSelectors.selectAll);
    
    const handleDeleteAll = () => {
        if (window.confirm("Are you sure?")) {
            dispatch(deleteAllContacts());
        };
    };

    return (
        <div>
            <div className='deleteAllBtn' onClick={handleDeleteAll}>
                Delete All
            </div>
            <br />
            <ul className='list'>
                {
                    contacts.map(contact => (<Item key={contact.id} item={contact} />))
                }
            </ul>
        </div>
    )
}

export default List