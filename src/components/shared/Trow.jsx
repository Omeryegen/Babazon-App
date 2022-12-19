import React from 'react'
import { useContext } from 'react';
import { contextProvider } from '../../Provider';
export default function Td({product}) {
  const {user, dispatch} = useContext(contextProvider);
  const handleDelete = (id)=>{
    if(user.inCart.includes(id)){
      dispatch({type:"fromCart", id: id});
    }else{
      dispatch({type:"toCart", id:id});
    };
  };
  return (
      <tr>
        <td><img src={product.url} alt="'" /></td>
        <td>{product.name}</td>
        <td>{product.brand}</td>
        <td>{product.price} $</td>
        <td><i onClick={()=>{
          handleDelete(product.id);
        }} className="fa-solid fa-trash-can"></i></td>
      </tr>    
  )
}
