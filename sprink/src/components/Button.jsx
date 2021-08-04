import React from 'react'

import './Button.css'
// import Details from './Details';
function Button() {
    const openDetail=()=>{
        document.getElementById('welcome').style.display='none';
        document.getElementById('menu-items').style.display='block';
    }
    return (
        // onClick={()=>render(<Details/>)}
        <div style={{transform: 'translate(0px, -35px)'}}>
            
            
            <button onClick={openDetail} style={{color: 'Black', fontWeight:'800'}}>
               View Menu
            </button>
            
        </div>
     
    )
}

export default Button
