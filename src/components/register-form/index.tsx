"use client";
import { API_BASE_URL } from "@/utils/constants";
import { useState } from "react";

export default function RegisterForm() {
  const [form, setForm] = useState({
    nombre: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async () => {
    const res = await fetch(`${API_BASE_URL}auth/register`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        name: form.nombre,
        email: form.email,
        password: form.password,
        confirmPassword: form.confirmPassword,
      }),
    });

    if (res.ok) {
      alert("¡Registro exitoso!");
    } else {
      alert("Error al registrarse");
    }
  };

  return (
    <div className="z-1 relative h-screen flex flex-col justify-center items-center gap-5">
      <input
        className="bg-white px-5 py-2 rounded-[5px] text-black"
        type="text"
        name="nombre"
        value={form.nombre}
        onChange={handleChange}
        placeholder="Ingresa tu nombre"
      />
      <input
        className="bg-white px-5 py-2 rounded-[5px] text-black"
        type="text"
        name="email"
        value={form.email}
        onChange={handleChange}
        placeholder="Ingresa tu email"
      />
      <input
        className="bg-white px-5 py-2 rounded-[5px] text-black"
        type="password"
        name="password"
        value={form.password}
        onChange={handleChange}
        placeholder="Ingresa tu contra"
      />
      <input
        className="bg-white px-5 py-2 rounded-[5px] text-black"
        type="password"
        name="confirmPassword"
        value={form.confirmPassword}
        onChange={handleChange}
        placeholder="Confirma tu contra"
      />
      <button
        className="border px-10 py-2 rounded-[10px] cursor-pointer"
        onClick={handleSubmit}
      >
        Registrame
      </button>
    </div>
  );
}
