interface Props {
  plate: {
    plate: string;
    color: string;
    model: string;
  };
}

export default function PlateCard({ plate }: Props) {
  return (
    <div className="arma-secreta border border-gray-700">
      <h2>Modelo:{plate.model}</h2>
      <h2>Color:{plate.color}</h2>
      <div className="bg-yellow-300 p-3">
        <h2 className="text-black font-bold">{plate.plate.toUpperCase()}</h2>
      </div>
    </div>
  );
}
