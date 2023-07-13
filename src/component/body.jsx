import React,{ useState,useRef } from 'react';
import BodyText from './boby-text';


const Body=()=>{

    const [createtext,setCreatetext]=useState(0)
    const [textlist,setTextlist]=useState([])
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

    let textcount=(<div>{createtext}</div>);
    console.log(textlist);

    return(
        <main className="App-body" >
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
                            />
                      </>
                    )
                })}
                 
            </div>
            
            <div className='canvas' ref={bodyRef}>canvas</div>
            
        </main>
    );
}
export default Body;