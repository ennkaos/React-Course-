import React, { useState } from 'react';

import CustomClassCloserButton from './components/UI/Button/CustomClassCloserButton';
import CustomClassCloserDemoOutput from './components/Demo/CustomClassCloserDemoOutput';
import './CustomClassCloser.css';

function CustomClassCloser() {
  const [showParagraph, setShowParagraph] = useState(false);

  console.log('APP RUNNING');

  const toggleParagraphHandler = () => {
    setShowParagraph((prevShowParagraph) => !prevShowParagraph);
  };

  return (
    <div className="app">
      <h1>Hi there!</h1>
      <CustomClassCloserDemoOutput show={showParagraph} />
      <CustomClassCloserButton onClick={toggleParagraphHandler}>Toggle Paragraph!</CustomClassCloserButton>
    </div>
  );
}

export default CustomClassCloser;
