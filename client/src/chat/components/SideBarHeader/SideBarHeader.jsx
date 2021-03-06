import { useState } from 'react';
import { BsPencilSquare, BsFillPeopleFill } from 'react-icons/bs';

import classes from './SideBarHeader.module.css';
import { CraeteDialogueModal } from '../CreateDialogueModal/CreateDialogueModal';
import { Button } from '../../../shared/components/Button/Button';

export const SideBarHeader = () => {
  const [isVisible, setIsVisible] = useState(false);

  return (
    <div className={classes.container}>
      <CraeteDialogueModal isVisible={isVisible} setIsVisible={setIsVisible} />
      <div className={classes.dialogues}>
        <BsFillPeopleFill className={classes['dialogues-icon']} />
        <span>All dialogues</span>
      </div>
      <Button
        Icon={BsPencilSquare}
        onClick={() => setIsVisible(true)}
        className={classes['create-dialogue-icon']}
      />
    </div>
  );
};
