import { BsPencilSquare, BsFillPeopleFill } from "react-icons/bs";

import classes from './SideBarHeader.module.css';

export const SideBarHeader = () => {
  return (
    <div className={classes.container}>
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
        onClick={() => alert(1)}
        style={{
          cursor: 'pointer',
          fontSize: '24px',
          color: '#8D8A9B',
        }} />
    </div>
  );
};
