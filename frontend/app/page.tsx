import Nav from "./components/Nav"

export default function Home() {
  return (
    <div className="w-screen bg-orange-100">
      <Nav />
      <main className="flex min-h-screen flex-col justify-between p-24">
        {/* Other content goes here */}
      </main>
    </div>
  );
}

