import Image from "next/image";
import React from "react";
import './ProductCard.css';
import { Heart } from "lucide-react";

interface ProductCardProps {
  label?: string;
  image: string;
  name: string;
  outOfStock?: boolean;
}

const ProductCard: React.FC<ProductCardProps> = ({ label, image, name, outOfStock }) => {
  return (
    <article className={`product-card ${outOfStock ? 'out-of-stock' : ''}`} aria-labelledby={`product-${name}`}>
      {label && (
        <div className={`product-label ${label === "NEW PRODUCT" ? 'new-product' : 'out-of-stock-label'}`}>
          {label}
        </div>
      )}
      
      <Image 
        src={image} 
        className="product-image"
        width={300} 
        height={399} 
        alt={name ?? "Product image — metta muse"}
        loading="lazy"
      />
      
      <div className="product-info">
        <h2 id={`product-${name}`} className="product-name">
          {name}
        </h2>
        <div className="pricing-info">
          <a href="#" className="sign-in-link">
            Sign in
          </a>{" "}
          or create an account to see pricing
        </div>
      </div>
    </article>
  );
};

export default ProductCard;