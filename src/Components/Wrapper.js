
let flag =false;

let buttonProps={
    button:{
        position : 'fixed',
        top : '0',
        left : '0',
    }
}

let movebuttons = (e) =>{
    flag =!flag;
    if(flag) movefwd(e);
    else movebck(e);
}

let  move = (e)=>{

    let movable= document.querySelector('#mybtn');
    movable.style.left = `${e.clientX - 1}px`
    movable.style.top = `${e.clientY - 1}px`
}

let movefwd =()=> window.addEventListener('mousemove',move);
let movebck =()=> window.removeEventListener('mousemove',move);


export default (WrappedComponent) => {
    return function wrappedRender(args){
        return WrappedComponent({movebuttons, buttonProps})
    }
}