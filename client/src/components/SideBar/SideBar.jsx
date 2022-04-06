import classes from './SideBar.module.css';
import { SideBarHeader } from '../SideBarHeader/SideBarHeader';
import { DialogueItem } from '../DialogueItem/DialogueItem';

export const SideBar = () => {
  return (
    <div className={classes.sidebar}>
      <SideBarHeader />
      <DialogueItem />
      <DialogueItem />
      <DialogueItem />
      <DialogueItem />
      <DialogueItem />
      <DialogueItem />
      <DialogueItem />
      <DialogueItem />
      <DialogueItem />
      <DialogueItem />
      <DialogueItem />
      <DialogueItem />
      <DialogueItem />
    </div>
  );
};
