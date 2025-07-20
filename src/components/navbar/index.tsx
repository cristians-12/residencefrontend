"use client";
import Cookies from "js-cookie";
import { useRouter } from "next/navigation";

export default function NavBar() {
  const router = useRouter();

  const handleLogOut = () => {
    Cookies.remove("token");
    router.push("/auth/login");
  };
  return (
    <header className="flex justify-between px-10 py-5 bg-[rgba(0,0,0,0.6)]">
      <div>Logo</div>
      <nav></nav>
      <div className="hover:transform cursor-pointer" onClick={handleLogOut}>
        Cerrar sesion
      </div>
    </header>
  );
}
