import React from 'react'
import './Todo.css'
import { useState, useEffect} from 'react'
import Card from '../Card/Card'



function Todo() {
    const [name,setName]=useState('')
    const [list,setList]=useState([])
    const[color,setColor]=useState('')

    const setcolor=(id)=>{
        const data=list.find((e)=>id===e.id)
        let color1="#" + Math.floor(Math.random()*16777215).toString(16).padStart(6, '0').toUpperCase()
        data.color=color1
        setColor([...list])
        localStorage.setItem("data",JSON.stringify(list))
    }


const completedHp=(id)=>{
    const data=list.find((e)=>id===e.id)
    data.isCompleted=true
    setList([...list])
    localStorage.setItem("data",JSON.stringify(list))

}
const deletedHp=(id)=>{
    const data=list.find((e)=>id===e.id)
    data.isDeleted=true
    setList([...list])
    localStorage.setItem("data",JSON.stringify(list))

}
    useEffect(()=>{
        const data=localStorage.getItem("data")
        if(data){
            setList(JSON.parse(data))
        }
    },[])
    

const dataAdd=()=>{
    if(name){
        let data1 ={
            id: Math.random(),
            name: name,
            color: color,
            isCompleted: false,
            isDeleted: false
        }
        list.push(data1)
        setList([...list])
        setName(null)
        localStorage.setItem("data",JSON.stringify(list))
    }
    else{
       alert('Please Enter Name')
    }

   
    
}

  return (
    <>
        <div className='main '>
            <div class="btn-group btn-group-lg ">
                <input type="text" placeholder='Enter Name' value={name ||""} onChange={(data)=>setName(data.target.value)} />
                <button type="submit" className='btn btn-info btn-sm' onClick={dataAdd} >Add</button>
            </div>
        </div>
        <div className='sec  pt-4'>
            <h4>List Of Name</h4>
            <div className='d-flex flex-wrap'  >
            {
                
                 list.map((e)=>{
                    if(!e.isCompleted){
                        return (
                        <div>{
                        !e.isDeleted && <Card id={e.id} setcolor={setcolor} name={e.name} completedHp={completedHp} deletedHp={deletedHp} color={e.color}/>
                    }</div>
                        )
                    }
                    else{
                        return null
                    }
                  })
            }
           </div>

           <h4>Completed Name</h4>
            <div className='d-flex flex-wrap'  >
            {
                
                list.map((e)=>{
                   if(e.isCompleted){
                       return (
                       <div>{
                       !e.isDeleted && <Card id={e.id} name={e.name} setcolor={setcolor} isCompleted={e.isCompleted} deletedHp={deletedHp} color={e.color}/>
                   }</div>
                       )
                   }
                   else{
                       return null
                   }
                 })
           }
           </div>

         
           


        </div>
    </>
  );
}


export default Todo

