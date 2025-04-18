import React, {Component} from "react";
import JSON from './db.json';
import ProductList from './ProductList';

class Products extends Component{
  constructor(){
    super();
    this.state={                          //state
      title: 'Fashion & Style',          //props
      products: JSON                    //assign db.json file to the prop
    }
  }
  render(){
    return(
      <div>
        <div className="prod">
        <h1>{this.state.title}</h1>
        <ProductList prodlist={this.state.products}/>    {/*pass data from json file to ProductList component prop>*/}
        </div>
        <center>
        <h1>🧥✨ Step Up Your Style Game ✨👗</h1>
         <h2>Discover the Latest Fashion Trends at Dip!</h2>

         <h3>🔥 Branded Clothes at Unbeatable Prices<br />
           👕 Premium Quality | 👖 Trendy Designs | 👟 Comfortable Fit<br />

           💥 New Arrivals Weekly<br />
           🛒 Shop Now & Get Flat 20% OFF on Your First Order!<br />

           📦 Free Shipping | 🔁 Easy Returns | 💳 Secure Checkout</h3>

         <h2>Style That Speaks. Fashion That Lasts.</h2>
       </center>
      </div>
    )
  }
}
export default Products;



// import React from 'react'

// const Products = () => {
//   return (
//     <div>
//       <center><h1>Products</h1></center>

//       <div className='box1'>
//         <div id="c11">
//           <img src="https://imagescdn.louisphilippe.com/img/app/product/9/920366-14512998.jpg?auto=format&w=390" alt='product' width="100%" height="100%" />
//         </div>
//         <div id="c12">
//           <img src="https://assets.myntassets.com/w_412,q_60,dpr_2,fl_progressive/assets/images/16722552/2022/12/1/0dea34df-2198-4b1a-b04e-b066884672941669894594899-Tommy-Hilfiger-Men-Shirts-1961669894594357-1.jpg" alt='product' width="100%" height="100%" />
//         </div>
//         <div id="c13">
//           <img src="https://imagescdn.pantaloons.com/img/app/product/1/1008498-13599557.jpg?auto=format&w=450" alt='product' width="100%" height="100%" />
//         </div>
//       </div>

//       <div className='box2'>
//         <div id="c21">
//           <img src="https://5.imimg.com/data5/SELLER/Default/2021/2/GA/DW/YM/69286564/ladies-cotton-long-gown-dress.jpg" alt='product' width="100%" height="100%" />
//         </div>
//         <div id="c22">
//           <img src="https://assets.myntassets.com/dpr_1.5,q_60,w_400,c_limit,fl_progressive/assets/images/2024/OCTOBER/9/AZPZb0Hj_f7e652451fa848949b5a589191dab74b.jpg" alt='product' width="100%" height="100%" />
//         </div>
//         <div id="c23">
//           <img src="https://anayadesignerstudio.com/cdn/shop/files/side_cut_maroon_colour_gown_for_navratri.webp?v=1738749304&width=1100" alt='product' width="100%" height="100%" />
//         </div>
//       </div>

//       <center>
//         <h1>🧥✨ Step Up Your Style Game ✨👗</h1>
//         <h2>Discover the Latest Fashion Trends at Dip!</h2>

//         <h3>🔥 Branded Clothes at Unbeatable Prices<br />
//           👕 Premium Quality | 👖 Trendy Designs | 👟 Comfortable Fit<br />

//           💥 New Arrivals Weekly<br />
//           🛒 Shop Now & Get Flat 20% OFF on Your First Order!<br />

//           📦 Free Shipping | 🔁 Easy Returns | 💳 Secure Checkout</h3>

//         <h2>Style That Speaks. Fashion That Lasts.</h2>
//       </center>
//     </div>
//   )
// }

// export default Products



