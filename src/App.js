import React from 'react';
import './App.css';
import Login from './Login';
import Header from './Header';
import Sidebar from './Sidebar';
import Feed from './Feed';
import Widgets from './Widgets';
import { useStateValue } from './StateProvider';

function App() {
  const [{ user }, dispatch] = useStateValue();
  // const user=null;
  return (
    <div className="App" >
      {!user? (
        <Login />
      ) : (
        <>
          <Header />
          <div className='app__body' >
            <Sidebar />
            <Feed />
            <Widgets />
          </div>
          </>
      )}
    </div>
  );
}

export default App;