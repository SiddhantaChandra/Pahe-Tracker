import React from 'react';
import Friend from './Friend';
import img1 from '../photos/1.jpg';
import img2 from '../photos/2.jpg';
import img3 from '../photos/3.jpg';
import img4 from '../photos/4.jpg';

function Friends() {
  const friends = [
    { name: 'Alex', money: -51, img: img1 },
    { name: 'Bob', money: 73, img: img2 },
    { name: 'Charlie', money: 0, img: img3 },
    { name: 'David', money: 41, img: img4 },
  ];

  return (
    <div className="flex flex-col w-[28rem] rounded-md overflow-hidden">
      {friends.map((friend, index) => {
        return (
          <Friend
            name={friend.name}
            money={friend.money}
            key={friend.img}
            img={friend.img}
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
