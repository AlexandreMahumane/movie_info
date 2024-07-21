import {Container} from "./Styled"
import Card from "../Card/Card";
import { useSearchParams } from "react-router-dom";
import Error404Movie from "../ErrorPages/Error404Movie";
import Loading from "../Loading/Loading";
import { useState, useEffect } from "react";


const urlToSearch = import.meta.env.VITE_SEARCH;
const apiKey = import.meta.env.VITE_API_KEY;

export function Search(){
    const [loading, setLoading] = useState(true);
    const [movies, setMovies] = useState([]);
    const [searchParams] = useSearchParams();   
    const query = searchParams.get("q");

    const getSearchValue = async (url) => {
        const res = await fetch(url);
        const data = await res.json();
        setMovies(data.results);
        setLoading(false);
    }

    useEffect(()=>{
        const searchUrl = (`${urlToSearch}?${apiKey}&query=${query}`);
        
        getSearchValue(searchUrl); 
    }, [query]);

    return (

        (loading && <Loading/> ) || <Container>
        <h2>Results for: {query}</h2>
        <div className="subContainer"> 
         {
        (movies.length === 0) ?(<Error404Movie/> ) : ( movies.map((item)=> (<Card data={item} key={item.id}/>)))
        }
         
        </div>
    </Container>
    );
} 