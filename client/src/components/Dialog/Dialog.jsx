import classes from './Dialog.module.css'
import { MessageInput } from '../MessageInput/MessageInput';
import { Messages } from '../Messages/Messages';
import { DialogTopBar } from '../DialogTopBar/DialogTopBar';

export const Dialog = () => {
  return (
    <div className={classes.dialog}>
      <DialogTopBar />
      <div className={classes.container}>
        <Messages />
      </div>
      <MessageInput />
    </div>
  );
};
