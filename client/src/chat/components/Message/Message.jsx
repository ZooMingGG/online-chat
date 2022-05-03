import classes from './Message.module.css';

export const Message = ({ message }) => {
  return (
    <div className={classes.container}>
      <div className={classes.avatar} />
      <div className={classes.message}>
        <div>{message.text}</div>
        <div>
          <div className={classes['message-sent-time']}>{message.sentTime}</div>
        </div>
      </div>
    </div>
  );
};
