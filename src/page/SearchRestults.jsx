import React, { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'
import PageTransion from '../compontsheader/PageTransion';
import SlideProductsLoading from '../compontsheader/slideProducts/SlideProductsLoading';
import Products from '../compontsheader/slideProducts/Products';

function SearchRestults() {
  const [results ,setResults ] = useState([])
    const query = new URLSearchParams(useLocation().search).get("query");
    const [loading ,setLoading] = useState(true)
    console.log(results);
    



    useEffect(() => {
      const fetchResults = async()=>{
        try{
          const res = await fetch(
            `https://dummyjson.com/products/search?q=${query}`
          )
          const data =await res.json();
          setResults(data.products || [])
        } catch(error) {
          console.error("Search Error : " , error);
          
        }finally{
          setLoading(false)
        }
      }
      if(query) fetchResults();
    },[query])

  return (
    <PageTransion key={query}>

<div className="category_products">
      {loading ? (
        <SlideProductsLoading key={query} />
      ) : results.length > 0 ?(
        <div className="container">
          <div className="top_slide">
            <h2>
              Results For: {query}</h2>
          </div>

          <div className="products">
            {results.map((item, index) => (
              <Products item={item} key={index} />
            ) )}
          </div>
        </div>
      ) :<div className='container'><p> No Results found. </p></div>  }
    </div>

    </PageTransion>
  )
}

export default SearchRestults
