import React from 'react';
import './componentStyles/ColorsComponent.css'
export function ColorsComponent() {
  const colors = [
    "#ffd1d1",
    "#ffe0e0",
    "#ffd9c3",
    "#ffc8b3",
    "#d1c3de",
    "#e0d8e8",
    "#d3e8d1",
    "#c1d6c8",
    "#ffd3cc",
    "#ffbfbf",
    "#f5eccb",
    "#e6dcb3",
    "#c1d2f2",
    "#d6e5fa",
  ];

  const gridItems = Array.from({ length: 28 }, (_, index) => {
    const color = colors[Math.floor(index / 2)];
    return <div className="color-grid-item" style={{ backgroundColor: color }} key={index} />;
  });
  return (
    <div className='colors-container' >
      <div className='selected-color'>
        <div className='select orange'></div>
        <div className='select white'></div>
        <div></div>

      </div>
      <div className='color-grid-container'>
      {gridItems}
      </div>
    </div>
  );
}

export default ColorsComponent;
