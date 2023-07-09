import React from 'react';

function Friend({ name, money, img, style }) {
  return (
    <div className={style}>
      <div className="flex gap-4 items-center">
        <img src={img} alt={name} className=" w-16 h-16 rounded-full " />
        <div>
          <h3 className="font-bold">{name}</h3>
          {money > 0 ? (
            <p className="text-green-400">
              You owe {name} ${money}
            </p>
          ) : (
            ''
          )}
          {money < 0 ? (
            <p className="text-red-400">James owes you ${Math.abs(money)}</p>
          ) : (
            ''
          )}
          {money === 0 ? (
            <p className="text-gray-400">You guys are even</p>
          ) : (
            ''
          )}
        </div>
      </div>
      <button className="bg-[#5862b5] px-6 py-2 rounded-sm hover:bg-[#404783]">
        Select
      </button>
    </div>
  );
}

export default Friend;
