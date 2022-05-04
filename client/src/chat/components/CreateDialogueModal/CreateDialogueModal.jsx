import { useFormik } from 'formik';
import { GiCancel } from 'react-icons/gi';

import classes from './CreateDialogueModal.module.css';
import { Button } from '../../../shared/components/Button/Button';
import { Input } from '../../../shared/components/Input/Input';

export const CraeteDialogueModal = ({ isVisible, setIsVisible }) => {
  const modalClasses = [classes.modal];
  const formik = useFormik({
    initialValues: {
      tag: '',
      message: '',
    },
    onSubmit: values => {
      alert(JSON.stringify(values, null, 2));
    },
  });

  if (isVisible) {
    modalClasses.push(classes.visible);
  }

  return (
    <div className={modalClasses.join(' ')}>
      <form onSubmit={formik.handleSubmit} className={classes['modal-container']}>
        <div className={classes['modal-header']}>
          <span className={classes['modal-header-text']}>Create Dialogue</span>
          <Button
            Icon={GiCancel}
            onClick={() => setIsVisible(false)}
            className={classes['modal-close']}
          />
        </div>
        <hr />
        <div className={classes['modal-content']}>
          <div>
            <div>
              <label htmlFor="teg">Enter user tag:</label>
            </div>
            <div>
              <Input
                onChange={formik.handleChange}
                value={formik.values.tag}
                className={classes.input}
                id="tag"
                name="tag"
                placeholder="Tag..."
                type="text"
              />
            </div>
          </div>
          <div>
            <div>
              <label htmlFor="message">Enter message:</label>
            </div>
            <div>
              <Input
                onChange={formik.handleChange}
                value={formik.values.message}
                className={classes.input}
                id="message"
                name="message"
                placeholder="Message..."
                type="text"
              />
            </div>
          </div>
        </div>
        <hr />
        <div className={classes['modal-actions']}>
          <Button
            onClick={() => setIsVisible(false)}
            className={classes['modal-btn']}
            type="button"
          >
            Close
          </Button>
          <Button className={classes['modal-btn']} type="submit">
            Create
          </Button>
        </div>
      </form>
    </div>
  );
};
