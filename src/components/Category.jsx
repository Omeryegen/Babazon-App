import React from 'react'
import Cart from './shared/Cart'
import data from '../data/data'
import { contextProvider } from '../Provider'
import { useContext } from 'react'
import ShowcaseWrap from './shared/ShowcaseWrap'
import Rightbar from './shared/Rightbar'
import Leftbar from './shared/Leftbar'
function Category() {
    const {category} = useContext(contextProvider)
  return (
    <>
      <Leftbar/>
        <ShowcaseWrap> 
          {
          data.map(element => element.category === category && element.products.map(product => (<Cart key={product.id} product={product}></Cart>)))
          }
        </ShowcaseWrap> 
      <Rightbar/>  
    </>
  )
}

export default Category
