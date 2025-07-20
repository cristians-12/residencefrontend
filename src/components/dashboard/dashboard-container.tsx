"use client";
import { useDashboardData } from "@/hooks/useDashboard";
import { useVerified } from "@/hooks/useVerified";
import Spinner from "../loader-spinner/spinner";

export default function DashboardContainer() {
  useVerified();
  const { data, isLoading, error } = useDashboardData("vehicles");
  console.log(data);
  if (isLoading) {
    return <Spinner />;
  }
  return (
    <>
      <h2>Informacion de mi apartamento</h2>

      <h3>Mis vehiculos</h3>
    </>
  );
}
