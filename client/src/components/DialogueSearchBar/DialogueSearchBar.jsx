import { useState } from 'react';

import classes from './DialogueSearchBar.module.css';
import { Input } from '../../shared/components/Input/Input';

export const DialogueSearchBar = () => {
  const [searchQuery, setSearchQuery] = useState('');

  return (
    <div className={classes.container}>
      <Input
        value={searchQuery}
        onChange={e => setSearchQuery(e.target.value)}
        placeholder="Search dialogue..."
        type="text"
      />
    </div>
  );
};
