import React, { useState, useCallback, useMemo } from 'react';

import './CustomClassFinished.css';
import CustomClassFinishedDemoList from './components/Demo/CustomClassFinishedDemoList';
import CustomClassFinishedButton from './components/UI/Button/CustomClassFinishedButton';

function CustomClassFinished() {
  const [listTitle, setListTitle] = useState('My List');

  const changeTitleHandler = useCallback(() => {
    setListTitle('New Title');
  }, []);

  const listItems = useMemo(() => [5, 3, 1, 10, 9], []);

  return (
    <div className="app">
      <CustomClassFinishedDemoList title={listTitle} items={listItems} />
      <CustomClassFinishedButton onClick={changeTitleHandler}>Change List Title</CustomClassFinishedButton>
    </div>
  );
}

export default CustomClassFinished;
