// Generated default products for the catalog
function generateDefaultProducts(n = 40) {
  const categories = ['Electronics','Sport','Home','Clothing','Books','Toys','Beauty','Garden'];
  const base = ['Headphones','Shoes','Coffee Maker','Jacket','Book','Yoga Mat','Smart Watch','Blender','Backpack','Sunglasses','Camera','Speaker','Microwave','Lamp','Vacuum','Chair','Desk','Router','Monitor','Keyboard'];
  const adjectives = ['Pro','Plus','Max','Lite','2025','Essential','Premium','Classic','Deluxe','Compact'];
  const products = [];
  for (let i = 1; i <= n; i++) {
    const name = `${adjectives[i % adjectives.length]} ${base[i % base.length]}`;
    const category = categories[i % categories.length];
    const priceBase = { Electronics:99, Sport:45, Home:60, Clothing:55, Books:20, Toys:25, Beauty:30, Garden:40 }[category] || 50;
    const price = Math.round((priceBase + (i * 7 % 120)) + (i % 9));
    const img = `https://via.placeholder.com/400x300?text=${encodeURIComponent(name)}`;
    const description = `${name} — high quality ${category.toLowerCase()} product with great reviews and value.`;
    products.push({ id: i, name, price, img, category, description, rating: (Math.random()*1.5 + 3.5).toFixed(1), reviews: Math.floor(Math.random()*2000 + 3), badge: Math.random() > 0.75 });
  }
  return products;
}

const DEFAULT_PRODUCTS = generateDefaultProducts(40);
export default DEFAULT_PRODUCTS;
