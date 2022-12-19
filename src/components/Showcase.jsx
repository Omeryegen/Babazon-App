import React from 'react'
import Cart from './shared/Cart'
import data from '../data/data'
import ShowcaseWrap from './shared/ShowcaseWrap'
import Leftbar from './shared/Leftbar'
import Rightbar from './shared/Rightbar'
function Showcase() {
  return (
    <>
    <Leftbar/>
    <ShowcaseWrap>    
        {
        data.map(element =>{
          return (
            element.products.map(product =>{
              return (
                <Cart key={product.id} product={product}></Cart>
              )
            })
          ) 
        })
      }
   </ShowcaseWrap> 
   <Rightbar/>
   </>
  )
}

export default Showcase