import Card from "../Card/Card";
import Loading from "../Loading/Loading";
import { Container } from "./Styled";
import { useEffect, useState } from "react";


const apiKey = import.meta.env.VITE_API_KEY;
const tmdbUrl = import.meta.env.VITE_API;

function Home() {

    const [movies, setMovies] = useState([]);
    const [loading, setLoading] = useState(true)

   const getTopRatedMovies = async (url)=> {

        const response = await fetch(url);
        const data = await response.json();
        setMovies(data.results);
        setLoading(false);
   }


    useEffect(()=>{
        const url = (`${tmdbUrl}top_rated?${apiKey}`);
        getTopRatedMovies(url);
    }, [])
    
    return ( 

       (loading && <Loading/> ) || <Container>
            <h2>Best Movies:</h2>
              <div className="subContainer"> 
            {   
                movies.map((item)=> (
                    <Card data={item} key={item.id}/>
                ))
            }
            </div>

        </Container>
     );
}

export default Home;