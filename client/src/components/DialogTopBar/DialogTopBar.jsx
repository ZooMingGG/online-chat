import classes from './DialogTopBar.module.css';

export const DialogTopBar = () => {
  const isOnline = true;

  return (
    <div className={classes.topbar}>
      <div className={classes['user-name']}>User 1</div>
      <div className={classes['user-status']}>
        <div className={isOnline ? classes.online : classes.offline}></div>
        <span>
          {isOnline ? 'Online' : 'Offline'}
        </span>
      </div>
    </div>
  );
};
