import React from 'react'
import './SingleCard.css'

export  function SingleCard( {card, handleChoice, flipped } ) {

  const handleClick = () => {
    handleChoice(card)

  }
  return (

        <div className="card">

          

                <div className={flipped ? "flipped": ""}>
                    <img className="front" src={card.src} alt="card front" />
                   
                    <img  className="back" src="/img/cover.png"
                    onClick={handleClick} 
                    alt="card back"></img>

                </div>

        </div>


  )
}

