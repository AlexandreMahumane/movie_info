import Error404Page from "./Components/ErrorPages/Error404Page";
import NavBar from "./Components/NavBar/NavBar";
import Home from "./Components/Pages/Home";
import Movie from "./Components/Pages/Movie";
import { Search } from "./Components/Pages/Search";
import { BrowserRouter, Route, Routes } from "react-router-dom";


function App() {
    return ( 
            <BrowserRouter>
            <NavBar/>
                <Routes>
                    <Route path="/" element={<Home/>} />
                    <Route path="/search" element={<Search/>} />
                    <Route path="/movie/:id" element={<Movie/>} />
                    <Route path="*" element={<Error404Page/>} />
                </Routes>
            </BrowserRouter>
     );
}

export default App;
