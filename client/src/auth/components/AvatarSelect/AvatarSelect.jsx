import { MdAddAPhoto } from 'react-icons/md';

import classes from './AvatarSelect.module.css';

export const AvatarSelect = ({ userAvatar, setUserAvatar, formik }) => {
  const selectFile = event => {
    if (!event.target.files[0]) {
      return;
    }

    const fileReader = new FileReader();
    fileReader.readAsDataURL(event.target.files[0]);

    fileReader.onload = () => {
      setUserAvatar(fileReader.result);
      formik.setFieldValue('userAvatar', event.target.files[0]);
    };
  };

  return (
    <div className={classes['avatar-select-container']}>
      <label>
        {userAvatar ? (
          <img src={userAvatar} className={classes['avatar-preview']} alt="User avatar" />
        ) : (
          <div className={classes['avatar-preview-icon-container']}>
            <MdAddAPhoto className={classes['avatar-preview-icon']} />
          </div>
        )}
        <input onChange={selectFile} type="file" accept="image/*" hidden />
        <div className={classes['avatar-select-btn']}>Upload Photo</div>
      </label>
    </div>
  );
};
