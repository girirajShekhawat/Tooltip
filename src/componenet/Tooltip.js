import React from 'react';

export default function Tooltip(props) {
  const { position, hovering } = props.state;

  return (
    // Conditionally render the tooltip
    <>
      {hovering ? (
        <div className={position}>
          <p>Thanks for hovering, I am a tooltip!!</p>
        </div>
      ) : null}
    </>
  );
}

