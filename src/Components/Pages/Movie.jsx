import { useEffect, useState } from "react";
import { Container } from "./Styled";
import { useParams } from "react-router-dom";
import {FaStar} from "react-icons/fa";
import {BsFillFileEarmarkTextFill,
    BsHourglassSplit, 
    BsGraphUp, 
    BsWallet2  } 
    from "react-icons/bs"

const apiKey = import.meta.env.VITE_API_KEY;
const movieUrl = import.meta.env.VITE_API;
const urlImg = import.meta.env.VITE_IMG


function Movie() {
    const {id} = useParams();
    const [movie, setMovie] = useState([]);

    const getIdMovie = async (url)=>{
        const res = await fetch(url);
        const data = await res.json();
        setMovie(data);
    }

    useEffect(()=>{
        const idMovieUrl = (`${movieUrl}${id}?${apiKey}`)
        getIdMovie(idMovieUrl)
    }, [])
    
    return ( 
    <Container>
        <img src={urlImg + movie.backdrop_path} alt="" />
        <h3>{movie.title}</h3>
        <p><span><FaStar/></span> {movie.vote_average}</p>
        <p>{movie.tagline}</p>

        <div className="info">
            <h3>Release Date:</h3>
            <p>{movie.release_date}</p>

            <h3>Budget:</h3>
            <p>< BsWallet2/> $ {movie.budget} </p>
            

            <h3>Revenue:</h3>
            <p><BsGraphUp /> {movie.revenue}</p>

            <h3>Duration:</h3>
            <p><BsHourglassSplit /> {movie.runtime} min</p>

            <h3>Description:</h3>
            <p><BsFillFileEarmarkTextFill /> {movie.overview}</p>
        </div>
    </Container> );
}

export default Movie;