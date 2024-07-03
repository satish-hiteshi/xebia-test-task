export const ProductService = async () => {
  const resp = await fetch('/api/products');
  return resp.json();
};
