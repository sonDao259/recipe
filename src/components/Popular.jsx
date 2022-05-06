import { useEffect, useState } from "react";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import '@splidejs/splide/dist/css/splide.min.css';
import '@splidejs/react-splide/css';
import {Link} from 'react-router-dom'

import {Wrapper, Card, Gradients} from '../styles/popularStyled'

function Popular() {

    const [popular, setPopular] = useState([]);

    useEffect(() => {
        getPopular()
    }, [])

    const getPopular = async () => {

        const check = localStorage.getItem('popular');

        if(check) {
            setPopular(JSON.parse(check));
        } else {
            const api = await fetch(`https://api.spoonacular.com/recipes/random?apiKey=${process.env.REACT_APP_API_KEY}&number=9`);
            const data = await api.json();
            localStorage.setItem('popular', JSON.stringify(data.recipes))
            setPopular(data.recipes);
        }
    };
    return (
        <div>
            <Wrapper>
                <h3>Popular picks</h3>
                <Splide 
                    options={{
                        perPage: 4,
                        arrows: true,
                        pagination: false,
                        drag: 'free',
                        gap: '1rem',
                    }}
                >
                    {popular.map(item => {
                        return (
                            <SplideSlide key={item.id}>
                                <Card>
                                    <Link to={'/recipe/' + item.id}>
                                        <p>{item.title}</p>
                                        <img src={item.image} alt={item.title} />
                                        <Gradients/>
                                    </Link>
                                </Card>
                            </SplideSlide>
                        );
                    })}
                </Splide>
            </Wrapper>
        </div>
    );
}

export default Popular