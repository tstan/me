import React from 'react';
import { HashRouter as Router } from 'react-router-dom';
import { Navbar, Nav } from 'react-bootstrap';

import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

const App = () => {
  const smoothScrollToAnchor = (anchor) => {
    const anchorNode = document.getElementById(anchor);
    anchorNode.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div>
      <Router>
        <Navbar className="navbar" bg="dark" variant="dark" fixed="top">
          <Navbar.Brand href="#home">
            <span className="green-text">THEODORE </span>
            <span className="grey-text">TAN</span>
          </Navbar.Brand>
          <Nav className="mr-auto" onSelect={(e) => smoothScrollToAnchor(e)}>
            <Nav.Link eventKey="home">HOME</Nav.Link>
            <Nav.Link eventKey="about">ABOUT</Nav.Link>
            <Nav.Link eventKey="resume">RESUME</Nav.Link>
            <Nav.Link eventKey="projects">PROJECTS</Nav.Link>
            <Nav.Link eventKey="contact">CONTACT</Nav.Link>
          </Nav>
        </Navbar>
      </Router>

      <section className="section-first" id="home">
        <header>
          <h2>Home</h2>
          <div>
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
            industry`&apos;`s standard dummy text ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap
            into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the
            release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing
            software like Aldus PageMaker including versions of Lorem Ipsum.
          </div>
        </header>
      </section>
      <section id="about">
        <h2>About</h2>{' '}
        <div>
          Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
          industry`&apos;`s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into
          electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of
          Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus
          PageMaker including versions of Lorem Ipsum.
        </div>
      </section>
      <section id="resume">
        <h2>Resume</h2>{' '}
        <div>
          Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
          industry`&apos;`s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into
          electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of
          Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus
          PageMaker including versions of Lorem Ipsum.
        </div>
      </section>
      <section id="projects">
        <h2>Projects</h2>{' '}
        <div>
          Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
          industry`&apos;`s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into
          electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of
          Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus
          PageMaker including versions of Lorem Ipsum.
        </div>
      </section>
      <section id="contact">
        <h2>Contact</h2>{' '}
        <div>
          Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
          industry`&apos;`s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into
          electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of
          Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus
          PageMaker including versions of Lorem Ipsum.
        </div>
      </section>
    </div>
  );
};

export default App;
