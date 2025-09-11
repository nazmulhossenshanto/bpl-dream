import { useEffect, useState } from "react";
import "./App.css";
import Hero from "./Components/Navbar/Hero/Hero";
import Navbar from "./Components/Navbar/Navbar";
import PlayersCard from "./Components/Navbar/PlayersCard/PlayersCard";
import Footer from "./Components/Footer/Footer";

function App() {
  const [coin, setCoin] = useState(0);
  const [players, setPlayers] = useState([]);
  const [selectedPlayers, setSelectedPlayers] = useState([]);
  const [status, setStatus] = useState(true);
  const handleStatus = (message) =>{
    setStatus(message);
  }
  useEffect(() => {
    fetch("player.json")
      .then((res) => res.json())
      .then((data) => setPlayers(data));
  }, []);
  const handleCoin = (amount) => {
    {coin + amount < 100001 && setCoin(coin + amount)  }
  };
  
  const handlSelectedPlayer = (player) => {
    const isExist = selectedPlayers.find((p)=> p.id === player.id);
    if(isExist){
      alert("This player is already selected");
      return;
    }
    if(selectedPlayers.length >= 5){
      alert('Cannot add more players')
      return;
      
    }
    if( coin < player.price){
      alert('add more price');
      return;
    }
    
    setSelectedPlayers([...selectedPlayers, player]);
    setCoin(coin - player.price);
      
    
    
  };
  const removePlayer = (id) => {
    const remainingPlayer = selectedPlayers.filter((p) => p.id !== id);
    setSelectedPlayers(remainingPlayer);
  };

  return (
    <>
      
      <Navbar coin={coin}></Navbar>
      <Hero handleCoin={handleCoin}></Hero>
      <PlayersCard
        players={players}
        handlSelectedPlayer={handlSelectedPlayer}
        selectedPlayers={selectedPlayers}
        removePlayer={removePlayer}
        handleStatus={handleStatus}
        status={status}
      ></PlayersCard>
      <Footer></Footer>
    </>
  );
}

export default App;
