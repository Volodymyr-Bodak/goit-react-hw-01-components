
import React from 'react';
import PropTypes from 'prop-types';
import styles from './Stats.module.css'

const getRandomColor = () => {
  const letters = '0123456789ABCDEF';
  let color = '#';
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
};

const Statistics = ({ stats, title }) => {
  return (
    <section className="statistics">
     {title && <h2 className={styles.title}>{title}</h2>} 
      

      <ul className={styles.statlist}>
        {stats.map(stat => (
          <li
            className={styles.item}
            key={stat.id}
            style={{ backgroundColor: getRandomColor() }}
          >
            <span className={styles.label}>{stat.label}</span>
            <span className={styles.percentage}> {stat.percentage}%</span>
          </li>
        ))}
      </ul>
    </section>
  );
};


Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    }),
  ).isRequired,
};
export default Statistics;



