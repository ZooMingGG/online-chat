import { useState } from 'react';
import { MdSend } from 'react-icons/md';

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
    <div className={classes['message-input-container']}>
      <input
        value={value}
        onChange={e => setValue(e.target.value)}
        className={classes['message-input']}
        type="text"
      />
      <MdSend
        onClick={sendMessage}
        style={{
          display: !!value.trim() ? 'inline-block' : 'none',
          cursor: 'pointer',
          fontSize: '35px',
          color: '#632EE7',
        }}
      />
    </div>
  );
};
