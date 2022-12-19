import React from 'react'
import ShowcaseWrap from './shared/ShowcaseWrap'
function Succes({error}) {
  if(error === false){
    return (
      <ShowcaseWrap>
          <div className="success alert">
              <p>Purchase has been succesfully completed!</p>
            </div>      
      </ShowcaseWrap> 
    )
  }else if(error === true){
    return (
      <ShowcaseWrap>
          <div className="fail alert">
              <p>You are over your wallet!</p>
            </div>      
      </ShowcaseWrap> 
    )
  }else {
    return (
      null
    )
  }
 
}

export default Succes