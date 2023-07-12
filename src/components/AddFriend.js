import React, { useState } from 'react';

function AddFriend({ updateFriends }) {
  const [friendsName, setFriendsName] = useState('');
  const [friendsImg, setFriendsImg] = useState('https://i.pravatar.cc/120');
  const handleFriendsName = (e) => {
    setFriendsName(e.target.value);
  };

  const handleFriendsImg = (e) => {
    setFriendsImg(e.target.value);
    console.log(e.target.value);
  };

  const handleFormAddFriend = (e) => {
    e.preventDefault();

    if (!friendsImg || !friendsName) {
      return;
    }
    const ID = crypto.randomUUID();
    const newFriend = {
      ID,
      friendsName,
      friendsImg: `${friendsImg}?=${ID}`,
      balance: 0,
    };

    updateFriends(newFriend);

    console.log(newFriend);
    setFriendsName('');
    setFriendsImg('https://i.pravatar.cc/120');
  };
  return (
    <form
      className="flex flex-col gap-4 bg-[#232627] rounded-md p-8"
      onSubmit={handleFormAddFriend}
    >
      <div className="flex justify-between items-center">
        <label>👨‍👩‍👧‍👦 Friend's Name</label>
        <input
          className="bg-[#3b3b3b] px-4 py-2 rounded-md"
          value={friendsName}
          onChange={handleFriendsName}
        />
      </div>
      <div className="flex justify-between items-center">
        <label>🌄 Image URL</label>
        <input
          className="bg-[#3b3b3b] px-4 py-2 rounded-md"
          value={friendsImg}
          onChange={handleFriendsImg}
        />
      </div>
      <button className="bg-[#5862b5] px-6 py-2 rounded-sm hover:bg-[#404783]">
        Add
      </button>
    </form>
  );
}

export default AddFriend;
