import { createContext, useEffect, useState } from "react"
import Card from "./components/Card";

type FlippedCardsContextType = {
  flippedCards: string[],
  addCard: (c:string) => void
}

export const FlippedCardsContext = createContext<FlippedCardsContextType>({
  flippedCards: [],
  addCard: () => {}
})

const App = () => {
  const [cards, setCards] = useState<string[]>([])
  const [flippedCards, setFlippedCards] = useState<string[]>([])

  useEffect(()=>{
    const emojis: string[] = [
      "😍", "🍔", "😜", "🐱‍👤",
      "😎", "💀", "🐵", "🐸"];

    setCards([...emojis, ...emojis]
      .sort((_,__)=>{ return Math.floor(Math.random()*3) - 1 })
    );
  },[])

  return (
    <FlippedCardsContext.Provider value={{
      addCard: (c:string)=>{ setFlippedCards(prev => [...prev, c]) }, 
      flippedCards: flippedCards
    }}>
    <div className="cardWrapper">
      { cards.map((e)=> <Card symbol={e} />) }
    </div>
    </FlippedCardsContext.Provider>
  )
}

export default App