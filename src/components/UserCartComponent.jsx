import React from 'react';

const UserCartComponent = ({ cartItems, handleRemove, handleQuantityChange, onCheckout }) => {
  const total = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);
  return (
    <aside className='cart'>
      <h2>Your Cart</h2>
      {cartItems.length === 0 ? (
        <div className='empty'>Your cart is empty</div>
      ) : (
        <div className='cart-list'>
          {cartItems.map(item => (
            <div className='cart-item' key={item.id}>
              <img src={item.img} alt={item.name} onError={(e)=>{e.target.onerror=null; e.target.src='https://via.placeholder.com/80x60?text=No+Image';}} />
              <div className='item-info'>
                <div className='item-name'>{item.name}</div>
                <div className='item-price'>${item.price}</div>
                <div className='item-controls'>
                  <input type='number' min='1' value={item.quantity} onChange={(e) => handleQuantityChange(item.id, Math.max(1, parseInt(e.target.value || 1)))} />
                  <button className='remove' onClick={() => handleRemove(item.id)}>Remove</button>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
      <div className='cart-total'>
        <strong>Total:</strong>
        <span>${total.toFixed(2)}</span>
      </div>
      <button className='checkout' disabled={cartItems.length === 0} onClick={onCheckout}>Proceed to Checkout</button>
    </aside>
  );
};

export default UserCartComponent;