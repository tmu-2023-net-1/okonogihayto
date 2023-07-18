import React, { useState } from "react";
import About from './about';
import {motion} from 'framer-motion';

const AboutBtn=()=>{

    const [open,setOpen]=useState(false);

    const aboutOpen=()=>{
        setOpen(prevstate=>!prevstate)
    }
    console.log(open)
    return(
        <>
            <button className="aboutbtn"
                    onClick={aboutOpen}>ABOUT
                         <motion.div className='allow' animate={{rotate:open ?(-225):(-135)}}>
                         </motion.div>
            </button>

            {open ? (
                <About />
            ):(
                <></>
                )}
        </>
    );
}

export default AboutBtn;