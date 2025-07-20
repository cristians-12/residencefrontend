import { useMutation } from "@tanstack/react-query";
import Cookies from "js-cookie";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";
import { API_BASE_URL } from "@/utils/constants";

interface RegisterData {
  name: string;
  email: string;
  password: string;
}

interface LoginData {
  email: string;
  password: string;
}

export const useRegister = () => {
  const router = useRouter();

  return useMutation({
    mutationFn: async (data: RegisterData) => {
      const res = await fetch(`${API_BASE_URL}auth/register`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      if (!res.ok) {
        const errorData = await res.json();
        throw new Error(
          Array.isArray(errorData.message)
            ? errorData.message.join("\n")
            : errorData.message || "Error al registrarse"
        );
      }

      return res.json();
    },
    onSuccess: (data) => {
      toast.success("¡Registro exitoso!");
      Cookies.set("token", data.token, { expires: 7 });
      router.push("/dashboard");
    },
    onError: (error: Error) => {
      toast.error(error.message || "Error de red");
    },
  });
};

export const useLogin = () => {
  const router = useRouter();

  return useMutation({
    mutationFn: async (data: LoginData) => {
      const res = await fetch(`${API_BASE_URL}auth/login`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      const responseData = await res.json();

      if (!res.ok || !responseData.success) {
        throw new Error(responseData.message || "Error al iniciar sesión");
      }

      return responseData;
    },
    onSuccess: (data) => {
      toast.success("¡Iniciaste sesion!");
      Cookies.set("token", data.token, { expires: 7 });
      router.push("/dashboard");
    },
    onError: (error: Error) => {
      toast.error(error.message || "Error de red");
    },
  });
};
