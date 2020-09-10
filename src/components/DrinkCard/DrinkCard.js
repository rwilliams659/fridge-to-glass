import React from 'react';
import './DrinkCard.css'

const DrinkCard = ({id, name, image, alcoholContent}) => {
  return (
    <section className='DrinkCard'>
      <section className='cocktail-img' style={{ backgroundImage: `url(${image})` }} alt={name} id={id}>
        <section className='alcohol-tag'>
          <p className='alcohol-info'>{alcoholContent}</p>
        </section>
      </section>
      <h4 className='cocktail-name'>{name}</h4>
    </section>
  )
}

export default DrinkCard