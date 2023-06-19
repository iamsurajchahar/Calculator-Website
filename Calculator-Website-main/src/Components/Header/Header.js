import React, { useEffect, useRef } from 'react'

import './Header.css';

function Header(props) {
  // THIS HAS TO BE RECTIFIED
  const resultRef=useRef();
  const expressionRef=useRef();
  // useEffect(() => {
  //   resultRef.current.scrollIntoView({ behavior: "smooth"});
  // }, [props.history]);

  useEffect(()=>{
    expressionRef.current.scrollLeft=expressionRef.current.scrollWidth;
  },[props.expression]);

  return (
    <div className='header custom-scroll'>
        <div className='header_history'>
            {
              props.history &&
              props.history?.map((item)=>(<p key={item + "" + Math.random()*44}>{item}</p>))
            }
        </div>

        <div ref={expressionRef} className='header_expression custom-scroll'>
            <p>{props.expression}</p>
        </div>

        <p  className='header_result'>{props.result}</p>
    </div>
  )
}

export default Header