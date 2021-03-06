import { useEffect, useState } from "react";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import '@splidejs/splide/dist/css/splide.min.css';
import '@splidejs/react-splide/css';
import { Link } from "react-router-dom";

import {Wrapper, Card, Gradients} from '../styles/veggieStyled'

function Veggie() {
  const [veggie, setVeggie] = useState([]);

    useEffect(() => {
        getVeggie()
    }, [])

    const getVeggie = async () => {

        const check = localStorage.getItem('veggie');

        if(check) {
            setVeggie(JSON.parse(check));
        } else {
            const api = await fetch(`https://api.spoonacular.com/recipes/random?apiKey=${process.env.REACT_APP_API_KEY}&number=9&tags=vegetarian`);
            const data = await api.json();
            localStorage.setItem('veggie', JSON.stringify(data.recipes))
            setVeggie(data.recipes);
        }
    };
    return (
      <div>
        <Wrapper>
            <h3>Our Vegetarian picks</h3>
            <Splide 
                options={{
                    perPage: 3,
                    arrows: true,
                    pagination: false,
                    drag: 'free',
                    gap: '1rem',
                }}
            >
                {veggie.map(item => {
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
    )
}

export default Veggie