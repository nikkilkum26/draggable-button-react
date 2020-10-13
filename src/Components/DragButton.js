import React  from 'react';
import Wrapper from './Wrapper';
import 'bootstrap/dist/css/bootstrap.min.css';

let DragButton = (props)=>{

    return(
        <button className= "btn btn-warning" id="mybtn" onClick={props.movebuttons} style={props.buttonProps.button}> Drag </button>
    )
}

export default Wrapper(DragButton);