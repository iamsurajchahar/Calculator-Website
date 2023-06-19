import React from 'react'

import './KeyPad.css';

export default function KeyPad(props) {

  const keys = [
    {keyCode: 55, label: "7"},{keyCode: 56, label: "8"},{keyCode: 57, label: "9"},
    {keyCode: 52, label: "4"},{keyCode: 53, label: "5"},{keyCode: 54, label: "6"},
    {keyCode: 49, label: "1"},{keyCode: 50, label: "2"},{keyCode: 51, label: "3"},
    {keyCode: 48, label: "0"},{keyCode: 190, label: "."},{keyCode: 13, label: "="},
  ];
  
  const symbols = [
    {keyCode: 8, label: "⌫", value: "Backspace"},
    {keyCode: 111, label: "÷", value: "/"},
    {keyCode: 56, label: "x", value: "*"},
    {keyCode: 8, label: "-", value: "-"},
    {keyCode: 107, label: "+", value: "+"},
  ];

  return (
    <div className='keypad'>
        <div className='keypad_keys'>
          {
            keys.map((item,index)=><p onClick={()=>props.handleKeyPress(item.keyCode,item.label)} key={index}>{item.label}</p>)
          }
        </div>
        <div className='keypad_symbols'>
          {
            symbols.map((item,index)=><p onClick={()=>props.handleKeyPress(item.keyCode,item.value)} key={index}>{item.label}</p>)
          }
        </div>
    </div>
  )
}
