import React, { useState } from 'react';

const AddProduct = ({ onAdd, categories = [] }) => {
  const [name, setName] = useState('');
  const [category, setCategory] = useState(categories[0] || 'Misc');
  const [price, setPrice] = useState('');
  const [description, setDescription] = useState('');
  const [img, setImg] = useState('');

  const submit = (e) => {
    e.preventDefault();
    if (!name.trim() || !price) return alert('Please provide at least a name and price');
    const newProd = {
      name: name.trim(),
      category: category || 'Misc',
      price: Number(price),
      description: description || name,
      img: img || `https://source.unsplash.com/400x300/?${encodeURIComponent(name.split(' ')[0])}`,
      rating: (Math.random()*1.5 + 3.5).toFixed(1),
      reviews: Math.floor(Math.random()*200 + 1),
      badge: false
    };
    onAdd(newProd);
    setName(''); setPrice(''); setDescription(''); setImg('');
  };

  return (
    <form onSubmit={submit} className="add-product-form" style={{display:'flex',gap:8,alignItems:'center'}}>
      <input placeholder="Name" value={name} onChange={e=>setName(e.target.value)} style={{padding:8,borderRadius:6,border:'1px solid #ddd'}} />
      <select value={category} onChange={e=>setCategory(e.target.value)} style={{padding:8,borderRadius:6,border:'1px solid #ddd'}}>
        {categories.map(c => <option key={c} value={c}>{c}</option>)}
      </select>
      <input placeholder="Price" value={price} onChange={e=>setPrice(e.target.value)} style={{width:90,padding:8,borderRadius:6,border:'1px solid #ddd'}} />
      <button type="submit" style={{padding:'8px 10px',borderRadius:6,background:'#2b7cff',color:'#fff',border:'none',cursor:'pointer'}}>Add</button>
    </form>
  );
};

export default AddProduct;
