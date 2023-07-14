import React from 'react';
import ReactDOM from 'react-dom';
import { App } from 'components/App';
import './index.css';
import Profile from 'components/Profile/Profile';
import Statistics from 'components/Stats/Stats';
import Friendlist from 'components/Friendslist/Friendlist';
import Transactions from 'components/Transactions/Trancations';



ReactDOM.render(
  <React.StrictMode>
    <App />
 

  </React.StrictMode>,
  document.getElementById('root')
);


