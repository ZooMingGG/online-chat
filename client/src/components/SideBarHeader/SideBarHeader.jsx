import { useState } from 'react';
import { BsPencilSquare, BsFillPeopleFill } from 'react-icons/bs';

import classes from './SideBarHeader.module.css';
import { CraeteDialogueModal } from '../CreateDialogueModal/CreateDialogueModal';

export const SideBarHeader = () => {
  const [isVisible, setIsVisible] = useState(false);

  return (
    <div className={classes.container}>
      <CraeteDialogueModal
        isVisible={isVisible}
        setIsVisible={setIsVisible}
      />
      <div className={classes.dialogues}>
        <BsFillPeopleFill
          style={{
            marginRight: '10px',
            cursor: 'pointer',
            fontSize: '24px',
            color: '#8D8A9B',
          }}
        />
        <span>All dialogues</span>
      </div>
      <BsPencilSquare
        onClick={() => setIsVisible(true)}
        style={{
          cursor: 'pointer',
          fontSize: '24px',
          color: '#8D8A9B',
        }} />
    </div>
  );
};
