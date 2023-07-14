import React from 'react';
import PropTypes from 'prop-types';
import styles from './Friendlist.module.css'

const Friendlist = ({ friends }) => {
  return (
    <ul className="friendlist">
      {friends.map(friend => (
        <FriendListItem key={friend.id} friend={friend} />
      ))}
    </ul>
  );
};
  const FriendListItem = ({ friend }) => {
    const { avatar, name, isOnline } = friend;
  
    return (
      <li className={styles.item}>
         <span
               className={`${styles.status} ${isOnline ? styles.true : styles.false}`}
            >
              
            </span>
        
        <img className= {styles.avatar} src={avatar} alt="User avatar" width="48" />
        <p className={styles.name}>{name}</p>
      </li>
    );
  };
  
  
  Friendlist.propTypes = {
    friends: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.number.isRequired,
        isOnline: PropTypes.bool.isRequired,
        avatar: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
      })
    ).isRequired,
  };

  export default Friendlist;