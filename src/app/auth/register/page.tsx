import RegisterForm from "@/components/register-form";

export default function Register() {
  return (
    <main className="min-h-screen w-full relative">
      <div
        className="absolute inset-0 z-0"
        style={{
          background:
            "radial-gradient(125% 125% at 50% 100%, #000000 40%, #2b0707 100%)",
        }}
      />
      <RegisterForm />
    </main>
  );
}
