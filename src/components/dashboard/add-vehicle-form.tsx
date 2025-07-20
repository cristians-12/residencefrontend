import { usePostDashboardData } from "@/hooks/useDashboard";
import React, { useState } from "react";

export default function AddVehicleForm() {
  const [plate, setPlate] = useState("");
  const [model, setModel] = useState("");
  const [color, setColor] = useState("");

  const postVehicle = usePostDashboardData("vehicles", { plate, model, color }, 'Se agrego el vehiculo');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    postVehicle.mutate();
  };

  return (
    <div className="add-vehicle-form" onSubmit={handleSubmit}>
      <h2>Agregar Vehículo</h2>
      <input
        type="text"
        placeholder="Placa del vehículo"
        className="input"
        required
        value={plate}
        onChange={(e) => setPlate(e.target.value)}
      />
      <input
        type="text"
        placeholder="Modelo (ej: Toyota Corolla)"
        className="input"
        required
        value={model}
        onChange={(e) => setModel(e.target.value)}
      />
      <input
        type="text"
        placeholder="Color (ej: Rojo)"
        className="input"
        required
        value={color}
        onChange={(e) => setColor(e.target.value)}
      />
      <button type="submit" onClick={handleSubmit} className="submit-btn">
        Guardar vehículo
      </button>
      <style jsx>{`
        .add-vehicle-form {
          display: flex;
          flex-direction: column;
          gap: 1rem;
          max-width: 350px;
          margin: 2rem auto;
          padding: 2rem;
          border-radius: 12px;
          box-shadow: 0 2px 12px rgba(0, 0, 0, 0.07);
          border: 1px solid gray;
          align-items: center;
        }
        .input {
          padding: 0.75rem;
          border: 1px solid #d1d5db;
          border-radius: 8px;
          font-size: 1rem;
          outline: none;
          transition: border 0.2s;
        }
        .input:focus {
          border-color: #2563eb;
        }
        .submit-btn {
          padding: 0.75rem;
          color: #fff;
          border: none;
          border-radius: 8px;
          font-size: 1rem;
          cursor: pointer;
          transition: background 0.2s;
        }
        .submit-btn:hover {
          background: #1d4ed8;
        }
      `}</style>
    </div>
  );
}
