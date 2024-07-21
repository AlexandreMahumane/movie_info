import { useNavigate } from "react-router-dom";
import { Input} from "./NavBar.styled";
import {BiSearchAlt2} from "react-icons/bi";
import { useState } from "react";




function Form() {
    const navigate = useNavigate();
    const [searchValue, setSearchValue] = useState();

    const handleSubmit = (event)=> {
        event.preventDefault();
        navigate(`/search?q=${searchValue}`)
        setSearchValue('');
    }


    return ( 
        <Input onSubmit={handleSubmit}>
            <input type="text" 
            placeholder="Search a movie"
            
            onChange={(index)=>setSearchValue(index.target.value)}
            
            />
            <button type="submit"><BiSearchAlt2/></button>
        </Input>
     );
}

export default Form;