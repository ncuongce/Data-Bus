import React from 'react';

const AddBtn = () => {
  return (
    <div className='fixed-action-btn'>
      <a
        href='#add-message-modal'
        className='btn-floating btn-large blue darken-2 modal-trigger'
      >
        <i className='large material-icons'>add</i>
      </a>
      <ul>
        <li>
          <a
            href='#channel-list-modal'
            className='btn-floating green modal-trigger'
          >
            <i className='material-icons'>list</i>
          </a>
        </li>
        <li>
          <a href='#add-channel-modal' className='btn-floating red modal-trigger'>
            <i className='material-icons'>add_location</i>
          </a>
        </li>
      </ul>
    </div>
  );
};

export default AddBtn;
