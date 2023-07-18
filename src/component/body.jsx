import React,{ useState,useRef } from 'react';
import BodyText from './boby-text';



const Body=()=>{

    const [createtext,setCreatetext]=useState(0)
    const [textlist,setTextlist]=useState([])

    const [canvassize,setCanvassize]=useState(3);
    
    let canvaswidth=100-(canvassize*1.1);
    let canvasheight=100-(canvassize*1.1);
    let canvasleft=+(canvassize*1.1)/2;
    let canvastop=+(canvassize*1.1)/2;

   // const [rotation,setRotation]=useState(Number);
  /*  const [fontSize,setFontSize]=useState(3);
    const fontfamily=['serif','sans-serif','cursive'];
    const [selectedfont,setSelectedfont]=useState('sans-serif');
    const [fontColor,setFontColor]=useState('rgba(0,0,0,1)');
*/
   // const [rotationList, setRotationList] = useState(['']);
  
    

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

    const sizeValue=(size)=>{
        setCanvassize(size)
    }
   /* const rotationValue=(event)=>{
        const value=Number(parseFloat(event.target.value));
        if(!isNaN(value)){
        setRotation(value)
        }else {
        setRotation(0)
        }
    }
    console.log(textlist)
   console.log(rotationList)
   */
    return(     
        <main  className="App-body" >   
            <div className='textrey'>
                <div  className='canvas'>
                    <p style={{position:'absolute',top:'-40px'}}>canvas</p>
                        <div className='body-layer'
                                ref={bodyRef}
                                style={{
                                        width:`${canvaswidth}%`,
                                        height:`${canvasheight}%`,
                                        left:`${canvasleft}%`,
                                        top:`${canvastop}%`
                                }} 
                            >    
                        </div>
                </div>
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
                                    canvas={sizeValue}
                                    
                                />                                         
                            </>
                        )
                    })}                
                </div>                    
            </div>              
        </main>
    );
}
export default Body;