import {ReactElement} from "react";
import {ProductCardProps} from "./interfaces/ProductCardProps.ts";

function ProductCard({ description, name, image }): ReactElement<ProductCardProps>  {
  return (
    <div className="product-card">
      <div className="container-for-product-info">
        <p className="product-description">{description}</p>
        <p className="product-name">{name}</p>
        <img src={image} alt={name} />
      </div>
    </div>
  );
}

export { ProductCard };