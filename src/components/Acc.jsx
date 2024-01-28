import React, { useState } from 'react'
import data from './data';
import './style.css'

const Acc = () => {
  const [selected, setselected] = useState(null);
  const [enablems,setenablems]=useState(false);
  const [multiple,setmultiple]=useState([]);

  function handlesingle(getcurid){
    setselected(getcurid===selected ? null : getcurid);
  }

  function handlemulti(getcurid) {
    let cpy=[...multiple];
    const findindex = cpy.indexOf(getcurid);
    if(findindex===-1){
      cpy.push(getcurid);
    }
    else{
      cpy.splice(findindex,1);
    }
    setmultiple(cpy);
  }
  
  return (
    <div className='main'>
      <button onClick={()=>{setenablems(!enablems)}}>Enable multi selection</button>
      <div className='acc'>
      {
         data && data.length > 0 ? 
         data.map(dataitem=>
          <div className="item">
            <div onClick={enablems?()=>handlemulti(dataitem.id):()=>handlesingle(dataitem.id)} className="title">
              <h3>{dataitem.question}</h3>
              <span>+</span>
            </div>
            {
              enablems ?
              multiple.indexOf(dataitem.id) !==-1 && 
              <div className="content">{dataitem.answer}</div> :
              selected=== dataitem.id &&
              <div className="content">{dataitem.answer}</div>
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
