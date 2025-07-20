"use client";
import { useState } from "react";
import toast from "react-hot-toast";
import Link from "next/link";
import Spinner from "@/components/loader-spinner/spinner";
import { useLogin } from "@/hooks/useRegister";

export default function LoginForm() {
  const [form, setForm] = useState({
    email: "",
    password: "",
  });

  const loginMutation = useLogin();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async () => {
    if (form.email === "" || form.password === "") {
      toast.error("Todos los campos son obligatorios.");
      return;
    }

    loginMutation.mutate({
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
        placeholder="Ingresa tu contraseña"
      />
      <button
        className="px-10 py-2 rounded-[10px] cursor-pointer bg-white/20 border border-white/30 shadow-lg backdrop-blur-md text-white transition hover:bg-white/30 hover:border-white/50 font-bold"
        onClick={handleSubmit}
        disabled={loginMutation.isPending}
      >
        {loginMutation.isPending ? <Spinner /> : "Iniciar Sesión"}
      </button>
      <p className="text-center">
        ¿No tienes cuenta?{" "}
        <Link className="font-bold text-[#8e5ae0]" href={"/auth/register"}>
          Regístrate aquí.
        </Link>
      </p>
    </div>
  );
}
