import React from 'react';
import ProductCard from './ProductCard';

const ProductList = ({ products, onAddToCart, onView, view='grid' }) => {
  if (!products || products.length === 0) return <div className="empty">No products found</div>;

  return (
    <section className={`product-list ${view === 'list' ? 'list' : 'grid'}`}>
      {products.map(p => (
        <ProductCard key={p.id} p={p} onAdd={onAddToCart} onView={onView} />
      ))}
    </section>
  );
};

export default ProductList;
