

import React, { Component } from 'react';
import Tooltip from './Tooltip';

class App extends Component {
  constructor() {
    super();
    // defining the state of initial state for the tooltip
    this.state = {
      position: "top",
      hovering: false,
    };
  }

  // mouse entering condition for the hovering state
  handleMouseEnter = () => {
    this.setState({
      hovering: true,
    });
  };

  // mouse going outside of the box condition
  handleMouseLeave = () => {
    this.setState({
      hovering: false,
    });
  };

  // handling the direction buttons
  handleClick = (pos) => {
    this.setState({
      position: pos,
    });
  };

  render() {
    return (
      <>
        {/* position buttons */}
        <div className='bodyView'>
          <div className='btnPosition'>
            <div className='btnText'>
              <h3>Select the position for the Tooltip</h3>
            </div>

            <div>
              <button
                className={this.state.position === "top" ? 'btn active' : 'btn'}
                onClick={() => {
                  this.handleClick("top");
                }}
              >
                Top
              </button>
            </div>

            <div>
              <button
                className={this.state.position === "down" ? 'btn active' : 'btn'}
                onClick={() => {
                  this.handleClick("down");
                }}
              >
                Down
              </button>
            </div>

            <div>
              <button
                className={this.state.position === "right" ? 'btn active' : 'btn'}
                onClick={() => {
                  this.handleClick("right");
                }}
              >
                Right
              </button>
            </div>

            <div>
              <button
                className={this.state.position === "left" ? 'btn active' : 'btn'}
                onClick={() => {
                  this.handleClick("left");
                }}
              >
                Left
              </button>
            </div>
          </div>

          <div className='position'>
            <h1
              className='hoverDiv'
              onMouseLeave={this.handleMouseLeave}
              onMouseEnter={this.handleMouseEnter}
            >
              Just hover over me to see the magic !!
            </h1>
            
          </div>
          <Tooltip state={this.state} />
          
        </div>
      </>
    );
  }
}

export default App;
