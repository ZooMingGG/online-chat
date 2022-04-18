import classes from './SideBar.module.css';
import { SideBarHeader } from '../SideBarHeader/SideBarHeader';
import { DialogueItem } from '../DialogueItem/DialogueItem';
import { DialogueSearchBar } from '../DialogueSearchBar/DialogueSearchBar';

export const SideBar = () => {
  return (
    <div className={classes.sidebar}>
      <SideBarHeader />
      <DialogueSearchBar />
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
