import React, { useState } from 'react';
import DrawingComponent from './DrawingComponent';
import ColorsComponent from './ColorsComponent';
import './componentStyles/PaintContainer.css'
export function PaintContainer() {
  const handleToolsClick = ()=>{
    setShowModal(!showModal)
  }
  const [showModal, setShowModal] = useState(false);
  return (
    <div className='base-container' >
      <div className='psyduck-modal' style={{  backgroundColor:"blue",  position:'absolute', top:'25%', right:'25%', display:showModal?'flex':'none', flexDirection:'column', padding: '30px',justifyContent:'center', alignItems:'center'}} >
        <div style={{padding: '5px', backgroundColor:'red', borderRadius:'5px', cursor:'pointer'}} onClick={handleToolsClick} >X</div>
        <p style={{color:'white'}}>Hassan when he sees Kassrin</p>
        <img height={200} width={266} alt='psyduck blushing' src="https://fiddletwix.files.wordpress.com/2017/11/pokemon-ep-41-screen8.png?w=700"/>
      </div>
        <div className='pink-header'> 
          <p className='title-text'>DEMO-HI KASSRIN.iluvu</p>
        </div>
        <div onClick={handleToolsClick} className='light-pink-header'>
        <p className='sub-title-text'>FILE  EDIT  VIEW  IMAGE  OPTIONS  HELP</p>
        </div>
        <DrawingComponent/>
        <div className='spacer'></div>
        <ColorsComponent/>
    </div>
  );
}

export default PaintContainer;
