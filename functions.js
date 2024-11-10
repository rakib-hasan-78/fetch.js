export const cancelFunction = (parent, childOne, childTwo) => {

    parent.addEventListener('click', (e)=>{
        if(childOne)parent.removeChild(childOne);
        if(childTwo)parent.removeChild(childTwo);
    })
}

