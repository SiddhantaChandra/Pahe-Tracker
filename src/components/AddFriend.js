import React from 'react';

function AddFriend() {
  return (
    <div className="flex flex-col gap-4 bg-[#232627] rounded-md p-8">
      <div className="flex justify-between items-center">
        <label>👨‍👩‍👧‍👦 Friend's Name</label>
        <input className="bg-[#3b3b3b] px-4 py-2 rounded-md" />
      </div>
      <div className="flex justify-between items-center">
        <label>🌄 Image URL</label>
        <input className="bg-[#3b3b3b] px-4 py-2 rounded-md" />
      </div>
      <button className="bg-[#5862b5] px-6 py-2 rounded-sm hover:bg-[#404783]">
        Add
      </button>
    </div>
  );
}

export default AddFriend;
