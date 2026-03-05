import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "./productdetails.css";
import SlideProducts from "../../compontsheader/slideProducts/SlideProducts";
import ProductDetailsLoading from "./ProductDetailsLoading";
import SlideProductsLoading from "../../compontsheader/slideProducts/SlideProductsLoading";
import ProductImages from "./ProductImages";
import ProductInfo from "./ProductInfo";
import PageTransion from "../../compontsheader/PageTransion";

function ProductDetails() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [loading, setloading] = useState(true);
  const [relatedProducts, setRelatedProducts] = useState([]);
  const [loadingRelatedProducts, setloadingRelatedProducts] = useState(true);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const res = await fetch(`https://dummyjson.com/products/${id}`);
        const data = await res.json();
        setProduct(data);
        setloading(false);
      } catch (error) {
        console.log(error);
      }
    };
    fetchProduct();
  }, [id]);

  useEffect(() => {
    if (!product) return;
    fetch(`https://dummyjson.com/products/category/${product.category}`)
      .then((res) => res.json())
      .then((data) => {
        setRelatedProducts(data.products);
      })
      .catch((error) => console.error(error))
      .finally(() => setloadingRelatedProducts(false));
  }, [product?.category]);



  if (!product) return <p>Product Not Found....</p>;

  return (
    <PageTransion key={id}>
    <div>
      {loading ? (
        <ProductDetailsLoading />
      ) : (
        <div className="item_details">l
          <div className="container">
            <ProductImages product={product} />

            <ProductInfo product={product} />
          </div>
        </div>
      )}

      {loadingRelatedProducts ? (
        <SlideProductsLoading />
      ) : (
        <SlideProducts
          key={product.category}
          data={relatedProducts}
          title={product.category.replace("-", " ")}
        />
      )}
    </div>      
    </PageTransion>

  );
}

export default ProductDetails;
