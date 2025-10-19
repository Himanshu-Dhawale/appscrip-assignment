"use client"

import React, { useState, useEffect } from 'react'
import ProductCard from './ProductCard/ProductCard'

interface Product {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
  rating: {
    rate: number;
    count: number;
  };
}

const ProductListing = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        setLoading(true);
        const response = await fetch('https://fakestoreapi.com/products');
        if (!response.ok) {
          throw new Error('Failed to fetch products');
        }
        const data = await response.json();
        setProducts(data);
      } catch (err) {
        setError(err instanceof Error ? err.message : 'An error occurred');
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  if (loading) {
    return (
      <div className='product-listing'>
        <div style={{ textAlign: 'center', padding: '40px', fontSize: '16px', color: '#666' }}>
          Loading products...
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className='product-listing'>
        <div style={{ textAlign: 'center', padding: '40px', fontSize: '16px', color: '#ff4444' }}>
          Error: {error}
        </div>
      </div>
    );
  }

  return (
    <div className='product-listing'>
      <div
        className='product-list'
      >
        {products.map(product => (
          <ProductCard
            key={product.id}
            label={product.rating.rate >= 4.5 ? "NEW PRODUCT" : ""}
            image={product.image}
            name={product.title}
            outOfStock={product.rating.count < 10}
          />
        ))}
      </div>
    </div>
  )
}

export default ProductListing