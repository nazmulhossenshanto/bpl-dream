
import { useEffect, useState } from 'react'
import './App.css'
import Hero from './Components/Navbar/Hero/Hero'
import Navbar from './Components/Navbar/Navbar'
import PlayersCard from './Components/Navbar/PlayersCard/PlayersCard';

function App() {
  const [coin, setCoin] = useState(0);
  const [players, setPlayers] = useState([]);
  const [selectedPlayers, setSelectedPlayers] = useState([])
  useEffect(()=>{
    fetch('player.json')
    .then(res => res.json())
    .then(data => setPlayers(data))
  }, [])
  const handleCoin = () => {
    setCoin(coin + 6000)
    console.log('adding coin')
  };
  const handlSelectedPlayer = (player) => {
    setSelectedPlayers([...selectedPlayers, player])
  }

  return (
    <>

      <h1 className='text-2xl'>Vite + React</h1>
      <Navbar coin={coin}></Navbar>
      <Hero handleCoin={handleCoin}></Hero>
      <PlayersCard
       players={players}
       handlSelectedPlayer={handlSelectedPlayer}
       selectedPlayers={selectedPlayers}
       ></PlayersCard>
    </>
  )
}

export default App
