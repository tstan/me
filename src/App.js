import React from 'react';
import './App.scss';

const App = () => {
  return (
    <div className="container">
      <div className="terminal">
        <div className="terminal_body">
          <div className="terminal_prompt">
            <Prompt />
            <span className="prompt_text">cat intro.txt</span>
          </div>
          <div className="terminal_prompt_output">
            Welcome to my website!
            <br />
            Construction is in progress...
          </div>
          <div className="terminal_prompt">
            <Prompt />
            <span className="prompt_cursor"></span>
          </div>
        </div>
      </div>
    </div>
  );
};

const Prompt = () => {
  return (
    <span className="prompt">
      <span className="prompt_user">tstan@about</span>
      <span className="prompt_icon">:</span>
      <span className="prompt_location">~</span>
      <span className="prompt_icon">$</span>
    </span>
  );
};

export default App;
