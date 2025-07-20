// hooks/useDashboardData.ts
import { useQuery } from "@tanstack/react-query";
import { API_BASE_URL } from "@/utils/constants";
import Cookies from "js-cookie";

export const useDashboardData = (endpoint: string) => {
  const token = Cookies.get("token");

  return useQuery({
    queryKey: ["dashboard-data"],
    queryFn: async () => {
      const res = await fetch(`${API_BASE_URL}${endpoint}`, {
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
      });

      if (!res.ok) {
        throw new Error("Error al cargar datos del dashboard");
      }

      return res.json();
    },
    enabled: !!token,
  });
};
