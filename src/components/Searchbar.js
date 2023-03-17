import './Searchbar.css';
import styled from 'styled-components';
import axios from 'axios';
import { useState } from 'react';
const SearchInput = styled.input`
color: black;
font-size: 16px;
font-weight: bold;
border: none;
outline: none;
margin-left:15px;

`;
function Searchbar(){
    const [searchQuery, updateSearchQuery] = useState();
    const [timeoutId, updatetimeoutId] = useState();
    const[movieList, updateMovieList] = useState([]);
    const onTextChange = (event)=>{
        clearTimeout(timeoutId);
        updateSearchQuery(event.target.value);
        const timeout = setTimeout(()=>fetchData(event.target.value), 500);
        updatetimeoutId(timeout)
    };
    const fetchData= async(searchString)=>{
        const response= await axios.get(' http://www.omdbapi.com/?s=${searchString)&apikey=1b2deeaa');
        updateMovieList(response.data.Search)
    }

    return(
        <div className='search-bar'>
        <SearchInput placeholder = "Search Movie"  value={searchQuery} onChange ={onTextChange}/>   
        </div>
    )
}
export default Searchbar;