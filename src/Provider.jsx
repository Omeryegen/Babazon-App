import React, { useState } from 'react'
import { createContext } from 'react'
import { useReducer } from 'react';
export const contextProvider = createContext();

const reducer = (user, action) =>{
        switch(action.type){
            case "like":
                return {
                    ...user,
                    favors:[...user.favors, action.id]
                }
            case "unlike":
                const likeArray = user.favors.filter(element  =>  element !== action.id)
                return {
                    ...user,
                    favors: likeArray
                }
            case "toCart":
                return {
                    ...user,
                    inCart:[...user.inCart, action.id]
                }
            case "fromCart":
                const fromArray = user.inCart.filter(element  =>  element !== action.id)
                return {
                    ...user,
                    inCart: fromArray
                }
            case "purchase":
                return {
                    ...user,
                    has: action.newAmount,
                    inCart: action.inCart
                }
            default:
                console.log('default')
        }
};


function Provider({children}) {
    const [user, dispatch] = useReducer(reducer, {
    has: 500,
    favors: [],
    inCart: []
    });
   const [category, setCategory] = useState("");

   const handleCategory = (category) =>{
    setCategory(category);
   };
  return (
    <contextProvider.Provider value={{
        user,dispatch, handleCategory ,category
        }}>
        {children}
    </contextProvider.Provider>
    
  )
}

export default Provider