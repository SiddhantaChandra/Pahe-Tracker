import React from 'react';
import Friend from './Friend';

function Friends({ friends, handleShowCalculator }) {
  return (
    <div className="flex flex-col w-[28rem] rounded-md overflow-hidden">
      {friends.map((friend, index) => {
        return (
          <Friend
            name={friend.friendsName}
            money={friend.balance}
            key={friend.ID}
            id={friend.ID}
            img={friend.friendsImg}
            handleShowCalculator={handleShowCalculator}
            style={
              (index + 1) % 2 === 1
                ? 'flex items-center justify-between  px-8 py-4 bg-[#232627] '
                : 'flex items-center justify-between  px-8 py-4 bg-[#2b2e30]'
            }
          />
        );
      })}
    </div>
  );
}

export default Friends;
