import React, { useEffect, useState } from "react";
import HeroSlider from "../../compontsheader/HeroSlider";
import "./home.css";
import SlideProducts from "../../compontsheader/slideProducts/SlideProducts";
import SlideProductsLoading from "../../compontsheader/slideProducts/SlideProductsLoading";
import PageTransion from "../../compontsheader/PageTransion";
const categories = [
  "smartphones",
  "mobile-accessories",
  "laptops",
  "tablets",
  "sunglasses",
  "sports-accessories",
];
function Home() {
  const [products, setProducts] = useState({});
  const [loading, setloading] = useState(true);
  useEffect(() => {
    const fatchProducts = async () => {
      try {
        const results = await Promise.all(
          categories.map(async (category) => {
            const res = await fetch(
              `https://dummyjson.com/products/category/${category}`,
            );
            const data = await res.json();
            return { [category]: data.products };
          }),
        );
        const productsData = Object.assign({}, ...results);
        setProducts(productsData);
      } catch (error) {
        console.log("Error fetching", error);
      } finally {
        setloading(false);
      }
    };
    fatchProducts();
  }, []);

  return (
    <PageTransion>
      <div>
        <HeroSlider />
        {loading
          ? categories.map((category) => (
              <SlideProductsLoading key={category} />
            ))
          : categories.map((category) => (
              <SlideProducts
                key={category}
                data={products[category]}
                title={category.replace("-", " ")}
              />
            ))}
      </div>
    </PageTransion>
  );
}

export default Home;
