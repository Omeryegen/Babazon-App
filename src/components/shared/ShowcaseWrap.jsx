import React from 'react'

function ShowcaseWrap({children}) {
  return (
    <div className="container">
    <section className="showcase">
      
        <div className="showcase-content">  
        {children}
        
        </div>
    </section>
    </div>
  )
}

export default ShowcaseWrap