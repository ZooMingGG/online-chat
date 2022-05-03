import { useState } from 'react';
import { MdSend } from 'react-icons/md';

import socket from '../../../socket';
import classes from './MessageInput.module.css';
import { Input } from '../../../shared/components/Input/Input';

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
      <Input
        value={value}
        onChange={e => setValue(e.target.value)}
        className={classes['message-input']}
        placeholder="Message..."
        type="text"
      />
      <MdSend
        onClick={sendMessage}
        className={classes['send-btn']}
        style={{
          color: value.trim() ? '#632ee7' : '#919191',
        }}
      />
    </div>
  );
};
