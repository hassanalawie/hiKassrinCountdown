import React from 'react';
import './componentStyles/DrawingComponent.css'
import brush from '../icons/brush.png'
import circle from '../icons/circle.png'
import crop1 from '../icons/crop-1.png'
import crop2 from '../icons/crop-2.png'
import eraser from '../icons/eraser.png'
import eyedropper from '../icons/eyedropper.png'
import idk from '../icons/idk.png'
import line2 from '../icons/line-2.png'
import line from '../icons/line.png'
import magnify from '../icons/magnify.png'
import pencil from '../icons/pencil.png'
import poly from '../icons/poly.png'
import rect from '../icons/rect.png'
import spill from '../icons/spill.png'
import spray from '../icons/spray.png'
import text from '../icons/text.png'

export function DrawingComponent() {
  const images = [
    brush,
    circle,
    crop1,
    crop2,
    eraser,
    eyedropper,
    idk,
    line2,
    line,
    magnify,
    pencil,
    poly,
    rect,
    spill,
    spray,
    text
  ]
  return (
    <div className='base-container-2' >
      <div className='tools'>
      {images.map((image, index) => (
        <div className="grid-item" key={index}>
          <img src={image} alt={`icon tool`} />
        </div>
      ))}
      </div>
      <div className='canvas'></div>
    </div>
  );
}

export default DrawingComponent;
