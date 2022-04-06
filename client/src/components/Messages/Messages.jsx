import { useState, useEffect } from 'react';

import socket from '../../socket';
import { Message } from '../Message/Message';

export const Messages = () => {
  const [messages, setMessages] = useState([
    { id: 1, isRead: true, text: 'Hello!, Do you remember melorem ipsumsadasdasdasdsadsadsadsadasdasdasdsadsad?', sentTime: '16:12' },
    { id: 2, isRead: true, text: 'Hello!, From Ukrain', sentTime: '17:05' },
    { id: 3, isRead: false, text: 'Hi!!', sentTime: '18:32' },
  ]);

  const onReceiveMessage = (message) => {
    setMessages(messages => [...messages, { id: Date.now(), isRead: false, ...message }]);
  };

  useEffect(() => {
    socket.on('MESSAGE:RECEIVE', onReceiveMessage);

    return () => {
      socket.off('MESSAGE:RECEIVE', onReceiveMessage);
    };
  }, []);

  return (
    messages.map(message => <Message key={message.id} message={message} />)
  );
};
