// Re-export the JSX component implementation from App.jsx so
// the `.js` loader doesn't need to parse JSX. This keeps compatibility
// with tools that expect `.js` files while Vite/esbuild parses `.jsx`.
export { default } from './App.jsx';