import React, { useState, useCallback } from 'react';

import CustomClassUseCallbackButton from './components/UI/Button/CustomClassUseCallbackButton';
import CustomClassUseCallbackDemoOutput from './components/Demo/CustomClassUseCallbackDemoOutput';
import './CustomClassUseCallback.css';

function CustomClassUseCallback() {
  const [showParagraph, setShowParagraph] = useState(false);

  console.log('APP RUNNING');

  const toggleParagraphHandler = useCallback(() => {
    setShowParagraph((prevShowParagraph) => !prevShowParagraph);
  }, []);
 
  return (
    <div className="app">
      <h1>Hi there!</h1>
      <CustomClassUseCallbackDemoOutput show={false} />
      <CustomClassUseCallbackButton onClick={toggleParagraphHandler}>Toggle Paragraph!</CustomClassUseCallbackButton>
    </div>
  );
}

export default CustomClassUseCallback;
