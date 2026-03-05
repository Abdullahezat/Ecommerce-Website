import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Products from "../../compontsheader/slideProducts/Products";
import "./categroypage.css";
import SlideProductsLoading from "../../compontsheader/slideProducts/SlideProductsLoading";
import PageTransion from "../../compontsheader/PageTransion";
function CategroyPage() {
  const { category } = useParams();
  const [categoryProducts, setCategoryProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    fetch(`https://dummyjson.com/products/category/${category}`)
      .then((res) => res.json())
      .then((data) => {
        setCategoryProducts(data);
      })
      .catch((error) => console.log(error))
      .finally(() => setLoading(false));
  }, [category]);
  console.log(categoryProducts);

  return (

    <PageTransion key={category}>
      <div className="category_products">
      {loading ? (
        <SlideProductsLoading key={category} />
      ) : (
        <div className="container">
          <div className="top_slide">
            <h2>{category}: {categoryProducts.limit}</h2>
            <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam,
              rem!
            </p>
          </div>

          <div className="products">
            {categoryProducts.products.map((item, index) => (
              <Products item={item} key={index} />
            ))}
          </div>
        </div>
      )}
    </div>

    </PageTransion>

    
  );
}

export default CategroyPage;
