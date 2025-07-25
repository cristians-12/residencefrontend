"use client";
import { useState } from "react";
import toast from "react-hot-toast";
import { useRegister } from "@/hooks/useRegister";
import Spinner from "../loader-spinner/spinner";
import Link from "next/link";

export default function RegisterForm() {
  const [form, setForm] = useState({
    nombre: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const registerMutation = useRegister();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async () => {
    if (
      form.password !== form.confirmPassword ||
      form.password === "" ||
      form.confirmPassword === ""
    ) {
      toast.error("Las passwords deben ser iguales y no pueden ser vacias.");
      return;
    }

    registerMutation.mutate({
      name: form.nombre,
      email: form.email,
      password: form.password,
    });
  };

  return (
    <div
      className="
    z-1 
    relative 
    h-[50vh] 
    w-fit 
    mx-auto 
    flex 
    flex-col 
    justify-center 
    items-center 
    gap-5 
    p-14 
    rounded-[10px]
    
    /* Efecto liquid glass */
    bg-gradient-to-br from-white/10 to-white/5
    backdrop-blur-xl
    border border-white/20
    shadow-2xl shadow-black/10
    
    /* Efectos de luz */
    before:absolute before:inset-0
    before:bg-gradient-to-br before:from-white/20 before:to-transparent
    before:rounded-[10px] before:opacity-50
    before:pointer-events-none
    
    after:absolute after:inset-0
    after:bg-gradient-to-br after:from-transparent after:to-white/10
    after:rounded-[10px] after:opacity-30
    after:pointer-events-none
    
    /* Animación */
    transition-all duration-300 ease-out
    hover:shadow-3xl hover:shadow-black/20
    hover:border-white/30
    hover:scale-[1.02]
  "
    >
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
        className="px-10 py-2 rounded-[10px] cursor-pointer bg-white/20 border border-white/30 shadow-lg backdrop-blur-md text-white transition hover:bg-white/30 hover:border-white/50 font-bold"
        onClick={handleSubmit}
        disabled={registerMutation.isPending}
      >
        {registerMutation.isPending ? <Spinner /> : "Registrame"}
      </button>
      <p className="text-center">
        Ya tengo una cuenta quiero,{" "}
        <Link className="font-bold text-[#8e5ae0]" href={"/auth/login"}>iniciar sesion.</Link>
      </p>
    </div>
  );
}
