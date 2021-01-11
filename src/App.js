import React from 'react';
import './App.scss';

const App = () => {
  return (
    <div>
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
            <WhoAmI />
            <ListExperiences />
            <EchoEducation />
            <LessSkills />
            <BlinkingPrompt />
          </div>
        </div>
      </div>

      <div className="footer">
        <span className="footer_text">
          Find me on&nbsp;
          <a href="https://www.linkedin.com/in/theodoresinhantan/" target="_blank" rel="noopener noreferrer">
            LinkedIn
          </a>
          &nbsp;|&nbsp;
          <a href="https://github.com/tstan" target="_blank" rel="noopener noreferrer">
            GitHub
          </a>
        </span>
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

const BlinkingPrompt = () => {
  return (
    <div className="terminal_prompt">
      <Prompt />
      <span className="prompt_cursor"></span>
    </div>
  );
};

const WhoAmI = () => {
  return (
    <React.Fragment>
      <div className="terminal_prompt">
        <Prompt />
        <span className="prompt_text">whoami</span>
      </div>
      <div className="terminal_prompt_output">
        Name: Theodore Tan
        <br />
        Nickname: Theo
        <br />
        Current Title: Software Engineer @ Kasa
      </div>
    </React.Fragment>
  );
};

const ListExperiences = () => {
  return (
    <React.Fragment>
      <div className="terminal_prompt">
        <Prompt />
        <span className="prompt_text">ls -l previous_work</span>
      </div>
      <div className="terminal_prompt_output">
        total 4+ years
        <br />
        Software Engineer | full-time | Kasa&nbsp;&nbsp;&nbsp;&nbsp; | Jan 2020 – Present
        <br />
        Software Engineer | full-time | Veeva&nbsp;&nbsp;&nbsp; | Sep 2017 – Jan 2020
        <br />
        Software Engineer | part-time | Kibo&nbsp;&nbsp;&nbsp;&nbsp; | Mar 2016 - Oct 2016
        <br />
        Web Developer&nbsp;&nbsp;&nbsp;&nbsp; | part-time | CAL FIRE | May 2015 - Feb 2016
      </div>
    </React.Fragment>
  );
};

const EchoEducation = () => {
  return (
    <React.Fragment>
      <div className="terminal_prompt">
        <Prompt />
        <span className="prompt_text">echo $&#123;EDUCATION&#125;</span>
      </div>
      <div className="terminal_prompt_output">B.S. Computer Science, Cal Poly SLO, Jun 2017</div>
    </React.Fragment>
  );
};

const LessSkills = () => {
  return (
    <React.Fragment>
      <div className="terminal_prompt">
        <Prompt />
        <span className="prompt_text">cut -d : -f 1 /etc/technologies</span>
      </div>
      <div className="terminal_prompt_output">
        Java
        <br />
        Node.js
        <br />
        MySQL
        <br />
        MongoDB
        <br />
        AWS
      </div>
    </React.Fragment>
  );
};

export default App;
