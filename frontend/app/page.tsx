import Logo from "../public/Images/logo.png";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
        <img src={Logo.src} alt="Logo" />
    </main>
  );
}

