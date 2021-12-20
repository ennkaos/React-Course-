import React, { useState } from 'react';

import CustomClassRMemoButton from './components/UI/Button/CustomClassRMemoButton';
import CustomClassRMemoDemoOutput from './components/Demo/CustomClassRMemoDemoOutput';
import './CustomClassRMemo.css';

function CustomClassRMemo() {
  const [showParagraph, setShowParagraph] = useState(false);

  console.log('APP RUNNING');

  const toggleParagraphHandler = () => {
    setShowParagraph((prevShowParagraph) => !prevShowParagraph);
  };
 
  return (
    <div className="app">
      <h1>Hi there!</h1>
      <CustomClassRMemoDemoOutput show={false} />
      <CustomClassRMemoButton onClick={toggleParagraphHandler}>Toggle Paragraph!</CustomClassRMemoButton>
    </div>
  );
}

export default CustomClassRMemo;
