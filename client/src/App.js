import { useEffect } from 'react';

import socket from './socket';
import { Dialog } from './components/Dialog/Dialog';

const ROOM_NAME = 'TESTROOM';

export const App = () => {
  useEffect(() => {
    socket.on('connect', () => {
      socket.emit('join', ROOM_NAME);
    });
  }, []);

  return (
    <div className="App">
      <div className="Chat">
        <Dialog />
      </div>
    </div>
  );
};
