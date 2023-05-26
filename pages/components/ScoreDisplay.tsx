interface IScoreDisplay {
  playerOne: number;
  playerTwo: number;
}

const ScoreDisplay = (props: IScoreDisplay) => {
  return (
    <div className="relative flex flex-col md:flex-row w-56 md:w-40 gap-2 border border-gray-400 rounded-sm p-1">
      {/* player 1 score */}
      <p className="bg-gray-600 px-2 py-4 w-full md:text-left text-center items-start text-white text-lg font-bold">
        {props.playerOne}
      </p>
      <span className="flex justify-center items-center bg-white mx-auto font-bold">
        VS
      </span>
      {/* player 2 score */}
      <p className="bg-blue-600 px-2 py-4 w-full md:text-right text-center text-white text-lg font-bold">
        {props.playerTwo}
      </p>
    </div>
  );
};

export default ScoreDisplay;
