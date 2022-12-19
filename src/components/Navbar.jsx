import React from 'react'
import Logo from './images/Logo.png'
import Stat from './shared/Stat'
import data from '../data/data'
import  {v4 as uuid4} from 'uuid'
import { useContext } from 'react'
import { contextProvider } from '../Provider'
import { Link } from 'react-router-dom'
function Navbar() {
    const {user, handleCategory} = useContext(contextProvider);
  return (
    <nav>
        <div className="navbar-content">
            <div className="top">
               <Link to={'/'}><img src={Logo} alt="" /></Link> 
                <Link to={'/'}><h1>Babazon</h1></Link>
                <div className="stats">
                     <span>Wallet: <i>{user.has}$</i></span> 
                    <Stat> <Link to='/favors' ><i className="fa-regular fa-heart fa-lg"><div>{user.favors.length}</div></i></Link> </Stat>
                    <Stat> <Link to='/basket'><i className="fa-solid fa-cart-shopping fa-lg"><div>{user.inCart.length}</div></i></Link> </Stat>
                </div>
            </div>
            <hr />
            <div className="bottom">
                <div className="categories">
                    <ul>
                      {  
                        data.map(element =>{
                           return  <li key={uuid4()} ><Link onClick={() =>{
                            handleCategory(element.category);
                           }} to={`/${element.category}`} >{element.category}</Link></li> 
                        })
                    }
                    </ul>
                </div>
            </div>
        </div>
    </nav>
  )
}

export default Navbar