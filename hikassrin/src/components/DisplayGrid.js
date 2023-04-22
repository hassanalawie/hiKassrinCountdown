import React from 'react';
import PaintContainer from './PaintContainer';
import SideContainers from './SideContainers';
import './componentStyles/DisplayGrid.css'
export function DisplayGrid() {
  return (
    <div className='base-grid'>
      <PaintContainer/>
      <SideContainers/>
    </div>
  );
}

export default DisplayGrid;
