import React from 'react';

const ProductCard = ({ p, onAdd, onView }) => {
  return (
    <article className="card amazon" data-id={p.id}>
      <div className="img" data-id={p.id} onClick={() => onView(p)}><img src={p.img} alt={p.name} loading="lazy" onError={(e)=>{e.target.onerror=null; e.target.src='https://via.placeholder.com/400x300?text=No+Image';}}/></div>
      <div>
        <div className="title-row"><strong>{p.name}</strong><span className="price-big">${p.price}</span></div>
        <div style={{display:'flex',gap:10,alignItems:'center',margin:'6px 0'}}>
          <div className="rating">{'★'.repeat(Math.round(p.rating)) + '☆'.repeat(5-Math.round(p.rating))} <small style={{color:'var(--muted)',marginLeft:6}}>{p.rating}</small></div>
          <small style={{color:'var(--muted)'}}>· {p.reviews} reviews</small>
          {p.badge && <span className="badge" style={{marginLeft:8}}>Prime</span>}
        </div>
        <div className="desc">{p.description}</div>
        <div style={{display:'flex',justifyContent:'space-between',alignItems:'center',marginTop:8}}>
          <small style={{color:'var(--muted)'}}>{p.category}</small>
          <div style={{display:'flex',gap:8}}>
            <button className="add" onClick={() => onAdd(p)}>Add to Cart</button>
            <button className="view" onClick={() => onView(p)} style={{padding:8,borderRadius:8,border:'1px solid #e6e9ef',background:'white',cursor:'pointer'}}>View</button>
          </div>
        </div>
      </div>
    </article>
  );
};

export default ProductCard;
