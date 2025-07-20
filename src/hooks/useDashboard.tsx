// hooks/useDashboardData.ts
import { useMutation, useQuery } from "@tanstack/react-query";
import { API_BASE_URL } from "@/utils/constants";
import Cookies from "js-cookie";
import axios from "axios";
import toast from "react-hot-toast";

const token = Cookies.get("token");

export const useGetDashboardData = (endpoint: string) => {
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

export const usePostDashboardData = <T extends object>(
  endpoint: string,
  data: T,
  messageSuccess: string
) => {
  return useMutation({
    mutationFn: async () => {
      const response = await axios.post(`${API_BASE_URL}${endpoint}`, data, {
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
      });
      return response.data;
    },
    onSuccess: () => {
      toast.success(messageSuccess);
    },
    onError: (error: Error) => {
      toast.error(error.message);
    },
  });
};
