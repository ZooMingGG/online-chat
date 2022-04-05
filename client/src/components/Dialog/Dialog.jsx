import classes from './Dialog.module.css'
import { MessageInput } from '../MessageInput/MessageInput';
import { Messages } from '../Messages/Messages';

export const Dialog = () => {
  return (
    <div className={classes.dialog}>
      <Messages />
      <MessageInput />
    </div>
  );
};
