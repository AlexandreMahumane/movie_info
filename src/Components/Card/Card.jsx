import { Link } from "react-router-dom";
import { MovieCard } from "./Card.styled";
import {FaStar} from "react-icons/fa";

const urlImg = import.meta.env.VITE_IMG;

function Card({ data}) {


    return ( 
        <MovieCard>
            <img src={urlImg + data.poster_path} alt="" />
                <h3>{data.title}</h3>
            <p><span><FaStar/></span> {data.vote_average}</p>
            <Link to = {`/movie/${data.id}`}>Details</Link>
        </MovieCard>

     );
}

export default Card;