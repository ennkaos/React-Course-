import React, { useState, useCallback } from 'react';

import CustomClassDependenciesButton from './components/UI/Button/CustomClassDependenciesButton';
import CustomClassDependenciesDemoOutput from './components/Demo/CustomClassDependenciesDemoOutput';
import './CustomClassDependencies.css';

function CustomClassDependencies() {
  const [showParagraph, setShowParagraph] = useState(false);
  const [allowToggle, setAllowToggle] = useState(false);

  console.log('APP RUNNING');

  const toggleParagraphHandler = useCallback(() => {
    if (allowToggle) {
      setShowParagraph((prevShowParagraph) => !prevShowParagraph);
    }
  }, [allowToggle]);

  const allowToggleHandler = () => {
    setAllowToggle(true);
  };

  return (
    <div className="app">
      <h1>Hi there!</h1>
      <CustomClassDependenciesDemoOutput show={showParagraph} />
      <CustomClassDependenciesButton onClick={allowToggleHandler}>Allow Toggling</CustomClassDependenciesButton>
      <CustomClassDependenciesButton onClick={toggleParagraphHandler}>Toggle Paragraph!</CustomClassDependenciesButton>
    </div>
  );
}

export default CustomClassDependencies;
