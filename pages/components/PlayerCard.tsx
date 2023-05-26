import Image from "next/image";

interface IPlayerCard {
  name: string;
  image?: string; // optional
  age?: number;
  weight?: string;
  height?: string;
  handleAddButton: () => void;
  handleRemoveButton: () => void;
}

const PlayerCard = (props: IPlayerCard) => {
  return (
    <div className="flex md:flex-col items-center flex-wrap gap-2 md:gap-0 p-2 border border-gray-500 rounded-sm">
      {/* name of player */}
      <div className="flex flex-col gap-1 my-1">
        <p className="text-xs text-gray-600">Player </p>
        <p>{props.name}</p>
      </div>
      {/* image */}
      <div className="w-24 h-24 md:w-56 md:h-52">
        <Image
          src={
            props.image ??
            "https://images.unsplash.com/photo-1605395630162-1c7cc7a34590?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80"
          }
          alt="player image"
          height={500}
          width={500}
          className="h-full w-full object-cover"
        />
      </div>
      {/* profile detail */}
      <div className="flex w-full md:max-w-none justify-between my-2">
        {/* age */}
        <div className="flex flex-col gap-1">
          <p className="text-xs text-gray-600">Age: </p>
          <p>{props.age ?? "Unknown"}</p>
        </div>
        {/* weight */}
        <div className="flex flex-col gap-1">
          <p className="text-xs text-gray-600">Weight: </p>
          <p>{props.weight ?? "Unknown"}</p>
        </div>
        {/* hight */}
        <div className="flex flex-col gap-1">
          <p className="text-xs text-gray-600">Hight: </p>
          <p>{props.height ?? "Unknown"}</p>
        </div>
      </div>
      {/* button callback */}
      <div className="flex w-full md:max-w-none gap-2 ">
        <button
          onClick={props.handleAddButton}
          className="w-full rounded-md hover:bg-gray-100 bg-green-300"
        >
          Add
        </button>
        <button
          onClick={props.handleRemoveButton}
          className="w-full rounded-md hover:bg-gray-100 bg-red-300"
        >
          Remove
        </button>
      </div>
    </div>
  );
};

export default PlayerCard;
