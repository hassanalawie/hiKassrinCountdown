import React from 'react';
import DrawingComponent from './DrawingComponent';
import ColorsComponent from './ColorsComponent';
import './componentStyles/PaintContainer.css'
export function PaintContainer() {

  return (
    <div className='base-container' >
        <div className='pink-header'> 
          <p className='title-text'>Demo - Hi Kassrin</p>
        </div>
        <div className='light-pink-header'></div>
        <DrawingComponent/>
        <div className='spacer'></div>
        <ColorsComponent/>
    </div>
  );
}

export default PaintContainer;
