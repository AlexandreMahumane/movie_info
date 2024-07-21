import { Link } from "react-router-dom";
import { Container } from "./NavBar.styled";
import Form from "./Form";
import {BiCameraMovie} from "react-icons/bi";


function NavBar() {
    return ( 
        <Container>
            <Link to={"/"} ><BiCameraMovie/>CineMania </Link>
            <Form/>
        </Container>
     );
}

export default NavBar;