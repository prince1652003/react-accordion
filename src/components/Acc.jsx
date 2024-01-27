import React, { useState } from 'react'
import data from './data';
import './style.css'

const Acc = () => {
  const [selected, setselected] = useState(null);

  function handlesingle(getcurid){
    setselected(getcurid===selected ? null : getcurid);
  }
  
  return (
    <div className='main'>
      <div className='acc'>
      {
         data && data.length > 0 ? 
         data.map(dataitem=>
          <div className="item">
            <div onClick={()=>handlesingle(dataitem.id)} className="title">
              <h3>{dataitem.question}</h3>
              <span>+</span>
            </div>
            {
              selected===dataitem.id ? <div className="content">
                {dataitem.answer}
              </div>: null
            }
          </div>
         )
         : <div>no data</div>

      }
      </div>

    </div>


  )
}

export default Acc
