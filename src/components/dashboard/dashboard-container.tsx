"use client";
import { useGetDashboardData } from "@/hooks/useDashboard";
import { useVerified } from "@/hooks/useVerified";
import Spinner from "../loader-spinner/spinner";
import AddVehicleForm from "./add-vehicle-form";
import PlateCard from "../plate/plate-card";

export default function DashboardContainer() {
  useVerified();
  const { data, isLoading } = useGetDashboardData("vehicles");
  console.log(data);
  if (isLoading) {
    return (
      <div className="h-screen w-[95vw] flex justify-center items-center">
        <Spinner />
      </div>
    );
  }

  return (
    <div className="md:flex min-h-[90vh] items-center justify-between px-10">
      <section className="arma-secreta">
        <h2 className="text-2xl">Informacion de mi apartamento</h2>
      </section>
      <section className="arma-secreta">
        <h3 className="text-2xl font-bold">Mis vehiculos</h3>
        <div className="flex items-center">
          {Array.isArray(data) ? (
            <div>
              {data.map((element) => (
                <PlateCard plate={element} key={element.id} />
              ))}
            </div>
          ) : (
            <h2>No hay autos </h2>
          )}
          <AddVehicleForm />
        </div>
      </section>
    </div>
  );
}
