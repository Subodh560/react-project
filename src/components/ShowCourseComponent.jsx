import React from 'react';

const ShowCourseComponent = ({ courses, handleAddToCart }) => {
  if (courses.length === 0) return <p className='no-results'>No products found.</p>;
  return (
    <div className='product-area'>
      <div className='product-list'>
        {courses.map(course => (
          <div key={course.id} className='product'>
            <div className='product-image'>
              <img src={course.img} alt={course.name} />
            </div>
            <div className='product-body'>
              <h3 className='product-title'>{course.name}</h3>
              <div className='product-meta'>
                <span className='category'>{course.category}</span>
                <span className='price'>${course.price}</span>
              </div>
              <p className='description'>{course.description}</p>
              <button className='add-to-cart-button' onClick={() => handleAddToCart({ ...course, quantity: 1 })}>Add to Cart</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ShowCourseComponent;