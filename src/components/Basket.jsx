import React from 'react'
import data from '../data/data'
import { useContext } from 'react'
import { contextProvider } from '../Provider'
import Trow from './shared/Trow'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import Succes from './Success'
import ShowcaseWrap from './shared/ShowcaseWrap'
function Basket() {
    const {user, dispatch} = useContext(contextProvider);
    const [error, setError] = useState(null);


    const handlePurchase = () =>{
      if(setTotal() <= user.has){
        dispatch({type: "purchase", newAmount: user.has - setTotal(), inCart: []});
        setError(false);  
      }else{
        setError(true);
      }
    }
    const setTotal = ()=>{
      let total = 0
      data.forEach(element =>{   
          element.products.forEach(product =>{
              user.inCart.forEach(item =>{
                if(item === product.id){
                  total += product.price;
                }
              })
          })
      })
      return total;
    };
  return (
    <ShowcaseWrap>   
          <Succes error ={error}/>
          <table>
            <thead>
              <tr>
                <th>Item</th>
                <th>Name</th>
                <th>Brand</th>
                <th>Price</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
                {
                   data.map(element =>{
                    return (
                      element.products.map(product =>{
                        return  user.inCart.map(id => id=== product.id ?  (<Trow key={product.id} product={product}></Trow>) : null)
                      })
                    ) 
                  })
                }
              <tr>
                <th>Total: </th> 
                <td></td>
                <td></td>
                <td>{setTotal()} $</td>
                <td>{setTotal() > 0 && <Link to={error === false ? '/success' : '/basket'} ><button  onClick={handlePurchase} type='submit'>Purchase</button></Link> }</td> 
              </tr>  
            </tbody>  
          </table>   
          
    </ShowcaseWrap> 
  )
}

export default Basket
