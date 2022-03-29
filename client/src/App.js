import io from 'socket.io-client';
import { useEffect } from 'react';

const SERVER_URL = 'http://localhost:8080';

export const App = () => {
  useEffect(() => {
    const socket = io(SERVER_URL);

    socket.on("connect", () => {
      console.log(socket.id);
    });
  }, []);

  return (
    <div className="App">
      ZooMio Online Chat
    </div>
  );
};
