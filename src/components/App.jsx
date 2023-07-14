import Profile from "./Profile/Profile";
import Statistics from "./Stats/Stats";
import Friendlist from "./Friendslist/Friendlist";
import Transactions from "./Transactions/Trancations";
import user from 'data/user.json'
import data from 'data/data.json'
import info from 'data/friends.json'
import transactions from "data/transactions.json";
export const App = () => {
  return (
    <div
      style={{
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 40,
        color: '#010101',
        gap: '20px'
      }}
    >
      
      <Profile
      avatar={user.avatar}
      username={user.username}
      tag={user.tag}
      location={user.location}
      stats={user.stats}
    />
     <Statistics
      stats={data}
      title='Upload stats'
    />
     <Friendlist
      friends={info}
    />
    <Transactions items={transactions} />;
    </div>
  );
};
