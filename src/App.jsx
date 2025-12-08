import React, { useState, useMemo } from 'react';
import './App.css';
import SearchComponent from './components/SearchComponent';
import UserCartComponent from './components/UserCartComponent';
import ProductList from './components/ProductList';
import ProductModal from './components/ProductModal';
import DEFAULT_PRODUCTS from './data/products';

function App() {
  const [searchTerm, setSearchTerm] = useState('');
  const [cartItems, setCartItems] = useState([]);
  const [category, setCategory] = useState('All');
  const [products] = useState(DEFAULT_PRODUCTS);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [view, setView] = useState('grid');

  const handleAddToCart = (product, qty = 1) => {
    setCartItems(prev => {
      const exists = prev.find(i => i.id === product.id);
      if (exists) return prev.map(i => i.id === product.id ? { ...i, quantity: i.quantity + qty } : i);
      return [...prev, { ...product, quantity: qty }];
    });
  };

  const handleRemoveFromCart = (id) => setCartItems(prev => prev.filter(i => i.id !== id));
  const handleQuantityChange = (id, qty) => setCartItems(prev => prev.map(i => i.id === id ? { ...i, quantity: qty } : i));

  const filtered = useMemo(() => {
    return products
      .filter(p => category === 'All' ? true : p.category === category)
      .filter(p => p.name.toLowerCase().includes(searchTerm.toLowerCase()) || p.description.toLowerCase().includes(searchTerm.toLowerCase()));
  }, [products, category, searchTerm]);

  const categories = useMemo(() => ['All', ...Array.from(new Set(products.map(p => p.category)))], [products]);

  return (
    <div className="App">
      <header className="App-header">
        <h1>Shopping Cart</h1>
      </header>
      <main className="App-main">
        <div style={{display:'flex',alignItems:'center',justifyContent:'space-between',gap:12,marginBottom:12}}>
          <SearchComponent searchTerm={searchTerm} setSearchTerm={setSearchTerm} category={category} setCategory={setCategory} categories={categories} />
          <div style={{display:'flex',gap:8,alignItems:'center'}}>
            <button onClick={() => setView(v => v === 'grid' ? 'list' : 'grid')} className="toggle">{view === 'grid' ? 'List' : 'Grid'}</button>
          </div>
        </div>

        <div style={{display:'grid',gridTemplateColumns:'1fr 320px',gap:18}}>
            <div className="layout-grid">
              <ProductList products={filtered} onAddToCart={handleAddToCart} onView={setSelectedProduct} view={view} />
          </div>
          <UserCartComponent cartItems={cartItems} handleRemove={handleRemoveFromCart} handleQuantityChange={handleQuantityChange} />
        </div>

        <ProductModal product={selectedProduct} onClose={() => setSelectedProduct(null)} onAdd={(p, qty) => handleAddToCart(p, qty)} onBuy={(p, qty) => { handleAddToCart(p, qty); setSelectedProduct(null); }} />
      </main>
    </div>
  );
}

export default App;
