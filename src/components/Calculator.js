import React, { useState } from 'react';

function Calculator({ friends, curID }) {
  var name, img;
  const [bill, setBill] = useState('');
  const [yourExpense, setYourExpense] = useState('');
  const [friendsExpense, setFriendsExpense] = useState('');
  const [paying, setPaying] = useState('You');
  friends.forEach((friend) => {
    if (friend.ID === curID) {
      name = friend.friendsName;
      img = friend.friendsImg;
    }
  });

  function handleUpdateAdded(e) {
    e.preventDefault();
  }
  // console.log(friends);
  return (
    //bill value, your expense, anthony expense, Who's paying the bill
    <div className="bg-[#232627] p-8 rounded-md w-96">
      <div className="flex items-center gap-4">
        <img src={img} alt={name} className="w-16 h-16 rounded-full" />
        <div>
          <h2 className="text-xl font-bold">{name}</h2>
          <p className="text-sm">Added on: DATE</p>
        </div>
      </div>
      <div className="pt-8">
        <form className="flex flex-col gap-4" onSubmit={handleUpdateAdded}>
          <div className="flex justify-between items-center">
            <label htmlFor="bill">💰 Bill Value</label>
            <input
              id="bill"
              className="bg-[#3b3b3b] px-2 py-1 w-28 rounded-sm"
              value={bill}
              onChange={(e) => {
                setBill(e.target.value);
              }}
              type="number"
            />
          </div>
          <div className="flex  justify-between items-center">
            <label>🕴 Your expense</label>
            <input
              className="bg-[#3b3b3b] px-2 py-1 w-28 rounded-sm"
              value={yourExpense}
              onChange={(e) => {
                setYourExpense(e.target.value);
                const expense = Number(e.target.value) - Number(bill);
                setFriendsExpense(Math.abs(expense));
              }}
            />
          </div>
          <div className="flex  justify-between">
            <label>👨‍👩‍👧‍👦 {name}'s Expense</label>
            <input
              className="bg-[#2b2e30] px-2 py-1 w-28 rounded-sm"
              value={friendsExpense}
              disabled
            />
          </div>
          <div className="flex  justify-between">
            <label>🤑 Who is paying</label>
            <select
              className="bg-[#3b3b3b] px-2 py-1 w-28 rounded-sm"
              value={paying}
              onChange={(e) => {
                setPaying(e.target.value);
              }}
            >
              <option>You</option>
              <option>{name}</option>
            </select>
          </div>
          <button className="bg-[#5862b5] px-6 py-2 rounded-sm hover:bg-[#404783] w-28 self-end">
            Update
          </button>
        </form>
      </div>
    </div>
  );
}

export default Calculator;
