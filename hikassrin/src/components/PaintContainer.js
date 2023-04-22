import React, { useState } from 'react';
import DrawingComponent from './DrawingComponent';
import ColorsComponent from './ColorsComponent';
import './componentStyles/PaintContainer.css'
import pd from "../icons/pd.png"
export function PaintContainer() {
  const handleToolsClick = ()=>{
    setShowModal(!showModal)
  }
  const [showModal, setShowModal] = useState(false);

  const PSYDUCKS = [
    {
      text:"Hassan when he sees Kassrin",
      image:"https://fiddletwix.files.wordpress.com/2017/11/pokemon-ep-41-screen8.png?w=700",
      backgroundColor:"blue"
    },
    {
      text:"Kassrin when opportunity to hug presents itself",
      image:"https://external-preview.redd.it/xgj4Og7iduu6veM1oUXPSfK4pSs8y6aTlmy2N3Lpow0.gif?format=png8&s=92d79788e0080bcaa1aface675d0a0a6c654203c",
      backgroundColor:"#F1C40F"
    },
    {
      text:"Hassan when he thinks about how he should have woke you up",
      image:"https://i.redd.it/j060lqf2ik531.jpg",
      backgroundColor:"#138D75"
    },
    {
      text:"Kassrin when Hassan goes to poo",
      image:"https://i.ytimg.com/vi/4AS6bc_IbjU/mqdefault.jpg",
      backgroundColor:"#7D6608"
    },
    {
      text:"Hassan when he turns around",
      image:"https://i.ytimg.com/vi/M3Ues__nNfI/hqdefault.jpg",
      backgroundColor:"#117A65"
    },
    {
      text:"Kassrins foot",
      image:pd,
      backgroundColor:"#6C3483"
    },
  ]
  const [currentPsyduck, setCurrentPsyduck] = useState(PSYDUCKS[1])

  return (
    <div className='base-container' >
      <div className='psyduck-modal' style={{backgroundColor: currentPsyduck.backgroundColor,  position:'absolute', top:'25%', right:'50%', display:showModal?'flex':'none', flexDirection:'column', padding: '30px',justifyContent:'center', alignItems:'center'}} >
        <div style={{padding: '5px', backgroundColor:'red', borderRadius:'5px', cursor:'pointer'}} onClick={handleToolsClick} >X</div>
        <div style={{width:"300px"}}>

        <p style={{color:'white'}}>{currentPsyduck.text}</p>
        </div>
        <img height="200px" width="266px" alt='psyduck blushing' src={currentPsyduck.image}/>
      </div>
        <div className='pink-header'> 
          <p className='title-text'>DEMO-HI KASSRIN.iluvu</p>
        </div>
        <div onClick={handleToolsClick} className='light-pink-header'>
          <div onClick={() => setCurrentPsyduck(PSYDUCKS[0])} >FILE&nbsp;&nbsp;</div>
          <div onClick={() => setCurrentPsyduck(PSYDUCKS[1])}>EDIT&nbsp;&nbsp;</div>
          <div onClick={() => setCurrentPsyduck(PSYDUCKS[2])}>VIEW&nbsp;&nbsp;</div>
          <div onClick={() => setCurrentPsyduck(PSYDUCKS[3])}>IMAGE&nbsp;&nbsp;</div>
          <div onClick={() => setCurrentPsyduck(PSYDUCKS[4])}>OPTIONS&nbsp;&nbsp;</div>
          <div onClick={() => setCurrentPsyduck(PSYDUCKS[5])}>HELP&nbsp;&nbsp;</div>
        </div>
        <DrawingComponent/>
        <div className='spacer'></div>
        <ColorsComponent/>
    </div>
  );
}

export default PaintContainer;
