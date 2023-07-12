import React from 'react';
import { PieChart } from 'react-minimal-pie-chart';

function Dashboard({ debt, dues }) {
  const pieData = [
    { title: 'Dues', value: dues, color: 'rgb(248 113 113)' },
    { title: 'Debt', value: debt, color: 'rgb(74 222 128)' },
  ];
  return (
    <div className="flex flex-col bg-[#232627] pb-8 rounded-md w-96">
      <h2 className="px-8 pt-4 font-bold text-lg">Overview</h2>
      <div className="">
        <PieChart data={pieData} animate="true" radius={30} />
      </div>
      <div className="px-8">
        <div className="flex items-center gap-2">
          <div className="w-2 h-2 bg-green-400"></div>
          <p>Debt/Liability - ${debt}</p>
        </div>
        <div className="flex items-center gap-2">
          <div className="w-2 h-2 bg-red-400"></div>
          <p>Dues/Recieveable - ${dues}</p>
        </div>
        <h3 className="font-semibold mt-4">
          {debt > dues
            ? '🤑 You are an cheapskate '
            : '😭 Your friends are cheapskates '}
        </h3>
      </div>
    </div>
  );
}

export default Dashboard;
