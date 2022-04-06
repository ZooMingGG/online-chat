import classes from './DialogueItem.module.css';

export const DialogueItem = () => {
  return (
    <div className={classes['dialogue-item']}>
      <div className={classes.container}>
        <div className={classes['user-avatar']}></div>
        <div>
          <div className={classes['user-name']}>Max Doe</div>
          <div className={classes['last-message']}>Hi! Do you remember me?</div>
        </div>
      </div>
      <div className={classes['send-time']}>18:32</div>
    </div>
  );
};
