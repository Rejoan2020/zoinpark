import Image from "next/image";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";

export default function Home() {
  return (
    <div className="flex min-h-screen">
      <div className=""> <Sidebar/> </div>
      <div className="flex-1">
        <Header />
        <main className="flex-1 h-full bg-background">
          Content
        </main>
      </div>
    </div>
  );
}
