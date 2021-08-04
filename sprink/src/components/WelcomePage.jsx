import React from 'react'
import Button from './Button'

function WelcomePage() {
    return (
        <div id="welcome">
        
            <p style={{color:'orange',fontFamily: 'Copperplate, Papyrus, fantasy', textShadow: '4px 4px #ff0000', fontWeight:'800',fontSize:'8rem'}}><b>Welcome to Sprink</b></p>
           
            
            <div style={{display:'flex',flexDirection:'column',justifyContent:'center',alignItems:'center'}}>
            <Button/>
            </div>
        </div>
    )
}

export default WelcomePage;
