import classes from './Dialogue.module.css'
import { MessageInput } from '../MessageInput/MessageInput';
import { Messages } from '../Messages/Messages';
import { DialogueTopBar } from '../DialogueTopBar/DialogueTopBar';

export const Dialogue = () => {
  return (
    <div className={classes.dialogue}>
      <DialogueTopBar />
      <div className={classes.container}>
        <Messages />
      </div>
      <MessageInput />
    </div>
  );
};
