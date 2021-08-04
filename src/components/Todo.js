import React, { useState } from 'react';
import List from './List'
import {useSelector,useDispatch} from 'react-redux'
import {add,rem} from '../actions/index'

const Todo = () => {
 const  obj= useSelector((state)=>state.change);
 const dispatch = useDispatch();
   
const [item,setitem]= useState('');
    return(
        <>
        <div className='main'>
            <div className='container'>
                <h1>ToDo List</h1>
                <input type='text' placeholder="Enter items" value={item} onChange={(event)=>{setitem(event.target.value)}}/>
                <button className="additem" onClick={()=>{
                    item?dispatch(add(item))
                    :alert("Enter something")
                    setitem('')
                    }} >+</button>
                <hr/>
                <br/>
                <ol>
                {
                    obj.list.map((val)=>{
                        return(
                            <List value={val.data} key={val.id} id={val.id}/>
                        )
                    })
                }
                </ol>
                <div className="butc">
                <button className="but" onClick={()=>dispatch(rem())}>Remove All</button>
                </div>
            </div>
        </div>
        </>
    );
}

export default Todo;