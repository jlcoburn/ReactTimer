const React = require('react');
const Nav = require('Nav');

const Main = (props) => {
  return (
    <div>
      <Nav />
      <div>
        <div>
          <p>Main.jsx rendered</p>
          {props.children}
        </div>
      </div>
    </div>
  );
}

module.exports = Main;