import React,{ useState,useRef, useEffect } from 'react';
import BodyText from './boby-text';


const Body=()=>{

    const [createtext,setCreatetext]=useState(0)
    const [textlist,setTextlist]=useState([])
    const [canvassize,setCanvassize]=useState(3);
    let canvaswidth=100-(canvassize*1.3);
    let canvasheight=100-(canvassize*1.3);
    let canvasleft=50+(canvassize*1.3)/2;
    let canvastop=50+(canvassize*1.3)/2;
    const elm = useRef(null);
    const bodyRef = useRef(null);
    
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
    
    const sizeValue=(size)=>{
        setCanvassize(size)
    }

   /* const calConst=()=>{
        if (elm.current && bodyRef.current) {
        const elmRect=elm.current.getBoundingClientRect();
        const bodyRect=bodyRef.current.getBoundingClientRect();
        const top = -elmRect.top+bodyRect.top;
        const right =bodyRect.right-elmRect.right;
        const bottom =bodyRect.bottom-elmRect.bottom;
        const left = -elmRect.left+bodyRect.left;
        return{top, right, bottom, left };
        }
    }*/

    
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
                                    canvas={sizeValue}
                                    elm={elm}
                                    //calConst={calConst()}
                                    
                                    
                                />
                        </>
                        )
                    })}
                    
                </div>
                
                <div  className='canvas'><p style={{position:'absolute',top:'-40px'}}>canvas</p>
                <div className='body-layer'
                        ref={bodyRef}
                        style={{
                            width:`${canvaswidth}%`,
                            height:`${canvasheight}%`,
                            left:`${canvasleft}%`,
                            top:`${canvastop}%`
                            }} 
                        ></div>
                </div>
               
               
            </div>
           
        </main>
    );
}
export default Body;