import { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom'

import {Grid, GridItem, Card} from '../styles/cuisineStyled'

function Cuisine() {

    const [cuisine, setCuisine] = useState([]);
    let params = useParams();

    const getCuisine = async (name) => {
        const api = await fetch(`https://api.spoonacular.com/recipes/complexSearch?apiKey=${process.env.REACT_APP_API_KEY}&number=9&cuisine=${name}`)
        const data = await api.json();
        setCuisine(data.results);
    }

    useEffect(() => {
        getCuisine(params.type);
    }, [params.type])
    

    return (
        <Grid>
            <GridItem
                animate={{opacity: 1}}
                initial={{opacity: 0}}
                exit={{opacity: 0}}
                transition={{duration: .5}}
            >
                {cuisine.map(item => {
                    return (
                        <Card key={item.id}>
                            <Link to={'/recipe/' + item.id}>
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

export default Cuisine;