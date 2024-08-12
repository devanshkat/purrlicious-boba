import Nav from "./components/Nav"

export default function Home() {
  return (
    <div className="flex flex-col h-screen w-screen bg-orange-100">
      <div className="">
        <Nav />
      </div>
      <div className="flex flex-col items-center bg-orange-300">
        <h1 className="font-inknut text-black text-[3.8em] font-bold">Purrlicious Boba</h1>
        <p className="font-inter text-[#757575] text-[1.5em] font-bold">the first boba cat cafe in davis</p>
        <div className="flex justify-center w-[12rem] bg-[#FFB7CE] p-3 rounded-[0.25em] text-black font-bold m-10">Explore our Drinks!</div>
      </div>
      <div>
        boo
      </div>
    </div>
  );
}

