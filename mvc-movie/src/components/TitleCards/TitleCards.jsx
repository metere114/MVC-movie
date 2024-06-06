import React, { useEffect, useRef } from 'react'
import './TitleCards.css'
import cards_data from '../../assets/cards/Cards_data'




const TitleCards = ({title, category}) => {
  const cardsRef = useRef();

  const handleWheel =(event)=>{

  event.preventDefault();

  cardsRef.current.scrolleft += event.deltaY

}

  useEffect(()=>{
    cardsRef.current.addEventListener('wheel', handleWheel);

},[])

  return (
    <div className='title-cards'>
      <h1>{title?title: " popular on MVCmovie "}</h1>

      <div className="card-list" ref={cardsRef}>

        {cards_data.map((card, index)=>{{/*Aqui estamos a percorrer a nossa lista de filmes usando o map*/}

          return <div className='card' key={index}>
                 <img src={card.image} />
                 <p>{card.name}</p>
          </div>
       
          

        })}
      </div>
    </div>
  )
}

export default TitleCards
