import React from 'react'
import {CartState} from '../context/Context'
import SingleProduct from './SingleProduct'
import Filters from './Filters'
import './style.css'

const Home = () => {
  const { state:{products} , } = CartState();
  // const products = state.products
  console.log(products)
  return (
    <div className="home">
     <Filters/>
     <div className="productContainer">
     {
      products.map((product)=>(
       <SingleProduct product={product} key={product.id} />
      ))
     }
     </div>
    </div>
  )
}

export default Home