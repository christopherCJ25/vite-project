import React, { useEffect, useState,useContext } from 'react'
import { useParams } from 'react-router-dom';
import { ShopContext } from '../context/ShopContext';
import { assets } from '../assets/assets';
import RelatedProduct from '../components/RelatedProduct';

const Product = () => {
 const {productId} =useParams();
 const {products,currency,addtoCart}=useContext(ShopContext);
 const [productData, setProductData] = useState(null);
 const [image,setImage]=useState('');
 const [size,setSize]=useState('')


 const fetchProductData =async()=>{
    
  products.find((item)=>{
    if(item._id === productId){
      setProductData(item);
      setImage(item.image?.[0] || '')
      return null;
    }
  })
 }
 useEffect(()=>{
  fetchProductData();
 },[productId])

  return productData? (
    <div className=' pt-10 transition-opacity ease-in duration-500 opacity-100'>
      {/* product data  */}
      <div className='flex gap-12 sm:gap-12 flex-col sm:flex-row'>

        {/* product image */}
        <div className='flex-1 flex flex-col-reverse gap-3 sm:flex-row'>
  <div className='flex sm:flex-col overflow-x-auto sm:overflow-y-scroll justify-between sm:justify-normal sm:w-[18.7%] w-full scrollbar-hidden'>
    {
      productData.image.map((item, index) => (
        <img
          onClick={() => setImage(item)}
          src={item}
          key={index}
          className='w-[24%] sm:w-full sm:mb-3 flex-shrink-0 cursor-pointer'
          alt=''
        />
      ))
    }
  </div>
  <div className='w-full sm:w-[80%]'>
  {image ? (
    <img className='w-full h-auto' src={image} alt='Product' />
  ) : (
    <div className="w-full h-64 bg-gray-100 flex items-center justify-center text-gray-400">
      No image available
    </div>
  )}
</div>

</div>

        {/* product info */}
        <div className='flex-1'> 
          <h1 className='font-medium text-2xl mt-2'>{productData.name}</h1>
           <div className='flex items-center gap-1 mt-2'>
              <img src={assets.star_icon} alt='' className='w-3 5'/>
              <img src={assets.star_icon} alt='' className='w-3 5'/>
              <img src={assets.star_icon} alt='' className='w-3 5'/>
              <img src={assets.star_icon} alt='' className='w-3 5'/>
              <img src={assets.star_dull_icon} alt='' className='w-3 5'/>
              <p className='pl-2'>{122}</p>

           </div>
           <p className='mt-5 text-3xl font-medium'>{currency}{productData.price}</p>
           <p className='mt-5 text-gray-500 md:w-4/5'>{productData.description}</p>
            <div className='flex flex-col gap-4 my-8'>
             <p>Select Size</p>
             <div className='flex gap-2'>
                {productData.sizes.map((item, index) => (
               <button
               onClick={() => setSize(item)}
              className={`border py-2 px-4 bg-gray-100 ${item === size ? 'border-orange-500' : ''}`}
              key={index}>{item}</button> ))}
             </div>
           </div>
           <button onClick={()=>addtoCart(productData._id,size)} className='bg-black text-white px-8 py-3 text-sm active:bg-gray-700'>ADD TO CART</button>
           {/* <hr className='mt-8 sm:w-4/5'/> */}
           <div className='text-sm text-gray-500 mt-5 flex flex-col gap-1'>
              <p>100% Original Product</p>
              <p>Cash on Deliver available on this Prodiuct</p>
              <p>Easy return and exchanghe policy within 7 days</p>
            </div>
           </div> 
        </div>
        {/* Descriuption review &section */}
        <div className='mt-20'>
            <div className='flex'>
              <p className=' px-5 py-3 text-sm'>Description</p>
              <p className='ml-4  px-5 py-3 text-sm'>Reviews (122)</p>
            </div>
            <div className='mt-5 flex flex-col gap-4  px-6 py-6 text-sm text-gray-500'>
              <p>An e-commerce is an online platform that facilitates buying and selling. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Impedit, assumenda?</p>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste asperiores dolorem tenetur, harum doloribus laborum!</p>
            </div>
        </div>

        {/* Display related products */}

        <RelatedProduct category={productData.category} subcategory={productData.subcategory} />


      </div>
      
    
  ):<div className='opacity-0'>

  </div>

}

export default Product
