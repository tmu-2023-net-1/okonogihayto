import React,{ useState,useRef, useEffect } from 'react';
import BodyText from './boby-text';
import {motion} from 'framer-motion';


const Body=()=>{

    const [createtext,setCreatetext]=useState(0)
    const [textlist,setTextlist]=useState([])
/*
    const [rotation,setRotation]=useState(100);
    const [fontSize,setFontSize]=useState(3);
    const fontfamily=['serif','sans-serif','cursive'];
    const [selectedfont,setSelectedfont]=useState('sans-serif');
    const [fontColor,setFontColor]=useState('rgba(0,0,0,1)');

    const [rotationList, setRotationList] = useState([]);
  */
    

    const elm = useRef(null);
    const bodyRef = useRef();
    
    const countUp=()=>{
        const updatedText = createtext + 1;
        setCreatetext(updatedText)
        setTextlist(prevList=>[...prevList,''])
    }

    const countDown=()=>{
        if(createtext>=1){
            setCreatetext(prevState => prevState-1)
            setTextlist(prevList=>prevList.slice(0,-1))
        }
    }

    const textValue=(event,index)=>{
        const updatedList = [...textlist];
        updatedList[index] = event.target.value;
        setTextlist(updatedList);
    }
    
   
    return(
        
        <main className="App-body" >
            
            <div className='textrey'>
                <div className='textparent'>  
                    <button className='genebtn' onClick={countUp}>文字生成</button>
                    <button className='genebtn' onClick={countDown}>削除</button>
                </div>

                <div className='body-item'>
                    {textlist.map((text,index)=>{
                        return(
                            <>
                            
                                <div className='text-item' key={index}>
                                    
                                            <input className='textlist'
                                                onChange={(event)=>textValue(event,index)}
                                                type='text'
                                                value={text}
                                            />           
                                </div>
                                <BodyText 
                                    text={text}
                                    bodyRef={bodyRef}
                                    textlist={textlist.length}
                                    elm={elm}
                                    />
                                
                             
                        </>
                        )
                    })}
                    
                </div>
               
                <div  ref={bodyRef} className='canvas'><p style={{position:'absolute',top:'-40px'}}>canvas</p></div>
               
            </div>

           
        </main>
    );
}
export default Body;