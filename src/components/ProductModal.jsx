import React from 'react';

const ProductModal = ({ product, onClose, onAdd, onBuy }) => {
  if (!product) return null;
  return (
    <div className="modal-backdrop" style={{display: 'flex'}} onClick={(e)=>{ if(e.target.classList.contains('modal-backdrop')) onClose(); }}>
      <div className="modal" role="document">
        <div style={{flex: '0 0 380px'}}><img id="modalImage" src={product.img} alt={product.name} onError={(e)=>{e.target.onerror=null; e.target.src='https://via.placeholder.com/400x300?text=No+Image';}}/></div>
        <div className="modal-body">
          <div style={{display:'flex', justifyContent:'space-between'}}>
            <h2>{product.name}</h2>
            <button className="close" onClick={onClose}>✕</button>
          </div>
          <div style={{display:'flex',gap:12,alignItems:'center',margin:'6px 0'}}>
            <div className="rating">{'★'.repeat(Math.round(product.rating)) + '☆'.repeat(5-Math.round(product.rating))} <small style={{color:'var(--muted)',marginLeft:8}}>{product.rating}</small></div>
            <small style={{color:'var(--muted)'}}>· {product.reviews} reviews</small>
            {product.badge && <div className="badge">Prime</div>}
          </div>
          <div style={{color:'var(--muted)',marginBottom:12}}>{product.description}</div>
          <div style={{display:'flex',gap:12,alignItems:'center',marginBottom:12}}><div className="price-big">${Number(product.price).toFixed(2)}</div></div>
          <div style={{display:'flex',gap:8,alignItems:'center'}}>
            <input id="modalQty" type="number" min="1" defaultValue={1} style={{width:86,padding:8,borderRadius:8,border:'1px solid #e6e9ef'}} />
            <button className="add" onClick={() => { const qty = Number(document.getElementById('modalQty').value)||1; onAdd(product, qty); onClose(); }}>Add to Cart</button>
            <button style={{padding:'8px 12px',borderRadius:8,border:'none',background:'#ff9900',color:'#111',fontWeight:700,cursor:'pointer'}} onClick={() => { const qty = Number(document.getElementById('modalQty').value)||1; onBuy(product, qty); }}>Buy Now</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductModal;
