import React from 'react';
import PropTypes from 'prop-types';
import styles from './Transactions.module.css'
const Transactions = ({ items }) => (
    <table className={styles.transactionhistory}>
      <thead>
        <tr>
          <th>Type</th>
          <th>Amount</th>
          <th>Currency</th>
        </tr>
      </thead>
  
      <tbody>
        {items.map(({ id, type, amount, currency }) => (
          <tr key={id}>
            <td>{type}</td>
            <td>{amount}</td>
            <td>{currency}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
  Transactions.prototype = {
    items: PropTypes.arrayOf(
        PropTypes.shape({
            type: PropTypes.string.isRequired,
            currency: PropTypes.string.isRequired,
            amount: PropTypes.string.isRequired,
        })
    ).isRequired,
  };
  export default Transactions;