import {useState, useEffect} from 'react'
import {useParams} from 'react-router-dom'

import {DetailsWrapper, Button, Info, Intro} from '../styles/recipeStyled'

function Recipe() {

  const [details, setDetails] = useState({});
  const [activeTab, setActiveTab] = useState('instructions');
  let params = useParams();

  const fetchDetails = async (name) => {
    const data = await fetch(`https://api.spoonacular.com/recipes/${name}/information?apiKey=${process.env.REACT_APP_API_KEY}`)
    const detailsData = await data.json();
    setDetails(detailsData);
  }

  useEffect(() => {
    fetchDetails(params.name)
  }, [params.name])

  return (
      <DetailsWrapper>
        <Intro>
          <h2>{details.title}</h2>
          <img src={details.image} alt={details.title} />
        </Intro>
        <Info>

          <Button 
            className={activeTab === 'instructions' ? 'active' : ''} 
            onClick={() => setActiveTab('instructions')}
          >
            Instructions
          </Button>

          <Button 
            className={activeTab === 'ingredients' ? 'active' : ''} 
            onClick={() => setActiveTab('ingredients')}
          >
            Ingredients
          </Button>
          {activeTab === 'instructions' && (
            <div>
              <p dangerouslySetInnerHTML={{__html: details.summary}}></p>
              <p dangerouslySetInnerHTML={{__html: details.instructions}}></p>
            </div>
          )}

          {activeTab === 'ingredients' && (
            <ul>
              {details.extendedIngredients.map(ingredient => (
                <li key={ingredient.id}>{ingredient.original}</li>
              ))}
            </ul>
          )}

        </Info>
    </DetailsWrapper>
  ) 
}

export default Recipe