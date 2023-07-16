import { useState } from 'react';
import './App.css';
import AddFriend from './components/AddFriend';
import Calculator from './components/Calculator';
import Dashboard from './components/Dashboard';
import Friends from './components/Friends';

const initialFriends = [
  {
    ID: 1,
    friendsName: 'Alex',
    balance: -51,
    friendsImg: 'https://i.pravatar.cc/120?img=3',
  },
  {
    ID: 2,
    friendsName: 'Bob',
    balance: 73,
    friendsImg: 'https://i.pravatar.cc/120?img=1',
  },
  {
    ID: 3,
    friendsName: 'Charlie',
    balance: 0,
    friendsImg: 'https://i.pravatar.cc/120?img=67',
  },
];

function App() {
  const [showAddFriends, setShowAddFriends] = useState(false);
  const [showCalculator, setShowCalculator] = useState(false);
  const [curID, setCurID] = useState('');
  const [friends, setFriends] = useState(initialFriends);

  const updateFriends = (friend) => {
    setFriends((friends) => [...friends, friend]);
  };

  const updateAddedFriends = (update) => {
    console.log(update.balance);
    setFriends((friends) =>
      friends.map((friend) => {
        if (friend.ID === update.id) {
          if (update.paying === 'You') {
            return {
              ...friend,
              balance: friend.balance - Number(update.friendBalance),
            };
          } else if (update.paying !== 'You') {
            return {
              ...friend,
              balance: friend.balance + Number(update.yourBalance),
            };
          }
        }
        return friend;
      }),
    );
    console.log(friends);
  };

  const handleShowAddFriends = (e) => {
    setShowAddFriends(!showAddFriends);
  };

  const handleShowCalculator = (id) => {
    // setShowCalculator(!showCalculator);
    if (curID === '') {
      setCurID(id);
      setShowCalculator(!showCalculator);
    }
    if (curID !== '') {
      setCurID(id);
      setShowCalculator(showCalculator);
    }
    if (curID === id) {
      setCurID('');
      setShowCalculator(!showCalculator);
    }
  };

  const positiveBalanceSum = friends.reduce((sum, friend) => {
    if (friend.balance >= 0) {
      return sum + friend.balance;
    }
    return sum;
  }, 0);

  const negetiveBalanceSum = friends.reduce((sum, friend) => {
    if (friend.balance < 0) {
      return sum - friend.balance;
    }
    return sum;
  }, 0);

  return (
    <div className="App flex flex-col items-center gap-8">
      <div className="flex items-center gap-8 pt-8">
        <h1 className="text-4xl font-bold">Pahe 💸 Tracker</h1>
      </div>
      <div className="flex justify-center pt-8 gap-8">
        <div className="flex flex-col gap-6">
          <Friends
            friends={friends}
            handleShowCalculator={handleShowCalculator}
          />
          {!showAddFriends ? (
            <button
              className="bg-[#5862b5] w-36 px-6 py-2 rounded-sm hover:bg-[#404783] self-end mr-8"
              onClick={handleShowAddFriends}
            >
              Add Friend
            </button>
          ) : (
            <>
              <AddFriend updateFriends={updateFriends} />
              <button
                className="bg-[#5862b5] w-36 px-6 py-2 rounded-sm hover:bg-[#404783] self-end mr-8"
                onClick={handleShowAddFriends}
              >
                Close
              </button>
            </>
          )}

          {/*  */}
        </div>
        <div className="flex flex-col gap-8">
          {!showCalculator ? (
            ''
          ) : (
            <Calculator
              friends={friends}
              curID={curID}
              updateAddedFriends={updateAddedFriends}
            />
          )}

          <Dashboard debt={positiveBalanceSum} dues={negetiveBalanceSum} />
        </div>
      </div>
    </div>
  );
}

export default App;
