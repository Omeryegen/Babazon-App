import React from 'react'
import { useContext } from 'react'
import { contextProvider } from '../../Provider'

function Cart({product}) {
  const {user, dispatch} = useContext(contextProvider)
 

  const checkLike = (productId) =>{
   return user.favors.includes(productId) ?  true : false
  }
  const checkCart = (productId) =>{
    return user.inCart.includes(productId) ?  true : false
  };
  const handleLike = (id)=>{
    if(user.favors.includes(id)){
      dispatch({type:"unlike", id: id});
    }else{
      dispatch({type:"like", id:id});
    };
  };
  const handleCart = (id)=>{
    if(user.inCart.includes(id)){
      dispatch({type:"fromCart", id: id});
    }else{
      dispatch({type:"toCart", id:id});
    };
  };
  
  return (
    <div className="cart">
        <img src={product.url} alt="#" />
        <p style={{color: "gray", fontSize: ".9rem"}}>{product.name}</p>
        <h3 className='brand'>{product.brand}</h3>
        <div className="buy">
            <span className='price' >{product.price} $</span>
            <div className="links">
                <i className={checkLike(product.id) ? "fa-solid fa-heart fa-lg" : "fa-regular fa-heart fa-lg"} style={{color: checkLike(product.id) ? "red" : "black"}}  onClick={(e)=>{
                  e.preventDefault();
                  handleLike(product.id);
                  }} >
               </i> 
                <i className="fa-solid fa-cart-plus" style={{color: checkCart(product.id) && "green"}} onClick={(e)=>{
                  e.preventDefault();
                  handleCart(product.id);
                }} >
              </i>
            </div>          
        </div> 
    </div>
  )
}

export default Cart