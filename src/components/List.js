import React from 'react';
import {del} from '../actions/index'
import {useDispatch} from 'react-redux'

const List = (props) =>{
   const dispatch = useDispatch();
  
    return (
     <>   
        <i 
        className="fa fa-times" 
        aria-hidden="true"
        onClick={()=>{
            dispatch(del(props.id))
        }}
        ></i>
        <li>{props.value}</li>
        <br/>
     </>   
     );
    
}
export default List;