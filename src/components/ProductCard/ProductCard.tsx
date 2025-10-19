import Image from "next/image";
import React from "react";
import './ProductCard.css';
import { Heart } from "lucide-react";

interface ProductCardProps {
  label: string;
  image: string;
  name: string;
  outOfStock: boolean;
}

const ProductCard: React.FC<ProductCardProps> = ({ label, image, name, outOfStock }) => {
  return (
    <div className={`product-card ${outOfStock ? 'out-of-stock' : ''}`}>
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
        alt="product-image"
      />
      
      <div className="product-info">
        <div className="product-name">
          {name}
        </div>
        <div className="pricing-info">
          <a href="#" className="sign-in-link">
            Sign in
          </a>{" "}
          or Create an account to see pricing
        </div>
      </div>
      
      <div className="wishlist-container">
        <Heart width={24} height={24} className="wishlist-icon"/>
      </div>
    </div>
  );
};

export default ProductCard;