import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { SingleCard } from './components/singleCard';


const cardImages = [
  {"src": "/img/helmet-1.png", matched: false},
  {"src": "/img/potion-1.png", matched: false},
  {"src": "/img/ring-1.png", matched: false},
  {"src": "/img/scroll-1.png", matched: false},
  {"src": "/img/shield-1.png", matched: false},
  {"src": "/img/sword-1.png", matched: false}

]



function App() {



  const [cards, setCards] = useState([])
  const [turns, setTurns] = useState(0)
  const [choiceOne, setChoiceOne ] = useState(null)
  const [choiceSecond, setChoiceSecond ] = useState(null)


  // console.log(choiceOne)
  // console.log(choiceSecond)

 // shuffle cards
 const shuffleCards = () => {
  const shuffledCards = [...cardImages, ...cardImages]
  .sort(() => Math.random() - 0.5)
  .map((card) => ({...card, id: Math.random() }))

  setCards(shuffledCards)
  setTurns(0)




}


  
  // console.log(cards, turns)
  
  //hanlde a choice drews
  const handleChoice = (card) => {

    choiceOne ? setChoiceSecond(card) :setChoiceOne(card)
      
  }



  useEffect(()=>{
    if(choiceOne && choiceSecond){

      if (choiceOne.src === choiceSecond.src) {
        //  console.log('those cards match') 
         setCards(prevCards => {
            return prevCards.map(card => {
              if(card.src === choiceOne.src){
                return {...card, matched:true}
            

              }else {
                return card
              }
            })
         } )
         resetTurn()      
      }else{
        // console.log('those cards do mTCH')'
       setTimeout(()=> resetTurn(), 1000 )  //seconds
      }
       
    }
  
   },[choiceOne, choiceSecond])

   console.log(cards)

        

  const resetTurn = () =>{
    setChoiceOne(null)
    setChoiceSecond(null)
    setTurns(prevTurns => prevTurns + 1)
  }



       return (
        <>
    
        <div className='App'>
    
          <h1>Magic Match</h1>
          <button onClick={shuffleCards}>
            New Game
          </button>
    
          <div className="card-grid">
            {cards.map(card => (
            
            <SingleCard 
            
              key={card.id} 
              card={card}
              handleChoice={handleChoice}
              flipped={card === choiceOne || card === choiceSecond || card.matched}
            />
    
    
    
      
    
            ))}
    
    
          </div>
        </div>
    
        </>
      )
    
    


}



 







export default App
