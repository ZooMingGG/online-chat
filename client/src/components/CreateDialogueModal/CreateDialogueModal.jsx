import classes from './CreateDialogueModal.module.css';

export const CraeteDialogueModal = ({ isVisible, setIsVisible }) => {
  const modalClasses = [classes.modal];

  if (isVisible) {
    modalClasses.push(classes.visible);
  }

  return (
    <div className={modalClasses.join(' ')}>
      <div className={classes['modal-container']}>
        <div className={classes['modal-header']}>
          <span className={classes['modal-header-text']}>
            Create Dialogue
          </span>
          <span
            onClick={() => setIsVisible(false)}
            className={classes['modal-close']}
          >
            X
          </span>
        </div>
        <hr />
        <div className={classes['modal-content']}>
          <div>
            <div>
              <label>Enter teg or email:</label>
            </div>
            <div>
              <input type="text" />
            </div>
          </div>
          <div>
            <div>
              <label>Enter message:</label>
            </div>
            <div>
              <input type="text" />
            </div>
          </div>
        </div>
        <hr />
        <div className={classes['modal-actions']}>
          <button
            onClick={() => setIsVisible(false)}
          >
            Close
          </button>
          <button>Create</button>
        </div>
      </div>
    </div>
  );
};
