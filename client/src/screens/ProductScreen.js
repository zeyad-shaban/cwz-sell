import React, { useEffect } from 'react';
import productsApi from '../api/products';
import SingleProduct from '../components/SingleProduct';
import ProductsNav from '../components/ProductsNav';
import useData from '../hooks/useData';
import { toast } from 'react-toastify';
import cartApi from '../api/cart';

function ProductScreen({ match }) {
  const { id } = match.params;
  const { data: product, loading, setLoading, error, request: productRequest } = useData();
  const { data: products, request: productsRequest } = useData();


  useEffect(() => {
    productRequest(productsApi.getProduct, id);
    productsRequest(productsApi.getProducts);
  }, [id]);


  const handleAddToCart = async () => {
    try {
      setLoading(true);
      await cartApi.addToCart(id);
      setLoading(false);
      toast.success(`${product.title} got added to your cart`);
    } catch (err) {
      if (err.response && err.response.status >= 400 && err.response.status < 500) toast.error(err.response.data);
      return setLoading(false);
    }
  };

  if (loading) return <h1>Loading...</h1>;
  if (!product) return <h1>{error}</h1>;
  return (
    <div>
      <SingleProduct product={product} handleAddToCart={handleAddToCart} />
      <ProductsNav products={products} current={product} />
    </div>
  );
}

export default ProductScreen;