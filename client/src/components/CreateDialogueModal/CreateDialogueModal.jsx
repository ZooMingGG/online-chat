import { GiCancel } from 'react-icons/gi';

import classes from './CreateDialogueModal.module.css';
import { Button } from '../../shared/components/Button/Button';

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
          <GiCancel
            onClick={() => setIsVisible(false)}
            className={classes['modal-close']}
          />
        </div>
        <hr />
        <div className={classes['modal-content']}>
          <div>
            <div>
              <label htmlFor="teg">Enter teg:</label>
            </div>
            <div>
              <input id="teg" type="text" />
            </div>
          </div>
          <div>
            <div>
              <label htmlFor="message">Enter message:</label>
            </div>
            <div>
              <input id="message" type="text" />
            </div>
          </div>
        </div>
        <hr />
        <div className={classes['modal-actions']}>
          <Button
            onClick={() => setIsVisible(false)}
            className={classes['modal-btn']}
          >
            Close
          </Button>
          <Button
            className={classes['modal-btn']}
          >
            Create
          </Button>
        </div>
      </div>
    </div>
  );
};
