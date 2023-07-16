import React from 'react';
import {motion} from 'framer-motion';
const Header=()=>{
  const textanime={
   ini:{ x: '0%', y:'0px',rotate:20},
   anime:{ x: '0px',y: '0px',rotate:0,transition:{ delay:2,duration:5,type:'spring',bounce:0.7}}
  }
return(
 <header className="App-header">
   <div className='header-text'>     
         <motion.div
             animate={{ x: '0px',y:'0px' ,rotate: 0}}
             transition={{ delay:1,duration: 5,type:'spring',bounce:0.5 }}
             initial={{ x: '-100px', y:'-100px',rotate: 360}}
         >文
         </motion.div>

         <motion.div
            variants={textanime}
            initial='ini'
            animate='anime'
         >字
         </motion.div>

         <motion.div
            variants={textanime}
            initial='ini'
            animate='anime'
         >
         </motion.div>
            
         <motion.div
            variants={textanime}
            initial='ini'
            animate='anime'
         >
         </motion.div>

         <motion.div
            variants={textanime}
            initial='ini'
            animate='anime'

         >あ
         </motion.div>

         <motion.div
            variants={textanime}
            initial='ini'
            animate='anime'

         >そ
         </motion.div>

         <motion.div
            initial={{x:150,y:0,rotate:720}}
            animate={{x:0, rotate:[720,0]}}
            transition={{delay:1,duration:5}}
         >び
         </motion.div>
   </div>
   <motion.div className='subtitle'
      initial={{opacity:0}}
      transition={{delay:1,duration:5}}
      animate={{opacity:1}}

   >タイポグラフィアート</motion.div>
 </header>
);
}
export default Header;