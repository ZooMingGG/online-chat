import { useEffect } from 'react';

import socket from './socket';
import { Dialog } from './components/Dialog/Dialog';
import { SideBar } from './components/SideBar/SideBar';

const ROOM_NAME = 'TESTROOM';

export const App = () => {
  useEffect(() => {
    socket.on('connect', () => {
      socket.emit('join', ROOM_NAME);
    });

    return () => {
      socket.disconnect();
    };
  }, []);

  return (
    <div className="App">
      <div className="Chat">
        <SideBar />
        <Dialog />
      </div>
    </div>
  );
};
