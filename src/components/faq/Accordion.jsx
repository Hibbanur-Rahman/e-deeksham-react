import React, { useState } from 'react';
import './accordion.css';
// import { MdKeyboardArrowDown } from "react-icons/md";
const Accordion = ({ title, content }) => {
  const [isActive, setIsActive] = useState(false);
  return (
    <div>
      <div  onClick={()=>setIsActive(!isActive)} >
        <div className={isActive ? 'row add-bg' :'row'}><p className='p'>{title}</p>
        <div className={isActive ? 'arrow-btn arr-btn' :'arrow-btn'}></div>
        </div>
        
        <div className={isActive ? 'transform content' :'transform '}>{content}</div>
      </div>
      
    </div>
  );
};

export default Accordion;