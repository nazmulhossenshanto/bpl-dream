import { useEffect, useState } from "react";
import "./App.css";
import Hero from "./Components/Navbar/Hero/Hero";
import Navbar from "./Components/Navbar/Navbar";
import PlayersCard from "./Components/Navbar/PlayersCard/PlayersCard";
import Footer from "./Components/Footer/Footer";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Bounce } from "react-toastify";

function App() {
  const [coin, setCoin] = useState(0);
  const [players, setPlayers] = useState([]);
  const [selectedPlayers, setSelectedPlayers] = useState([]);
  const [status, setStatus] = useState(true);
  const handleStatus = (message) => {
    setStatus(message);
  };
  useEffect(() => {
    fetch("player.json")
      .then((res) => res.json())
      .then((data) => setPlayers(data));
  }, []);
  const handleCoin = (amount) => {
    if (coin + amount < 100001) {
      setCoin(coin + amount);
      toast.success(`${amount} Coin added successfully!`);
    } else {
      toast.error("You cannot add more than 100000 coins!");
    }
  };

  const handlSelectedPlayer = (player) => {
    const isExist = selectedPlayers.find((p) => p.id === player.id);
    if (isExist) {
      toast.error("This player is already selected!");
      return;
    }
    if (selectedPlayers.length >= 6) {
      toast.warning("Cannot add more than 6 players!");
      return;
    }
    if (coin < player.price) {
      toast.info("Add more coins first!");
      return;
    }

    setSelectedPlayers([...selectedPlayers, player]);
    setCoin(coin - player.price);
    toast.success(`${player.player_name} added successfully!`);
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
      {/* React Toastify  */}
      <ToastContainer
        position="top-center"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick={false}
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
        transition={Bounce}
      />
    </>
  );
}

export default App;
