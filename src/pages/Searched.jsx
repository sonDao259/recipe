import { useState, useEffect } from "react";
import {useParams} from 'react-router-dom';
import { Link } from "react-router-dom";

import {Grid, GridItem, Card} from '../styles/cuisineStyled'


function Searched() {
    const [searchedRecipes, setSearchedRecipes] = useState([]);
    let params = useParams();

    const getSearched = async (name) => {
        const api = await fetch(`https://api.spoonacular.com/recipes/complexSearch?apiKey=${process.env.REACT_APP_API_KEY}&number=9&query=${name}`)
        const data = await api.json();
        setSearchedRecipes(data.results);
    }

    useEffect(() => {
        getSearched(params.search);
    }, [params.search])

    return (
        <Grid>
            <GridItem>
                {searchedRecipes.map(item => {
                    return (
                        <Card key={item.id}>
                            <Link>
                                <img src={item.image} alt='' />
                                <h4>{item.title}</h4>
                            </Link>
                        </Card>
                    )
                })}
            </GridItem>
        </Grid>
    )
}

export default Searched