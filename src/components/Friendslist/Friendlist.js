import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import styles from './Friendlist.css'

const Friendlist = ({ friends }) => {
    return (
      <ul className="friend-list">
        {friends.map(friend => (
          <li className="item" key={friend.id}>
            <span
              className="status"
              style={{ backgroundColor: friend.isOnline ? 'green' : 'red' }}
            >
              {friend.isOnline ? 'Online' : 'Offline'}
            </span>
            <img className="avatar" src={friend.avatar} alt="User avatar" width="48" />
            <p className="name">{friend.name}</p>
          </li>
        ))}
      </ul>
    );
  };
  Friendlist.propTypes = {
    friends: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.string.isRequired,
        isOnline: PropTypes.bool.isRequired,
        avatar: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
      })
    ).isRequired,
  };

  export default Friendlist;