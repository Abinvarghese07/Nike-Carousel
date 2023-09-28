import './App.css';
import {motion} from 'framer-motion'
import images from './images';
import { useRef } from 'react';
import { useState } from 'react';
import { useEffect } from 'react';

function App() {
  const carousel = useRef()
  const[width,setWidth] = useState(0);
  useEffect(() =>{
    setWidth(carousel.current.scrollWidth - carousel.current.offsetWidth)
  },[])
  return (
    <div className="App">
    <motion.div ref={carousel}  className='outerCarousel'>
      <motion.div drag='x'  dragConstraints={{right:0, left: -width}} className='innerCarousel'>
        {
          images.map(image => {
            return (
              <motion.div className='items'>
                <img src={image} alt=''></img>
              </motion.div>
            )
          })
        }
        
      </motion.div>
    </motion.div>
    </div>
  );
}

export default App;
