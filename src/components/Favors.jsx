import React from 'react'
import Cart from './shared/Cart'
import data from '../data/data'
import { useContext } from 'react'
import { contextProvider } from '../Provider'
import ShowcaseWrap from './shared/ShowcaseWrap'
import Leftbar from './shared/Leftbar'
import Rightbar from './shared/Rightbar'
function Favors() {
    const {user} = useContext(contextProvider)
  return (
    <>
    <Leftbar/>
    <ShowcaseWrap>    
        {
     user.favors.length > 0 ?   data.map(element =>{
          return (
            element.products.map(product =>{
              return  user.favors.map(id => id=== product.id ?  (<Cart key={product.id} product={product}></Cart>) : null)
            }) 
          ) 
        }): <h2 style={{color: "#333"}} >You have nothing in your favourite items list.</h2>
      }
    </ShowcaseWrap>
    <Rightbar/>
    </>
  )
}

export default Favors