import React,{ useState,useEffect } from 'react';
import {motion} from 'framer-motion';
import { CompactPicker } from 'react-color';


const BodyText=(props)=>{
    const [rotation,setRotation]=useState(0);
    const [fontSize,setFontSize]=useState(3);
    const fontfamily=['serif','sans-serif','cursive'];
    const [selectedfont,setSelectedfont]=useState('sans-serif');
    const [fontColor,setFontColor]=useState('rgba(0,0,0,1)');
    const [colorPalletOpen,setColorPalletOpen]=useState(false);
    const [paraState,setParaState]=useState(true);
    const [onceClose,setOnceClose]=useState(true);
    const [pararotate,setPararotate]=useState(-135);
    const [colbtnrota,setColobtnrota]=useState(-135);
    const rotateChange=(event)=>{
        const value=parseFloat(event.target.value);
        if(!isNaN(value)){
        setRotation(value)
        }else {
            setRotation(0)
        }     
    }

    const sizeChange=(event)=>{
            setFontSize(event.target.value)     
    }

    const fontChange=(value)=>{
            setSelectedfont(value)    
    }

    const colorChange=(color)=>{
        const rgbaColor = `rgba(${color.rgb.r}, ${color.rgb.g}, ${color.rgb.b}, ${color.rgb.a})`;
        setFontColor(rgbaColor);
    }
    
    useEffect(()=>{
        if(props.textlist>5 && onceClose){
         setParaState(false)
         setOnceClose(false)
         console.log(onceClose)
            }
        },[props.textlist])
    
    useEffect(()=>{
        if(paraState){
            setPararotate(-225);
           
        }else{
            setPararotate(-135)
           
        }
        if(colorPalletOpen){
            setColobtnrota(-225)
        }else{
            setColobtnrota(-135)
        }

    },[paraState][colorPalletOpen])
 
    return(
    <>
     <div className='text-item'>
        <button className='parastate' onClick={()=>{setParaState(prevstate=>!prevstate)}}>スタイル変更&nbsp;
        <motion.div className='allow' animate={{rotate:pararotate}}
         ></motion.div></button>
            {paraState ? (
                <div className='parameter'>

                        <div style={{fontSize:'20px'}}>{props.text}の回転&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                            <input  onChange={(event)=>rotateChange(event)}
                            type='number' min='0' max='360'
                            value={rotation} 
                            />

                            <input  onChange={(event)=>{rotateChange(event)}}
                            type='range' min='0' max='360'step='1'
                            value={rotation}
                            />
                        </div>

                        <div style={{fontSize:'20px'}}>{props.text}の大きさ&nbsp;&nbsp;&nbsp;
                            <input onChange={(event)=>sizeChange(event)}
                            type='number' min='1' max='30'
                            value={fontSize}
                            />

                            <input onChange={(event)=>sizeChange(event)}
                            type='range' min='1' max='30' step='1'
                            value={fontSize}
                            />
                        </div>

                        <div style={{fontSize:'20px'}}>{props.text}のフォント
                            {fontfamily.map((value)=>{
                                return(
                                    <button className='fontbtn' onClick={()=>fontChange(value)}
                                   
                                    >
                                    {value}
                                     </button>
                                )
                            })}
                        </div>

                        <button className='colorbtn' onClick={()=>{setColorPalletOpen(prevstate=> !prevstate) }}>色を選択
                        <motion.div className='allow' animate={{rotate:colbtnrota}}></motion.div>
                        </button>
                        {colorPalletOpen ? (
                            <div className='pallet'>
                                <CompactPicker  onChange={colorChange} color={fontColor} />
                            </div>
                            ) : (
                        <></>
                        )}
                 </div>
            ):(
                <></>
            )}
     </div>
     
        <motion.div className='text-move'
            animate={{
                    rotate:rotation,
                    scale:fontSize,
                    fontFamily:selectedfont,
                    color:fontColor 
                }}
            drag
            dragConstraints={props.bodyRef}
            whileHover={{
                scale:fontSize*1.5,
                transition:{duration:0.5},
           
            }}>
            {props.text}
        </motion.div>
     

    </>
    );
}
export default BodyText;