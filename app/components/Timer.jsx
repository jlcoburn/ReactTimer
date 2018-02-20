const React = require('react');
const Clock = require('Clock');

const Timer = React.createClass({


  render: () => {

    let count = 25;
    return (
      <div>
        <Clock totalSeconds={count} />
      </div>
    );
  },


});

module.exports = Timer;