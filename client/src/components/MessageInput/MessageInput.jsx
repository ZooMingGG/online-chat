import { useState } from 'react';

import socket from '../../socket';
import classes from './MessageInput.module.css';

export const MessageInput = () => {
  const [value, setValue] = useState('');

  const sendMessage = () => {
    const sentTime = `${new Date().getHours()}:${new Date().getMinutes()}`;

    const message = {
      sentTime,
      text: value,
    };

    socket.emit('MESSAGE:SEND', message);
    setValue('');
  };

  return (
    <div>
      <input
        value={value}
        onChange={e => setValue(e.target.value)}
        className={classes['message-input']}
        type="text"
      />
      <button onClick={sendMessage}>Submit</button>
    </div>
  );
};
