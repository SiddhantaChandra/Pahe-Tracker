import './App.css';
import AddFriend from './components/AddFriend';
import Calculator from './components/Calculator';
import Dashboard from './components/Dashboard';
import Friends from './components/Friends';

function App() {
  return (
    <div className="App flex items-center justify-center pt-24">
      <div className="flex flex-col gap-6">
        <Friends />
        <AddFriend />
        <button className="bg-[#5862b5] w-28 px-6 py-2 rounded-sm hover:bg-[#404783] self-end mr-8">
          Close
        </button>
      </div>
      <div>
        <Dashboard />
        <Calculator />
      </div>
    </div>
  );
}

export default App;
