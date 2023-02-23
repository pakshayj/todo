import React from 'react'
import './Card.css'
const Card = (props) => {
  return (
    <div>
        <div className="cards rounded-3 border border-2 m-2" style={{"backgroundColor":`${props.color}`}}>
             <h5>{props.name}</h5>
            {!props.isCompleted && <button className='btn btn-info btn-sm' onClick={()=>props.completedHp(props.id)}>Completed</button>}
             <button className='btn btn-danger btn-sm' onClick={()=>props.deletedHp(props.id)}>Deleted</button>
             {!props.isCompleted  && <button className='btn btn-warning btn-sm pt-2' onClick={()=>props.setcolor(props.id)}>color</button> }
         </div>
     </div>
  )
}

export default Card
