import ScoreDisplay from "./components/ScoreDisplay";
import PlayerCard from "./components/PlayerCard";
import { useEffect, useState } from "react";

const Players = [
  {
    id: "001",
    name: "Biruk Endris",
    image:
      "https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=880&q=80",
    age: 23,
    height: "172cm",
    weight: "73kg",
  },
  {
    id: "002",
    name: "Lana G'",
    image:
      "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
    age: 25,
    height: "162cm",
    weight: "63kg",
  },
];

export default function Home() {
  const pointStep = 1;
  const [playerOneScore, setPlayerOneScore] = useState<number>(0);
  const [playerTwoScore, setPlayerTwoScore] = useState<number>(0);
  const [winner, setWinner] = useState<string | null>();

  const handleRestart = () => {
    setWinner(null);
    setPlayerOneScore(0);
    setPlayerTwoScore(0);
  };

  useEffect(() => {
    if (winner) {
      return;
    }
    if (playerOneScore >= 21 && playerOneScore - playerTwoScore >= 2) {
      setWinner(Players[0].name);
    } else if (playerTwoScore >= 21 && playerTwoScore - playerOneScore >= 2) {
      setWinner(Players[1].name);
    }
  }, [playerOneScore, playerTwoScore, winner]);
  return (
    <main className="w-screen h-screen flex justify-center items-center">
      {/* players section */}

      <section className="flex flex-col md:flex-row items-center gap-5">
        <PlayerCard
          name={Players[0].name}
          age={Players[0].age}
          height={Players[0].height}
          image={Players[0].image}
          weight={Players[0].weight}
          handleAddButton={() => setPlayerOneScore(playerOneScore + pointStep)}
          handleRemoveButton={() =>
            !!playerOneScore && setPlayerOneScore(playerOneScore - pointStep)
          }
        />
        <ScoreDisplay playerOne={playerOneScore} playerTwo={playerTwoScore} />
        <PlayerCard
          name={Players[1].name}
          age={Players[1].age}
          height={Players[1].height}
          image={Players[1].image}
          weight={Players[1].weight}
          handleAddButton={() => setPlayerTwoScore(playerTwoScore + pointStep)}
          handleRemoveButton={() => {
            !!playerTwoScore && setPlayerTwoScore(playerTwoScore - pointStep);
          }}
        />
      </section>
      {/* winner dialog */}
      {winner && (
        <div className="absolute bottom-5 px-3 py-2 rounded-md flex gap-4 bg-orange-400">
          <p className="font-bold text-lg text-white">
            The winner is : {winner}
          </p>
          <button
            onClick={handleRestart}
            className="px-2 py-1 rounded-sm hover:bg-gray-300 bg-white"
          >
            Restart
          </button>
        </div>
      )}
    </main>
  );
}
