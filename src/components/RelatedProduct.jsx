import React, { useEffect, useState, useContext } from 'react';
import { ShopContext } from '../context/ShopContext';
import Title from './Title';
import ProductItem from './ProductItem'; // Adjust path as needed



const RelatedProduct = ({ category, subcategory }) => {
  const { products } = useContext(ShopContext);
  const [related, setRelated] = useState([]);

  useEffect(() => {
    if (products.length > 0) {
      let filtered = products.filter(
        (item) =>
          item.category?.toLowerCase() === category?.toLowerCase() &&
          item.subcategory?.toLowerCase() === subcategory?.toLowerCase()
      );

      
      setRelated(filtered.slice(0, 5));
    }
  }, [products, category, subcategory]);

  return (
    <div className='my-24'>
      <div className='text-center py-2'>
        <Title text1={'Related'} text2={'PRODUCTS'} />
      </div>
  
      <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 gap-y-6'>
        {related.map((item, index) => (
          <ProductItem
            key={item._id || index}
            id={item._id}
            name={item.name}
            price={item.price}
            image={item.image}
          />
        ))}
      </div>
    </div>
  );
}  

export default RelatedProduct;
