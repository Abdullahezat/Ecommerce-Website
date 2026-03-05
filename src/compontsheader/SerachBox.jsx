import React, { useEffect, useState } from 'react'
import { FaSearch } from 'react-icons/fa'
import { Link, useLocation, useNavigate } from 'react-router-dom';

function SerachBox() {

    const[serachTerm , setSerachTrem] = useState("");


    const [suggestions,setSuggestions] = useState([])

    const navigat = useNavigate()

    const location = useLocation()

    const handleSubmit = (e) => {
        e.preventDefault();
        if(serachTerm.trim()){
            navigat(`/search?query=${encodeURIComponent(serachTerm.trim())}`)
        }
        setSuggestions([])
    }

        useEffect(() => {
          const fetchSuggestions = async () => {
            if(!serachTerm.trim()){
                setSuggestions([])
                return
            }
            try{

                const res = await fetch(
                `https://dummyjson.com/products/search?q=${serachTerm}`
                )
                const data =await res.json();
                setSuggestions(data.products.slice(0,5) || [])
            } catch(error) {
                console.error("Search Error : " , error);
                setSuggestions([])
            }
        }
        const debonuce = setTimeout(() => {
            fetchSuggestions()
        },300)
        return () => clearTimeout(debonuce) },[serachTerm])

        useEffect(() => {
                setSuggestions([]);
        }, [location])
        
    return (
    <div className='serachBox_container'>

        <form onSubmit={handleSubmit} className="search_box">
            <input type="text" name='search' id='search' placeholder='Search For Products' onChange={(e) => setSerachTrem(e.target.value)}/>
            <button type='submit'><FaSearch /></button>
        </form>
        {suggestions.length > 0 &&(
            <ul className='suggestions'>
                {suggestions.map((item) =>(

                    <Link to={`/products/${item.id}`}> 
                    <li key={item.id}><img src={item.images[0]}/>
                    <span>{item.title}</span>
                    </li>
                    </Link>
                    ))}
            </ul>
        )}
    </div>
  )
}

export default SerachBox
