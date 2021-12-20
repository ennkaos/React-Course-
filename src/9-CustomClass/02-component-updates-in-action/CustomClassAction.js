import React, { useState } from 'react';

import CustomClassActionButton from './components/UI/Button/CustomClassActionButton';
import './CustomClassAction.css';

function CustomClassAction() {
  const [showParagraph, setShowParagraph] = useState(false);

  console.log('APP RUNNING');

  const toggleParagraphHandler = () => {
    setShowParagraph((prevShowParagraph) => !prevShowParagraph);
  };

  return (
    <div className="app">
      <h1>Hi there!</h1>
      {showParagraph && <p>This is new!</p>}
      <CustomClassActionButton onClick={toggleParagraphHandler}>Toggle Paragraph!</CustomClassActionButton>
    </div>
  );
}

export default CustomClassAction;
