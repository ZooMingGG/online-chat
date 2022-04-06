import { useState } from 'react';
import { MdSend } from 'react-icons/md';

import socket from '../../socket';
import classes from './MessageInput.module.css';

export const MessageInput = () => {
  const [value, setValue] = useState('');

  const generateSendTime = () => {
    const currentDate = new Date();
    const hours = (currentDate.getHours() < 10 ? '0' : '') + currentDate.getHours();
    const minutes = (currentDate.getMinutes() < 10 ? '0' : '') + currentDate.getMinutes();

    return `${hours}:${minutes}`;
  };

  const sendMessage = () => {
    if (!value.trim()) {
      return;
    }

    const sentTime = generateSendTime();

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
        placeholder="Message..."
        type="text"
      />
      <MdSend
        onClick={sendMessage}
        style={{
          cursor: 'pointer',
          fontSize: '35px',
          color: !!value.trim() ? '#632EE7' : '#919191',
        }}
      />
    </div>
  );
};
